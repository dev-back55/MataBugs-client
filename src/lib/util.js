export let chooseColor = function(status) {
  switch(status.toUpperCase()) {
    case "BRONCE":
      return "#CD7F32";
    case "PLATA":
      return "#c0c0c0";
    default:
      return "#ffd700";
  }
}

export let generateRange = function (start, stop, step = 1) {
  return Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
}

export let promisifiedSetTimeOut = function(delay) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}

export let fetchHasFinished = function(action) {
  return !action.type.endsWith('pending');
}

export let fetchIsPending = function(action) {
  return action.type.endsWith('pending');
}

export let numberWithCommas = function(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}