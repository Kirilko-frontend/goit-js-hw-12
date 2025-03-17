import axios from 'axios';

const API_KEY = '49383034-f250c1a79c2ac8474ecbb0034';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchImages = async query => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
      },
    });
    return response.data.hits;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
};
