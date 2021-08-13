function isProvider(val) {
  if (val.length > 13) {
    return "nomor tidak valid";
  } else if (val.length < 11) {
    return "nomor tidak valid";
  }
  var value = val.slice(0, 4);
  var provide = "";
  switch (value) {
    case "0811":
    case "0812":
    case "0813":
    case "0823":
    case "0852":
    case "0853":
    case "0851":
      provide = "Telkomsel";
      break;
    case "0855":
    case "0856":
    case "0857":
    case "0858":
    case "0814":
    case "0815":
    case "0816":
      provide = "Indosat";
      break;
    case "0817":
    case "0818":
    case "0819":
    case "0859":
    case "0877":
    case "0878":
      provide = "Xl";
      break;
    case "0896":
    case "0897":
    case "0898":
    case "0899":
      provide = "3";
      break;
    case "0881":
    case "0882":
    case "0883":
    case "0884":
    case "0885":
    case "0886":
    case "0887":
      provide = "SmartFren";
      break;
    case "0838":
    case "0831":
    case "0832":
    case "0833":
      provide = "Axis";
      break;
    default:
      provide = "Provider Tidak Valid";
  }
  return provide;
}

module.exports = isProvider;
