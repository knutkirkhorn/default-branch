# default-branch [![Build Status](https://travis-ci.org/Knutakir/default-branch.svg?branch=main)](https://travis-ci.org/Knutakir/default-branch)
> Get the default branch of a GitHub repository

## Installation
```
$ npm install default-branch
```

## Usage
```js
const defaultBranch = require('default-branch');

defaultBranch('Knutakir/emorjis').then(branch => {
    console.log(branch);
    // => main
});

defaultBranch('https://github.com/Knutakir/btc-value-cli').then(branch => {
    console.log(branch);
    // => main
});

defaultBranch('https://enterprise.github.corp/org/repo').then(branch => {
    console.log(branch);
    // => default
});
```

## API
### defaultBranch(path)
Returns the default branch of a repository. The `path` can be `username/repo-name`, or a full url to the repository (example: `https://github.com/Knutakir/btc-value-cli`).

## Related
- [has-license](https://github.com/Knutakir/has-license) - Check if a repository has a license
- [gh-repo-has-license](https://github.com/Knutakir/gh-repo-has-license) - Check if a GitHub repository has a license

## License
MIT © [Knut Kirkhorn](LICENSE)
