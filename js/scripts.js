$(document).ready(function() {
  $("form#to-do").submit(function(event) {
    event.preventDefault();

    var inputtedTask = $("input#task-name").val();

    var newTask = { taskName: inputtedTask };

    $("ul#tasks").append("<li class='task'>" + newTask.taskName + "</li>");

    $("input#task").val("");
  $(".task").on('click', function() {
    $(this).appendTo($("#completed-tasks"));
  });
  });

});
