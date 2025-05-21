<script lang="ts">
	import '../app.css';
	import HtmlDialog from '$lib/components/HtmlDialog.svelte';

	let { children } = $props();
	let htmldial = $state<HTMLDialogElement>();
</script>

<p>
	<button onclick={() => htmldial?.showModal()}> Открыть </button>
</p>
<HtmlDialog bind:dial={htmldial}>
	<p>
		<button onclick={() => htmldial?.close()}> Закрыть </button>
	</p>
	<hr />
	<p>Child-контент</p>
</HtmlDialog>

{@render children()}
