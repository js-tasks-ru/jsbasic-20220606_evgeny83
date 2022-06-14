function camelize(str) {
  const arr = str.split('-');    
  const newArr = arr.reduce((sum, current) => sum + current[0].toUpperCase() + current.slice(1));
  return newArr;
}
