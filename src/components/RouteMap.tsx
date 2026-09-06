"use client"

import { useRef, useState } from "react";
import RouteMapSVG, { height, width } from "./RouteMapSVG";

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

  const [position, setPosition] = useState({ x: 0, y: 0 })

  const clampPosition = (x: number, y: number) => {
    const viewportElement = viewport.current
    if (!viewportElement) return { x, y }

    const { clientWidth, clientHeight } = viewportElement
    const horizontalLimit = Math.max(width / 2, (width - clientWidth) / 2)
    const verticalLimit = Math.max(height / 2, (height - clientHeight) / 2)

    return {
      x: Math.min(horizontalLimit, Math.max(-horizontalLimit, x)),
      y: Math.min(verticalLimit, Math.max(-verticalLimit, y)),
    }
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
    if (event.pointerId !== drag.current.pointerId) return

    const deltaX = event.clientX - drag.current.startX
    const deltaY = event.clientY - drag.current.startY
    if (Math.abs(deltaX) > 3 || Math.abs(deltaY) > 3) {
      if (!drag.current.moved) {
        drag.current.moved = true
        const viewportElement = viewport.current
        if (viewportElement && !viewportElement.hasPointerCapture(event.pointerId)) {
          viewportElement.setPointerCapture(event.pointerId)
        }
      }
    }

    if (drag.current.moved) {
      setPosition(
        clampPosition(
          drag.current.originX + deltaX,
          drag.current.originY + deltaY,
        ),
      )
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
      className="border border-slate-400 w-full h-128 rounded-md overflow-hidden touch-none cursor-grab active:cursor-grabbing select-none relative"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onClickCapture={handleClickCapture}
    >
      <div
        className="absolute left-1/2 top-1/2 will-change-transform overflow-hidden"
        style={{
          transform: `translate(calc(-50% + ${position.x}px), calc(-50% + ${position.y}px))`,
        }}
      >
        <RouteMapSVG />
      </div>
    </div>
  )
}