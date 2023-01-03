/* data-text-before

   add this data attribute to any element and it will be populated with
   the innerText of the specified element.  This can be used to create
   custom effects on text elements that require access to the text in
   a psueudo element class.
*/
Array.from(document.querySelectorAll("[data-text-before]")).forEach((el) => {
  el.setAttribute("data-text-before", el.innerText);
});

/* location-map

    add id='location-map' to the element to contain the leaflet map to the gallery.
 */
const locationMap = document.getElementById("location-map");

if (locationMap) {
  addMapTo("location-map", [41.481413, -71.31035]);
}

function addMapTo(id, coord) {
  /* create the map object attaching it to the specified id of location-map */
  const map = L.map(id, {
    center: coord,
    dragging: false,
    zoom: 16,
    minZoom: 4,
    touchZoom: false,
    scrollWheelZoom: "center",
    zoomControl: false,
  });
  L.control
    .zoom({
      position: "bottomright",
    })
    .addTo(map);

  /* attach a tile layer to the map from which the graphics are pulled during display */
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  /* icon is exported as svg from the figma design and used verbatim,
   iconSize matches width/height, iconAnchor is center/bottom os svg */
  const svgIcon = L.divIcon({
    html: `
<span aria-label="Map Marker for 99 King St">
<svg aria-hidden="true" width="66" height="88" viewBox="0 0 66 88" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M66 0H0V56H21L33 88L45 56H66V0Z" fill="#151515"/>
<circle cx="33" cy="28" r="12" fill="#D5966C"/>
</svg></span>`,
    className: "",
    iconSize: [66, 88],
    iconAnchor: [33, 88],
  });

  /* add a marker at the center coordinate of the map */
  const marker = L.marker(coord, { icon: svgIcon }).addTo(map);
}
