function initMap() {
    // กำหนดตำแหน่งของแผนที่ (ที่นี้คือ Sydney)
    const sydney = { lat: 15.6512941, lng: 102.3355134 };
    // สร้างแผนที่ใหม่ในแท็ก 'map'
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: sydney,
    });
    // เพิ่มเครื่องหมายบนแผนที่
    const marker = new google.maps.Marker({
      position: sydney,
      map: map,
    });
  }