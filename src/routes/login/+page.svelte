<script lang="ts">
  console.log("Ran: /login/+page.svelte")
</script>
<div class="text-xl md:text-3xl lg:text-5xl">Login</div>

<form class="w-3/4 space-y-4">
  <div class="form-control">
    <label class="label">
      <span class="label-text">Email</span>
    </label>
    <input type="text" placeholder="" class="input input-bordered w-full" />
  </div>
  <div class="form-control">
    <label class="label">
      <span class="label-text">Password</span>
    </label>
    <input type="password" placeholder="" class="input input-bordered w-full" />
  </div>
  <button class="btn btn-primary w-full">Login</button>
</form>