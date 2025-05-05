<script lang="ts">
	import '../app.css';
	// import HtmlDialog from '$lib/components/HtmlDialog.svelte';

	let { children } = $props();
	
</script>



{@render children()}

<!-- <HtmlDialog bind:dial={htmldial}>
	<p>
		<button onclick={() => htmldial?.close()}> Закрыть </button>
	</p>
	<hr />
	<p>Child-контент </p>
</HtmlDialog>  -->
