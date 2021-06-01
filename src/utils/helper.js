export function formatPercentage(num = 0) {
  return Number(num).toFixed(2) + "%";
}

export function numberWithCommas(x = 0) {
  return x
    .toFixed(2)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
