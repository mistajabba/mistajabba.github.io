<script lang="ts">
	import '$routes/fuz.css';
	import '$routes/style.css';

	import ThemeRoot from '@fuzdev/fuz_ui/ThemeRoot.svelte';
	import type {Snippet} from 'svelte';

	const {
		children,
	}: {
		children: Snippet;
	} = $props();
</script>

<svelte:head>
	<title>mistajabba</title>
</svelte:head>

<ThemeRoot>
	{@render children()}
</ThemeRoot>
