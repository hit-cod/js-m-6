import users from "./users.js";

const getNamesSortedByFriendsCount = (users) => {
  return users
    .sort((user1, user2) => {
      return user1.friends.length - user2.friends.length;
    })
    .reduce((acc, user) => {
      acc.push(user.name);
      return acc;
    }, []);
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
