import axios from 'axios';

//  creating an instance of the axios client that is customized to some extent to what we want
export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID 7lJ4G8dLLCzsiBPzUhHKAOSYYL12REsQkWv-EhicXWE'
    }
});