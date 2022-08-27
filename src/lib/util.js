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