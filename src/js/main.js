import userProfile from "./data/user";
import mapboxgl from "mapbox-gl";
//import name from "./data/user";

const userSection = document.getElementById("user");
const userInfoList = document.createElement("ul");

const buildAvatar = (imgsrc, parent) => {
    const imageElement = document.createElement("img");
    imageElement.src = imgsrc;
    parent.appendChild(imageElement);
};

const buildName = (data, parent) => {
    const H2 = document.createElement("h2");
    const SPAN = document.createElement("span");
    H2.innerText = data;
    SPAN.innerText = "where in the world is";

    parent.appendChild(H2);
    H2.insertAdjacentElement("afterbegin", SPAN);
};

const buildEmail = (data, parent) => {
    const link = document.createElement("a");
    link.innerText = data;
    link.href = `mailto:${data}`;

    parent.appendChild(link);
};

const buildLocation = (data, parent) => {
    const p = document.createElement("p");
    p.innerText = `longitude: ${data[0]}, latitude: ${data[1]}`;

    parent.appendChild(p);
};

const buildUser = (userData) => {
    buildAvatar(userData.avatar, userSection);
    buildName(userData.name, userSection);
    buildEmail(userData.email, userSection);
    buildLocation([userData.longitude, userData.latitude], userSection);

    // for (const prop in userData) {
    //     const lineItemContent = `${prop}: ${userData[prop]}`;
    //     const lineItem = document.createElement("li");
    //     lineItem.innerText = lineItemContent;
    //     userInfoList.appendChild(lineItem);
    //     userSection.appendChild(userInfoList);
    // }
};

const buildMap = (long, lat) => {
    mapboxgl.accessToken =
        process.env.NODE_ENV === "production"
            ? process.env.API_KEY_MAPBOX
            : "pk.eyJ1IjoiaGF6ZXk4NyIsImEiOiJjbGFsdzUzYzkwOXBjM3FudGZ1ejUzazdvIn0.vY9_up6mCWaLDl1WuX1eDw";
    const map = new mapboxgl.Map({
        container: "mapContainer", // container ID
        style: "mapbox://styles/hazey87/clalzmyui000j15qr0pb7cicy", // style URL
        center: [long, lat], // starting position [lng, lat]
        zoom: 0, // starting zoom
        projection: "globe", // display the map as a 3D globe
    });
};

(() => {
    //console.log("working!");
    //console.log("Hi:", name);
    //console.log(userProfile);
    buildUser(userProfile);
    buildMap(userProfile.longitude, userProfile.longitude);
})();
// "mapbox://styles/hazey87/clalzmyui000j15qr0pb7cicy", // style URL
// "mapbox://styles/mapbox/streets-v11", // style URL

/*   "pk.eyJ1IjoiaGF6ZXk4NyIsImEiOiJjbGFsdzUzYzkwOXBjM3FudGZ1ejUzazdvIn0.vY9_up6mCWaLDl1WuX1eDw"
 */
