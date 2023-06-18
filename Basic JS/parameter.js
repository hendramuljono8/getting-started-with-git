function calculateTotal(
  products = [],
  { discountPercentage, salesTax=0.0825} = {}
) {
  let result = 0;
  for (let i = 0; i < products.length; i++) {
    const { priceInCents, quantity } = products[i];
    result += priceInCents * quantity;
  }

  if (discountPercentage) result *= 1 - discountPercentage;
  return result * (1 + salesTax);
}

// Inputs
const products = [
  {
    name: "Black Longline T-Shirt",
    priceInCents: 1500,
    size: "M",
    quantity: 2,
  },
  {
    name: "Light Wash Stretch Skinny Jeans",
    priceInCents: 6000,
    size: 32,
    quantity: 1,
  },
];

console.log(calculateTotal());
const authors = [
    {
      name: { first: "Neil", surname: "Gaiman" },
      knighted: false,
    },
  ];
  const author = {
    name: {
      first: "Terry",
      surname: "Pratchett",
    },
  };
  
  authors.push(author);
  const result = [ authors, author ];
  author.knighted = true;
  console.log(result);
  