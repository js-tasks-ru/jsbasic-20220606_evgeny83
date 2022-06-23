function makeFriendsList(friends) {

  const newUL = document.createElement('ul'); 
  document.body.append(newUL);

  const arrNames = friends.map(item => item.firstName + ' ' + item.lastName);

  for (let users of arrNames) {
    const newLI = document.createElement('LI');
    
    newLI.textContent = users;
    newUL.append(newLI);

  }

  return newUL;

}
