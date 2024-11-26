import { f as fail, r as redirect } from "../../../chunks/index.js";
const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    if (!name || !email || !message) {
      return fail(400, {
        error: true,
        message: "All fields are required.",
        data: { name, email, message }
      });
    }
    try {
      console.log("Form submitted successfully", { name, email, message });
      return redirect(303, "/contact/success");
    } catch (error) {
      console.error("Error while handling contact form:", error);
      return fail(500, {
        error: true,
        message: "Failed to submit your request. Please try again later.",
        data: { name, email, message }
      });
    }
  }
};
export {
  actions
};
