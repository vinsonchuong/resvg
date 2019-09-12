import React from 'react'
import { createUseStyles } from 'react-jss'
import cx from 'classnames'
import slugify from '@sindresorhus/slugify'

const useStyles = createUseStyles({
  content: {
    lineHeight: '1.5',
    '& > .container': {
      margin: '0 auto',
      maxWidth: '600px'
    }
  },

  h1: {
    margin: '32px 0 16px',
    fontSize: '40px',
    fontWeight: '400',
    '&:first-child': {
      marginTop: '0'
    }
  },

  h2: {
    margin: '24px 0 16px',
    fontSize: '24px',
    fontWeight: '400'
  },

  h3: {
    margin: '24px 0 16px',
    fontSize: '20px',
    fontWeight: '400'
  },

  p: {
    margin: '16px 0',
    fontSize: '16px',
    fontWeight: '400'
  },

  a: {
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline'
    },
    '&, &:hover, &:visited, &:active': {
      color: '#0082A6'
    }
  },

  example: {
    margin: '16px 0',
    padding: '16px',
    background: '#f5f2f0'
  }
})

export function Content({ className, children }) {
  const classes = useStyles()

  return (
    <article className={cx('content', classes.content, className)}>
      <div className="container">{children}</div>
    </article>
  )
}

export function H1({ className, children }) {
  const classes = useStyles()

  return (
    <h1 id={slugify(children)} className={cx('h1', classes.h1, className)}>
      {children}
    </h1>
  )
}

export function H2({ className, children }) {
  const classes = useStyles()

  return (
    <h2 id={slugify(children)} className={cx('h2', classes.h2, className)}>
      {children}
    </h2>
  )
}

export function H3({ className, children }) {
  const classes = useStyles()

  return (
    <h3 id={slugify(children)} className={cx('h3', classes.h3, className)}>
      {children}
    </h3>
  )
}

export function P({ className, children }) {
  const classes = useStyles()

  return <p className={cx('p', classes.p, className)}>{children}</p>
}

export function A({ className, href, children }) {
  const classes = useStyles()

  if (href.startsWith('#')) {
    return (
      <a className={cx('a', classes.a, className)} href={href}>
        {children}
      </a>
    )
  } else {
    return (
      <a
        className={cx('a', classes.a, className)}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    )
  }
}

export function Example({ className, children }) {
  const classes = useStyles()

  return (
    <div className={cx('example', classes.example, className)}>{children}</div>
  )
}
