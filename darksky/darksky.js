const request = require("request");

// // use callback function
// getWeather = (latitude, longitude, callback) => {
//   // set url darksky api
//   const url = `https://api.darksky.net/forecast/2bdde2cdeca1903b8158564a2a22a873/${latitude},${longitude}`;
//   request(url, (error, response, body) => {
//     const dataJSON = JSON.parse(body);
//     if (error) {
//       callback("Unable to connect to darksky api");
//     } else if (dataJSON.code === 400) {
//       callback("Latitude and longitude are not correct");
//     } else {
//       let { summary, icon, temperature } = dataJSON.currently;
//       temperature = Math.round(((+temperature - 32) * 5) / 9);
//       callback(null, {
//         summary,
//         icon,
//         temperature: `${temperature} °C`
//       });
//     }
//   });
// };

// use async await
getWeather = async (latitude, longitude) => {
  // set url darksky api
  const url = `https://api.darksky.net/forecast/2bdde2cdeca1903b8158564a2a22a873/${latitude},${longitude}`;
  return new Promise((resolve, reject) => {
    request(url, (error, response, body) => {
      const dataJSON = JSON.parse(body);
      if (error) {
        reject("Unable to connect to darksky api");
      } else if (dataJSON.code === 400) {
        reject("Latitude and longitude are not correct");
      } else {
        let { summary, icon, temperature } = dataJSON.currently;
        temperature = Math.round(((+temperature - 32) * 5) / 9);
        resolve({
          summary,
          icon,
          temperature: `${temperature} °C`
        });
      }
    });
  });
};
module.exports.getWeather = getWeather;
