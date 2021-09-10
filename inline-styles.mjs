import fs from 'fs/promises'
import { globby } from 'globby'

const root = await fs.readFile('./dist/index.html', 'utf-8')
const stylesPath = './dist/' + root.match(/<link id="inline-styles" rel="stylesheet" href="(\S+)"/)[1]
const styles = await fs.readFile(stylesPath, 'utf-8')

const files = await globby('./dist/**/index.html')
await Promise.all(
  files.map(async path => {
    const file = await fs.readFile(path, 'utf-8')
    await fs.writeFile(
      path,
      file.replace(
        /<link id="inline-styles".+type="text\/css">/,
        `<style>${styles}</style>`
      )
    )
  })
)
