import users from "./users.js";

const getSortedUniqueSkills = (users) => {
  const result = users.reduce((acc, user) => {
    acc.push(...user.skills);
    return acc;
  }, []);

  let newAr = [];

  return result.filter((skill) =>
    newAr.indexOf(skill) >= 0 ? false : newAr.push(skill)
  ).sort();
};

// const getSortedUniqueSkills = (users) => {
//     const solveThisSkill = users
//       .reduce((acc, user) => {
//         acc.push(...user.skills);
//         return acc;
//       }, [])
//       .reduce((acc, skill) => {
//         acc[skill] = true;
//         return acc;
//       },
//       {});
//       const turnToArray = Object.keys(solveThisSkill).sort()
//   return turnToArray
  
//   };

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
