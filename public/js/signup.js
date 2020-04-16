/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

export const signup = async (name, email, password, passwordConfirm) => {
  try {
    console.log(`${name}, ${email}, ${password}, &{passwordConfirm}`);
    const res = await axios({
      method: 'POST',
      url: '/api/v1/users/signup',
      data: {
        name,
        email,
        password,
        passwordConfirm
      }
    });
    console.log('signup res', res);
    if (res.data.status === 'success') {
      // const path = window.location.href.split('/signup')[0];
      showAlert('success', 'SignUp Successfull!');
      console.log('Successful');
      setTimeout(() => {
        location.assign('/login');
      }, 1500);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
