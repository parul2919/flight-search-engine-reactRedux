let instance = null;
const apiUrl = '/api/flights';

export default class AppService {
  getFlights() {
    return fetch(apiUrl)
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  constructor() {
    if (!instance) {
      instance = this;
    }

    return instance;
  }
}