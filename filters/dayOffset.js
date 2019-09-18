module.exports = function(localeTime, matchTime) {
    let matchDate = new Date(matchTime)
    let localeDate  = new Date(localeTime)

    let matchDateISO = ISODate(matchDate)
    let localeDateISO = ISODate(localeDate)

    if ( localeDateISO !== matchDateISO ) {
        return localeDateISO
    } else {
        return
    }
  }

  function ISODate(data) {
	var dd = leadingZeroDate(data.getDate())
	var mm = leadingZeroDate(data.getMonth() + 1)
	var yyyy = data.getFullYear();

	return yyyy + "-" + mm + "-" + dd
}

function leadingZeroDate(data) {
	return (data < 10 ? '0' : '') + data;
}