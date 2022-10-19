<script>
	import { getWeatherFrom } from '../services/weather';
	import WeatherFooter from '../components/weather-footer.svelte';

	export let value;

	let weatherPromise = getWeatherFrom(value);
</script>

{#await weatherPromise}
	<span>loading...</span>
{:then weather}
	{#if weather.isDay !== 0}
		<section>
			<article>
				<h2>
					{weather.locationName}
				</h2>
				<p>
					{weather.country}
				</p>
				<div>
					<h3>{weather.temperature}°</h3>
					<img src={weather.conditionIcon} alt="WeatherIcon" />
				</div>
			</article>
			<aside>
				<h4>{weather.conditionText}</h4>
			</aside>
			<WeatherFooter
				humidity={weather.humidity}
				windSpeed={weather.windSpeed}
				feelsLike={weather.feelsLike}
                isDay={weather.isDay}
			/>
		</section>
	{:else}
		<section style="background: #333;">
			<article>
				<h2 style="color: #fff">
					{weather.locationName}
				</h2>
				<p style="color: #808285">
					{weather.country}
				</p>
				<div>
					<h3 style="color: #fff">{weather.temperature}°</h3>
					<img src={weather.conditionIcon} alt="WeatherIcon" />
				</div>
			</article>
			<aside>
				<h4 style="color: #808285">{weather.conditionText}</h4>
			</aside>
			<WeatherFooter
				humidity={weather.humidity}
				windSpeed={weather.windSpeed}
				feelsLike={weather.feelsLike}
                isDay={weather.isDay}
			/>
		</section>
	{/if}
{/await}

<style>
    span{
        margin: 64px 32px;
        font-size: 24px;
		font-weight: 400;
		color: #3980c2;
		text-transform: uppercase;
    }

	section {
		margin: 12px 32px;
		padding: 20px;
		border: 1px solid #808285;
		border-radius: 22px;
	}

	article {
		width: 80%;
		padding-bottom: 10px;
	}

	aside {
		width: 10%;
		height: 50%;
		position: absolute;
		top: 15%;
		right: 45px;
	}

	div {
		display: flex;
	}

	img {
		margin: 0.5rem;
		width: 30%;
		height: 30%;
	}

	h2 {
		font-size: 30px;
		font-weight: 400;
		color: #808285;
		text-transform: uppercase;
	}

	h3 {
		font-weight: 500;
		font-size: 64px;
		color: #333;
		text-transform: uppercase;
	}

	h4 {
		color: #808285;
		margin: 10px;
		font-weight: 400;
		transform: rotate(-180deg);
		writing-mode: vertical-lr;
	}
</style>
