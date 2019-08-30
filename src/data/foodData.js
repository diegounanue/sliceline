export function formatPrice(price) {
  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });
}

export const foodItems = [
  {
    name: "Cheese Pizza",
    img: "assets/images/pizza.png",
    section: "Pizza",
    price: 1
  },
  {
    name: "Pepperoni Pizza",
    img: "assets/images/pizza2.jpeg",
    section: "Pizza",
    price: 1.5
  },
  {
    name: "Chicken Pizza",
    img: "assets/images/chicken-pizza.jpeg",
    section: "Pizza",
    price: 2
  },
  {
    img: "assets/images/healthy-pizza.jpeg",
    name: "Veggie Pizza",
    section: "Pizza",
    price: 2
  },
  {
    img: "assets/images/burger.jpeg",
    name: "Burger",
    section: "Sandwich",
    price: 3
  },
  {
    img: "assets/images/gyro.jpeg",
    name: "Gyro",
    section: "Sandwich",
    price: 4.5
  },
  {
    img: "assets/images/sandwich.jpeg",
    name: "Shrimp PoBoy",
    section: "Sandwich",
    price: 6
  },
  {
    img: "assets/images/fries.jpeg",
    name: "Fries",
    section: "Sides",
    price: 1
  },
  {
    price: 1,
    name: "Soda",
    section: "Drinks",
    choices: ["Coke", "Sprite", "Root Beer"]
  }
];

export const foods = foodItems.reduce((res, food) => {
  if (!res[food.section]) {
    res[food.section] = [];
  }
  res[food.section].push(food);
  return res;
}, {});
