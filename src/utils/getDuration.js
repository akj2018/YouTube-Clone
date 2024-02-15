const getDuration = (duration) => {
  let durationString = duration.substring(2);
  let ans = [];
  let temp = "";
  for (let i = 0; i < durationString.length; i++) {
    switch (durationString.charAt(i)) {
      case "H":
        if (temp.length === 1) temp = "0" + temp;
        ans.push(temp);
        ans.push("00");
        ans.push("00");
        temp = "";
        break;
      case "M":
        if (temp.length === 1) temp = "0" + temp;
        if (ans.length === 3) {
          ans[1] = temp;
        } else {
          ans.push(temp);
          ans.push("00");
        }
        temp = "";
        break;
      case "S":
        if (temp.length === 1) temp = "0" + temp;
        if (ans.length === 3) {
          ans[2] = temp;
        } else if (ans.length === 2) {
          ans[1] = temp;
        } else {
          ans.push(temp);
        }
        break;
      default:
        temp += durationString.charAt(i);
    }
  }
  //   return durationString;
  return ans.join(":");
};

export default getDuration;
