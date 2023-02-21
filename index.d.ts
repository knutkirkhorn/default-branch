/**
Get the default branch of a GitHub repository

@param path - Path to the GitHub repository.
@returns The default branch of the given `path`.

@example
```
import defaultBranch from 'default-branch';

console.log(await defaultBranch('knutkirkhorn/emorjis'));
// => main

console.log(await defaultBranch('https://github.com/knutkirkhorn/btc-value-cli'));
// => main

console.log(await defaultBranch('https://enterprise.github.corp/org/repo'));
// => default
```
*/
declare function defaultBranch(path: string): Promise<string>;

export = defaultBranch;
