import {expectType} from 'tsd';
import defaultBranch = require('.');

expectType<Promise<string>>(defaultBranch('knutkirkhorn/emorjis'));
expectType<Promise<string>>(defaultBranch('https://github.com/knutkirkhorn/btc-value-cli'));
expectType<Promise<string>>(defaultBranch('https://github.test.corp/org/repo'));
