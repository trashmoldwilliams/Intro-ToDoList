var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();

if(dd<10) {
    dd='0'+dd
}

if(mm<10) {
    mm='0'+mm
}

today = yyyy+'-'+mm+'-'+dd;

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

Task.prototype.editDescription = function (property) {
  var edit = prompt("What would you like it to be?");
  this.description = edit;
};

Task.prototype.editDate = function (property) {
  var edit = prompt("What would you like it to be?");
  this.dueDate = edit;
};

Task.prototype.editPriority = function (property) {
  var edit = prompt("What would you like it to be?");
  this.priority = edit;
};



$(function() {
  $('form#createTask').submit(function(event) {
    event.preventDefault();
    var newName = $('input#newName').val();
    var newDescription = $('input#newDescription').val();
    var newDueDate = $('input#newDueDate').val();
    var newPriority = $('select#newPriority option:selected').text();


    var currentTask = new Task (newName, newDescription, newDueDate, newPriority);

    $('ul#toDoList').append("<li><button type='button' class='currentCompleteBtn btn btn-success'>Complete</button><button type='button' class='currentRemoveBtn btn btn-danger'>Remove</button><span class='current'>"+currentTask.name+"</span><ul class='init-hidden'><li data-prop='description'>Description: <span>"+currentTask.description+"</span><button type='button' class='editDescBtn'>Edit</button></li><li data-prop='dueDate'>Due Date: <span>"+currentTask.dueDate+"</span><button type='button' class='editDateBtn'>Edit</button></li><li data-prop='priority'>Priority: <span>"+currentTask.priority+"</span><button type='button' class='editPriBtn'>Edit</button></li></ul></li>");

    $('.current').last().click(function(){
      $(this).closest('li').find('ul').toggleClass('init-hidden');
    });

    $('.currentCompleteBtn').last().click(function(){
      $(this).closest('li').toggleClass('strikeThrough');
    });

    $('.currentRemoveBtn').last().click(function(){
      $(this).closest('li').remove();
    });

    $('.editDescBtn').last().click(function(){
      currentTask.editDescription();
      $(this).closest('li').find('span').text(currentTask.description);
    });
    $('.editDateBtn').last().click(function(){
      currentTask.editDate();
      $(this).closest('li').find('span').text(currentTask.dueDate);
    });

    $('.editPriBtn').last().click(function(){
      currentTask.editPriority();
      $(this).closest('li').find('span').text(currentTask.priority);
    });

  });
});
