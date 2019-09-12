import React, { createContext } from 'react'
import { Svg } from '../../'

const Context = createContext()
Coordinates.Context = Context.Consumer

export default function Coordinates({
  padding: userPadding = { top: 0, right: 0, bottom: 0, left: 0 },
  children
}) {
  const padding = userPadding
  const dataBounds = [[+Infinity, -Infinity], [+Infinity, -Infinity]]
  const dataSets = []
  React.Children.forEach(children, child => {
    if (child.type.computePadding) {
      const childPadding = child.type.computePadding(child.props)
      for (const direction of ['top', 'right', 'bottom', 'left']) {
        padding[direction] = Math.max(
          padding[direction],
          childPadding[direction]
        )
      }
    }

    if (child.props.points) {
      dataSets.push(child.props.points)
      for (const point of child.props.points) {
        if (point[0] < dataBounds[0][0]) {
          dataBounds[0][0] = point[0]
        }

        if (point[0] > dataBounds[0][1]) {
          dataBounds[0][1] = point[0]
        }

        if (point[1] < dataBounds[1][0]) {
          dataBounds[1][0] = point[1]
        }

        if (point[1] > dataBounds[1][1]) {
          dataBounds[1][1] = point[1]
        }
      }
    }
  })

  return (
    <Svg.Context>
      {({ width: svgWidth, height: svgHeight }) => {
        const width = svgWidth - padding.left - padding.right
        const height = svgHeight - padding.top - padding.bottom

        return (
          <Context.Provider
            value={{
              top: 0,
              bottom: height,
              left: 0,
              right: width,
              mapX: x =>
                ((x - dataBounds[0][0]) /
                  (dataBounds[0][1] - dataBounds[0][0])) *
                width,
              mapY: y =>
                height -
                ((y - dataBounds[1][0]) /
                  (dataBounds[1][1] - dataBounds[1][0])) *
                  height,
              dataSets
            }}
          >
            <g transform={`translate(${padding.left} ${padding.top})`}>
              {children}
            </g>
          </Context.Provider>
        )
      }}
    </Svg.Context>
  )
}
