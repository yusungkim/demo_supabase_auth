import { AuthApiError } from "@supabase/supabase-js";
import { fail, redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";

console.log("Ran: /register/+page.server.ts")

export const actions: Actions = {
  register: async ({ request, locals }) => {
    const body = Object.fromEntries(await request.formData())

    console.log( "body: ", body)
    const { data, error: err } = await locals.sb.auth.signUp({
      email: body.email as string,
      password: body.password as string
    })

    console.log("/register/+page.server.ts/actions data:", data)

    if (err) {
      if (err instanceof AuthApiError && err.status === 400) {
        return fail(400, {
          error: 'Invalid email or password'
        })
      }

      return fail(500, {
        error: 'Server error, Please try again later.'
      })
    }

    // return {
    //   ok: true,
    //   data
    // }

    // 303は、POSTリクエストでデータを送信した後に、表示用画面へGETでリダイレクトして欲しい場合に利用する
    throw redirect(303, '/')
  }
};