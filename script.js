window.getRemainingTime = function () {
  const countDown = setTimeout(function () {
    getRemainingTime();
  }, 1000);
  const birthdayDate = document.querySelector(".birthdayDate");
  const birthdayMonth = document.querySelector(".birthdayMonth");

  const birthdayDateValue = birthdayDate.value;
  const birthdayMonthValue = birthdayMonth.value;
  let birthdayMonthIndex;
  let currentdate = new Date();
  const currentMonth = currentdate.getMonth();
  const currentYear = currentdate.getFullYear();
  console.log(currentYear);
  if (birthdayMonthValue === "January") {
    birthdayMonthIndex = 0;
  } else if (birthdayMonthValue === "February") {
    birthdayMonthIndex = 1;
  } else if (birthdayMonthValue === "March") {
    birthdayMonthIndex = 2;
  } else if (birthdayMonthValue === "April") {
    birthdayMonthIndex = 3;
  } else if (birthdayMonthValue === "May") {
    birthdayMonthIndex = 4;
  } else if (birthdayMonthValue === "June") {
    birthdayMonthIndex = 5;
  } else if (birthdayMonthValue === "July") {
    birthdayMonthIndex = 6;
  } else if (birthdayMonthValue === "August") {
    birthdayMonthIndex = 7;
  } else if (birthdayMonthValue === "September") {
    birthdayMonthIndex = 8;
  } else if (birthdayMonthValue === "October") {
    birthdayMonthIndex = 9;
  } else if (birthdayMonthValue === "November") {
    birthdayMonthIndex = 10;
  } else if (birthdayMonthValue === "December") {
    birthdayMonthIndex = 11;
  }

  const futureDate = new Date(
    currentYear,
    birthdayMonthIndex,
    birthdayDateValue
  );
  const timeInMilliCurrent = currentdate.getTime();
  const timeInMilliFuture = futureDate.getTime();
  const diffInTime = timeInMilliFuture - timeInMilliCurrent;
  const months = birthdayMonthIndex - currentMonth;
  const days = Math.floor(diffInTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor(diffInTime / (1000 * 60 * 60));
  const minutes = Math.floor(diffInTime / (1000 * 60));
  const seconds = 59 - currentdate.getSeconds();

  if (birthdayMonthIndex < currentMonth || birthdayDate.value > 31) {
    document.querySelector(".welcome").innerHTML = "Invalid Input";
    document.querySelector(".contentContainer").style.display = "none";
    clearTimeout(countDown);
  } else {
    document.querySelector(".welcome").style.display = "none";
    document.querySelector(".contentContainer").style.display = "flex";
    document.querySelector("#months").innerHTML = months;
    document.querySelector("#days").innerHTML = days;
    document.querySelector("#hours").innerHTML = hours;
    document.querySelector("#minutes").innerHTML = minutes;
    document.querySelector("#seconds").innerHTML = seconds;
    //   const countdown = setInterval(getRemainingTime, 1000);
  }
};
