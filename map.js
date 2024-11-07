function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 5,
      center: { lat: 20.5937, lng: 78.9629 }, // Center on India
    });
    // Additional map layers or markers for flood data can be added here
  }
  
  window.onload = initMap;
  