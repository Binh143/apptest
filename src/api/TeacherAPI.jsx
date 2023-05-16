const { default: axiosClient } = require("./axiosClient");

const auth = `Authorization: Bearer ${localStorage.getItem("accessToken")}`;
const TeacherAPI = {
  getPages(params) {
    const url = `v1/teachers/page`;
    return axiosClient
      .get(url, { params })
      .then(function (responses) {
        return responses;
      })
      .catch(function (error) {
        console.log(error);
        return error.response;
      });
  },
  async putToggle(id) {
    const url = `v1/teachers/toggle-status?ids=${id}`;
    return axiosClient
      .put(url)
      .then(function (responses) {
        return responses;
      })
      .catch(function (error) {
        console.log(error);
        return error.response;
      });
  },
};

export default TeacherAPI;
