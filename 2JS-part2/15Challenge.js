//CHALLENGE:

//"Gibson is a 46-years old teacher. and he has driverslicence"

const gibson = {
  firstName: `Gibson`,
  lastName: `Joseph`,
  birthYear: 1991 - 10,
  job: `teacher`,
  driverLicense: true,

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  // license: this.driverLicense ? `a` : `no`,

  getSummery: function () {
    return `${this.firstName} ${
      this.lastName
    } is a ${this.calcAge()}-years old ${this.job} and ${
      this.driverLicense ? `a` : `no`
    } driver's license`;
  },
};

// gibson.calcAge();
gibson.getSummery();
console.log(gibson.age);
// console.log(gibson.license) 
console.log(gibson.getSummery());

// console.log(gibson.calcAge());
// console.log(gibson.age);
console.log(gibson);


/////////////////////////////////////////
