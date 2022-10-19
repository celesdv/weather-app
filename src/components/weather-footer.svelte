<script>
	export let humidity, windSpeed, feelsLike, isDay;
</script>

{#if isDay !== 0}
	<footer>
		<div>
			<span>{humidity}%</span>
			<strong>Humidity</strong>
		</div>
		<div>
			<span>{windSpeed} km/h</span>
			<strong>Windspeed</strong>
		</div>
		<div>
			<span>{feelsLike}°</span>
			<strong>Feels Like</strong>
		</div>
	</footer>
{:else}
	<footer style="background: #f3f3f3; border: 3px solid #3980c2">
		<div>
			<span>{humidity}%</span>
			<strong>Humidity</strong>
		</div>
		<div>
			<span style="color: #808285">{windSpeed} km/h</span>
			<strong>Windspeed</strong>
		</div>
		<div>
			<span style="color: #808285">{feelsLike}°</span>
			<strong>Feels Like</strong>
		</div>
	</footer>
{/if}

<style>
	footer {
		border: 3px solid #ffb100;
		padding: 10px;
		width: 100%;
		margin: 0 auto;
		border-radius: 10px;
		display: flex;
		text-align: center;
		justify-content: space-evenly;
		box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
	}

	span {
		color: #333;
		display: block;
		font-size: 14px;
		font-weight: 600;
	}

	strong {
		color: #808285;
		font-size: 14px;
		font-weight: 500;
	}
</style>
