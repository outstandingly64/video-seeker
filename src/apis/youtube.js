import axios from 'axios';

const KEY = 'AIzaSyCiRY3gBcmJIUUVug9jP_e-zN8410kxeWI';
//We are not pre-configuring therefore we
//do not add q (for 'query') in this create method.
//The idea of re-using things. We will pass in the string or
//query when we actually make use of this instance.
export default axios.create({
baseURL: 'https://www.googleapis.com/youtube/v3',
params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
}
});