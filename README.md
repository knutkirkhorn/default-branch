# default-branch

> Get the default branch of a GitHub repository

## Installation

```
npm install default-branch
```

## Usage

```js
import defaultBranch from 'default-branch';

console.log(await defaultBranch('knutkirkhorn/emorjis'));
// => main

console.log(await defaultBranch('https://github.com/knutkirkhorn/btc-value-cli'));
// => main

console.log(await defaultBranch('https://enterprise.github.corp/org/repo'));
// => default
```

## API

### defaultBranch(path)

Returns the default branch of a repository. The `path` can be `username/repo-name`, or a full url to the repository (example: `https://github.com/knutkirkhorn/btc-value-cli`).

## Related

- [has-license](https://github.com/knutkirkhorn/has-license) - Check if a repository has a license
- [gh-repo-has-license](https://github.com/knutkirkhorn/gh-repo-has-license) - Check if a GitHub repository has a license
