import {expectType} from 'tsd';
import defaultBranch = require('.');

expectType<Promise<string>>(defaultBranch('Knutakir/emorjis'));
expectType<Promise<string>>(defaultBranch('https://github.com/Knutakir/btc-value-cli'));
expectType<Promise<string>>(defaultBranch('https://github.test.corp/org/repo'));
