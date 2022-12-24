<script lang="ts">
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import { supabaseClient } from '$lib/supabase';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	const logoutSubmit: SubmitFunction = async ({ cancel }) => {
		const { error } = await supabaseClient.auth.signOut();
		if (error) {
			console.log(error);
		}
    // cancel the form action (POST on /logout)
		cancel();
	};

	console.log('[Client]: /+layout.svelte');
</script>

<h1 class="text-xl md:text-3xl lg:text-5xl">Sveltekit & Supabase Auth</h1>
{#if data.session}
	<p class="text-lg p-5">Welcome, {data.session.user.email}</p>
	<form action="/logout" method="POST" use:enhance={logoutSubmit}>
		<button type="submit" class="btn btn-primary">Logout</button>
	</form>
{:else}
	<p class="text-lg md:text-xl lg:text-2xl p-2">to learn how to register and login</p>
	<div class="p-3 flex space-x-4">
		<button on:click={() => goto('/login')} class="btn btn-primary">Login</button>
		<button on:click={() => goto('/register')} class="btn btn-secondary">Register</button>
	</div>
{/if}
