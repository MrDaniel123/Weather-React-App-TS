import { CurrencyWeather } from '../types';

export const getWeatherForDays = (weatherData: CurrencyWeather) => {
	const daysName = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

	const dayIndex: number[] = [];
	let weatherDataForDays: any = []; //THis is weatcher for days One element is one day
	let counter = 0;

	const daysMonthNumber: any = weatherData.list.map((weatherStats: any) => {
		let date = new Date(weatherStats.dt * 1000);
		return date.getUTCDate();
	});

	daysMonthNumber.forEach((day: any, pos: any) => {
		if (daysMonthNumber.indexOf(day) === pos) {
			dayIndex.push(pos);
		}
	});

	dayIndex.forEach(index => {
		if (index !== 0) {
			let weatherDataForDay = weatherData.list.slice(counter, index);
			counter = index;

			weatherDataForDays.push(weatherDataForDay);
		}
	});

	///____________________________

	let weatherForDay = weatherDataForDays.map((oneDayWeather: any) => {
		let oneDayMinTemperature = oneDayWeather.map((oneHourWeather: any) => {
			let minTemp = oneHourWeather.main.temp_min;
			return minTemp;
		});

		let oneDayMaxTemperature = oneDayWeather.map((oneHourWeather: any) => {
			let maxTemp = oneHourWeather.main.temp_max;
			return maxTemp;
		});

		let dayName = oneDayWeather.map((oneHourWeather: any) => {
			let time = oneHourWeather.dt;
			let date = new Date(time * 1000);
			let dayNumber = date.getDay();
			// console.log(dayNumber);

			return daysName[dayNumber];
		});

		let weatherOneDayObj = {
			day: dayName[0],
			minTemp: Math.min(...oneDayMinTemperature),
			maxTemp: Math.max(...oneDayMaxTemperature),
		};

		return weatherOneDayObj;
	});

	return weatherForDay;
};
