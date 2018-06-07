$(document).ready(function () {

  $("form#ourForm").submit(function(event) {
    event.preventDefault();
    var input = $("#field").val();
    var result = encode(input);
    $("#result").text(result);
    $("#square").show();
  });

});


function encode(message) {
  var properMessage = message.replace(/[\s\W\d]/gi, "").toLowerCase();
  var messageSquared = Math.ceil(Math.sqrt(properMessage.length));
  var rows = messageSquared;
  var columns = messageSquared;
  var rowIndex = 0;
  var columnIndex = 0;
  var messageArray = properMessage.split("");

  console.log(messageSquared);

  while(rowIndex <= rows) {
    for(i = 0; i < message.length; i++) {
      $("#square").append("<tr><td>" + messageArray[i] + "</td></tr>");
      rowIndex += 1;
    }
  }
}
