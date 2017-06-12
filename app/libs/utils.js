import format from "date-fns/format";
import parse from "date-fns/parse";

export const getDate = m => {
  return format(parse(m * 1000), "HH:mm A - DD/MM");
};

// Partially taken from the IOTA Wallet
export const formatAmount = (amount, ternary) => {
  var units = "i";
  var negative = "";
  if (amount < 0) {
    const amount = Math.abs(amount);
    var negative = "-";
  }
  if (amount >= 1000000000000000) {
    units = "Pi";
    sanitisedAmount = sigFigs(converter(amount, units), 4);
  } else if (amount >= 1000000000000) {
    units = "Ti";
    sanitisedAmount = sigFigs(converter(amount, units), 4);
  } else if (amount >= 1000000000) {
    units = "Gi";
    sanitisedAmount = sigFigs(converter(amount, units), 4);
  } else if (amount >= 1000000) {
    units = "Mi";
    sanitisedAmount = sigFigs(converter(amount, units), 4);
  } else {
    units = "i";
    sanitisedAmount = amount;
  }

  if (ternary === "bal") {
    return negative + sanitisedAmount.toString();
  } else if (ternary === "unit") {
    return units;
  } else {
    return negative + sanitisedAmount.toString() + " " + units;
  }
};

const sigFigs = (n, sig) => {
  var mult = Math.pow(10, sig - Math.floor(Math.log(n) / Math.LN10) - 1);
  return Math.round(n * mult) / mult;
};

export const converter = (amount, unit) => {
  console.log(amount);
  switch (unit) {
    case "Ki":
      return amount * Math.pow(10, 3);
      break;
    case "Mi":
      return amount * Math.pow(10, 6);
      break;
    case "Gi":
      return amount * Math.pow(10, 9);
      break;
    case "Ti":
      return amount * Math.pow(10, 12);
      break;
    case "Pi":
      return amount * Math.pow(10, 15);
      break;
    default:
      return amount;
  }
};