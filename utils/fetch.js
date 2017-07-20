import fetch from 'isomorphic-fetch'
import { APIURL } from '../constants/api.js'
 
export const request = (url, params = {}) => {
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