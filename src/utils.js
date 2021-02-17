const paginate = (items) => {
  const itemsPerPage = 10;
  const numOfPages = Math.ceil(items.length / itemsPerPage);

  let groupedItems = [];

  for (let i = 0; i < numOfPages; i++) {
    const start = i * itemsPerPage;
    groupedItems.push(items.slice(start, start + itemsPerPage)); // groupedItems array push the array that is created by slice items array
  }
  return groupedItems;
};

export default paginate;
