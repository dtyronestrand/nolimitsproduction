import { c as createClient } from "../../../../../chunks/prismicio.js";
async function load({ params, fetch, cookies }) {
  const client = createClient({ fetch, cookies });
  const page = await client.getByUID("protected", params.uid);
  return {
    page
  };
}
async function entries() {
  const client = createClient();
  const pages = await client.getAllByType("protected");
  return pages.map((page) => {
    return { uid: page.uid };
  });
}
export {
  entries,
  load
};
