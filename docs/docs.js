import React, { useRef } from 'react'
import { createUseStyles } from 'react-jss'
import cx from 'classnames'
import Logo from './logo'
import { Outline, O1, O2, O3 } from './outline'
import { Content, H1, H2, H3, P, A, Example } from './content'
import Code from './code'
import {
  useSize,
  useComputedStyle,
  Svg,
  Coordinates,
  XAxis,
  YAxis,
  GridLines,
  AreaPlot,
  ScatterPlot
} from '../'

const useStyles = createUseStyles({
  '@global': {
    'html, body, #root': {
      height: '100%'
    },
    body: {
      margin: '0',
      fontFamily: '"Open Sans", sans-serif'
    }
  },
  docs: {
    height: '100%',
    display: 'grid',
    gridTemplateColumns: '320px 1fr'
  },

  navigation: {
    overflow: 'auto',
    background: '#24292e',
    color: '#eee'
  },
  logo: {
    margin: '64px 0'
  },
  outline: {
    padding: '0 32px'
  },

  content: {
    overflow: 'auto',
    padding: '64px',
    background: '#fff',
    color: '#111'
  }
})

export default function Docs() {
  const classes = useStyles()

  return (
    <main className={cx('docs', classes.docs)}>
      <nav className={classes.navigation}>
        <Logo className={classes.logo} />
        <Outline className={classes.outline}>
          <O1>Introduction</O1>

          <O1>Getting Started</O1>
          <O2>Installing</O2>
          <O2>Examples</O2>
          <O3>Scatter Chart</O3>
          <O3>Area Chart</O3>

          <O1>Hooks</O1>
          <O2>useSize</O2>
          <O2>useComputedStyle</O2>

          <O1>Components</O1>
        </Outline>
      </nav>
      <Content className={classes.content}>
        <H1>Introduction</H1>
        <P>
          resvg is a set of React components you can use to create amazing
          interactive visualizations!
        </P>
        <P>
          Each component provides a small useful bit of functionality. We give
          you the flexibility to mix, match, and fork these building blocks.
          One-size-fits-all libraries are too inflexible and D3 is too
          in-the-weeds. We try to fill in the middle of that spectrum.
        </P>

        <H1>Getting Started</H1>
        <H2>Installing</H2>
        <P>
          resvg is available on{' '}
          <A href="https://www.npmjs.com/package/resvg">npm</A>. Install it by
          running:
        </P>
        <Code
          language="bash"
          code={`
          yarn add resvg
        `}
        />
        <H2>Examples</H2>

        <H3>Scatter Chart</H3>
        <Example>
          <Svg style={{ width: '100%', height: '300px' }}>
            <Coordinates dataPadding={1}>
              <ScatterPlot
                points={[
                  [0, 0],
                  [1, 1],
                  [2, 2],
                  [3, 3],
                  [4, 4],
                  [5, 3],
                  [6, 2],
                  [7, 1],
                  [8, 2],
                  [9, 3],
                  [10, 2]
                ]}
                style={{ fill: '#779ecb' }}
                circleRadius={8}
              />
              <XAxis
                bottom
                ticks={[
                  [0, '0'],
                  [1, '1'],
                  [2, '2'],
                  [3, '3'],
                  [4, '4'],
                  [5, '5'],
                  [6, '6'],
                  [7, '7'],
                  [8, '8'],
                  [9, '9'],
                  [10, '10']
                ]}
                textWidth={32}
                textHeight={32}
              />
              <YAxis
                left
                ticks={[[0, '0'], [1, '1'], [2, '2'], [3, '3'], [4, '4']]}
                textWidth={32}
                textHeight={32}
              />
              <GridLines
                x={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                y={[1, 2, 3, 4]}
                style={{ strokeDasharray: '4 8' }}
              />
            </Coordinates>
          </Svg>
        </Example>
        <Code
          language="jsx"
          code={`
          import React from 'react'
          import {
            Svg, Coordinates, ScatterPlot, XAxis, YAxis, GridLines
          } from 'resvg'

          export default function Chart() {
            const points = [
              [0, 0], [1, 1], [2, 2], [3, 3], [4, 4],
              [5, 3], [6, 2], [7, 1], [8, 2], [9, 3], [10, 2]
            ]
            const xs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
            const ys = [0, 1, 2, 3, 4]

            return (
              <Svg style={{ width: '100%', height: '300px' }}>
                <Coordinates dataPadding={1}>
                  <ScatterPlot
                    points={points}
                    style={{ fill: '#779ecb' }}
                    circleRadius={8}
                  />
                  <XAxis
                    bottom
                    ticks={xs.map(x => [x, x.toString()])}
                    textWidth={32}
                    textHeight={32}
                  />
                  <YAxis
                    right
                    ticks={ys.map(y => [y, y.toString()])}
                    textWidth={32}
                    textHeight={32}
                  />
                  <GridLines
                    x={xs}
                    y={ys}
                    style={{ strokeDasharray: '4 8' }}
                  />
                </Coordinates>
              </Svg>
            )
          }
        `}
        />

        <H3>Area Chart</H3>
        <Example>
          <Svg style={{ width: '100%', height: '300px' }}>
            <Coordinates dataPadding={1}>
              <AreaPlot
                points={[
                  [0, 2],
                  [1, 3],
                  [2, 4],
                  [3, 3],
                  [4, 4],
                  [5, 5],
                  [6, 3],
                  [7, 3],
                  [8, 4],
                  [9, 5],
                  [10, 3]
                ]}
                style={{
                  fill: '#779ecb',
                  fillOpacity: '0.2',
                  stroke: '#779ecb',
                  strokeWidth: '4'
                }}
              />
              <AreaPlot
                points={[
                  [0, 0],
                  [1, 1],
                  [2, 1],
                  [3, 2],
                  [4, 2],
                  [5, 2],
                  [6, 1],
                  [7, 2],
                  [8, 1],
                  [9, 0],
                  [10, 1]
                ]}
                style={{
                  fill: '#8780d1',
                  fillOpacity: '0.2',
                  stroke: '#8780d1',
                  strokeWidth: '4'
                }}
              />
              <XAxis
                bottom
                ticks={[
                  [0, '0'],
                  [1, ''],
                  [2, '2'],
                  [3, ''],
                  [4, '4'],
                  [5, ''],
                  [6, '6'],
                  [7, ''],
                  [8, '8'],
                  [9, ''],
                  [10, '10']
                ]}
                textWidth={32}
                textHeight={32}
              />
              <YAxis
                right
                ticks={[
                  [0, '0'],
                  [1, '1'],
                  [2, '2'],
                  [3, '3'],
                  [4, '4'],
                  [5, '5']
                ]}
                textWidth={32}
                textHeight={32}
              />
              <GridLines y={[2, 4]} style={{ strokeDasharray: '4 8' }} />
            </Coordinates>
          </Svg>
        </Example>
        <Code
          language="jsx"
          code={`
          import React from 'react'
          import {
            Svg, Coordinates, AreaPlot, XAxis, YAxis, GridLines
          } from 'resvg'

          export default function Chart() {
            return (
              <Svg style={{ width: '100%', height: '300px' }}>
                <Coordinates dataPadding={1}>
                  <AreaPlot
                    points={[[0, 0], [1, 1], [2, 2], [3, 3], [4, 4], [5, 3], [6, 2], [7, 1], [8, 2], [9, 3], [10, 2]]}
                    style={{
                      fill: '#779ecb',
                      fillOpacity: '0.2',
                      stroke: '#779ecb',
                      strokeWidth: '4'
                    }}
                  />
                  <AreaPlot
                    points={[[0, 0], [1, 1], [2, 1], [3, 2], [4, 2], [5, 2], [6, 1], [7, 2], [8, 1], [9, 0], [10, 1]]}
                    style={{
                      fill: '#8780d1',
                      fillOpacity: '0.2',
                      stroke: '#8780d1',
                      strokeWidth: '4'
                    }}
                  />
                  <XAxis
                    bottom
                    ticks={[[0, '0'], [1, ''], [2, '2'], [3, ''], [4, '4'], [5, ''], [6, '6'], [7, ''], [8, '8'], [9, ''], [10, '10']]}
                    textWidth={32}
                    textHeight={32}
                  />
                  <YAxis
                    right
                    ticks={[[0, '0'], [1, '1'], [2, '2'], [3, '3'], [4, '4'], [5, '5']]}
                    textWidth={32}
                    textHeight={32}
                  />
                  <GridLines
                    y={[2, 4]}
                    style={{ strokeDasharray: '4 8' }}
                  />
                </Coordinates>
              </Svg>
            )
          }
        `}
        />

        <H1>Hooks</H1>

        <H2>useSize</H2>
        <P>
          We often need to make visualizations responsive to browser viewport
          size. To do that, we need to know the width and height of our
          visualization and react whenever it changes.
        </P>
        <P>
          <Code inline language="jsx" code="useSize()" /> is a hook you can use
          to monitor an element for changes in width and height.
        </P>
        <P>
          To implement this, we take advantage of the new{' '}
          <A href="https://developers.google.com/web/updates/2016/10/resizeobserver">
            <Code inline language="jsx" code="ResizeObserver" />
          </A>{' '}
          (
          <A href="https://github.com/que-etc/resize-observer-polyfill">
            polyfilled
          </A>{' '}
          for browsers that don&apos;t yet support it.)
        </P>
        <Example>
          {(() => {
            function Component() {
              const element = useRef()
              const size = useSize(element)

              return (
                <div
                  ref={element}
                  style={{
                    margin: '0 auto',
                    width: '50%',
                    lineHeight: '200px',
                    background: '#ffd1dc',
                    textAlign: 'center'
                  }}
                >
                  {size && (
                    <div>
                      {size.width} x {size.height}
                    </div>
                  )}
                </div>
              )
            }

            return <Component />
          })()}
        </Example>
        <Code
          language="jsx"
          code={`
          import React, { useRef } from 'react'
          import { useSize } from 'resvg'

          export default function Component() {
            const element = useRef()
            const size = useSize(element)

            return (
              <div
                ref={element}
                style={{
                  margin: '0 auto',
                  width: '50%',
                  lineHeight: '200px',
                  background: '#ffd1dc',
                  textAlign: 'center'
                }}
              >
                {size &&
                  <div>
                    {size.width} x {size.height}
                  </div>
                }
              </div>
            )
          }
        `}
        />

        <H2>useComputedStyle</H2>
        <P>
          The sizing and placement of SVG elements can be affected by CSS, which
          can interfere with any JavaScript logic that tries to do the same.{' '}
          <Code inline language="jsx" code="useComputedStyle()" /> allows our
          JavaScript logic to account for any user-specified CSS.
        </P>
        <Example>
          {(() => {
            function Component({ ...props }) {
              const element = useRef()
              const style = useComputedStyle(element)

              return (
                <div {...props} ref={element}>
                  {style && <p>font-size: {style.fontSize}</p>}
                </div>
              )
            }
            return <Component style={{ fontSize: '20px' }} />
          })()}
        </Example>
        <Code
          language="jsx"
          code={`
          import React, { useRef } from 'react'
          import { useComputedStyle } from 'resvg'

          export default function Component() {
            const element = useRef()
            const style = useComputedStyle(element)

            return (
              <div
                ref={element}
                style={{
                  fontSize: '20px'
                }}
              >
                {style &&
                  <p>font-size: \${style.fontSize}</p>
                }
              </div>
            )
          }
        `}
        />

        <H1>Components</H1>
      </Content>
    </main>
  )
}
