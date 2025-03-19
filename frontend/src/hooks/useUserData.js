import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData } from '../services/userService';
import { updateUserInfo } from '../redux/userSlice';

const useUserData = () => {
  const dispatch = useDispatch();
  const { token, user } = useSelector((state) => state.user);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!token) {
      setError('You are not logged in.');
      return;
    }

    const loadUserData = async () => {
      try {
        const userData = await fetchUserData(token);
        dispatch(updateUserInfo(userData));
      } catch (err) {
        console.error('Failed to fetch user info:', err);
        setError('Failed to fetch user info.');
      }
    };

    loadUserData();
  }, [token, dispatch]);

  return { user, error };
};

export default useUserData;
