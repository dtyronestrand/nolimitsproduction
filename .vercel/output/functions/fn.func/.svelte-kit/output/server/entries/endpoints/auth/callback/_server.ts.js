import { r as redirect } from "../../../../chunks/index.js";
const GET = async (event) => {
  const {
    url,
    locals: { supabase }
  } = event;
  const code = url.searchParams.get("code");
  const next = url.searchParams.get("next") ?? "/";
  if (code) {
    await supabase.auth.exchangeCodeForSession(code);
  }
  throw redirect(303, next);
};
export {
  GET
};
