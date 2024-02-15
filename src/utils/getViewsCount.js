const getViewsCount = (views) => {
  const viewsInt = parseInt(views);
  let ans = toString(viewsInt);

  if (viewsInt > 999 && viewsInt < 999999) {
    ans = "" + Math.floor(viewsInt / 10 ** 3) + "K";
  }

  if (viewsInt > 999999) {
    ans = "" + Math.round((viewsInt / 10 ** 6) * 10) / 10 + "M";
  }

  return ans;
};

export default getViewsCount;
