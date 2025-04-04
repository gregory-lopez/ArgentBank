import { useDispatch, useSelector } from 'react-redux';
import { loginUser, logOut } from '../redux/userSlice';
import { login } from '../services/authService';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn, token } = useSelector((state) => state.user);

  const signIn = async (email, password) => {
    try {
      const { token } = await login(email, password);
      localStorage.setItem('token', token);
      dispatch(loginUser({ token }));
      navigate('/profile');
    } catch (err) {
      console.error('Login failed:', err.message);
      throw err;
    }
  };

  const signOut = () => {
    localStorage.removeItem('token');
    dispatch(logOut());
    navigate('/');
  };

  return { isLoggedIn, token, signIn, signOut };
};

export default useAuth;
