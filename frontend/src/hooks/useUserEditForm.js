import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserName } from '../services/userService';
import { updateUserInfo } from '../redux/userSlice';

const useUserEditForm = (initialData, onCancel) => {

  const dispatch = useDispatch();
  const token = useSelector(state => state.user.token);
  const [formData, setFormData] = useState({
    userName: initialData.userName,
    firstName: initialData.firstName,
    lastName: initialData.lastName,
  });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setFormData({ ...formData, userName: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!token) {
      setError('Unauthorized');
      return;
    }

    try {
      await updateUserName(token, formData.userName);
      dispatch(updateUserInfo({ ...initialData, userName: formData.userName }));
      onCancel();
    } catch (err) {
      setError(err.message || 'Erreur lors de la mise à jour');
    }
  };

  return { formData, error, handleInputChange, handleSubmit };
};

export default useUserEditForm;
