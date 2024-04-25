$(document).ready(function(){
    $('#todo-form').on('submit', function(event){ // Changed 'form' to '#todo-form'
        event.preventDefault(); // Prevent default form submission

        var item = $('#item').val(); // Retrieve input value
        var todo = {item: item}; // Create todo object
        console.log(todo);

        $.ajax({
            type: 'POST',
            url: '/todo',
            data: todo,
            success: function(data){
                location.reload(); // Reload the page on successful submission
            },
            error: function(err){
                console.error('Error:', err); // Log error if AJAX request fails
            }
        });
    });
    $('li').on('click',function(){
        var item = $(this).text().replace(/ /g,'-');
        $.ajax({
            type :'DELETE',
            url : '/todo/'+item,
            success: function(data){
                location.reload();
            },
            error : function(err){
                console.log(err);
            }
        })
    })
});
