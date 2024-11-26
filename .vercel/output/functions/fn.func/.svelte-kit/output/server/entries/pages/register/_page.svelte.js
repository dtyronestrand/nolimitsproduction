import { c as create_ssr_component, b as add_attribute, d as escape, v as validate_component } from "../../../chunks/ssr.js";
import "../../../chunks/client.js";
const RegisterForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let passwordsMatch;
  let { form = null } = $$props;
  let email = "";
  let password = "";
  let confirmPassword = "";
  if ($$props.form === void 0 && $$bindings.form && form !== void 0) $$bindings.form(form);
  passwordsMatch = password === confirmPassword;
  return `<div class="max-w-md mx-auto mt-8"><form method="POST" action="?/register" class="space-y-4 p-4 bg-white rounded-lg shadow"><div><label for="email" class="block text-sm font-medium text-gray-700" data-svelte-h="svelte-12a4vpc">Email</label> <input id="email" name="email" type="email" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"${add_attribute("value", email, 0)}></div> <div><label for="password" class="block text-sm font-medium text-gray-700" data-svelte-h="svelte-k332hw">Password</label> <input id="password" name="password" type="password" required minlength="6" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"${add_attribute("value", password, 0)}></div> <div><label for="confirmPassword" class="block text-sm font-medium text-gray-700" data-svelte-h="svelte-1kt8ys">Confirm Password</label> <input id="confirmPassword" name="confirmPassword" type="password" required minlength="6" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"${add_attribute("value", confirmPassword, 0)}> ${``}</div> ${form?.error ? `<div class="text-red-500 text-sm">${escape(form.error)}</div>` : ``} <button type="submit" ${!passwordsMatch ? "disabled" : ""} class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50">${escape("Register")}</button></form></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form = null } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0) $$bindings.form(form);
  return `<div class="min-h-screen bg-surfsce-900 py-12 px-4 sm:px-6 lg:px-8"><div class="max-w-md mx-auto"><div class="text-center" data-svelte-h="svelte-3z9u3v"><h2 class="text-3xl font-extrabold text-gray-900">Create an account</h2> <p class="mt-2 text-sm text-gray-600">Or
          <a href="/login" class="font-medium text-indigo-600 hover:text-indigo-500">sign in to your account</a></p></div> ${validate_component(RegisterForm, "RegisterForm").$$render($$result, { form }, {}, {})}</div></div>`;
});
export {
  Page as default
};
