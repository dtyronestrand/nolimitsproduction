import { r as redirect, f as fail } from "../../../chunks/index.js";
const load = async ({ locals }) => {
  if (locals.session) {
    throw redirect(303, "/");
  }
  return { session: null };
};
const actions = {
  register: async ({ request, locals: { supabase } }) => {
    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");
    if (password !== confirmPassword) {
      return fail(400, {
        error: "Passwords do not match",
        values: { email }
      });
    }
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${request.headers.get("origin")}/auth/callback`
      }
    });
    if (error) {
      return fail(400, {
        error: error.message,
        values: { email }
      });
    }
    return {
      message: "Please check your email for a confirmation link."
    };
  }
};
export {
  actions,
  load
};
