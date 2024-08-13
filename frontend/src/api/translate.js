import axios from 'axios';

export const extractAndTranslateText = async (url, language) => {
  try {
    const response = await axios.post('http://localhost:3001/api/textextract/extract-translate-text', {
      url,
      targetLanguage: language,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error extracting or translating text');
  }
};
