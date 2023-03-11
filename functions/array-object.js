const cars = [
  {
    brand: "Renault",
    name: "Duster",
    year: 2017,
    price: 60000.0
  },
  {
    brand: "Volks",
    name: "Polo",
    year: 2020,
    price: 80000.0
  },
  {
    brand: "GM",
    name: "Onix",
    year: 2022,
    price: 90000.0,
    premium: true
  },
];

// const getCars = (i) => {
//   return cars[i].price.toLocaleString("pt-br", {
//     style: "currency",
//     currency: "BRL",
//   });
// };

// cars.map((car, i) => console.table(getCars(i)));

console.table(cars);
