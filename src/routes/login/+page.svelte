<script lang="ts">
	import { enhance } from '$app/forms';
	import { supabaseClient } from '$lib/supabase';
	import type { Provider } from '@supabase/supabase-js';
	import type { SubmitFunction } from '@sveltejs/kit';

	console.log('[Client]: /login/+page.svelte');

	const signInWithProvider = async (provider: Provider) => {
		const { data, error } = await supabaseClient.auth.signInWithOAuth({
			provider: provider
		});
	};

	const submitSocialLogin: SubmitFunction = async ({ action, cancel }) => {
		switch (action.searchParams.get('provider')) {
			case 'google':
				await signInWithProvider('google');
				break;
			case 'github':
				await signInWithProvider('github');
				break;
			case 'discord':
				await signInWithProvider('discord');
				break;
			default:
				break;
		}
		// stop posting backend endpoint url of /login
		cancel();
	};
</script>

<h1 class="text-xl md:text-3xl lg:text-5xl">Login</h1>

<form class="w-3/4 space-y-4" action="?/login" method="POST">
	<div class="form-control">
		<label class="label" for="email">
			<span class="label-text">Email</span>
		</label>
		<input id="email" name="email" type="text" placeholder="" class="input input-bordered w-full" />
	</div>
	<div class="form-control">
		<label class="label" for="password">
			<span class="label-text">Password</span>
		</label>
		<input
			id="password"
			name="password"
			type="password"
			placeholder=""
			class="input input-bordered w-full"
		/>
	</div>
	<button type="submit" class="btn btn-primary w-full">Login</button>
</form>

<form class="flex justify-between gap-3 pt-5" method="POST" use:enhance={submitSocialLogin}>
	<button formaction="?/login&provider=github" class="btn btn-outline grow">Github</button>
	<button formaction="?/login&provider=discord" class="btn btn-outline grow">Discord</button>
	<button formaction="?/login&provider=google" class="btn btn-outline grow">Google</button>
</form>
