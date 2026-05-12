<script lang="ts">
	import {resolve} from '$app/paths';
</script>

<main>
	<section class="box">
		<header class="box pt_xl">
			<h1 class="mt_xl2">mistajabba</h1>
		</header>
		<div class="column gap_lg">
			<a href={resolve('/about')} class="panel px_xl py_md font_size_xl2 text-align:center"
				>about</a
			>
		</div>
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
