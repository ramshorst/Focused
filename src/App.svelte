<script lang="ts">
	import { onMount } from "svelte";
	import { data } from "./store";
	import Tailwindcss from "./Tailwindcss.svelte";

	let todos: any;
	data.subscribe((value) => {
		todos = value;
	});

	let input;
	let active: object = {};

	export function handleKeypress(event) {
		if (event.key === "Enter") {
			data.update((t) => [...t, { name: input }]);
			input = "";
		}
		if (event.key === "ArrowUp") {
			active = todos[todos.length - 1];
		}
		if (event.key === "Backspace" && input === "") {
			active = todos[todos.length - 1] = ;
		}
	}

	onMount(async () => {
		document.getElementById("input").focus();
	});
</script>

<svelte:window on:keydown={handleKeypress} />

<Tailwindcss />

<ul>
	{#each todos as todo}
		<li
			class="focus:bg-gray-200 select-none px-2 py-0.5"
			class:bg-gray-500={active?.name === todo.name}
		>
			{todo.name}
		</li>
	{/each}
</ul>

<input
	id="input"
	bind:value={input}
	type="text"
	class="input focus:outline-none bg-gray-100 rounded pl-2 py-0.5"
/>
asdas
<main class="p-4 mx-auto text-center max-w-xl" />
