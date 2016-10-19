
var number2 = .45359237
var multiply = function(number1, number2) {
  return number1 * number2;
};

$(document).ready(function() {
  $("form#convert").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#pounds").val());
    var result = (multiply(number1, number2));
    $("#output").text(result);
  });
});
