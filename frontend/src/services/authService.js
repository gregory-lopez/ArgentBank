import axios from 'axios';

const API_URL = 'http://localhost:3001/api/v1/user';

/**
 * Envoie une requête pour se connecter et récupérer le token.
 * @param {string} email 
 * @param {string} password 
 * @returns {Promise<object>} Les données de l'utilisateur et le token.
 */
export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data.body;
  } catch (error) {
    throw new Error('Invalid email or password');
  }
};