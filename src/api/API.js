import axios from "axios";

const ageApiUrl = "https://api.agify.io";
const nationApiUrl = "https://api.nationalize.io";
const genderApiUrl = "https://api.genderize.io";

const allAPI = {
  predictAge: async (name) => {
    return new Promise((resolve, reject) => {
      console.log(name);
      axios
        .get(`${ageApiUrl}/?name=${name}`)
        .then((response) => {
          return resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  predictGender: async (name) => {
    return new Promise((resolve, reject) => {
      axios
        .get(`${genderApiUrl}/?name=${name}`)
        .then((response) => {
          return resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  predictNation: async (name) => {
    return new Promise((resolve, reject) => {
      axios
        .get(`${nationApiUrl}/?name=${name}`)
        .then((response) => {
          return resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};

export default allAPI;
