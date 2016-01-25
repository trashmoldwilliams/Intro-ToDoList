var Task = function (name, description, dueDate, priority, status){
  this.name = name;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
  this.status = status;
};

Task.prototype.completeTask = function () {
  return this.status = "Complete";
};

$(function() {
  $('form#createTask').submit(function(event) {
    event.preventDefault();
    var taskEntry = $('input#taskEntry').val();
    var currentTask = new Task (taskEntry);
    $('ul#toDoList').append("<li><span class='current'>" + currentTask.name + "</span></li>");

    $('.current').last().click(function(){
      $(this).addClass("strikeThrough");
    });

  });
});
