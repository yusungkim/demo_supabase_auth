<script lang="ts">
  import "../app.css";
  import { supabase } from '$lib/supabase'
  import { invalidate } from '$app/navigation'
  import { onMount } from 'svelte'

  console.log("Ran: /+layout.svelte")

  onMount(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(() => {
      invalidate('supabase:auth')
    })
    console.log("Ran: +layout.svelte #onMount")

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
