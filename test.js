import test from 'ava';
import m from '.';

test('long version', t => {
    return m('https://github.com/Knutakir/btc-value-cli').then(branch => {
        t.is(branch, 'master');
    });
});

test('long version 2', t => {
    return m('https://github.com/Knutakir/has-license').then(branch => {
        t.is(branch, 'master');
    });
});

test('short version', t => {
    return m('Knutakir/emorjis').then(branch => {
        t.is(branch, 'master');
    });
});