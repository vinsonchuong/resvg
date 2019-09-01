import React from 'react'
import { createUseStyles } from 'react-jss'
import cx from 'classnames'

const useStyles = createUseStyles({
  logo: {
    height: '56px',
    lineHeight: '24px',
    fontFamily: '"Maven Pro", sans-serif',
    fontWeight: 700,
    fontSize: '72px',
    textAlign: 'center'
  },
  re: {
    color: '#61dbfb'
  },
  svg: {}
})

export default function Logo({ className }) {
  const classes = useStyles()

  return (
    <div className={cx('logo', classes.logo, className)}>
      <span className={classes.re}>re</span>
      <span className={classes.svg}>svg</span>
    </div>
  )
}
