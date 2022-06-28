function highlight(table) {
  
  let allTd = table.querySelectorAll('td');
 
  for (let el of allTd) {

    if (el.hasAttribute("data-available")) {

      if (el.getAttribute('data-available') === 'true') {  
        el.parentElement.classList.add("available");  
      }

      else {    
        el.parentElement.classList.add("unavailable");
      }
    }
  }
  
  for (let el of allTd) {

    if (el.hasAttribute("data-available")) {
      el.parentElement.hidden = false;
    }

    else {    
      el.parentElement.hidden = true;
    }

  }

  for (let el of allTd) {

    if (el.textContent === 'm') {    
      el.parentElement.classList.add("male");
    }
    else if (el.textContent === 'f') {
      
      el.parentElement.classList.add("female");
    }
  }

  for (let el of allTd) {
    if (el.textContent < 18) {     
      el.parentElement.style = "text-decoration: line-through"; 
    }
  }

}
