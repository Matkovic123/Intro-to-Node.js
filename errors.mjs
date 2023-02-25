import {readFile} from 'fs'

try {
const result = await readFile(new URL('app.js', import.meta.url), 'utf-8')
} catch(e) {
    console.error(e);
    console.log('heyo');
}