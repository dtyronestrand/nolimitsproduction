import { isFilled, mapSliceZone, asText } from "@prismicio/client";
import { c as createClient } from "../../../../chunks/prismicio.js";
import "clsx";
/* empty css                                                     */
const mapper$1 = async ({
  slice,
  context
}) => {
  const { client } = context;
  const programs = (await Promise.all(
    slice.primary.programs.map(async (program) => {
      if (isFilled.contentRelationship(program.program)) {
        return await client.getByID(program.program.id);
      }
    })
  )).filter((program) => program !== void 0);
  return {
    slice,
    programs
  };
};
const mapper = async ({
  slice,
  context
}) => {
  const { client } = context;
  const locations = (await Promise.all(
    slice.primary.locations.map(async (location) => {
      if (isFilled.contentRelationship(location.location)) {
        return await client.getByID(location.location.id);
      }
    })
  )).filter((location) => location !== void 0);
  return {
    slice,
    locations
  };
};
const mappers = {
  programs: mapper$1,
  locations: mapper
};
async function load({ params, fetch, cookies }) {
  const client = createClient({ fetch, cookies });
  const page = await client.getByUID("page", params.uid);
  const slices = await mapSliceZone(page.data.slices, mappers, { client });
  return {
    slices,
    title: asText(page.data.title),
    meta_description: page.data.meta_description,
    meta_title: page.data.meta_title,
    meta_image: page.data.meta_image.url
  };
}
function entries() {
  return [{ uid: "page" }];
}
export {
  entries,
  load
};
