function numFormatter(num) {
  if (num > 100000 && num < 10000000) {
    return (num / 100000).toFixed(2) + "L";
  } else if (num > 10000000) return (num / 10000000).toFixed(2) + "Cr";
  else if (num < 100000) {
    return num;
  }
}
export default numFormatter;
