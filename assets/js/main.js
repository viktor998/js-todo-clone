

$(document).ready(function(){
    
    $('#add').click(function () {
        var template = $('.template li').clone();
        $('#onScreen').append(template);
        var userText = $('#userText').val();
        template.children('span').append(userText);
        $('#userText').val('');

        template.children('#delete').click(function(){
            $(this).parent().remove();
        });

        template.children('#edit').click(function(){
            var editText = $(this).siblings('span').text();
            console.log(editText);
            $(this).siblings('span').hide();
            var editedText= $(this).siblings('#changeText').val(editText).show();

            $(this).siblings('#changeText').keyup(function(e){
                if(e.which == 13){
                    template.children('span').show();
                    template.children('#changeText').hide();
                    template.children('span').text(editedText.val());
                }
            });
           
        });
        
    });
    
       
});

