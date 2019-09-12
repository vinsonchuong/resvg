import React from 'react'
import { Coordinates } from '../../'

YAxis.computePadding = ({
  left = false,
  right = false,
  textWidth = 0,
  textHeight = 0
}) => ({
  top: textHeight / 2,
  right: right ? Math.max(4, textWidth) : 0,
  bottom: textHeight / 2,
  left: left ? Math.max(4, textWidth) : 0
})

export default function YAxis({
  left = false,
  right = false,
  ticks = [],
  textWidth,
  textHeight,
  ...props
}) {
  return (
    <Coordinates.Context>
      {({ width, height, mapY }) => (
        <g strokeWidth={1} stroke="#000" shapeRendering="crispEdges" {...props}>
          {left && (
            <>
              <line x1={0} y1={height} x2={0} y2={0} />
              {ticks.map(([y, label]) => (
                <React.Fragment key={`left-${y}`}>
                  <line x1={-4} y1={mapY(y)} x2={4} y2={mapY(y)} />
                  <text
                    x={0 - textWidth / 2}
                    y={mapY(y)}
                    dominantBaseline="central"
                    textAnchor="middle"
                    strokeWidth={0}
                    textRendering="optimizeLegibility"
                  >
                    {label}
                  </text>
                </React.Fragment>
              ))}
            </>
          )}

          {right && (
            <>
              <line x1={width} y1={height} x2={width} y2={0} />
              {ticks.map(([y, label]) => (
                <React.Fragment key={`right-${y}`}>
                  <line
                    x1={width - 4}
                    y1={mapY(y)}
                    x2={width + 4}
                    y2={mapY(y)}
                  />
                  <text
                    x={width + textWidth / 2}
                    y={mapY(y)}
                    dominantBaseline="central"
                    textAnchor="middle"
                    strokeWidth={0}
                    textRendering="optimizeLegibility"
                  >
                    {label}
                  </text>
                </React.Fragment>
              ))}
            </>
          )}
        </g>
      )}
    </Coordinates.Context>
  )
}
