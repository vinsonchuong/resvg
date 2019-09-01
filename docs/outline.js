import React from 'react'
import { createUseStyles } from 'react-jss'
import cx from 'classnames'
import slugify from '@sindresorhus/slugify'

const useStyles = createUseStyles({
  outline: {
    margin: '0',
    padding: '0',
    listStyle: 'none',
    lineHeight: '1.5'
  },

  o1: {
    margin: '24px 0 0',
    '& a': {
      color: 'inherit',
      textDecoration: 'none'
    },
    '& a:hover': {
      textDecoration: 'underline'
    }
  },

  o2: {
    margin: '8px 0 0 16px',
    '& a': {
      color: 'inherit',
      textDecoration: 'none'
    },
    '& a:hover': {
      textDecoration: 'underline'
    }
  }
})

export function Outline({ className, children }) {
  const classes = useStyles()

  return (
    <ol className={cx('outline', classes.outline, className)}>{children}</ol>
  )
}

export function O1({ className, children }) {
  const classes = useStyles()

  return (
    <li className={cx('o1', classes.o1, className)}>
      <a href={`#${slugify(children)}`}>{children}</a>
    </li>
  )
}

export function O2({ className, children }) {
  const classes = useStyles()

  return (
    <li className={cx('o2', classes.o2, className)}>
      <a href={`#${slugify(children)}`}>{children}</a>
    </li>
  )
}
