import { c as createClient } from "../../chunks/prismicio.js";
async function load({ fetch, cookies }) {
  const client = createClient({ fetch, cookies });
  const settings = await client.getSingle("settings");
  return {
    settings
  };
}
export {
  load
};
