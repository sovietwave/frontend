function random(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// a helper for formating strings
String.prototype.format = function(args) {
    var newStr = this;
    for (var key in args) {
        newStr = newStr.replace('{' + key + '}', args[key]);
    }
    return newStr;
}

$.fn.preloadImages = function() {
    this.each(function(){
        $('<img/>')[0].src = this;
    });
}

// this function helps handle an issue with comparing time as strings
function stringTimeInGap(time, lowerBorder, upperBorder) {
    if (lowerBorder <= "12:00" && upperBorder > "12:00") {
        return time >= lowerBorder && time < upperBorder;
    } else {
        if (time < "12:00") {
            return time < upperBorder;
        } else {
            return time >= lowerBorder;
        }
    }
}

