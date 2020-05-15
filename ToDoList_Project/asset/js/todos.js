//check off specific todos by a click
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});

//click on X to delete todo
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
  if(event.which === 13){
    //grab the value entered
    var toDoText = $(this).val();
    $(this).val(""); //val here acts like a setter and thus doesn't get any
    //create a new li and add it to ul using append() method which takes a html element
    $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + toDoText + "</li>");
  }
});

$(".fa-pencil-alt").on("click", function(){
  $("input[type='text']").fadeToggle();
});