$(document).ready(function () {

  /* To create a new list */
  var $addlist = $("#addList"); // Span
  var $form = $("#form"); // Container form
  var $nameList = $("#name-list"); // Input
  var $saveBtn = $("#saveBtn"); // Button
  var $closeList = $("#closeAddList");
  var $containerListAndTask = $("#containerListAndTask");

  $addlist.click(function () {
    $addlist.addClass("d-none");
    $form.removeClass("d-none");
  });

  $closeList.click(function () {
    $addlist.removeClass("d-none");
    $form.addClass("d-none");
  });

  function createList() {
    if ($nameList.val()) {
      var $listname = $nameList.val();
      var $list = $("<div class='col-lg-2'><div class='container-task col-lg-12'><h5>" + $listname + "</h5> <ul id='addNewTask'><li><div class='d-none task-tarea col-lg-12' id='taskTarea'><textarea class='form-control' id='addNameTask' class='addNameTask' rows='3' placeholder='Añadir una tarea'></textarea><button type='button' class='btn btn-success addBtn' id='addBtn'>Añadir</button><button type='button' class='close' aria-label='Close' id='closeAddTask'><span aria-hidden='true'>&times;</span></button></div><span id='addTask' class='btn opacity text-white addTask col-lg-12'>Añadir una tarea</span></li></ul></div></div>");
      $containerListAndTask.prepend($list);
      $nameList.val('');
    }

    /* To crate a new task */
    var $addTask = $("#addTask"); // Añadir una nueva tarea el boton añadir una tarea
    var $taskTarea = $("#taskTarea"); // se muestra el textaater a y los botones
    var $closeTask = $("#closeAddTask"); // buton para  cerras el textarea
    var $addNewTask = $("#addNewTask"); // ul
    var $addNameTask = $("#addNameTask"); // textatear
    var $addTaskBtn = $("#addBtn"); //boton añadir

    $addTask.click(function () {
      $addTask.addClass("d-none");
      $taskTarea.removeClass("d-none");
    });

    $closeTask.click(function () {
      $addTask.removeClass("d-none");
      $taskTarea.addClass("d-none");
    });

    function createTask() {
      if ($addNameTask.val()) {
        var $taskName = $addNameTask.val();
        var $task = $("<li class='newTask col-lg-12'><div class='name col-lg-12'><div class='task'>" + $taskName + "</div></div></li>");
        $addNewTask.prepend($task);
        $addNameTask.val('');
      }

    };


    $addTaskBtn.click(createTask);
  };

  $saveBtn.click(createList);

  // /* To crate a new task */
  // var $addTask = $("#addTask"); // Añadir una nueva tarea el boton añadir una tarea
  // var $taskTarea = $("#taskTarea"); // se muestra el textaater a y los botones
  // var $closeTask = $("#closeAddTask"); // buton para  cerras el textarea
  // var $addNewTask = $("#addNewTask"); // ul
  // var $addNameTask = $("#addNameTask"); // textatear
  // var $addTaskBtn = $("#addBtn"); //boton añadir


  // $addTask.click(function () {
  //   $addTask.addClass("d-none");
  //   $taskTarea.removeClass("d-none");
  // });

  // $closeTask.click(function () {
  //   $addTask.removeClass("d-none");
  //   $taskTarea.addClass("d-none");
  // });

  // function createTask() {
  //   if ($addNameTask.val()) {
  //     var $taskName = $addNameTask.val();
  //     var $task = $("<li class='newTask col-lg-12'><div class='name col-lg-12'><div class='task'>" + $taskName + "</div></div></li>");
  //     $addNewTask.prepend($task);
  //   }
  // };

  // $saveBtn.click(createList);
  // $addTaskBtn.click(createTask);
});