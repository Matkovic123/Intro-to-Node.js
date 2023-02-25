import {readFile} from 'fs/promises'

process.on('uncaughtException', (e) => {
    console.log(e)
    // unhandled exception got caught and this is the last synchronous block you can execute before it shuts down
    // this is not handling the error, app will shutdown after this tick
})

const result = await readFile(new URL('app.js', import.meta.url), 'utf-8')
console.log('hello')
