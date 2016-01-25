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
    var newName = $('input#newName').val();
    var newDescription = $('input#newDescription').val();
    var newDueDate = $('input#newDueDate').val();
    var newPriority = $('select#newPriority option:selected').text();

    var currentTask = new Task (newName, newDescription, newDueDate, newPriority);
    $('ul#toDoList').append("<li><span class='current'>" + currentTask.name + "</span></li>");

    $('.current').last().click(function(){
      $(this).append("<ul><li><span>Description: " +currentTask.description+"</span></li></ul>" )
    });

  });
});
