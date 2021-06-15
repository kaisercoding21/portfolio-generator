const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);

const printProfileData = (profileDaraArr) => {
  // This code...
  for (let i = 0; i < profileDaraArr.length; i++) {
    console.log(profileDaraArr[i]);
  }

  console.log('==================');

  // Is the same as the following
  profileDaraArr.forEach((profileItem) => console.log(profileItem));
};

printProfileData(profileDataArgs);
