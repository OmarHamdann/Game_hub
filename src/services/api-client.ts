import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '4b33922e01334b75afdeea4faf94142c',
  },
});
