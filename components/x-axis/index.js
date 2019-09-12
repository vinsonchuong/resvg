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

export default function XAxis({
  top = false,
  bottom = false,
  ticks = [],
  textWidth,
  textHeight,
  ...props
}) {
  return (
    <Coordinates.Context>
      {({ width, height, mapX }) => (
        <g strokeWidth={1} stroke="#000" shapeRendering="crispEdges" {...props}>
          {top && (
            <>
              <line x1={0} y1={0} x2={width} y2={0} />
              {ticks.map(([x, label]) => (
                <React.Fragment key={`top-${x}`}>
                  <line x1={mapX(x)} y1={0 - 4} x2={mapX(x)} y2={0 + 4} />
                  <text
                    x={mapX(x)}
                    y={0 - textHeight / 2}
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

          {bottom && (
            <>
              <line x1={0} y1={height} x2={width} y2={height} />
              {ticks.map(([x, label]) => (
                <React.Fragment key={`bottom-${x}`}>
                  <line
                    x1={mapX(x)}
                    y1={height - 4}
                    x2={mapX(x)}
                    y2={height + 4}
                  />
                  <text
                    x={mapX(x)}
                    y={height + textHeight / 2}
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
