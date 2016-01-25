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
