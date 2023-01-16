import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { CurrencyWeather, emptyCurrencyWeather } from '../types';

const API_KEY = process.env.REACT_APP_WEATCHER_API_KEY;

const useWeather = (city: string) => {
	const [dataIsLoading, setDataIsLoading] = useState(false);
	const [weatcherData, setWeatcherData] = useState<CurrencyWeather>(emptyCurrencyWeather);
	const [fetchError, setFetchError] = useState('');

	const weatherApiLink = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`;

	useEffect(() => {
		axios({
			method: 'get',
			url: weatherApiLink,
			timeout: 4000,
		})
			.then(response => {
				setWeatcherData(response.data);
				setDataIsLoading(true);
			})

			.catch(error => {
				if (error.response) {
					console.log(error.response.data.message);
				} else if (error.request) {
					// The request was made but no response was received
					// `error.request` is an instance of XMLHttpRequest in the browser and an instance of
					// http.ClientRequest in node.js
					console.log(error.request);
				} else {
					// Something happened in setting up the request that triggered an Error
					console.log('Error', error.message);
				}
				console.log(error.config);
			});
	}, []);

	return {
		dataIsLoading,
		weatcherData,
	};
};

export default useWeather;
