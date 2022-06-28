function hideSelf() {
  const allElem = document.getElementsByClassName('hide-self-button');
   
  allElem[0].onclick = function() {
    allElem[0].hidden = true;
  };
}
