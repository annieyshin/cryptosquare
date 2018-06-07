$(document).ready(function () {

  $("form#ourForm").submit(function(event) {
    event.preventDefault();
    var input = $("#field").val();
    encode(input);
    $("#square").show();
  });

});


function encode(message) {
  var properMessage = message.replace(/[\s\W\d]/gi, "").toLowerCase();
  var messageSquared = Math.ceil(Math.sqrt(properMessage.length));
  var messageArray = properMessage.split("");
  var table = document.getElementById("square");
  var index = 0;

  for(i = 0; i < messageSquared; i++) {
    table.insertRow(i);

  }

  for(i = 0; i < messageSquared; i++) {
    var row = document.getElementById("square").rows[i];
    for(j = 0; j < messageSquared; j++) {
      row.insertCell(j);
    }
  }

  $("td").each(function() {
    $(this).text(messageArray[index])
    index++;
  });

}
