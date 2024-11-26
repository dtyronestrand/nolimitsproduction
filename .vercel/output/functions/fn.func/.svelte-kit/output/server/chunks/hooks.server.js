import { createServerClient } from "@supabase/ssr";
import "cookie";
const handle = async ({ event, resolve }) => {
  event.locals.supabase = createServerClient(
    "https://olqofcokaatrifjeaetr.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9scW9mY29rYWF0cmlmamVhZXRyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjczOTQ5MjAsImV4cCI6MjA0Mjk3MDkyMH0.LLkS3EjNJqv31aUkuAlg9rFp2fAe47LjfnlcIYt-cPU",
    {
      cookies: {
        get: (key) => event.cookies.get(key),
        set: (key, value, options) => {
          event.cookies.set(key, value, {
            ...options,
            path: "/"
          });
        },
        remove: (key, options) => {
          event.cookies.delete(key, {
            ...options,
            path: "/"
          });
        }
      }
    }
  );
  event.locals.getSession = async () => {
    const {
      data: { session }
    } = await event.locals.supabase.auth.getSession();
    return session;
  };
  return resolve(event, {
    filterSerializedResponseHeaders(name) {
      return name === "content-range";
    }
  });
};
export {
  handle
};
