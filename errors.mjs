import {readFile} from 'fs'

readFile(new URL('app.js', import.meta.url), 'utf-8', (err, data) => {
    if(err) {
        console.error("handling ma shit hier") // handles gracefully
        throw err; // terminates process
    } else {

    }
})