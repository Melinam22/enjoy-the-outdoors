"use strict";

const nationalParkArrayTBody = document.querySelector("#nationalParkArrayTBody");
const locationDropdown = document.querySelector("#locationDropdown");
const typeDropdown = document.querySelector("#typeDropdown");
const byLocationRadio = document.querySelector("#byLocationRadio");
const byTypeRadio = document.querySelector("#byTypeRadio");

function buildTable(data, tableBody) {
  tableBody.innerText = "";

  data.forEach((nationalPark) => {
    let tr = tableBody.insertRow();

    let td2 = tr.insertCell();
    td2.innerText = nationalPark.LocationName;

    let td3 = tr.insertCell();
    td3.innerText = nationalPark.Address || "N/A";

    let td4 = tr.insertCell();
    td4.innerText = nationalPark.City;

    let td5 = tr.insertCell();
    td5.innerText = nationalPark.State;

    let td6 = tr.insertCell();
    td6.innerText = nationalPark.ZipCode || "N/A";

    let td7 = tr.insertCell();
    td7.innerText = nationalPark.Phone || "N/A";

    // td8.innerText = nationalPark.Website || "N/A";
    if (nationalPark.Visit) {
      const link = document.createElement("a");
      link.href = nationalPark.Visit;
      link.innerText = "Visit";
      link.target = "_blank";

      const td8 = tr.insertCell(); // Create the cell first
      td8.appendChild(link); // Append the link to the cell
    } else {
      const td8 = tr.insertCell(); // Create the cell
      td8.innerText = "N/A"; // Set the cell's text
    }
  });
}

function populateDropdown(data, dropdown) {
  // Create "All" option
  const option = document.createElement("option");
  option.value = "Select...";
  option.textContent = "Select...";
  dropdown.appendChild(option);
  dropdown.value = "Select...";

  data.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    dropdown.appendChild(option);
  });
  dropdown.style.display = "inline-block";
}

function filterTable(data, tableBody, filter) {
  if (byLocationRadio.checked) {
    const filteredData = filter === "Select..." ? data : data.filter((nationalPark) => nationalPark.State === filter);
    buildTable(filteredData, tableBody);
  } else {
    const filteredData =
      filter === "Select..." ? data : data.filter((nationalPark) => nationalPark.LocationName.includes(filter));
    console.log(filteredData);
    buildTable(filteredData, tableBody);
  }
}

populateDropdown(locationsArray, locationDropdown);
buildTable(nationalParksArray, nationalParkArrayTBody);

byLocationRadio.addEventListener("change", () => {
  if (byLocationRadio.checked) {
    typeDropdown.style.display = "none";
    locationDropdown.style.display = "inline-block";
    populateDropdown(locationsArray, locationDropdown);
  }
});

byTypeRadio.addEventListener("change", () => {
  if (byTypeRadio.checked) {
    locationDropdown.style.display = "none";
    populateDropdown(parkTypesArray, typeDropdown);
  }
});

locationDropdown.addEventListener("change", () => {
  filterTable(nationalParksArray, nationalParkArrayTBody, locationDropdown.value);
});

typeDropdown.addEventListener("change", () => {
  filterTable(nationalParksArray, nationalParkArrayTBody, typeDropdown.value);
});
