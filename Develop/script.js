var now = moment();
var currentDateEl = document.querySelector("#currentDay")
var timeColor1 = document.getElementById("color1")
var timeColor2 = document.getElementById("color2")
var timeColor3 = document.getElementById("color3")
var timeColor4 = document.getElementById("color4")
var timeColor5 = document.getElementById("color5")
var timeColor6 = document.getElementById("color6")
var timeColor7 = document.getElementById("color7")
var timeColor8 = document.getElementById("color8")



var timeArray = [timeColor1, timeColor2, timeColor3, timeColor4, timeColor5, timeColor6, timeColor7, timeColor8]


function currentDate() {
    var dateDisplay = now.format("ddd, LL");
    currentDateEl.textContent = dateDisplay;

};

var currentTime = function (taskEl) {

    for (var i = 0; i < timeArray.length; i++) {
        var index = timeArray[i]
        var time = moment().hour(9 + i)

        if (now.isAfter(time)) {
            console.log(index)
            console.log(time)
            index.classList.add("past");
        } else if (now.isSame(time, 'hour')) {
            index.classList.add("present")
        } else if (now.isBefore(time)) {
            index.classList.add("future")
        }

    };

};



currentDate();
currentTime();

setInterval(function () {
    currentDate()
    currentTime()
}, 600000);