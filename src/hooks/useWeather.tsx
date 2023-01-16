import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { CurrencyWeather, emptyCurrencyWeather } from '../types';

const API_KEY = process.env.REACT_APP_WEATCHER_API_KEY;

const useWeather = (city: string) => {
	const [dataIsLoading, setDataIsLoading] = useState(false);
	const [weatcherData, setWeatcherData] = useState<CurrencyWeather>(emptyCurrencyWeather);
	const [fetchError, setFetchError] = useState(false);
	const [errorMessage, setErrormessage] = useState('');

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
					setFetchError(true);
					setErrormessage(error.response.data.message);
				} else if (error.request) {
					setFetchError(true);
					setErrormessage('No server response');
				} else {
					setFetchError(true);
					setErrormessage('Bad request');
				}
				console.log(error.message);
			});
	}, []);

	return {
		dataIsLoading,
		weatcherData,
	};
};

export default useWeather;
