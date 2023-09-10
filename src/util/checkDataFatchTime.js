exports.checkDataFitchTime = (dateString) => {
  const inputDate = new Date(parseInt(dateString, 10));
  const currentTime = new Date();
  const timeDifference = currentTime - inputDate;
  return timeDifference <= 300000;
};
