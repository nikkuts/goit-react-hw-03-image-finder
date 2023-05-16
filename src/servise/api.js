import axios from "axios";

async function fetchFoto (query, number) {
    const BASE_URL = 'https://pixabay.com/api/';
    const params = new URLSearchParams({
        key: '34609745-6210b6673efcd8b597eeb5954',
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 12,
        page: number,
    });
    return await axios.get(`${BASE_URL}/?${params}`);
};

export default fetchFoto;