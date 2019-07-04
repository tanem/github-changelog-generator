#!/usr/bin/env node

import fs from 'fs'
import minimist from 'minimist'
import { version } from '../package.json'
import { generateChangelog } from '../src'
;(async () => {
  try {
    const argv = minimist(process.argv.slice(2), {
      alias: {
        f: 'future-release',
        h: 'help',
        o: 'owner',
        r: 'repo',
        v: 'version'
      }
    })

    if (argv.help) {
      const usage = fs.readFileSync(__dirname + '/usage.txt')
      process.stdout.write(usage)
      process.exit(0)
    }

    if (argv.version) {
      process.stdout.write(`${version}\n`)
      process.exit(0)
    }

    const changelog = await generateChangelog({
      futureRelease: argv['future-release'],
      owner: argv.owner,
      repo: argv.repo
    })
    process.stdout.write(changelog)
    process.exit(0)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
})()
