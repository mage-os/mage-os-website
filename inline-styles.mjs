import path from 'node:path'
import fs from 'node:fs/promises'
import { globby } from 'globby'

const files = await globby('./dist/**/index.html')

await Promise.all(
  files.map(async htmlPath => {
    const pageStyles = []
    const stylesPaths = []

    let file = await fs.readFile(htmlPath, 'utf-8')

    file = file.replace(
      /<link rel="stylesheet" href="(.*?)">/g,
      (match, p1) => {
        stylesPaths.push(p1)
        return ''
      }
    )

    await Promise.all(
      stylesPaths.map(async stylesPath => {
        const styles = await fs.readFile(path.resolve(path.dirname(htmlPath), stylesPath), 'utf-8')
        pageStyles.push(styles)
      })
    )

    file = file.replace(
      '<meta charset="UTF-8">',
      `<style>${pageStyles.join(' ')}</style>\n<meta charset="UTF-8">`
    )

    await fs.writeFile(htmlPath, file)
  })
)