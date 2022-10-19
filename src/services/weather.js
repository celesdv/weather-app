const FETCH_OPTIONS = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6f9b0da3a5msh2be07e7f7576551p1f050ajsn3c0d160f13d6',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

export async function getWeatherFrom(query) {
	const response = await fetch(
		`https://weatherapi-com.p.rapidapi.com/current.json?q=${query}`,
		FETCH_OPTIONS
	);
	const data = await response.json();
	const { location, current } = data;
	const { country, localtime, name } = location;
	const { condition, humidity, feelslike_c, wind_kph, wind_dir, is_day, temp_c } = current;
	const { icon, text } = condition;

	console.log(is_day)

	return {
		conditionIcon: icon,
		conditionText: text,
		country,
		localtime,
		locationName: name,
		humidity,
		isDay: is_day,
		feelsLike: feelslike_c,
		temperature: temp_c,
		windSpeed: wind_kph,
		windDir: wind_dir
	};
}
