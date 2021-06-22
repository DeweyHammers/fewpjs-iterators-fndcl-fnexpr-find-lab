let superbowlWin = (array) => {
  let year
  array.find((r, i) => {
    if(r.result === 'W') {
      year = r.year
    }
  });
  return year
}
