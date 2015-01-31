var convertToHTML5DateString = function (dateObj){
	var year = dateObj.getFullYear();
	var month = addZero(dateObj.getMonth() + 1);
	var day = addZero(dateObj.getDate());
	var hour = addZero(dateObj.getHours());
	var minute = addZero(dateObj.getMinutes());
	return year + '-' + month + '-' + day + 'T' + hour + ':' + minute;
}

var addZero = function(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}