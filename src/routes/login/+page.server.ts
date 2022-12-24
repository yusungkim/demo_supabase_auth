import { AuthApiError, type Provider } from "@supabase/supabase-js";
import { error, fail, redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";

const OAUTH_PROVIDERS = ["google", "github", "discord"]

export const actions: Actions = {
  login: async ({ request, locals, url }) => {

    console.log("[SERVER]: /login/+page.server.ts #login action")

    const provider = url.searchParams.get("provider") as Provider

    if (provider) {
      if (!OAUTH_PROVIDERS.includes(provider)) {
        return fail(400, {
          message: 'Provider not supported.'
        })
      }
      const { data, error: err } = await locals.sb.auth.signInWithOAuth({
        provider
      })

      if (err) {
        return fail(400, {
          message: 'Something went wrong.'
        })
      }

      throw redirect(303, data.url)
    }

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