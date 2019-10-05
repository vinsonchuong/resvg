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

YAxis.computePoints = ({ ticks }) => ticks.map(([y]) => [null, y])

export default function YAxis({
  left: showAtLeft = false,
  right: showAtRight = false,
  ticks = [],
  textWidth,
  textHeight,
  ...props
}) {
  return (
    <Coordinates.Context>
      {({ top, bottom, left, right, mapY }) => (
        <g strokeWidth={1} stroke="#000" shapeRendering="crispEdges" {...props}>
          {showAtLeft && (
            <>
              <line x1={left} y1={top} x2={left} y2={bottom} />
              {ticks.map(([y, label]) => (
                <React.Fragment key={`left-${y}`}>
                  <line x1={left - 4} y1={mapY(y)} x2={left + 4} y2={mapY(y)} />
                  <text
                    x={left - textWidth / 2}
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

          {showAtRight && (
            <>
              <line x1={right} y1={top} x2={right} y2={bottom} />
              {ticks.map(([y, label]) => (
                <React.Fragment key={`right-${y}`}>
                  <line
                    x1={right - 4}
                    y1={mapY(y)}
                    x2={right + 4}
                    y2={mapY(y)}
                  />
                  <text
                    x={right + textWidth / 2}
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
