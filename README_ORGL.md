# github-changelog-generator

[![npm version](https://img.shields.io/npm/v/@tanem/github-changelog-generator.svg?style=flat-square)](https://www.npmjs.com/package/@tanem/github-changelog-generator)
[![build status](https://img.shields.io/travis/tanem/github-changelog-generator/master.svg?style=flat-square)](https://travis-ci.org/tanem/github-changelog-generator)
[![coverage status](https://img.shields.io/codecov/c/github/tanem/github-changelog-generator.svg?style=flat-square)](https://codecov.io/gh/tanem/github-changelog-generator)
[![npm downloads](https://img.shields.io/npm/dm/@tanem/github-changelog-generator.svg?style=flat-square)](https://www.npmjs.com/package/@tanem/github-changelog-generator)

> Generates a changelog using GitHub tags and pull requests.

## Background

For a long time I used [GitHub Changelog Generator](https://github.com/github-changelog-generator/github-changelog-generator) to generate changelogs for my personal projects, which worked well until I started hitting numerous errors when running against larger projects. That, coupled with the fact that I was only using a small subset of the API, prompted me to create this module.

## Usage

```
Usage: github-changelog-generator [options]

Generates a changelog using GitHub tags and pull requests.

Options:
  -f, --future-release <tag>  Tag to use for PRs merged since the last published
                              tag. If unspecified, those PRs will be excluded.
  -o, --owner <owner>         Repo owner. If unspecified, the value will be
                              resolved from the local git config.
  -r, --repo <repo>           Repo name. If unspecified, the value will be
                              resolved from the local git config.
  -v, --version               Output the version number.
  -h, --help                  Output usage information.

Examples:
  $ github-changelog-generator -f v1.0.0
  $ github-changelog-generator -o tanem -r react-svg
  $ github-changelog-generator -f v2.0.0 -o tanem -r react-svg
```

The changelog is printed to stdout, so can be redirected to a file:

```
$ github-changelog-generator > CHANGELOG.md
```

## API

### generateChangelog([options])

Returns a `Promise` that will be resolved with the changelog. If an error occurs during execution, the `Promise` is rejected with an `Error` object.

**Arguments**

- `options` - _Optional_ An object containing the optional arguments defined below. Defaults to `{}`.
  - `futureRelease` - _Optional_ Tag to use for PRs merged since the last published tag. If unspecified, those PRs will be excluded.
  - `owner` - _Optional_ Repo owner. If unspecified, the value will be resolved from the local git config.
  - `repo` - _Optional_ Repo name. If unspecified, the value will be resolved from the local git config.

**Example**

```ts
// Note: The `fs.promises` API was added in Node.js v10.0.0.
import { promises as fs } from 'fs';
import path from 'path';
import { generateChangelog } from '../src';

(async () => {
  try {
    const changelog = await generateChangelog({
      futureRelease: 'v2.0.0',
      owner: 'tanem',
      repo: 'react-svg'
    });
    await fs.writeFile(
      path.join(__dirname, 'CHANGELOG.md'),
      changelog,
      'utf-8'
    );
  } catch (error) {
    console.error(error);
  }
})();
```

## Installation

```
$ npm install @tanem/github-changelog-generator --save-dev
```

You'll also need to generate a new [GitHub personal access token](https://github.com/settings/tokens), then set an environment variable by running the following command at the prompt or by adding it to your shell profile:

```sh
export CHANGELOG_GITHUB_TOKEN=<your_github_personal_access_token>
```

## License

MIT
