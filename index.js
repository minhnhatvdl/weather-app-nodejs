getData = callback => {
  setTimeout(function() {
    console.log("get data");
    callback();
  }, 2000);
};

showData = () => {
    console.log("show data");
}

getData(showData);