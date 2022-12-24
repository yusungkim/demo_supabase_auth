<script lang="ts">
  import "../app.css";
  import { supabase } from '$lib/supabase'
  import { invalidate } from '$app/navigation'
  import { onMount } from 'svelte'

  console.log("Ran: +layout.svelte")

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

<h1 class="text-green-500 text-xl">HELLO</h1>
<slot />