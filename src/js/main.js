import { getParkData } from "./parkService.mjs";

const parkData = getParkData();
console.log(parkData);

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