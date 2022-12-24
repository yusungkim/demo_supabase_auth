import { getServerSession } from "@supabase/auth-helpers-sveltekit";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async (event) => {

  console.log("[SERVER]: /+layout.server.ts # LayoutServerLoad")

  // pass session to client
  return {
    session: await getServerSession(event)
  }
}