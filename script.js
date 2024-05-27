let cities = [
  { name: "Istanbul", utcOffset: 3, flag: "Turkey.png" },
  {
    name: "New York City",
    utcOffset: -5,
    flag: "United-States-of-America.png",
  },
  { name: "Tokyo", utcOffset: 9, flag: "Japan.png" },
  { name: "Moscow", utcOffset: 3, flag: "Russia.png" },
  { name: "Rio De Janeiro", utcOffset: -3, flag: "Brazil.png" },
  { name: "Sydney", utcOffset: 11, flag: "Australia.png" },
  { name: "Vancouver", utcOffset: -8, flag: "Canada.png" },
  { name: "Beijing", utcOffset: 8, flag: "China.png" },
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

  let output = `<table id="cities">`;
  output += `
    <tr>
       <th class="col1"></th>
       <th class="col2"></th>
       <th></th>
    </tr>
  `;

  // Loop through each city and add a row to the table
  for (i = 0; i < cities.length; i++) {
    output += `
<tr>
<td><img src="media/${cities[i].flag}" /></td>
<td>${cities[i].name}</td>
<td>${getCurrentTime(cities[i].utcOffset)}</td>
</tr>
`;
  }
  output += `</table>`;
  document.getElementById("output").innerHTML = output;
};

// Set an interval to update the world time every second
const timer = setInterval(displayWorldTime, 1000);
