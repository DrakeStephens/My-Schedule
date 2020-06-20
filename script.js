var now = moment();
var currentDateEl = document.querySelector("#currentDay")

var nine = document.getElementById("9");
var ten = document.getElementById("10");
var eleven = document.getElementById("11");
var twelve = document.getElementById("12");
var one = document.getElementById("1");
var two = document.getElementById("2");
var three = document.getElementById("3");
var four = document.getElementById("4");




var timeArray = [nine, ten, eleven, twelve, one, two, three, four];
var tasks = {};



var loadTasks = function(){
    tasks = JSON.parse(localStorage.getItem("tasks"));

    $(".1").removeClass("hide")
    $(".2").removeClass("hide")
    $(".3").removeClass("hide")
    $(".4").removeClass("hide")
    $(".5").removeClass("hide")
    $(".6").removeClass("hide")
    $(".7").removeClass("hide")
    $(".8").removeClass("hide")

    if (!tasks) {
        tasks = {
        Nine:[],
        Ten:[],
        Eleven:[],
        Twelve:[],
        One:[],
        Two:[],
        Three:[],
        Four:[]
        }

    }

    $.each(tasks, function(list,arr){
        arr.forEach(function(task){
            createTask(task.text, list)
        })
    })
}

$("#Nine").on("click", "p", function(){
    var taskText = $(this)
        .text()
        .trim()
    $(".1").addClass("hide")

    createTask(taskText , "Nine");
    tasks.Nine.push({
        text: taskText
      });
    saveTasks();
})

$("#Ten").on("click", "p", function(){
    var taskText = $(this)
        .text()
        .trim()
    $(".2").addClass("hide")
    createTask(taskText , "Ten");
    tasks.Ten.push({
        text: taskText
      });
    saveTasks();
})


$("#Eleven").on("click", "p", function(){
    var taskText = $(this)
        .text()
        .trim()
    $(".3").addClass("hide")
    createTask(taskText , "Eleven");
    tasks.Eleven.push({
        text: taskText
      });
    saveTasks();
})


$("#Twelve").on("click", "p", function(){
    var taskText = $(this)
        .text()
        .trim()
    $(".4").addClass("hide")
    createTask(taskText , "Twelve");
    tasks.Twelve.push({
        text: taskText
      });
    saveTasks();
})

$("#One").on("click", "p", function(){
    var taskText = $(this)
        .text()
        .trim()
    $(".5").addClass("hide")
    createTask(taskText , "One");
    tasks.One.push({
        text: taskText
      });
    saveTasks();
})

$("#Two").on("click", "p", function(){
    var taskText = $(this)
        .text()
        .trim()
    $(".6").addClass("hide")
    createTask(taskText , "Two");
    tasks.Two.push({
        text: taskText
      });
    saveTasks();
})

$("#Three").on("click", "p", function(){
    var taskText = $(this)
        .text()
        .trim()
    $(".7").addClass("hide")
    createTask(taskText , "Three");
    tasks.Three.push({
        text: taskText
      });
    saveTasks();
})

$("#Four").on("click", "p", function(){
    var taskText = $(this)
        .text()
        .trim()
    $(".8").addClass("hide")
    createTask(taskText , "Four");
    tasks.Four.push({
        text: taskText
      });
    saveTasks();
})


var createTask = function(taskText, taskList) {
    var taskLi = $("<li>").addClass("list-group-item");
    
    var taskP = $("<span>")
      .addClass("m-1")
      .text(taskText);
  

    taskLi.append(taskP);

    $("#" + taskList).append(taskLi);

};



$(".list-group").on("click", "span", function(){
    var text = $(this)
      .text()
      .trim();
    
      var textInput = $("<textarea>")  
    .addClass("form-control")
    .val(text);
    
    $(this).replaceWith(textInput);
    textInput.trigger("focus");
  });



$(".list-group").on("blur","textarea",function(){
    var text = $(this)
        .val()
        .trim();
    
    var status = $(this)
        .closest(".list-group")
        .attr("id")
        .replace("list-", "");

    var index = $(this)
        .closest(".form-control")
        .index();
        tasks[status][index].text = text;
        saveTasks();

    var taskP = $("<span>")
        .addClass("m-1")
        .text(text);
    
    $(this).replaceWith(taskP);
});

function saveTasks(){
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

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
            index.className = "";
            index.classList.add("past");
        } else if (now.isSame(time, 'hour')) {
            index.className = "";
            index.classList.add("present")
        } else if (now.isBefore(time)) {
            index.className = "";
            index.classList.add("future")
        }
    };

};



loadTasks();
currentDate();
currentTime();

setInterval(function () {
    currentDate();
    currentTime();
}, 5000);



