import axios from 'axios';

/**
 * Met à jour le username de l'utilisateur
 * @param {string} token 
 * @param {string} userName 
 * @returns {Promise<object>} Réponse de l'API
 */
export const updateUserName = async (token, userName) => {
  try {
    const response = await axios.put(
      'http://localhost:3001/api/v1/user/profile',
      { userName },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error updating username:', error);
    throw new Error(error.response?.data?.message || 'Failed to update username');
  }
};

export const fetchUserData = async (token) => {
  try {
    const response = await axios.post(
      'http://localhost:3001/api/v1/user/profile',
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    );

    return response.data.body;
  } catch (error) {
    throw new Error('Failed to fetch user data');
  }
};