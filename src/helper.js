export const calculateDifference = (userBirthdate, today) => {
  const { year: birthYear, month: birthMonth, day: birthDay } = userBirthdate;
  const { year, month, day } = today;
  today = new Date(`${month}/${day}/${year}`);
  birthDate = new Date(`${birthMonth}/${birthDay}/${birthYear}`);
  var daysDifference = Math.abs(today.getTime() - birthDate.getTime());
  console.log({ daysDifference });
  var daysDifference = Math.floor(daysDifference / (1000 * 3600 * 24));
  //   let difference = new Date(daysDifference);
  //   return {
  //     age: {
  //       year: difference.getFullYear(),
  //       month: difference.getMonth() + 1,
  //       day: difference.getDate(),
  //     },
  //     error: false,
  //     message,
  //   };

  if (daysDifference >= 1) {
    daysDifference--;
    var message = `You are ${daysDifference} days old!`;

    var ageYear = Math.floor(daysDifference / 365.2425);
    daysDifference = daysDifference % 365.2425;
    var ageMonth = Math.floor(daysDifference / 30.41);
    var ageDay = Math.floor(daysDifference % 30.41);

    // var message = `You are ${ageYear} years, ${ageMonth} months and ${ageDay} days old today. You've been on this earth for ${daysDifference} days.`;

    return {
      age: {
        year: ageYear,
        month: ageMonth,
        day: ageDay,
      },
      error: false,
      message,
    };
  } else {
    return {
      age: {
        year: null,
        month: null,
        day: null,
      },
      error: true,
      messages: {
        message: "That date doesn't look right...",
      },
    };
  }
};

export const padZeroes = (number, size = 2) => {
  number = number.toString();
  while (number.length < size) {
    number = "0" + number;
  }
  return number;
};
