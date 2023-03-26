let latitude ="";
let longitude = "";

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
      console.log(latitude);
      console.log(longitude);
      sessionStorage.setItem("latitude", latitude);
  sessionStorage.setItem("longitude", longitude);
    });
  } else {
    console.log('Geolocation is not supported by this browser.');
  }



  