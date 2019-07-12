import axios from 'axios';

const KEY = 'AIzaSyBpcZU64ZfKVLJCDs0ZtFZJQul7IVVf3Qo';
export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY
	}
});
