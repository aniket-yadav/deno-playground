//uuid module

import { v4 } from "https://deno.land/std/uuid/mod.ts";

// denerate a v4 uuid

const uid  = v4.generate()

console.log(uid);