function makeFriendsList(friends) {
  let ul = document.createElement('ul');
  for (let key in friends) {
    let li = document.createElement('li');
    li.innerHTML = `${friends[key].firstName} ${friends[key].lastName}`;
    ul.append(li);
  }
  return ul;
};
