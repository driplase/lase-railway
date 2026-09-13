import { stations, lines, type Line } from "@/data/stations";
import { cn } from '@/lib/utils'
import Link from "next/link";
import { CSSProperties } from "react";

interface MapLine extends Line {
  points: string;
}

const sizeMultiplier = .5;
const offset = [300, 0]
export const width = 500
export const height = 750

export default function RouteMapSVG({
  style,
}: {
  style?: CSSProperties,
}) {
  const mapLines: MapLine[] = lines.map(line => {
    const lineStations = line.stationIds.map(stationId => stations.find(station => station.trainNumber.includes(stationId)))
    
    return {
      ...line,
      points: lineStations.map(station => station ? station.position.map(m => m * sizeMultiplier).join(',') : "0,0").join(' ')
    }
  })

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg" 
      width={width} height={height}
      style={style}
      // className="border border-amber-300"
    >
      <g transform={`translate(${offset.join(' ')})`}>
        <g className="lines">
          { mapLines.map(line => {
            return (
              <polyline
                key={line.id}
                className={cn(line.id, "stroke-12")}
                points={line.points}
                stroke={line.color}
                fill="transparent"
                strokeLinecap="round"
              />
            );
          }) }
        </g>
        <g className="stations">
          { stations.map(station => {
            return (
              <Link
                href={`/stations/${station.id}`} 
                key={station.id} 
                className="group"
              >
                <g 
                  transform={`translate(${station.position[0] * sizeMultiplier} ${station.position[1] * sizeMultiplier})`}
                >
                  <circle r={4} fill="#fafcff" className="group-hover:fill-[#80b0ff]" /* stroke="#256cfa" */ />
                  <text x={10} y={-7} fill="var(--foreground)" fontWeight={500} className="group-hover:fill-[#256fe6]">{ station.name }</text>
                </g>
              </Link>
            )
          }) }
        </g>
      </g>
    </svg>
  )
}