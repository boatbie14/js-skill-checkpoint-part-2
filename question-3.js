async function getUsers() {
  try {
    const getData = await fetch("https://jsonplaceholder.typicode.com/users");
    const userData = await getData.json();
    //console.log(userData);
    return showUserNameLegthAbove17(userData);
  } catch (error) {
    console.log("Can't fetch");
  }
}

function showUserNameLegthAbove17(users) {
  let result = [];
  let getUser = users.filter((user) => {
    return user.name.length > 17;
  });

  //console.log(getUser);

  result = getUser.map((user) => user.name);
  //console.log(result);

  return result;
}

getUsers()
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
