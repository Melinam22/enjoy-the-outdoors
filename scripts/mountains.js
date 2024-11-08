"use strict";

const mountainsDropdown = document.getElementById("mountainsDropdown");
const mountainDetailsParagraph = document.getElementById("mountainDetailsParagraph");

function loadMountains() {
  for (const mountain of mountainsArray) {
    let option = document.createElement("option");
    option.textContent = mountain.name;
    option.value = mountain.name;
    mountainsDropdown.appendChild(option);
  }
}

function showMountainDetails() {
  const selectedMountainName = mountainsDropdown.value;
  const selectedMountain = mountainsArray.find((mountain) => mountain.name === selectedMountainName);

  if (selectedMountain) {
    const sunriseTime = "5:38:59 AM";
    const sunsetTime = "5:48:07 PM";

    mountainDetailsParagraph.innerHTML = `
      <img src="images/${selectedMountain.img}" alt="${selectedMountain.name}" style="width:100%; border-radius: 5px; margin-bottom: 15px;">
      <h3 class="mt-2">${selectedMountain.name}</h3>
      <p>${selectedMountain.desc}</p>
      <p><strong>Elevation:</strong> ${selectedMountain.elevation} ft</p>
      <p><strong>Sunrise:</strong> ${sunriseTime}</p>
      <p><strong>Sunset:</strong> ${sunsetTime}</p>
    `;
  } else {
    mountainDetailsParagraph.innerText = "Please select a mountain.";
  }
}

function init() {
  loadMountains();
  mountainsDropdown.onchange = showMountainDetails;
}

window.onload = init;
