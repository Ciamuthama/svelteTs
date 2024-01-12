<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar, storeHighlightJs } from '@skeletonlabs/skeleton';
	import hljs from "highlight.js"
	import "highlight.js/styles/github-dark.css"
	storeHighlightJs.set(hljs)
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<h2 class="text-left">Title</h2>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
