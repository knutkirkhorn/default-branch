import test from 'ava';
import defaultBranch from '.';

test('long version', async t => {
    const branch = await defaultBranch('https://github.com/Knutakir/btc-value-cli');
    t.is(branch, 'master');
});

test('long version 2', async t => {
    const branch = await defaultBranch('https://github.com/Knutakir/has-license');
    t.is(branch, 'master');
});

test('short version', async t => {
    const branch = await defaultBranch('Knutakir/emorjis');
    t.is(branch, 'master');
});