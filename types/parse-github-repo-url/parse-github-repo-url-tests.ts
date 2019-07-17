import parseGithubRepoUrl = require('parse-github-repo-url');

const parsed: string[] = parseGithubRepoUrl(
  'https://github.com/component/emitter'
);
