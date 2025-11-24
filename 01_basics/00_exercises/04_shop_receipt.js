// Zelda's shop of Rupees

// Clients
const clients = [
  {
    id: 1,
    firstName: 'Harry',
    lastName: 'Potter',
    address: 'Musterstr. 123',
    tel: '+41794445588',
    age: 30,
  },
  {
    id: 2,
    firstName: 'Hermione',
    lastName: 'Granger',
    address: 'Hogwarts. 123',
    tel: '+41733333333',
    age: 25,
  },
  {
    id: 3,
    firstName: 'Ron',
    lastName: 'Weasley',
    address: 'Cottagestreet 222',
    tel: '+41323232323',
    age: 32,
  },
];

// Purchases

const purchases = [
  {
    id: 1,
    client: 2,
    items: [
      {
        name: 'potions',
        price: 3.5,
      },
      {
        name: 'owl',
        price: 300,
      },
    ],
    paid: true,
  },
  {
    id: 2,
    client: 1,
    items: [
      {
        name: 'Book X',
        price: 30,
      },
      {
        name: 'Wand',
        price: 100,
      },
    ],
    paid: true,
  },
  {
    id: 3,
    client: 3,
    items: [
      {
        name: 'potions',
        price: 3.5,
      },
      {
        name: 'owl',
        price: 300,
      },
      {
        name: 'Book X',
        price: 30,
      },
      {
        name: 'Wand',
        price: 100,
      },
    ],
    paid: true,
  },
];

const newDate = new Date(Date.now());

purchases.forEach((purchase) => {
  // Receipt
  let template = `
-- Zelda's shop of Rupees -- 
  
Thank you for chosing our shop.
Here is a list of what you have purchased: 
------
`;

  // console.log(template);

  let sum = 0;
  purchase.items.forEach((item) => {
    sum += item.price;
    template += `${item.name} x1 ${item.price}$\n`;
  });

  template += `
------
  
Total: ${sum}

Thank you, ${
    clients[purchase.client - 1].firstName
  } for always being a valuable costumer!

${newDate.toString()}

`;

  console.log(template);
});
