// ======================
// PAGE DETECTION
// ======================
const page = window.location.pathname.split("/").pop();


// ======================
// PAGE 2 - MAP (PLACES)
// ======================
// if (page === "map.html") {

//     const map = L.map('map').setView([30, 20], 3);

//     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//         maxZoom: 19,
//     }).addTo(map);

//     const places = {
//         "London": [51.5074, -0.1278],
//         "Paris": [48.8566, 2.3522],
//         "Rome": [41.9028, 12.4964],
//         "Cairo": [30.0444, 31.2357],
//         "Berlin": [52.5200, 13.4050],
//         "Moscow": [55.7558, 37.6173],
//         "Athens": [37.9838, 23.7275],
//         "Dubai": [25.2048, 55.2708]
//     };

//     let markers = [];
//     const TOTAL_POINTS = Object.keys(places).length;

//     map.on('click', function(e) {
//         let clicked = e.latlng;

//         let selectedPlace = null;
//         let selectedCoords = null;

//         for (let place in places) {
//             let real = L.latLng(places[place]);

//             if (map.distance(real, clicked) < 300000) {
//                 selectedPlace = place;
//                 selectedCoords = real;
//                 break;
//             }
//         }

//         if (!selectedPlace) return;

//         let existingIndex = markers.findIndex(m => m.place === selectedPlace);

//         if (existingIndex !== -1) {
//             map.removeLayer(markers[existingIndex].marker);
//             markers.splice(existingIndex, 1);
//         } else {
//             let marker = L.marker(selectedCoords)
//                 .addTo(map)
//                 .bindPopup(selectedPlace);

//             markers.push({ place: selectedPlace, marker: marker });
//         }

//         updateProgress();
//     });

//     function updateProgress() {
//         const progressText = document.getElementById("progress");
//         if (progressText) {
//             progressText.innerText = `Points Placed: ${markers.length} / ${TOTAL_POINTS}`;
//         }
//     }

//     window.goNext = function () {
//         if (markers.length === TOTAL_POINTS) {
//             window.location.href = "trace.html";
//         } else {
//             alert("⚠️ Explore all locations before moving on! 🌍");
//         }
//     };
// }


// // ======================
// // PAGE 3 - TRACE
// // ======================
// if (page === "trace.html") {

//     const map = L.map('map').setView([30, 20], 3);

//     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//         maxZoom: 19,
//     }).addTo(map);

//     let markers = [];

//     map.on('click', function(e) {
//         let clicked = e.latlng;

//         let foundIndex = markers.findIndex(m => {
//             return map.distance(m.getLatLng(), clicked) < 200000;
//         });

//         if (foundIndex !== -1) {
//             map.removeLayer(markers[foundIndex]);
//             markers.splice(foundIndex, 1);
//         } else {
//             let marker = L.circleMarker(clicked, {
//                 radius: 6,
//                 color: "yellow"
//             }).addTo(map);

//             markers.push(marker);
//         }
//     });

//     window.checkAnswer = function () {
//         const ans = document.getElementById("answer").value.trim().toUpperCase();

//         if (ans === "K") {
//             alert("🎉 Correct! Moving to next round...");
//             setTimeout(() => {
//                 window.location.href = "next.html";
//             }, 800);
//         } else {
//             alert("❌ Nope... even the Earth disagrees 🌍😂");
//         }
//     };
// }


// // ======================
// // PAGE 1 - INTRO
// // ======================
// if (page === "index.html" || page === "") {

//     window.startGame = function () {
//         window.location.href = "map.html";
//     };
// }