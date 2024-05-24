/* eslint-disable*/

import axios from 'axios';
import { showAlert } from './alerts';

// Type is 'password' or 'data'
export const updateUserData = async (data, type) => {
   try {
      const url =
         type === 'password'
            ? 'http://127.0.0.1:3000/api/v2/users/updateMyPassword'
            : 'http://127.0.0.1:3000/api/v2/users/updateMe';

      const res = await axios({
         method: 'PATCH',
         url,
         data,
      });

      if (res.data.status === 'success') {
         showAlert('success', `${type.toUpperCase()} updated successfuly!`);
         window.setTimeout(() => {
            location.assign('/');
         }, 1500);
      }
   } catch (err) {
      showAlert('error', err.response.data.message);
   }
};
