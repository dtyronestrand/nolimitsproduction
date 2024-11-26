import * as server from '../entries/pages/contact/_page.server.ts.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/contact/+page.server.ts";
export const imports = ["_app/immutable/nodes/7.dM1IxcDu.js","_app/immutable/chunks/scheduler.Bd309piK.js","_app/immutable/chunks/index.c4LMZ8Tz.js","_app/immutable/chunks/entry.CMTg7ftV.js"];
export const stylesheets = ["_app/immutable/assets/7.E67hbcun.css"];
export const fonts = [];
