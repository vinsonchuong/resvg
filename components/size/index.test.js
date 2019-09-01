import test from 'ava'
import openApp from 'puppet-strings-open-app'
import { resizeTab, findElement } from 'puppet-strings'

test('reporting width and height', async t => {
  const tab = await openApp('components/size/fixtures/index.html')

  await findElement(tab, '.size')

  await resizeTab(tab, 700, 800)
  await findElement(tab, '.size', '700 x 800')

  await resizeTab(tab, 900, 600)
  await findElement(tab, '.size', '900 x 600')

  t.pass()
})
