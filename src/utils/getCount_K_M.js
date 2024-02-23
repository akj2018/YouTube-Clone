const getCount_K_M = (count) => {
  const countInt = parseInt(count);
  let ans = "";

  if (countInt > 999 && countInt < 999999) {
    ans = "" + Math.floor(countInt / 10 ** 3) + "K";
  }

  if (countInt > 999999) {
    ans = "" + Math.round((countInt / 10 ** 6) * 10) / 10 + "M";
  }

  return ans;
};

export default getCount_K_M;
