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
      console.log(child.type.name, child.props, childPadding)
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
      {({ width, height }) => (
        <Context.Provider
          value={{
            width: width - padding.left - padding.right,
            height: height - padding.top - padding.bottom,
            mapX: x =>
              ((x - dataBounds[0][0]) / (dataBounds[0][1] - dataBounds[0][0])) *
              (width - padding.left - padding.right),
            mapY: y =>
              height -
              padding.top -
              padding.bottom -
              ((y - dataBounds[1][0]) / (dataBounds[1][1] - dataBounds[1][0])) *
                (height - padding.top - padding.bottom),
            dataSets
          }}
        >
          <g transform={`translate(${padding.left} ${padding.top})`}>
            {children}
          </g>
        </Context.Provider>
      )}
    </Svg.Context>
  )
}
