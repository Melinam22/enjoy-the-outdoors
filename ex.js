"use strict";

const mountainDropdown = document.getElementById("mountainDropdown");
const mountainDetailsParagraph = document.getElementById("mountainDetailsParagraph");
const logoImage = document.getElementById("logoImage");
const elevation = document.getElementById("elevationId");
const cardTitleHeading = document.getElementById("cardTitleHeading");
const mountainCard = document.getElementById("mountain-card");

function loadMountains() {
  mountainsArray.forEach((mountain) => {
    const option = document.createElement("option");
    option.value = mountain.name;
    option.textContent = mountain.name;
    mountainDropdown.appendChild(option);
  });
}

function showMountainDetails() {
  const mountainName = mountainDropdown.value;
  const selectedMountain = mountainsArray.find((mountain) => mountain.name === mountainName);

  if (selectedMountain) {
    mountainCard.style.visibility = "visible";
    logoImage.src = `./images/${selectedMountain.img}`;
    cardTitleHeading.innerText = `${selectedMountain.name}`;
    elevation.innerText = `Elevation: ${selectedMountain.elevation} ft`;
    mountainDetailsParagraph.innerText = `${selectedMountain.desc} Effort: ${selectedMountain.effort}`;
  } else {
    mountainCard.style.visibility = "hidden";
  }
}

loadMountains();
mountainDropdown.addEventListener("change", showMountainDetails);