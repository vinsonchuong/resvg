import React from 'react'
import { Coordinates } from '../../'

export default function AreaPlot({ points, ...props }) {
  return (
    <Coordinates.Context>
      {({ height, mapX, mapY }) => {
        const mappedPoints = points.map(([x, y]) => [mapX(x), mapY(y)])

        return (
          <g {...props}>
            <polygon
              stroke="none"
              points={[
                [0, height],
                ...mappedPoints,
                [mapX(points[points.length - 1][0]), height]
              ]
                .map(point => point.join())
                .join(' ')}
            />
            <polyline
              fill="none"
              points={mappedPoints.map(point => point.join()).join(' ')}
            />
          </g>
        )
      }}
    </Coordinates.Context>
  )
}
