import { r as redirect, f as fail } from "../../../chunks/index.js";
const load = async ({ locals }) => {
  if (locals.session) {
    throw redirect(303, "/");
  }
  return { session: null };
};
const actions = {
  login: async ({ request, locals: { supabase } }) => {
    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    if (error) {
      return fail(400, {
        error: error.message,
        values: {
          email
        }
      });
    }
    throw redirect(303, "/");
  }
};
export {
  actions,
  load
};
