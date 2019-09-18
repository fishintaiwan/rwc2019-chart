module.exports = function(match, locale, location) {
    let zone = locale || "en-US";
    let matchTime = new Date(match);
    let time = matchTime.toLocaleString(zone, { timeZone: location});
    return time;
  }