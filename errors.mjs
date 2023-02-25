import {readFile} from 'fs/promises'

readFile(new URL('app.js', import.meta.url), 'utf-8').catch(e=> {
    console.error(e);
    console.log('heyo');
})
