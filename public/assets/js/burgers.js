$(function(){
    $(".devour").on("click", function(event){
        var id = $(this).data("id");

        var eaten = {
            devoured: true
        };

        //send the put request
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: eaten
        }).then(
            function(){
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event){
        event.preventDefault();

        var newBurger = {
            name: $("#burg").val().trim()
        };

        // send to POST request
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function(){
                console.log("Inserted new Burger");
                // reload page to get update list
                location.reload();
            }
        );
    });
});