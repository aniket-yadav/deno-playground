//deno read file

// const decoder = new TextDecoder('utf-8');
// const data = await Deno.readFile('readme.txt');
// console.log(decoder.decode(data));

const data = await Deno.readTextFile('readMe.txt');
console.log(data);

// deno write file

const encoder = new TextEncoder();
const text = encoder.encode(" let's write with deno");

await Deno.writeFile('readme2.txt',text);

// renaming file and removing file

await Deno.rename('readme.txt','readMe.txt');

// create a delete.txt file before this

Deno.remove('deleteme.txt');