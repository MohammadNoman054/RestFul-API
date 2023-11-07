$(function () {

  var $informations = $("#information");

  $.ajax({
    type: "GET",
    url: "https://jsonplaceholder.typicode.com/todos/2",
    success: function (informations) {
      $informations.append("<li> ID: " + informations.id + "  Title: " + informations.title + " completed: " + informations.completed + "  <button id='del'>Delete</button> </li>");
    },
    error: function () {
      informations.innerHTML("Error! Can't get Data From API.")
    }
  });

  $("#button").on("click", function () {
    var information = {
      id: $("#id").val(),
      title: $("#title").val(),
      completed: $("#completed").val()
    };


    $.ajax({
      type: "POST",
      url: "https://jsonplaceholder.typicode.com/todos/",
      data: information,
      success: function (newInformation) {
        $informations.append("<li> ID: " + newInformation.id + "  Title: " + newInformation.title + " completed: " + newInformation.completed + "  <button id ='del'>Delete</button>"+"</li>");
      },
      error: function () {
        alert("ERROR!")
      }
    });
  });


  $("#del").on("click", function () {
    var $li = $(this).closest("li"); 

    $.ajax({
      type: "DELETE",
      url: "https://jsonplaceholder.typicode.com/todos/",
      success: function () {
        $li.remove();
      },
      error: function () {
        alert("ERROR!")
      }
    });
  });

});






