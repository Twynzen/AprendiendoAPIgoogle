function iniciarMap() {
//son las coordenadas que tendrá la ubicación, debemos buscarlas e googleapis
  var coord = {lat:4.6923204 , lng:-74.1765966,13.41};
  var map = new google.maps.Map(document.getElementsById('map'),{
    zoom: 10,
    center: coord

  });

}
