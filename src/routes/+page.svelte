<script lang="ts">
	import CardComponent from '../CardComponent.svelte';
	import { addSnippet, snippetStore } from '../storeSnippet';
	import type { PageData} from './$types';

	let formData: CodeSnippetInput = {
		title: '',
		language: '',
		code: '',
	
	};

	export let data:PageData
	snippetStore.set(data.snippet)
	
	

</script>

<div class="flex justify-center px-4">
	<div class="grid grid-cols-1 gap-4 min-w-full md:min-w-[750px]">
		<h2 class="text-base font-bold py-6">Enter Your Code</h2>
		<div class="card w-full space-y-4 p-4 text-token">
			<label class="lable">
				<span class="text-sm">Title</span>
				<input
					type="text"
					class="input"
					placeholder="Enter your snippet here...."
					bind:value={formData.title}
				/>
			</label>

			<label class="lable">
				<span class="text-sm">Language</span>
				<select class="select" bind:value={formData.language}>
					<option value="" disabled selected>Choose a Language</option>
					<option value="javascript">JavaScript</option>
					<option value="typescript">TypeScript</option>
					<option value="python">Python</option>
					<option value="html">HTML</option>
					<option value="java">Java</option>
					<option value="php">PHP</option>
					<option value="ruby">Ruby</option>
					<option value="go">Go</option>
					<option value="shell">Shell/Bash</option>
					<option value="sql">SQL</option>
				</select>
			</label>

			<label class="lable">
				<span class="text-sm">code</span>
				<textarea cols="4" rows="4" class="textarea" bind:value={formData.code}></textarea>
			</label>

			<button type="button" class="btn btn-sm variant-ringed-success" on:click={()=> addSnippet(formData)}>
				Add Code
			</button>
		</div>

		<div class="card-content">
			<h2 class="text-center text-sm font-thin">Your Code</h2>
		</div>
		{#each $snippetStore as snippet, index }
			
			<CardComponent 
			index={index}
			snippet={snippet}
			
			/>
		{/each}
	</div>
</div>
