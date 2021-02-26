import axios from 'axios';
const KEY = "AIzaSyAjEKHdH5LU33fzLRUQtg4cSd4TTa3L0Oc"

export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params:{
        key:KEY
    }
})