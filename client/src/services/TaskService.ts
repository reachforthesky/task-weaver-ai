import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; 

export const fetchTopLevelTasks = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/tasks/getTopTasks`); 
    return response.data;
  } catch (error) {
    console.error('Error fetching top-level tasks:', error);
    throw error;
  }
};