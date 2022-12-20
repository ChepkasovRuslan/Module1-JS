const url = new URL('https://www.google.com/doodles/rubiks-cube');

const urlObject = {
    protocol: url.protocol,
    hostname: url.hostname,
    path: url.pathname
}

console.log(urlObject);