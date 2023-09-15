// import axios from 'axios';
// import qs from 'qs';
// let CLIENT_ID = '';
// let CLIENT_SECRET = '';

// export const getAuth = async () => {
//   const clientId = CLIENT_ID;
//   const clientSecret = CLIENT_SECRET;
  
//   const headers = {
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     auth: {
//       username: clientId,
//       password: clientSecret,
//     },
//   };
//   const data = {
//     grant_type: 'client_credentials',
//   };

//   try {
//     const response = await axios.post(
//       'https://accounts.spotify.com/api/token',
//       qs.stringify(data),
//       headers
//     );
//     console.log(response.data.access_token);
//     return response.data.access_token;
//   } catch (error) {
//     console.log(error);
//   }
// };
