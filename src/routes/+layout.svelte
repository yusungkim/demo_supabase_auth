<script lang="ts">
  import "../app.css";
  import { supabase } from '$lib/supabase'
  import { invalidateAll } from '$app/navigation'
  import { onMount } from 'svelte'

  console.log("[Client]: /+layout.svelte")

  onMount(() => {
    console.log("[Client]: /+layout.svelte #onMount()")

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(() => {
      console.log("[Client]: /+layout.svelte, Auth state change detected.")
      invalidateAll()
    })

    return () => {
      subscription.unsubscribe()
    }
  })
</script>

<div class="min-w-full h-screen flex flex-col justify-start items-center p-5 md:p-10">
  <div class="w-96 md:w-[30rem] lg:w-[50rem] xl:w-[60rem] flex flex-col justify-center items-center">
    <slot />
  </div>
</div>
