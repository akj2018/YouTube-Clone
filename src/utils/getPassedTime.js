const getPassedTime = (isoString) => {
  const date = new Date(isoString);

  const now = Date.now();

  const timeDifferenceMs = now - date.getTime();

  const timeDifferenceinMins = Math.round(timeDifferenceMs / (1000 * 60));
  const timeDifferenceinHrs = Math.round(timeDifferenceMs / (1000 * 60 * 60));
  const timeDifferenceinDays = Math.round(
    timeDifferenceMs / (1000 * 60 * 60 * 24)
  );
  const timeDifferenceinMonths = Math.round(
    timeDifferenceMs / (1000 * 60 * 60 * 24 * 30)
  );
  const timeDifferenceinYears = Math.round(
    timeDifferenceMs / (1000 * 60 * 60 * 24 * 30 * 365)
  );

  const passedTime = {
    mins: timeDifferenceinMins,
    hours: timeDifferenceinHrs,
    days: timeDifferenceinDays,
    months: timeDifferenceinMonths,
    years: timeDifferenceinYears,
  };

  const checkPlural = (count) => (count > 1 ? "s" : "");

  if (passedTime.years !== 0) {
    return passedTime.years + " year" + checkPlural(passedTime.years);
  } else if (passedTime.months !== 0) {
    return passedTime.months + " month" + checkPlural(passedTime.months);
  } else if (passedTime.days !== 0) {
    return passedTime.days + " day" + checkPlural(passedTime.days);
  } else if (passedTime.hours !== 0) {
    return passedTime.hours + " hour" + checkPlural(passedTime.hours);
  } else {
    return passedTime.mins + " mins" + checkPlural(passedTime.mins);
  }
};

export default getPassedTime;
