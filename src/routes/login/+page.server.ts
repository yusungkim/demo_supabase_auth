import { AuthApiError } from "@supabase/supabase-js";
import { error, redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";

export const actions: Actions = {
  login: async ({ request, locals }) => {
    const body = Object.fromEntries(await request.formData())

    const { data, error: err} = await locals.sb.auth.signInWithPassword({
      email: body.email as string,
      password: body.password as string
    })

    console.log("data: ", data)

    if (err) {
      if (err instanceof AuthApiError && err.status === 400) {
        throw error(400, 'Email or password is not correct.')
      }

      throw error(500, 'Something is wrong during logging you in. Try again later.')
    }

    throw redirect(303, '/')
  }
};