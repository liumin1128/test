import 'isomorphic-fetch'
import es6promise from 'es6-promise'

import { APIURL } from '../constants/api.js'

es6promise.polyfill()

export default (url, params = {}) => {
    console.log('访问：'+APIURL + url)
    const options = {
        headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({ ...params }),
    };
    return fetch(APIURL + url, options)
    .then(function(response) {
		if (response.status >= 400) {
			throw new Error("Bad response from server");
		}
		return response.json();
	})
    .catch(err => ({ err }));
}
