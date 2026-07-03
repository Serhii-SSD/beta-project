import axios from 'axios';

const BASE_URL = 'https://events-store.b.goit.study';

export async function getEventById(id) {
  try {
    const { data } = await axios.get(`${BASE_URL}/api/events/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
}
