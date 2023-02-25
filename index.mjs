// exports.action = () => {  <- the common.js way
//     console.log("hello");
// }

export const action = () => {  // <- ECMAScript way, a named export
    console.log("hello");
}

// renaming files to *.mjs to indicate they are modules. 
// To keep *.js extension configure package.json
// *.mjs is good for migrating from common.js syntax to ECMAScript syntax