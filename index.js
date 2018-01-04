'use strict';
const https = require('https');
const regexp = /class="branch-name css-truncate-target">(.*?)</g;

function getDefaultBranch(path) {
    if (!path.includes('github.com')) {
        path = 'https://github.com/' + path;
    }
    
    return new Promise( (resolve, reject) => {
        https.get(path + '/branches', (response) => {
            if (response.statusCode < 200 || response.statusCode > 299) {
                reject(new Error('Failed to load url: ' + response.statusCode));
            }

            response.setEncoding('UTF-8');
            let data = '';

            response.on('data', function(body) {
                data += body;
            });

            response.on('end', function() {
                //TODO: try, catch?
                const regexMatch = data.match(regexp);
                // The first item (0) will be at the top and will be the default branch
                resolve(regexMatch[0].split('>')[1].split('<')[0]);
            });
        }).on('error', (error) => {
            reject(error);
        });
    });
}

module.exports = path => {
    return getDefaultBranch(path);
};