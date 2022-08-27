export let chooseColor = function(status) {
  switch(status.toUpperCase()) {
    case "BRONZE":
      return "#CD7F32";
    case "PLATA":
      return "#c0c0c0";
    default:
      return "#ffd700";
  }
} 