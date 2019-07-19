# github-changelog-generator

[![npm version](https://img.shields.io/npm/v/@tanem/github-changelog-generator.svg?style=flat-square)](https://www.npmjs.com/package/@tanem/github-changelog-generator)
[![build status](https://img.shields.io/travis/tanem/github-changelog-generator/master.svg?style=flat-square)](https://travis-ci.org/tanem/github-changelog-generator)
[![coverage status](https://img.shields.io/codecov/c/github/tanem/github-changelog-generator.svg?style=flat-square)](https://codecov.io/gh/tanem/github-changelog-generator)
[![npm downloads](https://img.shields.io/npm/dm/@tanem/github-changelog-generator.svg?style=flat-square)](https://www.npmjs.com/package/@tanem/github-changelog-generator)

> Generates a changelog using GitHub tags and pull requests.

## Basic Usage

### CLI

```sh
$ github-changelog-generator > CHANGELOG.md
```

### API

```ts
import fs from 'fs';
import path from 'path';
import { generateChangelog } from '../src';

(async () => {
  try {
    const changelog = await generateChangelog();
    fs.writeFileSync(path.join(__dirname, 'CHANGELOG.md'), changelog, 'utf-8');
  } catch (error) {
    console.error(error);
  }
})();
```

## API

**Arguments**

- `futureRelease` - _Optional_ Tag to use for PRs merged since the last published tag. If unspecified, those PRs will be excluded.
- `owner` - _Optional_ Repo owner. If unspecified, the value will be resolved from the local git config.
- `repo` - _Optional_ Repo name. If unspecified, the value will be resolved from the local git config.

**Example**

### CLI

```sh
$ github-changelog-generator -f v2.0.0 -o tanem -r react-svg > CHANGELOG.md
```

### API

```ts
import fs from 'fs';
import path from 'path';
import { generateChangelog } from '../src';

(async () => {
  try {
    const changelog = await generateChangelog({
      futureRelease: 'v2.0.0',
      owner: 'tanem',
      repo: 'react-svg'
    });
    fs.writeFileSync(path.join(__dirname, 'CHANGELOG.md'), changelog, 'utf-8');
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
