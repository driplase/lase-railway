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

    drag.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      originX: position.x,
      originY: position.y,
      moved: false,
    }
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerId !== drag.current.pointerId) return

    const deltaX = event.clientX - drag.current.startX
    const deltaY = event.clientY - drag.current.startY
    if (Math.abs(deltaX) > 3 || Math.abs(deltaY) > 3) {
      drag.current.moved = true
    }

    setPosition(
      clampPosition(
        drag.current.originX + deltaX,
        drag.current.originY + deltaY,
      ),
    )
  }

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerId !== drag.current.pointerId) return

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId)
    }
    drag.current.pointerId = -1
  }

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (drag.current.moved) {
      event.preventDefault()
      event.stopPropagation()
      drag.current.moved = false
    }
  }

  return (
    <div
      ref={viewport}
      className="border border-slate-400 w-full h-128 rounded-md overflow-hidden touch-none cursor-grab active:cursor-grabbing select-none relative"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onClick={handleClick}
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