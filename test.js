/* @flow */
import test from 'ava'
import greeting from 'resvg'

test('exporting "Hello World!"', t => {
  t.is(greeting, 'Hello World!')
})
