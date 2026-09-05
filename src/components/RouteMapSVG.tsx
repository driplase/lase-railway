import { stations, lines, type Line } from "@/data/stations";
import { cn } from '@/lib/utils'
import Link from "next/link";

interface MapLine extends Line {
  points: string;
}

const sizeMultiplier = .5;
const offset = [300, 0]
export const width = 500
export const height = 750

export default function RouteMapSVG() {
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
                className="hover:fill-blue-700"
              >
                <g 
                  transform={`translate(${station.position[0] * sizeMultiplier} ${station.position[1] * sizeMultiplier})`}
                >
                  <circle r={5} fill="#fafcff" stroke="#256cfa" />
                  <text x={10} y={-7}>{ station.name }</text>
                </g>
              </Link>
            )
          }) }
        </g>
      </g>
    </svg>
  )
}