function isEmpty(obj) {
 
  for (let key in obj) {

    if (key != null || obj[key] === undefined) {
      return false;
    }
  }
  return true;

}