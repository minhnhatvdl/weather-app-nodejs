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
geocode.geocodeAddress(argv.address, (error, result) => {
    if(error) {
        console.log(error);
    } else {
        const { address, latitude, longitude } = result;
        darksky.getWeather(latitude, longitude, (error, result) => {
            if(error) {
                console.log(error);
            } else {
                console.log(result);
            }
        })
    }
});
