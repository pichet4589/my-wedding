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

// function copyToClipboard() {
//   const textToCopy = document.getElementById('textToCopy').innerText;
  
//   // Copy the text inside the <p> tag to the clipboard
//   navigator.clipboard.writeText(textToCopy).then(() => {
//     alert("Text copied to clipboard!");
//   }).catch(err => {
//     console.error("Failed to copy: ", err);
//   });
// }

function copyToClipboard(type) {
  console.log('type :>> ', type);
  let textToCopy = ''
  if(type == "ball"){
     textToCopy = document.getElementById('tel_ball').innerText;
  }else{
     textToCopy = document.getElementById('tel_pam').innerText;
  }
  console.log('textToCopy :>> ', textToCopy);
  navigator.clipboard.writeText(textToCopy).then(() => {
    showNotification();
  }).catch(err => {
    console.error("Failed to copy: ", err);
  });
}

function showNotification() {
  const notification = document.getElementById('notification');
  notification.classList.remove('hidden');
  notification.classList.add('block');

  // Remove the notification after 3 seconds
  setTimeout(() => {
    notification.classList.remove('block');
    notification.classList.add('hidden');
  }, 2000);
}