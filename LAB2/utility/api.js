import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

const API_URL = 'https://dummyjson.com/users';

const mapContact = (user) => {
  const { firstName, lastName, image, phone, email } = user;

  return {
    id: uuidv4(),
    name: `${firstName} ${lastName}`,
    avatar: image,
    phone: phone,
    cell: phone,  // dummyjson không có 'cell' riêng nên dùng chung 'phone'
    email: email,
    favorite: Math.random() >= 0.5,
  };
};

const fetchContacts = async () => {
  try {
    const response = await fetch(`${API_URL}?limit=100`);
    if (!response.ok) {
      throw new Error('Failed to fetch contacts');
    }
    const data = await response.json();
    return data.users.map(mapContact);
  } catch (error) {
    console.error('Error fetching contacts:', error);
    return [];
  }
};

const fetchUserContact = async () => {
  try {
    const response = await fetch(`${API_URL}/1`); // lấy user id=1
    if (!response.ok) {
      throw new Error('Failed to fetch user contact');
    }
    const user = await response.json();
    return mapContact(user);
  } catch (error) {
    console.error('Error fetching user contact:', error);
    return null;
  }
};

const fetchRandomContact = async () => {
  try {
    const randomId = Math.floor(Math.random() * 100) + 1; // id từ 1-100
    const response = await fetch(`${API_URL}/${randomId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch random contact');
    }
    const user = await response.json();
    return mapContact(user);
  } catch (error) {
    console.error('Error fetching random contact:', error);
    return null;
  }
};

export { fetchContacts, fetchUserContact, fetchRandomContact };
