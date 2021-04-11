const test = require('ava');
const https = require('https');
const {EventEmitter} = require('events');
const defaultBranch = require('.');

test('long version', async t => {
    const branch = await defaultBranch('https://github.com/Knutakir/btc-value-cli');
    t.is(branch, 'main');
});

test('long version 2', async t => {
    const branch = await defaultBranch('https://github.com/Knutakir/has-license');
    t.is(branch, 'main');
});

test('short version', async t => {
    const branch = await defaultBranch('Knutakir/emorjis');
    t.is(branch, 'main');
});

test('enterprise GitHub', async t => {
    const {get} = https;
    let url;
    // Mock https.get
    https.get = (opts, callback) => {
        url = opts;
        const response = new EventEmitter();
        response.setEncoding = () => {};
        Promise.resolve().then(() => {
            callback(response);
            response.emit(
                'data',
                '<html><body><a class="branch-name" href="/org/repo">default</a></body></html>'
            );
            response.emit('end');
        });
        return new EventEmitter();
    };
    const branch = await defaultBranch('https://github.test.corp/org/repo');
    // Restore original https.get
    https.get = get;
    t.is(url, 'https://github.test.corp/org/repo/branches');
    t.is(branch, 'default');
});
