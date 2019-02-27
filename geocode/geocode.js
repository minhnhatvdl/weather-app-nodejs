const request = require("request");

geocodeAddress = (address, callback) => {
  // encode address
  const addressInput = encodeURIComponent(address);
  // set url google map api
  const url = `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDlYWwXphwK_-DSFlFDsQR5fJn9mjIsmTI&address=${addressInput}`;
  request(url, (error, response, body) => {
    const dataJSON = JSON.parse(body);
    if (error) {
      callback("Unable to connect to google map api");
    } else if (dataJSON.status === "ZERO_RESULTS") {
      callback("Address not found");
    } else if (dataJSON.status === "OK") {
      callback(null, {
          address: dataJSON.results[0].formatted_address,
          latitude: dataJSON.results[0].geometry.location.lat,
          longitude: dataJSON.results[0].geometry.location.lng
      })
    }
  });
};

module.exports.geocodeAddress = geocodeAddress;
