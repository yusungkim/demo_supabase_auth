<script lang="ts">
	console.log('[Client]: /login/+page.svelte');
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
		<input id="password" name="password" type="password" placeholder="" class="input input-bordered w-full" />
	</div>
	<button type="submit" class="btn btn-primary w-full">Login</button>
</form>
