let cities = [
  { name: "United States", flag: "usa.png", utcOffset: -5 },
  { name: "United Kingdom", flag: "uk.png", utcOffset: 0 },
  { name: "China", flag: "china.png", utcOffset: 8 },
  { name: "Japan", flag: "japan.png", utcOffset: 9 },
  { name: "Germany", flag: "germany.png", utcOffset: 1 },
  { name: "India", flag: "india.png", utcOffset: 5.5 },
  { name: "France", flag: "france.png", utcOffset: 1 },
  { name: "Brazil", flag: "brazil.png", utcOffset: -3 },
  { name: "Australia", flag: "australia.png", utcOffset: 10 },
  { name: "Canada", flag: "canada.png", utcOffset: -5 },
  { name: "South Africa", flag: "sa.png", utcOffset: 2 },
  { name: "Norway", flag: "norway.png", utcOffset: 1 },
];

//Compare function to sort cities alphabetically by name
const compare = function (a, b) {
  const cityA = a.name;
  const cityB = b.name;

  let comparison = 0;
  if (cityA > cityB) {
    comparison = 1;
  } else if (cityA < cityB) {
    comparison = -1;
  }

  return comparison;
};

// Sort cities array alphabetically by name using the compare function
cities.sort(compare);

const getUtcTime = function () {
  const date = new Date();
  const utcOffset = date.getTimezoneOffset() * 60000;
  const utcTime = new Date(date.getTime() + utcOffset);
  return utcTime.getTime();
};

//Get the current time for a specific UTC offset
const getCurrentTime = function (utcOffset) {
  const mil = 1000 * 60 * 60;
  const time = new Date(getUtcTime() + utcOffset * mil);

  return time.toLocaleTimeString();
};

//Display the local time and the current time in different cities
const displayWorldTime = function () {
  const date = new Date();
  document.getElementById("local").textContent =
    "Local Time: " + date.toLocaleTimeString();

  let output = "";

  // Loop through each city and add a div to the output
  for (let i = 0; i < cities.length; i++) {
    output += `
    <div class="box">
    <div class="city" style="background-image: url('images/${cities[i].flag}')">
      <div class="city-name">${cities[i].name}</div>
      <div class="city-time">${getCurrentTime(cities[i].utcOffset)}</div>
    </div>
    </div>
  `;
  }

  document.getElementById("output").innerHTML = output;
};

// Set an interval to update the world time every second
const timer = setInterval(displayWorldTime, 1000);
