function checkSpam(str) {
  let newStr = str.toLowerCase();
  let spamList = ['1xBet', 'XXX',];
  let lowSpamWord;
  
  for (let spamWord of spamList) {
       
    lowSpamWord = spamWord.toLowerCase();
    //console.log(lowSpamWord);
    if (newStr.includes(lowSpamWord)) {return true;}
    else {continue;}
      
  }
  return false;
}
