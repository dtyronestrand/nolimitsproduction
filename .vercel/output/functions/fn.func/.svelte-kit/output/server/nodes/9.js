import * as server from '../entries/pages/register/_page.server.ts.js';

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/register/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/register/+page.server.ts";
export const imports = ["_app/immutable/nodes/9.D43hSY1I.js","_app/immutable/chunks/scheduler.Bd309piK.js","_app/immutable/chunks/index.c4LMZ8Tz.js","_app/immutable/chunks/forms.ev7ACqbp.js","_app/immutable/chunks/entry.CMTg7ftV.js"];
export const stylesheets = [];
export const fonts = [];
