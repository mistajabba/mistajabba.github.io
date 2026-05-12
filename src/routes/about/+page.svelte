<script lang="ts">
	import {resolve} from '$app/paths';
</script>

<main class="width_atmost_md pb_xl9">
	<section class="box">
		<header class="box pt_xl">
			<h1 class="mt_xl2">about</h1>
		</header>
	</section>
	<section class="box">
		<a href={resolve('/')} class="panel px_xl py_md">← home</a>
	</section>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 auto;
	}
</style>
