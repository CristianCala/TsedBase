import axios from 'axios'

const clientAxios = axios.create({
	baseURL: "http://localhost:4000",
	headers: {
	    'Accept': 'application/json, text/plain, */*',
	    'Content-Type': 'application/json'
	}
})

export default clientAxios