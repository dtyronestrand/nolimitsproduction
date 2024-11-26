import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/ssr.js";
import { B as Bounded, T as TriangleGrid, P as PrismicText, a as PrismicImage, S as SliceZone, c as components } from "../../../../../chunks/index2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `${validate_component(Bounded, "Bounded").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="relative grid w-full place-items-center text-center">${validate_component(TriangleGrid, "TriangleGrid").$$render($$result, {}, {}, {})} <h1 class="text-5xl font-medium md:text-7xl">${validate_component(PrismicText, "PrismicText").$$render($$result, { field: data.page.data.title }, {}, {})}</h1> <p class="mb-4 mt-8 max-w-xl text-lg text-yellow-500">${validate_component(PrismicText, "PrismicText").$$render($$result, { field: data.page.data.tag_line }, {}, {})}</p> <figure class="rounded-lg">${validate_component(PrismicImage, "PrismicImage").$$render($$result, { field: data.page.data.image }, {}, {})}</figure></div> <div class="prose prose-inverted mx-auto mt-7 md:mt-11">${validate_component(SliceZone, "SliceZone").$$render(
        $$result,
        {
          slices: data.page.data.slices,
          components
        },
        {},
        {}
      )}</div>`;
    }
  })}`;
});
export {
  Page as default
};
