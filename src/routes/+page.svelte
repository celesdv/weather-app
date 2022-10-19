<script>
	import { compute_slots } from 'svelte/internal';
	import WeatherDescription from '../components/weather-description.svelte';
	import WeatherHeader from '../components/weather-header.svelte';
	let value = '';
	let querys = [];
	let query = '';

	function add() {
		querys.push(value);
		value = '';
		query = querys[querys.length - 1];
	}
	function reset() {
		query = '';
		console.log('hola');
	}
</script>

<div>
	<WeatherHeader />

	{#if query === ''}
		<section>
			<h3>Add city</h3>
			<input placeholder="City name" bind:value />
			<button on:click={add}>add</button>
		</section>
	{:else}		
		<WeatherDescription value={query} />
        <section>
			<button on:click={reset}>Change city</button>
		</section>
	{/if}
</div>

<style>
	button {
		width: auto;
		padding: 0.5rem;
		border-radius: 5px;
		background: #ffb100;
		border: 1px solid #ffb100;
		color: #f3f3f3;
		font-weight: 700;

	}

	button:hover {
		box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
	}

	input {
        margin: auto;
		width: 85%;
		padding: 0.5rem;
		border-radius: 5px;
		border: 1px solid #ffb100;
	}

	section {
		padding: 0 32px 20px 32px;
	}

	h3 {
		margin: 1rem;
		font-weight: 500;
		color: #808285;
		text-transform: uppercase;
		text-align: center;
	}

	div {
		background: #f3f3f3;
		aspect-ratio: 9 / 16;
		width: 400px;
		max-width: 100%;
		border: 1px solid #eee;
		display: block;
		box-shadow: 0 0 100px rgba(0, 0, 0, 0.2);
		border-radius: 8px;
		position: relative;
	}
</style>
