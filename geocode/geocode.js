const request = require("request");
const KEY_GOOGLE_API = "";

// // use callback function
// geocodeAddress = (address, callback) => {
//   // encode address
//   const addressInput = encodeURIComponent(address);
//   // set url google map api
//   const url = `https://maps.googleapis.com/maps/api/geocode/json?key=${KEY_GOOGLE_API}&address=${addressInput}`;
//   request(url, (error, response, body) => {
//     const dataJSON = JSON.parse(body);
//     if (error) {
//       callback("Unable to connect to google map api");
//     } else if (dataJSON.status === "ZERO_RESULTS") {
//       callback("Address not found");
//     } else if (dataJSON.status === "OK") {
//       callback(null, {
//         address: dataJSON.results[0].formatted_address,
//         latitude: dataJSON.results[0].geometry.location.lat,
//         longitude: dataJSON.results[0].geometry.location.lng
//       });
//     }
//   });
// };

// use promise
geocodeAddress = address => {
  // encode address
  const addressInput = encodeURIComponent(address);
  // set url google map api
  const url = `https://maps.googleapis.com/maps/api/geocode/json?key=${KEY_GOOGLE_API}&address=${addressInput}`;
  return new Promise((resolve, reject) => {
    request(url, (error, response, body) => {
      const dataJSON = JSON.parse(body);
      if (error) {
        reject("Unable to connect to google map api");
      } else if (dataJSON.status === "ZERO_RESULTS") {
        reject("Address not found");
      } else if (dataJSON.status === "OK") {
        resolve({
          address: dataJSON.results[0].formatted_address,
          latitude: dataJSON.results[0].geometry.location.lat,
          longitude: dataJSON.results[0].geometry.location.lng
        });
      }
    });
  });
};
module.exports.geocodeAddress = geocodeAddress;
