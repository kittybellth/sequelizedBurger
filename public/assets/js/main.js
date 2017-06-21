$(document).ready(function() {

// Add event listener for adding burger
$("#add_burger").on("click", function(event){

    event.preventDefault();

    // Grab Burger name
    var newData = {
        burger: $("#exampleTextarea").val().trim()
    }
        // call Ajax to send data back to server.
        $.post("/", newData, function(res){

            // if the sent data is verified then reload the page
            if (res) {
                location.reload();
            
            // if the sent data fails to verify then alert to user.
            } else {
                $(".modal-title").text("Attention!!");
                $(".modal-p").html("C'mon... It's just a burger name." + '<i class=" em em-angry"></i>');
                $('#myModal').modal('toggle');
            }
        });
});

// Add event listener for adding a customer name
$(".devoured_it").on("click", function(event){

    event.preventDefault();

    // Grab id and Customer name
    var id = $(this).attr('value');
    var newData = {
        customer: $("#customer"+id).val().trim()
    }
        // call Ajax to send data back to server.
        $.ajax({
            url: '/' + id,
            type: 'PUT',
            data: newData,
            success: function(res) {

                // if the sent data is verified then reload the page                
                if (res) {
                    location.reload();

                // if the sent data fails to verify then alert to user.
                } else {
                    $(".modal-title").text("Caution!!");
                    $(".modal-p").html("Customer name is required." + '<i class=" em em-x"></i>');
                    $('#myModal').modal('toggle');
                }
            }
        });
});

});
