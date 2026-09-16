"use client"

import { Fragment, useRef, useState } from "react";
import RouteMapSVG, { height, width, sizeMultiplier, offset } from "./RouteMapSVG";

export default function RouteMap() {
  const viewport = useRef<HTMLDivElement>(null)
  const drag = useRef({
    pointerId: -1,
    startX: 0,
    startY: 0,
    originX: 0,
    originY: 0,
    moved: false,
  })
  const suppressClick = useRef(false)

  const [position, setPosition] = useState({
    x: 0, 
    y: 0,
    zoom: 1,
  })

  const [cursorPosition, setCursorPosition] = useState({
    x: 0,
    y: 0,
  })

  const clampPosition = (x: number, y: number, zoom: number) => {
    const viewportElement = viewport.current
    if (!viewportElement) return { x, y }

    const { clientWidth, clientHeight } = viewportElement
    const scaledWidth = width * zoom
    const scaledHeight = height * zoom
    const horizontalLimit = Math.max(scaledWidth / 2, (scaledWidth - clientWidth) / 2)
    const verticalLimit = Math.max(scaledHeight / 2, (scaledHeight - clientHeight) / 2)

    return {
      x: Math.min(horizontalLimit, Math.max(-horizontalLimit, x)),
      y: Math.min(verticalLimit, Math.max(-verticalLimit, y)),
    }
  }

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    const ZOOM_SPEED = 1.0025

    // event.preventDefault()

    const viewportElement = viewport.current
    if (!viewportElement) return

    const nextZoom = Math.min(5, Math.max(.5, position.zoom * Math.pow(ZOOM_SPEED, -event.deltaY)))

    const zoomRatio = nextZoom / position.zoom

    const cursorX = event.clientX - viewportElement.getBoundingClientRect().left - viewportElement.clientWidth / 2
    const cursorY = event.clientY - viewportElement.getBoundingClientRect().top - viewportElement.clientHeight / 2
    
    setPosition({
      zoom: nextZoom,
      ...clampPosition(
        cursorX - (cursorX - position.x) * (zoomRatio),
        cursorY - (cursorY - position.y) * (zoomRatio),
        nextZoom,
      ),
    })
  }

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) return

    suppressClick.current = false
    drag.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      originX: position.x,
      originY: position.y,
      moved: false,
    }
  }

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const viewportElement = viewport.current

    if (viewportElement) {
      const svg = viewportElement.querySelector("svg")
      if (!svg) return

      const point = svg.createSVGPoint()
      point.x = event.clientX
      point.y = event.clientY

      const matrix = svg.getScreenCTM()
      if (!matrix) return

      const svgPoint = point.matrixTransform(matrix.inverse())

      setCursorPosition({
        x: Math.round(svgPoint.x / sizeMultiplier),
        y: Math.round(svgPoint.y / sizeMultiplier),
      })
    }

    if (event.pointerId !== drag.current.pointerId) return

    const deltaX = event.clientX - drag.current.startX
    const deltaY = event.clientY - drag.current.startY
    if (Math.abs(deltaX) > 3 || Math.abs(deltaY) > 3) {
      if (!drag.current.moved) {
        drag.current.moved = true
        if (viewportElement && !viewportElement.hasPointerCapture(event.pointerId)) {
          viewportElement.setPointerCapture(event.pointerId)
        }
      }
    }

    if (drag.current.moved) {
      setPosition((currentPosition) => ({
        ...currentPosition,
        ...clampPosition(
          drag.current.originX + deltaX,
          drag.current.originY + deltaY,
          currentPosition.zoom,
        ),
      }))
    }
  }

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerId !== drag.current.pointerId) return

    if (drag.current.moved) {
      suppressClick.current = true
    }

    const viewportElement = viewport.current
    if (viewportElement && viewportElement.hasPointerCapture(event.pointerId)) {
      viewportElement.releasePointerCapture(event.pointerId)
    }
    drag.current = {
      ...drag.current,
      pointerId: -1,
      moved: false,
    }
  }

  const handleClickCapture = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!suppressClick.current) return

    event.preventDefault()
    event.stopPropagation()
    suppressClick.current = false
  }

  return (
    <div
      ref={viewport}
      className="border border-slate-400 w-full h-full rounded-md overflow-hidden overscroll-none touch-none cursor-grab active:cursor-grabbing select-none relative"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onWheelCapture={handleWheel}
      onClickCapture={handleClickCapture}
    >
      <div
        className="absolute inset-0 flex justify-center items-center"
      >
        <div className="absolute top-0 pointer-events-none z-16 w-full flex justify-center">
          <div className="px-2 py-1 bg-black/80 text-white text-center">
            <div>
              X: {Math.round(cursorPosition.x)} Y: {Math.round(cursorPosition.y)}
            </div>
          </div>
        </div>

        <RouteMapSVG
          style={{
            transform: `translate(calc(${position.x}px), calc(${position.y}px)) scale(${position.zoom})`,
          }}
        />
      </div>
    </div>
  )
}