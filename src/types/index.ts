export type CurrencyWeather = {
	name: string;
	country: string;
	list: [
		{
			dt: number;
			main: {
				feels_like: number;
				humidity: number;
				pressure: number;
				temp: number;
				temp_max: number;
				temp_min: number;
			};
			weather: [
				{
					main: string;
					icon: string;
					description: string;
				}
			];
			wind: {
				speed: number;
				gust: number;
				deg: number;
			};
			clouds: {
				all: number;
			};
			pop: number;
			visibility: number;
		}
	];
	sunrise: number;
	sunset: number;
	city: {
		name: string;
	};
};

export const emptyCurrencyWeather: CurrencyWeather = {
	name: '',
	country: '',
	list: [
		{
			dt: 0,
			main: {
				feels_like: 0,
				humidity: 0,
				pressure: 0,
				temp: 0,
				temp_max: 0,
				temp_min: 0,
			},
			weather: [
				{
					main: '',
					icon: '',
					description: '',
				},
			],
			wind: {
				speed: 0,
				gust: 0,
				deg: 0,
			},
			clouds: {
				all: 0,
			},
			pop: 0,
			visibility: 0,
		},
	],
	sunrise: 0,
	sunset: 0,
	city: {
		name: '',
	},
};

export type WeatherList = {
	dt: number;
	main: {
		feels_like: number;
		humidity: number;
		pressure: number;
		temp: number;
		temp_max: number;
		temp_min: number;
	};
	weather: [
		{
			main: string;
			icon: string;
			description: string;
		}
	];
	wind: {
		speed: number;
		gust: number;
		deg: number;
	};
	clouds: {
		all: number;
	};
	pop: number;
	visibility: number;
};

export type DayForcastType = {
	day: string;
	minTemp: number;
	maxTemp: number;
};
