import axios from 'axios';

export const extractAndTranslateText = async (url, language, userId) => {
  try {
    const response = await axios.post('http://localhost:3001/api/textextract/extract-translate-text', {
      url,
      targetLanguage: language,
      userId: userId
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error extracting or translating text');
  }
};


export const saveEditedPage = async (url, language, editedHTML, token) => {
  try {
      await axios.post('http://localhost:3001/api/textextract/saveEditedPage', {
          url,
          language,
          editedHTML
      }, {
          headers: {
              'Authorization': `Bearer ${token}`
          }
      });
      alert('Edits saved successfully!');
  } catch (error) {
      console.error('Error saving edited page:', error);
      alert('Failed to save edits.');
  }
};
