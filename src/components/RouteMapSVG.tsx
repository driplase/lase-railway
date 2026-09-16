import { stations, lines, stationAppearance, type Line } from "@/data/stations";
import { cn } from '@/lib/utils'
import Link from "next/link";
import { CSSProperties } from "react";

interface MapLine extends Line {
  points: string;
}

const sizeMultiplier = .64;
const offset = [-200, -320]
export const width = 1000
export const height = 1500

export default function RouteMapSVG({
  style,
}: {
  style?: CSSProperties,
}) {
  const mapLines: MapLine[] = lines.map(line => {
    const lineStations = line.stationNumbers.map(stationId => stations.find(station => station.stationNumber.includes(stationId)))
    
    return {
      ...line,
      points: lineStations.map(station => station ? station.position.map(m => m * sizeMultiplier).join(',') : "0,0").join(' ')
    }
  })

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg" 
      width={width} height={height}
      viewBox={`${offset[0]} ${offset[1]} ${width} ${height}`}
      style={style}
      // className="border border-amber-300"
    >
      <g>
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
                strokeLinejoin="round"
              />
            );
          }) }
        </g>
        <g className="stations">
          { stations.map(station => {
            const appearance = stationAppearance.find(s => s.id === station.id);

            const content = (
              <g 
                transform={`translate(${station.position[0] * sizeMultiplier} ${station.position[1] * sizeMultiplier})`}
              >
                <circle r={4} fill="#fafcff" className="group-hover:fill-[#80b0ff]" /* stroke="#256cfa" */ />
                <g 
                  transform={`translate(${appearance?.label?.offsetX ?? 10} ${appearance?.label?.offsetY ?? -7})`}
                >
                  <text
                    fill="var(--foreground)" 
                    fontWeight={500} 
                    className="group-hover:fill-[#256fe6]"
                    transform={`rotate(${appearance?.label?.rotation ?? 0})`}
                  >{ station.name }</text>
                </g>
              </g>
            )

            if (typeof station.url === "string" || station.url === true) {
              return (
                <Link
                  href={typeof station.url === "string" ? station.url : `/stations/${station.id}`}
                  key={station.id}
                  className="group"
                >
                  {content}
                </Link>
              )
            }

            return (
              <g key={station.id} className="group">
                {content}
              </g>
            )
          }) }
        </g>
      </g>
    </svg>
  )
}