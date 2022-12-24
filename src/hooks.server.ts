// import '$lib/supabase'
import { getSupabase } from '@supabase/auth-helpers-sveltekit'
import type { Handle } from '@sveltejs/kit'

export const handle: Handle = async ({ event, resolve }) => {
  const { session , supabaseClient } = await getSupabase(event)

  console.log("[SERVER]: /hooks.server.ts #handle")

  event.locals.sb = supabaseClient

  // session has user, tokens, expiry
  event.locals.session = session

  // prepare session and client for server processing
  return resolve(event)
}
