import { c as create_ssr_component, b as add_attribute, d as escape, v as validate_component } from "../../../chunks/ssr.js";
import "../../../chunks/client.js";
import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://olqofcokaatrifjeaetr.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9scW9mY29rYWF0cmlmamVhZXRyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjczOTQ5MjAsImV4cCI6MjA0Mjk3MDkyMH0.LLkS3EjNJqv31aUkuAlg9rFp2fAe47LjfnlcIYt-cPU";
createClient(supabaseUrl, supabaseAnonKey);
const LoginForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form = null } = $$props;
  let email = "";
  let password = "";
  if ($$props.form === void 0 && $$bindings.form && form !== void 0) $$bindings.form(form);
  return `<div class="max-w-md mx-auto mt-8"><form method="POST" action="?/login" class="space-y-4 p-4 bg-white rounded-lg shadow"><div><label for="email" class="block text-sm font-medium text-gray-700" data-svelte-h="svelte-12a4vpc">Email</label> <input id="email" name="email" type="email" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"${add_attribute("value", email, 0)}></div> <div><label for="password" class="block text-sm font-medium text-gray-700" data-svelte-h="svelte-k332hw">Password</label> <input id="password" name="password" type="password" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"${add_attribute("value", password, 0)}></div> ${form?.error ? `<div class="text-red-500 text-sm">${escape(form.error)}</div>` : ``} <button type="submit" ${""} class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50">${escape("Sign In")}</button> <button class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50" data-svelte-h="svelte-3thksx">Sign in with Google</button></form></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form = null } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0) $$bindings.form(form);
  return `<div class="min-h-screen bg-surface-900 py-12 px-4 sm:px-6 lg:px-8"><div class="max-w-md mx-auto"><div class="text-center" data-svelte-h="svelte-1jvwdwg"><h2 class="text-3xl font-extrabold text-slate-50">Sign in to your account</h2> <p class="mt-2 text-sm text-orange-600">Or
          <a href="/register" class="font-medium text-yellow-300 hover:text-yellow-400">create a new account</a></p></div> ${validate_component(LoginForm, "LoginForm").$$render($$result, { form }, {}, {})}</div></div>`;
});
export {
  Page as default
};
