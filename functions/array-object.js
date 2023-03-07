const cars = [
  {
    brand: "Renault",
    name: "Duster",
    year: 2017,
    price: (60000.0).toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    }),
  },
  {
    brand: "Volks",
    name: "Polo",
    year: 2020,
    price: (80000.0).toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    }),
  },
  {
    brand: "GM",
    name: "Onix",
    year: 2022,
    price: (90000.0).toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    }),
  },
];

// console.table(cars);
// console.log(cars);

// var f = cars[0].price.toLocaleString("pt-br", {
//   style: "currency",
//   currency: "BRL",
// });

// console.log(f);
// for (var i = 0, totalCars = cars.length; i < totalCars; i++) {
//   console.log(cars[i]);
// }

const getCars = (i) => {
  return cars[i].price.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
};

cars.map((car, i) => console.table(getCars(i)));

console.table(cars);
