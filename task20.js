const url = new URL('https://www.google.com/doodles/rubiks-cube');

const urlPath = url.pathname.substring(1).split('/');

console.log(urlPath);

const urlObject = {
    protocol: url.protocol,
    hostname: url.hostname,
}

for (let i = 0; i < urlPath.length; i++) {
    urlObject.child = ({path: urlPath[i]});
}

console.log(urlObject);