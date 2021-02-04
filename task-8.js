import users from "./users.js";

const getUsersWithFriend = (users, friendName) => {
  return users.filter(user => {
      return user.friends.find(friend => friendName === friend);
  })
};

console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]
