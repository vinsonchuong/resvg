import React from 'react'
import { createUseStyles } from 'react-jss'
import cx from 'classnames'
import Logo from './logo'
import { Outline, O1, O2 } from './outline'
import { Content, H1, H2, P, A, Example } from './content'
import Code from './code'
import { Size } from '../'

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
          <O2>Writing a Component</O2>

          <O1>Components</O1>
          <O2>Size</O2>
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
        <H2>Writing a Component</H2>
        <P>Now, let&apos;s add a new component to your React project!</P>
        <Code
          language="jsx"
          code={`
          import React from 'react'
          import { Size } from 'resvg'

          export default function Chart() {
            return (
              <Size
                render={({ width, height }) =>
                  <svg width={width} height={height}>
                  </svg>
                }
              />
            )
          }
        `}
        />

        <H1>Components</H1>

        <H2>Size</H2>
        <P>
          We often need to make visualizations responsive to browser viewport
          size. To do that, we need to know the width and height of our
          visualization and get notified whenever it changes.
        </P>
        <P>
          <Code inline language="jsx" code="<Size>" /> is a{' '}
          <Code inline language="jsx" code="<div>" /> you can responsively style
          by giving it className or style props. It takes in a render prop that
          it will call with its own current width and height and call whenever
          those change.
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
          for older browsers)
        </P>
        <Example>
          <Size
            style={{
              margin: '0 auto',
              width: '50%',
              lineHeight: '200px',
              background: '#ffd1dc',
              textAlign: 'center'
            }}
            render={({ width, height }) => (
              <div>
                {width} x {height}
              </div>
            )}
          />
        </Example>
        <Code
          language="jsx"
          code={`
          import React from 'react'
          import { Size } from 'resvg'

          export default function Example() {
            return (
              <Size
                style={{
                  margin: '0 auto',
                  width: '50%',
                  lineHeight: '200px',
                  background: '#ffd1dc',
                  textAlign: 'center'
                }}
                render={({ width, height }) =>
                  <div>{width} x {height}</div>
                }
              />
            )
          }
        `}
        />
      </Content>
    </main>
  )
}
