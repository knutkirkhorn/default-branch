/**
Get the default branch of a GitHub repository

@param path - Path to the GitHub repository.
@returns The default branch of the given `path`.

@example
```
import defaultBranch from 'default-branch';

defaultBranch('knutkirkhorn/emorjis').then(branch => {
    console.log(branch);
    // => main
});

defaultBranch('https://github.com/knutkirkhorn/btc-value-cli').then(branch => {
    console.log(branch);
    // => main
});

defaultBranch('https://enterprise.github.corp/org/repo').then(branch => {
    console.log(branch);
    // => default
});
```
*/
declare function defaultBranch(path: string): Promise<string>;

export = defaultBranch;
