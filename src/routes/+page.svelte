<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	import LockKeyOpen from 'phosphor-svelte/lib/Trash';
</script>

<div>
<form method="POST">
		<label>
			add a todo:
			<div style="border:1px solid silver;width:200px">
				<input style="border:none;width:180px"
				name="description"
				autocomplete="off"
			/><LockKeyOpen size={16}/></div>
		</label>
	</form>

	<ul class="todos">
		{#each data.todos as todo (todo.id)}
			<li>
				{todo.description}
			</li>
		{/each}
	</ul>
</div>

<style>
    input:focus-within { 
		outline:solid 0px transparent; }

	.centered {
		max-width: 20em;
		margin: 0 auto;
	}

	label {
		width: 100%;
	}

	input {
		flex: 1;
	}

	span {
		flex: 1;
	}

	button {
		border: none;
		background: url(./remove.svg) no-repeat 50% 50%;
		background-size: 1rem 1rem;
		cursor: pointer;
		height: 100%;
		aspect-ratio: 1;
		opacity: 0.5;
		transition: opacity 0.2s;
	}

	button:hover {
		opacity: 1;
	}

	.saving {
		opacity: 0.5;
	}
</style>
