<script lang="ts">
	import { CodeBlock } from '@skeletonlabs/skeleton';
	import { deleteSnippet, toggleFavorite } from './storeSnippet';

	export let snippet: CodeSnippet = {
		title: '',
		code: '',
		language: '',
		favorite
: false
	};
	export let index: number;
</script>

<div class="card">
	<header class="card-header">
		{snippet.title}
		<div class="flex float-right gap-2">
			<div class="float-right">
				<button
					type="button"
					class="btn btn-sm variant-soft-surface"
					on:click={() => toggleFavorite
(index)}
				>
					{snippet.favorite
 ? 'unfavorite' : 'favorite'}
				</button>
			</div>
			<div class="float-right">
				<button
					type="button"
					class="btn btn-sm variant-filled-error"
					on:click={() => deleteSnippet(index)}
				>
					🗑️
				</button>
			</div>
		</div>
	</header>

	<section class="p-4">
		<CodeBlock language={snippet.language} code={snippet.code} />
	</section>
</div>
