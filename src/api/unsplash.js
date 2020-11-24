import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID e7VVbbRkxglXbTRKwm34JVxzxzx1GGfTrBeLB-yVOtg'
  }
});