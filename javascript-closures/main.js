function graduate(credential) {
  return function (fullname) {
    return `${fullname}, ${credential}`;
  };
}
const medicalSchool = graduate('M.D.');
const lawSchool = graduate('Esq.');

console.log('med school:', medicalSchool('Marley Doughty'));
console.log('law school:', lawSchool('Marley Doughty'));
