const productsArray = [
  {
    id: "1",
    title: "Coffee",
    price: 4.99,
  },
  {
    id: "2",
    title: "Sungralles",
    price: 9.99,
  },
  {
    id: "3",
    title: "Camera",
    price: 39.99,
  },
];

function getProductData(id) {
  return productsArray.find((product) => product.id === id);
}

export { productsArray, getProductData };
