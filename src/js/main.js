import userProfile from "./data/user";
import mapboxgl from "mapbox-gl";
//import name from "./data/user";

const userSection = document.getElementById("user");
const userInfoList = document.createElement("ul");

const buildUser = (userData) => {
    for (const prop in userData) {
        const lineItemContent = `${prop}: ${userData[prop]}`;
        const lineItem = document.createElement("li");
        lineItem.innerText = lineItemContent;
        userInfoList.appendChild(lineItem);
        userSection.appendChild(userInfoList);
    }
};

(() => {
    //console.log("working!");
    //console.log("Hi:", name);
    console.log(userProfile);
    buildUser(userProfile);

    mapboxgl.accessToken =
        process.env.NODE_ENV === "production"
            ? process.env.API_KEY_MAPBOX
            : "pk.eyJ1IjoiaGF6ZXk4NyIsImEiOiJjbGFsdzUzYzkwOXBjM3FudGZ1ejUzazdvIn0.vY9_up6mCWaLDl1WuX1eDw";
    const map = new mapboxgl.Map({
        container: "mapContainer", // container ID
        style: "mapbox://styles/hazey87/clalzmyui000j15qr0pb7cicy", // style URL
        center: [-74.5, 40], // starting position [lng, lat]
        zoom: 9, // starting zoom
        projection: "globe", // display the map as a 3D globe
    });
})();
// "mapbox://styles/hazey87/clalzmyui000j15qr0pb7cicy", // style URL
// "mapbox://styles/mapbox/streets-v11", // style URL

/*   "pk.eyJ1IjoiaGF6ZXk4NyIsImEiOiJjbGFsdzUzYzkwOXBjM3FudGZ1ejUzazdvIn0.vY9_up6mCWaLDl1WuX1eDw"
 */
