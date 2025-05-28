// 🕒 Mama zamanını ayarla
// Set feeding time
function setFeedingTime() {
  const feedTime = document.getElementById("feed-time").value;

  // Girilen zaman mevcut zamana eşitse uyarı ver
  // If current time matches, show alert
  alert("Mama zamanı ayarlandı: " + feedTime);
  // TODO: Bu zamanı kaydet ve zamanlayıcı başlat
}

// 💧 Su zamanını ayarla
// Set watering time
function setWaterTime() {
  const waterTime = document.getElementById("water-time").value;
  alert("Su zamanı ayarlandı: " + waterTime);
  // TODO: Bu zamanı kaydet ve zamanlayıcı başlat
}

// 🎥 Kamera simülasyonunu aç/kapat
// Toggle camera simulation
function toggleCamera() {
  const video = document.getElementById("cat-cam");
  if (video.paused) {
    video.play(); // Videoyu başlat
    // Start video
  } else {
    video.pause(); // Videoyu durdur
    // Pause video
  }
}

// 📡 Sahte API'den veri çek (data.json)
// Fetch data from mock API
async function fetchStatus() {
  try {
    const response = await fetch("data.json"); // JSON dosyasını al
    const data = await response.json();        // JSON'u ayrıştır

    // DOM'a verileri yansıt
    // Reflect data in DOM
    document.getElementById("food-status").textContent =
      "Mama Durumu: " + data.food + "% / Food Level: " + data.food + "%";

    document.getElementById("water-status").textContent =
      "Su Durumu: " + data.water + "% / Water Level: " + data.water + "%";

    // Kritik seviye uyarısı
    // Alert if levels are too low
    if (data.food < 20) alert("Mama seviyesi çok düşük! / Food level is too low!");
    if (data.water < 20) alert("Su seviyesi çok düşük! / Water level is too low!");
  } catch (error) {
    console.error("Veri alınamadı / Failed to fetch data:", error);
  }
}

// ⏲️ Her 10 saniyede bir veriyi güncelle
// Update data every 10 seconds
setInterval(fetchStatus, 10000);

// Sayfa yüklenince ilk veriyi al
// Initial fetch when page loads
window.onload = fetchStatus;
