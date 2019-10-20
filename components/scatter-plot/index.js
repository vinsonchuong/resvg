import React from 'react'
import { Coordinates } from '../../'

ScatterPlot.computePadding = ({ circleRadius = 4 }) => ({
  top: circleRadius,
  right: circleRadius,
  bottom: circleRadius,
  left: circleRadius
})

ScatterPlot.computePoints = ({ points }) => points

export default function ScatterPlot({ points, circleRadius = 4, ...props }) {
  return (
    <Coordinates.Context.Consumer>
      {({ mapX, mapY }) => (
        <g {...props}>
          {points.map(point => (
            <circle
              key={point}
              r={circleRadius}
              cx={mapX(point[0])}
              cy={mapY(point[1])}
            />
          ))}
        </g>
      )}
    </Coordinates.Context.Consumer>
  )
}
