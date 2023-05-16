const { default: axiosClient } = require("../axiosClient");

const AuthResourceAPI = {
  postSignIn(obj) {
    const url = "auth/login";
    return axiosClient
      .post(url, JSON.stringify(obj))
      .then(function (responses) {
        return responses;
      })
      .catch(function (error) {
        console.log(error);
        return error.response;
      });
  },
};

export default AuthResourceAPI;
