import React, { createContext } from 'react'
import { Svg } from '../../'

const Context = createContext()
Coordinates.Context = Context

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

    if (child.type.computePoints) {
      const points = child.type.computePoints(child.props)
      dataSets.push(points)
      for (const [x, y] of points) {
        if (typeof x === 'number') {
          if (x < dataBounds[0][0]) {
            dataBounds[0][0] = x
          }

          if (x > dataBounds[0][1]) {
            dataBounds[0][1] = x
          }
        }

        if (typeof y === 'number') {
          if (y < dataBounds[1][0]) {
            dataBounds[1][0] = y
          }

          if (y > dataBounds[1][1]) {
            dataBounds[1][1] = y
          }
        }
      }
    }
  })

  return (
    <Svg.Context.Consumer>
      {({ width, height }) => (
        <Context.Provider
          value={{
            top: padding.top,
            bottom: height - padding.bottom,
            left: padding.left,
            right: width - padding.right,
            mapX: x =>
              padding.left +
              ((x - dataBounds[0][0]) / (dataBounds[0][1] - dataBounds[0][0])) *
                (width - padding.left - padding.right),
            mapY: y =>
              height -
              padding.bottom -
              ((y - dataBounds[1][0]) / (dataBounds[1][1] - dataBounds[1][0])) *
                (height - padding.top - padding.bottom),
            unmapX: x =>
              dataBounds[0][0] +
              ((x - padding.left) / (width - padding.right - padding.left)) *
                (dataBounds[0][1] - dataBounds[0][0]),
            unmapY: y =>
              dataBounds[1][0] +
              ((height - padding.bottom - y) /
                (height - padding.bottom - padding.top)) *
                (dataBounds[1][1] - dataBounds[1][0]),
            dataSets
          }}
        >
          {children}
        </Context.Provider>
      )}
    </Svg.Context.Consumer>
  )
}
