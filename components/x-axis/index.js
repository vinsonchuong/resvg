import React from 'react'
import { Coordinates } from '../../'

XAxis.computePadding = ({
  top = false,
  bottom = false,
  textWidth = 0,
  textHeight = 0
}) => ({
  top: top ? Math.max(5, textHeight) : 0,
  right: textWidth / 2,
  bottom: bottom ? Math.max(5, textHeight) : 0,
  left: textWidth / 2
})

XAxis.computePoints = ({ ticks }) => ticks.map(([x]) => [x, null])

export default function XAxis({
  top: showAtTop = false,
  bottom: showAtBottom = false,
  ticks = [],
  textWidth,
  textHeight,
  ...props
}) {
  return (
    <Coordinates.Context.Consumer>
      {({ top, bottom, left, right, height, mapX }) => (
        <g strokeWidth={1} stroke="#000" shapeRendering="crispEdges" {...props}>
          {showAtTop && (
            <>
              <line x1={left} y1={top} x2={right} y2={top} />
              {ticks.map(([x, label]) => (
                <React.Fragment key={`top-${x}`}>
                  <line x1={mapX(x)} y1={top - 4} x2={mapX(x)} y2={top + 4} />
                  <text
                    x={mapX(x)}
                    y={top - textHeight / 2}
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

          {showAtBottom && (
            <>
              <line x1={left} y1={bottom} x2={right} y2={bottom} />
              {ticks.map(([x, label]) => (
                <React.Fragment key={`bottom-${x}`}>
                  <line
                    x1={mapX(x)}
                    y1={bottom - 4}
                    x2={mapX(x)}
                    y2={bottom + 4}
                  />
                  <text
                    x={mapX(x)}
                    y={bottom + textHeight / 2}
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
    </Coordinates.Context.Consumer>
  )
}
