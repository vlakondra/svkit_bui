<script lang='ts'>
    import type { HTMLAnchorAttributes, HTMLButtonAttributes } from "svelte/elements";
let {
		href,
		type,
		children,
		disabled = false,
		// ref = $bindable(),
		// ...restProps
	}= $props()
</script>

<svelte:element
this={href ? "a" : "button"}>
    {@render children?.()}
</svelte:element>
