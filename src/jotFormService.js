import axios from 'axios';

export default () => {
    return axios.get('https://api.jotform.com/user/forms?apiKey=2b80a9bc6db5e96afa883930b6564b19');
}