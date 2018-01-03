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
```

## License
MIT © [Knut Kirkhorn](LICENSE)