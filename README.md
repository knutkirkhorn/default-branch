# default-branch
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
    // => master
});

defaultBranch('https://github.com/Knutakir/btc-value-cli').then(branch => {
    console.log(branch);
    // => master
});
```

## API
### defaultBranch(path)
Returns the default branch of a repository. The `path` can be `username/repo-name`, or a full url to the repository (example: `https://github.com/Knutakir/btc-value-cli`).

## License
MIT © [Knut Kirkhorn](LICENSE)
