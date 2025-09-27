import { getParkData } from "./parkService.mjs";
import { getParkInfo } from "./parkService.mjs";
import { mediaCardTemplate } from "./templates.mjs";
import { footerTemplate } from "./templates.mjs";
const parkData = getParkData();
const parkInfoLinks = getParkInfo();
function setHeaderInfo(parkData){
    // Disclaimer Section (White Space Top)
    const disclaimer = document.querySelector(".disclaimer > a");
    disclaimer.href = parkData.url; //Set Url
    disclaimer.innerHTML = parkData.fullName; // Set Park Full NAme
    // Park Photo
    const parkPhoto = document.querySelector("#park-header > img");
    parkPhoto.src = parkData.images[0].url;
    parkPhoto.alt = parkData.images[0].altText; 

    // Grey Space Bottom Above Nav Bar
    // Park Name
    const parkName = document.querySelector("h2.global-nav__section-heading");
    parkName.innerHTML = parkData.name;
    //Park Designation
    const designation = document.querySelector(".subheadingtext1");
    designation.innerHTML = parkData.designation;
    // Park Location
    const locations = document.querySelector(".subheadingtext2");
    locations.innerHTML = parkData.states;
}

function setIntro(parkData){ // Use Park Data Json as parameter.
  const title = document.querySelector(".intro h1"); // Query select the <h1> in 'section intro'.
  title.innerHTML = parkData.fullName; // Insert parkData.fullName inside .intro selected tag <h1>.
  const intro = document.querySelector(".intro p"); // Query select the <p> in 'section intro'.
  intro.innerHTML = parkData.description; // Insert parkData.description inside .intro selected tag <p>.
}

function setParkInfo(data){
  const cardArray = data.map(mediaCardTemplate); // Creates an Array using the map function.
  const html = cardArray.join(""); // Converts the array to valid html (a single string).
  const info = document.querySelector(".info");
  info.innerHTML = html; // Sets the selected HTML.
}

function setFooter(data) {
  const footerEl = document.querySelector("#park-footer");
  footerEl.innerHTML = footerTemplate(data);
}

setHeaderInfo(parkData);
setIntro(parkData);
setParkInfo(parkInfoLinks);
setFooter(parkData);