function getMinMax(str) {
  // разбиваем строку inputData на массив по разделителю "пробел"
  const arr = str.split(' ');

  // фильтруем массив по числовому предпочтению
  const numArr = arr.filter(item => !isNaN(item));

  // объявляем переменные с min и max значениями 
  const min = Math.min(...numArr);
  const max = Math.max(...numArr);
  
  let result = {
    min: min,
    max: max,

  };
  
  return result;
}
