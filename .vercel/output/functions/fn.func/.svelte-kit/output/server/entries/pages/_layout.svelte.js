import { c as create_ssr_component, b as add_attribute, e as each, v as validate_component, d as escape, f as spread, g as escape_object, h as subscribe } from "../../chunks/ssr.js";
import { getToolbarSrc, asLink } from "@prismicio/client";
import "../../chunks/client.js";
import { p as page } from "../../chunks/stores.js";
import { r as repositoryName } from "../../chunks/prismicio.js";
import { P as PrismicLink, B as ButtonLink } from "../../chunks/ButtonLink.js";
import clsx from "clsx";
const PrismicPreview = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let toolbarSrc;
  let { repositoryName: repositoryName2 } = $$props;
  let { routePrefix = "preview" } = $$props;
  let { routePrefixName = routePrefix } = $$props;
  if ($$props.repositoryName === void 0 && $$bindings.repositoryName && repositoryName2 !== void 0) $$bindings.repositoryName(repositoryName2);
  if ($$props.routePrefix === void 0 && $$bindings.routePrefix && routePrefix !== void 0) $$bindings.routePrefix(routePrefix);
  if ($$props.routePrefixName === void 0 && $$bindings.routePrefixName && routePrefixName !== void 0) $$bindings.routePrefixName(routePrefixName);
  toolbarSrc = getToolbarSrc(repositoryName2);
  return `${$$result.head += `<!-- HEAD_svelte-92dhp6_START --><script defer${add_attribute("src", toolbarSrc, 0)}><\/script><!-- HEAD_svelte-92dhp6_END -->`, ""}`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { settings } = $$props;
  if ($$props.settings === void 0 && $$bindings.settings && settings !== void 0) $$bindings.settings(settings);
  return `<footer class="block w-[100%] max-h-[25vh] bg-zinc-800/40"><div class="md:p-[2rem] p-[1 rem] md:flex block items-center justify-center relative" data-svelte-h="svelte-9as11h"><section class="mx-auto md:mx-[40px] my-0 items-left justify-left md:flex items-center md:justify-center md:w-[100%]"><span class="px-[1 rem]"><i class="fa fa-map-marker text-orange-600 text-lg md:text-xl px-3"></i></span><span class="text-yellow-500">No Limits Martial Arts and Fitness<br>Beaverdam, VA</span></section> <section class="ms-auto md:mx-[40px] my-0 items-left justify-left md:flex items-center md:justify-center md:w-[100%]"><span class="px-[1 rem]"><i class="fa fa-phone text-orange-600 text-lg md:text-xl px-3"></i></span><span class="text-yellow-500">804-867-5309</span></section> <section class="mx-[40px] my-0 items-left justify-left md:flex md:items-center md:justify-center md:w-[100%]"><span class="px-[1 rem]"><i class="fa fa-envelope text-orange-600 text-lg md:text-xl px-3"></i></span><span class="text-yellow-500">questions@nolimitsmaf.com</span></section></div> <span class="w-[100%] before:w-[100%] before:left-[120px] after:w-[100%] after:right-[120px]"></span> <nav><ul class="px-[1,5rem] py-[2rem] flex items-center justify-center">${each(settings.data.navigation, (item) => {
    return `<li>${validate_component(PrismicLink, "PrismicLink").$$render(
      $$result,
      {
        class: "text-yellow-500 md:mx-0 md:my-[20px]  md:tranition-color md:duration:0.5s min-h-11 items-center p-[1rem] text-md mx-0 my-[5px] inline-block hover:text-orange-600/100",
        field: item.link
      },
      {},
      {
        default: () => {
          return `${escape(item.label)}`;
        }
      }
    )} </li>`;
  })}</ul> <div class="px-[0.8rem] py-0 bg-zinc-700 text-center text-yellow-500 text-lg" data-svelte-h="svelte-1qcgj3g">Copyright 2024 No Limits Martial Arts and Fitness - All rights resered</div></nav></footer>`;
});
const X_bold = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 256 256" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M208.49 191.51a12 12 0 0 1-17 17L128 145l-63.51 63.49a12 12 0 0 1-17-17L111 128L47.51 64.49a12 12 0 0 1 17-17L128 111l63.51-63.52a12 12 0 0 1 17 17L145 128Z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const List_bold = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 256 256" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M228 128a12 12 0 0 1-12 12H40a12 12 0 0 1 0-24h176a12 12 0 0 1 12 12M40 76h176a12 12 0 0 0 0-24H40a12 12 0 0 0 0 24m176 104H40a12 12 0 0 0 0 24h176a12 12 0 0 0 0-24"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { settings } = $$props;
  let isOpen = false;
  const isActive = (link) => {
    const path = asLink(link);
    if (!path) return false;
    if (path === "/") {
      return $page.url.pathname === "/";
    }
    return $page.url.pathname.startsWith(path);
  };
  if ($$props.settings === void 0 && $$bindings.settings && settings !== void 0) $$bindings.settings(settings);
  $$unsubscribe_page();
  return `<header class="p-4 md:p-6"><nav class="mx-auto flex max-w-6xl flex-col justify-between py-2 font-medium text-2xl md:flex-row md:items-center" aria-label="Main"><div class="flex items-center justify-between"><a href="/" class="z-50"><span class="sr-only">${escape(settings.data.site_title)} home page</span></a> <button type="button" class="block p-2 text-3xl md:hidden"${add_attribute("aria-expanded", isOpen, 0)}>${validate_component(List_bold, "IconMenu").$$render($$result, {}, {}, {})}</button></div>  <div${add_attribute("class", clsx("fixed inset-0 z-40 flex flex-col items-end bg-gray-950 pr-4 pt-6 transition-transform duration-300 ease-in-out md:hidden", "translate-x-[100%]"), 0)}><button${add_attribute("aria-expanded", isOpen, 0)} type="button" class="block p-2 text-3xl text-white md:hidden">${validate_component(X_bold, "IconClose").$$render($$result, {}, {}, {})}</button> <ul class="grid justify-items-end gap-8">${each(settings.data.navigation, ({ cta_button, link, label }) => {
    return `<li>${cta_button ? `${validate_component(ButtonLink, "ButtonLink").$$render(
      $$result,
      {
        field: link,
        "aria-current": isActive(link) ? "page" : void 0
      },
      {},
      {
        default: () => {
          return `${escape(label)} `;
        }
      }
    )}` : `${validate_component(PrismicLink, "PrismicLink").$$render(
      $$result,
      {
        field: link,
        class: "group first:mt-8 relative block overflow-hidden rounded px-3 py-1 text-3xl font-bold text-primary-100",
        "aria-current": isActive(link) ? "page" : void 0
      },
      {},
      {
        default: () => {
          return `<span${add_attribute(
            "class",
            `absolute inset-0 z-0 h-full rounded bg-orange-600 transition-transform duration-300 ease-in-out group-hover:translate-y-0 ${isActive(link) ? "translate-y-[calc(100%-4px)]" : "translate-y-[100%]"}`,
            0
          )}></span> <span class="relative">${escape(label)}</span> `;
        }
      }
    )}`} </li>`;
  })}</ul></div>  <ul class="hidden gap-6 md:flex">${each(settings.data.navigation, ({ cta_button, link, label }) => {
    return `<li>${cta_button ? `${validate_component(ButtonLink, "ButtonLink").$$render(
      $$result,
      {
        field: link,
        "aria-current": isActive(link) ? "page" : void 0
      },
      {},
      {
        default: () => {
          return `${escape(label)} `;
        }
      }
    )}` : `${validate_component(PrismicLink, "PrismicLink").$$render(
      $$result,
      {
        field: link,
        class: "group relative block overflow-hidden rounded px-3 py-1 text-base font-bold text-primary-100",
        "aria-current": isActive(link) ? "page" : void 0
      },
      {},
      {
        default: () => {
          return `<span${add_attribute(
            "class",
            `absolute inset-0 z-0 h-full rounded bg-orange-600 transition-transform duration-300 ease-in-out group-hover:translate-y-0 ${isActive(link) ? "translate-y-[calc(100%-5px)]" : "translate-y-[100%]"}`,
            0
          )}></span> <span class="text-xl relative">${escape(label)}</span> `;
        }
      }
    )}`} </li>`;
  })}</ul></nav></header>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1veofet_START -->${$$result.title = `<title>${escape($page.data.title)}</title>`, ""}${$page.data.meta_description ? `<meta name="description"${add_attribute("content", $page.data.meta_description, 0)}>` : ``}${$page.data.meta_title ? `<meta name="og:title"${add_attribute("content", $page.data.meta_title, 0)}>` : ``}${$page.data.meta_image ? `<meta name="og:image"${add_attribute("content", $page.data.meta_image, 0)}> <meta name="twitter:card" content="summary_large_image">` : ``}<!-- HEAD_svelte-1veofet_END -->`, ""} ${validate_component(Header, "Header").$$render($$result, { settings: $page.data.settings }, {}, {})} <main>${slots.default ? slots.default({}) : ``}</main> ${validate_component(Footer, "Footer").$$render($$result, { settings: $page.data.settings }, {}, {})} ${validate_component(PrismicPreview, "PrismicPreview").$$render($$result, { repositoryName }, {}, {})}`;
});
export {
  Layout as default
};
