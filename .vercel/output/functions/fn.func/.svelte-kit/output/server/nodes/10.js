

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/slice-simulator/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.8ttOsDCz.js","_app/immutable/chunks/scheduler.Bd309piK.js","_app/immutable/chunks/index.c4LMZ8Tz.js","_app/immutable/chunks/_commonjsHelpers.BosuxZz1.js","_app/immutable/chunks/index.DKEgQ9tx.js","_app/immutable/chunks/ButtonLink.4cr6FYZH.js"];
export const stylesheets = ["_app/immutable/assets/index.Cpji33-Q.css"];
export const fonts = [];
