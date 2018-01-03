'use strict';
const https = require('https');
const regexp = /class="branch-name css-truncate-target">(.*?)</g;

function getDefaultBranch(url) {
    if (!url.includes('github.com')) {
        url = 'https://github.com/' + url;
    }
    
    return new Promise( (resolve, reject) => {
        https.get(url + '/branches', (response) => {
            if (response.statusCode < 200 || response.statusCode > 299) {
                reject(new Error('Failed to load url: ' + res.statusCode));
            }

            response.setEncoding('UTF-8');
            let data = '';

            response.on('data', function(body) {
                data += body;
            });

            response.on('end', function() {
                //TODO: try?
                const regexMatch = data.match(regexp);
                //The first item (0) will be at the top and will be the default branch
                resolve(regexMatch[0].split('>')[1].split('<')[0]);
            });
        }).on('error', (error) => {
            reject(error);
        });
    });
}

module.exports = url => {
    return getDefaultBranch(url);
};