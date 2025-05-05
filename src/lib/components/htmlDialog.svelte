<script lang="ts">
	import { onClickOutside } from 'runed';
	// let dial = $state<HTMLDialogElement>()!;

	let { dial = $bindable<HTMLDialogElement>(),children } = $props();

	onClickOutside(
		() => dial,
		() => {
			if (dial.open) {
				dial.close();
			}
			console.log('click вне диалога', dial.open);
		}
	);

	function cc(){
		console.log('onclose')
	}
</script>

<dialog onclose={cc}  class="dial" bind:this={dial}>
	{@render children?.()}
	<div>
		<button onclick={() => dial?.close()}>Close</button>
		<p>This modal dialog has a groovy backdrop!</p>
	</div>
</dialog>

<style>
	.dial {
		border: 1px solid gray;
		/* margin: auto ;
		padding: 20px ;  и то и др. - ОК*/
		padding: 10px;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	dialog::backdrop {
		background-image: linear-gradient(45deg, magenta, rebeccapurple, dodgerblue, green);
		opacity: 0.75;
	}

	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
			transform: scaleY(0);
		}
		to {
			opacity: 0.25;
			transform: scaleY(1);
		}
	}

</style>
