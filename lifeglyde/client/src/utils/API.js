import axios from 'axios';
export default {
  // Gets a single user by id
  getUser: (id) => {
    return axios.get(`/api/user/${id}`);
  },
  // sign up a user to our service
  signUpUser: (username, email, password) => {
    return axios.post('api/signup', {username: username, email: email, password: password});
  },
 // updateUser: (firstName, lastName, phoneNum, profilePic, glider, ushpaRating, medicalInfo, emergencyContactName, emergencyContactRelation, emergencyContactPhone) => {
   // return axios.post('api/signup', {firstName: firstName, lastName: lastName, phoneNum: phoneNum, profilePic: profilePic, glider: glider, ushpaRating: ushpaRating, medicalInfo: medicalInfo, emergencyContactName: emergencyContactName, emergencyContactRelation: emergencyContactRelation, emergencyContactPhone: emergencyContactPhone});
  //}
};
