import { camelCase, paramCase, pascalCase, snakeCase } from "https://deno.land/x/case/mod.ts";

const text = 'hello world';

const camel = camelCase(text);
const param = paramCase(text);
const pascal = pascalCase(text);
const snake = snakeCase(text);

console.log(camel, param, pascal, snake);

