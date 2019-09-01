import React from 'react'
import { createUseStyles } from 'react-jss'
import cx from 'classnames'
import stripIndent from 'strip-indent'
import trimNewlines from 'trim-newlines'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter/dist/cjs'
import prism from 'react-syntax-highlighter/dist/cjs/styles/prism/prism'
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx'
import bash from 'react-syntax-highlighter/dist/cjs/languages/prism/bash'

SyntaxHighlighter.registerLanguage('jsx', jsx)
SyntaxHighlighter.registerLanguage('bash', bash)

const useStyles = createUseStyles({
  code: {
    margin: '16px 0',
    '&.inline': {
      margin: '0',
      display: 'inline-block'
    }
  }
})

export default function Code({ className, language, inline = false, code }) {
  const classes = useStyles()
  const Container = inline ? 'span' : 'div'

  return (
    <Container className={cx('code', classes.code, className, { inline })}>
      <SyntaxHighlighter
        language={language}
        style={prism}
        PreTag={inline ? 'span' : 'pre'}
        customStyle={{
          margin: '0',
          padding: inline ? '2px' : '16px'
        }}
      >
        {stripIndent(trimNewlines(code)).trimEnd()}
      </SyntaxHighlighter>
    </Container>
  )
}
