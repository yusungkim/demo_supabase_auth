<script lang="ts">
	import { goto } from '$app/navigation';
	import type { PageData } from './$types';

	export let data: PageData;

	console.log('Ran: /+layout.svelte');
</script>

<h1 class="text-xl md:text-3xl lg:text-5xl">Sveltekit & Supabase Auth</h1>
{#if data.session}
	<p>Welcome, {data.session.user.email}</p>
{:else}
	<p class="text-lg md:text-xl lg:text-2xl p-2">to learn how to register and login</p>
	<div class="p-3 flex space-x-4">
		<button on:click={() => goto('/login')} class="btn btn-primary">Login</button>
		<button on:click={() => goto('/register')} class="btn btn-secondary">Register</button>
	</div>
{/if}
