import axios from 'axios';

export default class Todos {
    static all() {
        return axios.get('https://jsonplaceholder.typicode.com/todos').then(resp => resp.data);
    }
}
