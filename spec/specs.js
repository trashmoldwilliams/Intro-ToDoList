describe('Task', function(){
  it('Will build a task object', function(){
    var currentTask = new Task ("Go shopping", "Get groceries from the store", "Today", "Normal")
    expect(currentTask.name).to.equal("Go shopping");
    expect(currentTask.description).to.equal("Get groceries from the store");
    expect(currentTask.dueDate).to.equal("Today");
    expect(currentTask.priority).to.equal("Normal");
    expect(currentTask.status).to.equal();
  });
});

describe('completeTask', function(){
  it('Will mark task as complete', function(){
    var currentTask = new Task();
    expect(currentTask.completeTask()).to.equal("Complete");
  });
});

describe('setDesc', function(){
  it('Will set the description', function(){
    var currentTask = new Task();
    expect(currentTask.setDesc("Hello World")).to.equal("Hello World");
  })
})
