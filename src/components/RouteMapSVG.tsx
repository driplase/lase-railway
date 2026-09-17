import { stations, lines, stationAppearance, type Line } from "@/data/stations";
import { cn } from '@/lib/utils'
import Link from "next/link";
import { CSSProperties, Fragment } from "react";

interface MapLine extends Line {
  points: string;
}

export const sizeMultiplier = .64;
export const offset = [-1500, -320]
export const width = 2400
export const height = 1500

export default function RouteMapSVG({
  style,
}: {
  style?: CSSProperties,
}) {
  const mapLines: MapLine[] = lines.map(line => {
    const lineStations = line.stationNumbers.map(stationId => {
      const idx = stations.findIndex(station => station.stationNumber.includes(stationId))
      const station = stations[idx]

      if (!station) return null;

      const z = station.stationNumber.sort((a, b) => 
        lines.findIndex(l => l.stationNumbers.includes(b)) - lines.findIndex(l => l.stationNumbers.includes(a))
      ).findIndex(n => n === stationId)

      let delta = [0, 0];
      
      const previousStation = stations.find(station => station.stationNumber.includes(line.stationNumbers[idx - 1]));
      const nextStation = stations.find(station => station.stationNumber.includes(line.stationNumbers[idx + 1]));

      if (previousStation) {
        delta = station.position.map((p, i) => p - previousStation.position[i])
      } else if (nextStation) {
        delta = station.position.map((p, i) => nextStation.position[i] - p)
      }

      const angle = Math.atan2(delta[1], delta[0])
      const pointOffset = [
        Math.cos(angle + Math.PI / 2) * z * 4,
        Math.sin(angle + Math.PI / 2) * z * 4,
      ]

      return {
        ...station,
        position: [
          station.position[0] + pointOffset[0],
          station.position[1] + pointOffset[1],
        ]
      }
    })
    
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
              <Fragment key={line.id}>
                <polyline
                  className={cn(line.id, "stroke-12")}
                  points={line.points}
                  stroke={line.color}
                  fill="transparent"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                { line.appearance?.label?.enabled && (
                  <text
                    x={line.appearance?.label.x * sizeMultiplier}
                    y={line.appearance?.label.y * sizeMultiplier}
                    fontWeight={600}
                    fontSize={20}
                  >
                    <tspan fill={line.color}>【</tspan>{ line.name }<tspan fill={line.color}>】</tspan>
                  </text>
                ) }
              </Fragment>
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