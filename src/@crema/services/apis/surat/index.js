import axios from 'axios';

export const getSurat = async () => {
    try {
        const response = await axios.get('https://new.coofis.com/api/surat/');
        return response.data;
    } catch (error) {
        // Handle error
        console.error('Error fetching data:', error);
        throw error; // Propagate the error to the caller
    }
}
