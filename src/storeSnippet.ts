import {  get, writable } from "svelte/store";

export const snippetStore=writable<CodeSnippet[]>([]) 
export function addSnippet(input: CodeSnippetInput) {
    let snippets = get(snippetStore);
    snippetStore.update(()=>{
        return [ {...input, favorite
:false}, ...snippets]
    })
  
    }

export function deleteSnippet(i: number) {
    let snippets = get(snippetStore)
    snippets.splice(i, 1)
    snippetStore.update(()=>{
        return snippets
    })
    
}

export function toggleFavorite
(i:number) {
    let snippet = get(snippetStore)[i];
    snippetStore.update((snip)=>{
        snip[i]= {...snippet, favorite: !snippet.favorite
};
            return snip;
            });
    
}

