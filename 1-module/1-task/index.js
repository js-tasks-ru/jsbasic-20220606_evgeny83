function factorial(n) {
  let sum;
  sum = n;

  if (sum == 0) {
    return sum = 1;
  }

  for (--n; n >= 1; n--) {
     
    sum *= n;
        
  }
  
  return sum;
}

