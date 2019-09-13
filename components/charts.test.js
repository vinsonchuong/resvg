import test from 'ava'
import React from 'react'
import { render, findElement, findElements } from 'test-tube'
import { Svg, Coordinates, XAxis, YAxis, AreaPlot, ScatterPlot } from '../'

test('drawing a scatter plot', t => {
  const data = [[0, 0], [1, 1], [2, 2]]
  const chart = render(
    <Svg style={{ width: '300px', height: '300px' }}>
      <Coordinates>
        <ScatterPlot points={data} />
      </Coordinates>
    </Svg>
  )

  const points = findElements(chart, 'circle').map(circle => [
    Number(circle.getAttribute('cx')),
    Number(circle.getAttribute('cy'))
  ])

  const [unmapX, unmapY] = invertCoordinates(data, points)

  t.deepEqual(points.map(([x, y]) => [unmapX(x), unmapY(y)]), data)
})

test('drawing a scatter plot and adding axis labels', t => {
  const data = [[0, 0], [1, 1], [2, 2]]
  const chart = render(
    <Svg style={{ width: '300px', height: '300px' }}>
      <Coordinates>
        <XAxis
          bottom
          textWidth={32}
          textHeight={32}
          ticks={[[0, '0'], [2, '2']]}
        />
        <YAxis
          left
          textWidth={32}
          textHeight={32}
          ticks={[[0, '0'], [2, '2']]}
        />
        <ScatterPlot points={data} />
      </Coordinates>
    </Svg>
  )

  const points = findElements(chart, 'circle').map(circle => [
    Number(circle.getAttribute('cx')),
    Number(circle.getAttribute('cy'))
  ])

  const [unmapX, unmapY] = invertCoordinates(data, points)

  t.deepEqual(points.map(([x, y]) => [unmapX(x), unmapY(y)]), data)
})

test('drawing an area plot', t => {
  const data = [[0, 0], [1, 1], [2, 2]]
  const chart = render(
    <Svg style={{ width: '300px', height: '300px' }}>
      <Coordinates>
        <AreaPlot points={data} />
      </Coordinates>
    </Svg>
  )

  const points = findElement(chart, 'polygon')
    .getAttribute('points')
    .split(' ')
    .map(point => point.split(','))
    .map(([x, y]) => [Number(x), Number(y)])
    .slice(1, -1)

  const [unmapX, unmapY] = invertCoordinates(data, points)

  t.deepEqual(points.map(([x, y]) => [unmapX(x), unmapY(y)]), data)
})

function invertCoordinates(dataPoints, visualPoints) {
  const visualBounds = findBounds(visualPoints)
  const dataBounds = findBounds(dataPoints)
  return [
    x =>
      ((x - visualBounds[0][0]) * (dataBounds[0][1] - dataBounds[0][0])) /
        (visualBounds[0][1] - visualBounds[0][0]) +
      dataBounds[0][0],
    y =>
      dataBounds[1][1] -
      ((y - visualBounds[1][0]) * (dataBounds[1][1] - dataBounds[1][0])) /
        (visualBounds[1][1] - visualBounds[1][0])
  ]
}

function findBounds(points) {
  const bounds = [[+Infinity, -Infinity], [+Infinity, -Infinity]]
  for (const [x, y] of points) {
    if (x < bounds[0][0]) bounds[0][0] = x
    if (x > bounds[0][1]) bounds[0][1] = x
    if (y < bounds[1][0]) bounds[1][0] = y
    if (y > bounds[1][1]) bounds[1][1] = y
  }
  return bounds
}
