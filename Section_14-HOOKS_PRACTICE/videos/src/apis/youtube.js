import axios from 'axios';

export default axios.create({
    // reason why we dont do a slash at the end or include search is because we will keep it dynamic
    baseURL: "https://www.googleapis.com/youtube/v3",
});