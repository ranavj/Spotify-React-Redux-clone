// import axios from 'axios';
// import qs from 'qs';
// let CLIENT_ID = 'db40fb5848c54fafa2ec00834f89706a';
// let CLIENT_SECRET = 'ffa7c5b9b79d4d23bf9e0e1727aec69f';

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