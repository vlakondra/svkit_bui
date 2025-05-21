<script lang="ts">
	import { Button,Accordion } from 'bits-ui';
	import LockKeyOpen from 'phosphor-svelte/lib/CheckFat';
	import { twMerge } from 'tailwind-merge';
	import { Root } from '../src/ui/button';

	let btn = $state<HTMLButtonElement>();
	let ttt = $state<string>('zzz');

	$effect(() => {
		console.log(btn);
		console.log('effect', btn?.dataset?.buttonRoot);
	});
	const classes = [
		['w-30', 'inline-flex', 'bg-amber-500'],
		['w-32 bg-blue-500'],
		['w-40 bg-red-500']
	];
	let idx = $state(0);

	let cls1 = twMerge('px-6 py-1 bg-green hover:bg-blue-600', 'p-3 bg-[#B91C1C]');
	let cls2 = twMerge('px-2 py-6 bg-blue hover:bg-blue-300', 'p-3 bg-blue-500');
	const clss = { first: cls1, second: cls2 };
</script>

<!-- class="w-36 rounded-input bg-blue-500 text-background shadow-mini hover:bg-dark/95 inline-flex
h-12 items-center justify-around px-[21px] text-[15px]
font-semibold active:scale-[0.98] active:transition-all" -->

<!-- class={classes[idx]} -->

<form method="post">
	<input bind:value={idx} type="number" max="3" min="0" />
	<input bind:value={ttt} />

		<Button.Root
			class={clss.first}
			onclick={() => {
				console.log(btn);
				btn?.classList.add('bg-amber-500');
				btn?.classList.remove('bg-blue-500');
			}}
			bind:ref={btn}
			disabled={false}
			id={(() => btn?.dataset.buttonRoot)()}
			type="button"
			data-button-root={ttt}
			data-button-test="777"
		>
			{@render blabel(ttt)}
		</Button.Root>

</form>

{#snippet blabel(val:string)}
	{#if val == '111'}
		<span>Btn</span>
        <LockKeyOpen size=28>
            <animate
            attributeName="opacity"
            values="0;1;0"
            dur="1s"
            repeatCount="indefinite"
          >
        </LockKeyOpen>
	{:else}
		Save
	{/if}
{/snippet}

<style>
	.txt {
		color: blue;
	}

	:global([data-button-root='111']) {
		background: rgb(39, 39, 183);
	}
</style>
