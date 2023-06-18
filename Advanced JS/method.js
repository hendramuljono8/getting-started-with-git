const parks = [
  { name: "Biscayne", rating: 4.2 },
  { name: "Grand Canyon", rating: 5 },
  { name: "Gateway Arch", rating: 4.5 },
  { name: "Indiana Dunes", rating: 4.1 },
];

// let found = parks.find((park) => park.rating === 4.1);

// console.log(found);

// let newPark = parks.filter((park) => park.name.startsWith("G"));

// console.log(newPark);

let newArray = parks.map((park) => `${park.name}: ${park.rating}`);

// console.log(newArray);

// let newSome = parks.some((park) => park.name === "Grand Arches");
// console.log(newSome);

let newEvery = parks.every((park) => park.rating >= 4.2 && park.rating <= 4.6);
console.log(newEvery);
