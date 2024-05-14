import axios from 'axios';

export const getSurat = async () => {
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/surat/');
        return response.data;
    } catch (error) {
        // Handle error
        console.error('Error fetching data:', error);
        throw error; // Propagate the error to the caller
    }
}
