const argv = require("yargs")
  .option({
    address: {
      alias: "a",
      describe: "Enter an address",
      demandOption: true,
      string: true
    }
  })
  .help()
  .alias("h", "help").argv;
// import module geocode
const geocode = require("./geocode/geocode");
// import module darksky
const darksky = require("./darksky/darksky");

// // user callback function
// geocode.geocodeAddress(argv.address, (error, result) => {
//     if(error) {
//         console.log(error);
//     } else {
//         const { address, latitude, longitude } = result;
//         darksky.getWeather(latitude, longitude, (error, result) => {
//             if(error) {
//                 console.log(error);
//             } else {
//                 console.log(result);
//             }
//         })
//     }
// });

// // use promise
// geocode
//   .geocodeAddress(argv.address)
//   .then(result => {
//     const { address, latitude, longitude } = result;
//     darksky
//       .getWeather(latitude, longitude)
//       .then(result => console.log(result))
//       .catch(error => console.log(error));
//   })
//   .catch(error => console.log(error));

// use asyn await
getWeatherApp = async () => {
  try {
    const result = await geocode.geocodeAddress(argv.address);
    const { address, latitude, longitude } = result;
    const weather = await darksky.getWeather(latitude, longitude);
    console.log(weather);
  } catch (error) {
    console.log(error);
  }
};

getWeatherApp();
