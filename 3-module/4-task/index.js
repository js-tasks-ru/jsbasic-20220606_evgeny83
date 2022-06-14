function showSalary(users, age) {
  const arrFilter = users.filter(item => item.age <= age);
  const arrMapNameBalance = arrFilter.map(item => item.name + ', ' + item.balance);
  const str = arrMapNameBalance.join('\n');
  return str;
}
