<script lang="ts">
  console.log("Ran: +layout.svelte")
</script>

<form>
  <input type="text" name="id" value="xx" />
  <button class="btn btn-primary">Button</button>
  <button class="btn btn-secondary">Button</button>
  <button class="btn btn-accent">Button</button>
</form>

<div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text">What is your name?</span>
    <span class="label-text-alt">Alt label</span>
  </label>
  <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
  <label class="label">
    <span class="label-text-alt">Alt label</span>
    <span class="label-text-alt">Alt label</span>
  </label>
</div>