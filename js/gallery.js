$(document).ready(function(){        
    $('li img').on('click',function(){
        var src = $(this).attr('src');
        var img = '<img src="' + src + '" class="img-responsive"/>';
        
        // adds the previous and next buttons
        var index = $(this).parent('li').index();   
        
        var html = '';
        html += img;                
        html += '<div style="height:25px;clear:both;display:block;">';
        html += '<a class="controls next" href="'+ (index+2) + '">next &raquo;</a>';
        html += '<a class="controls previous" href="' + (index) + '">&laquo; prev</a>';
        html += '</div>';
        
        $('#myModal').modal();
        $('#myModal').on('shown.bs.modal', function(){
            $('#myModal .modal-body').html(html);
            //new code
            $('a.controls').trigger('click');
        })
        $('#myModal').on('hidden.bs.modal', function(){
            $('#myModal .modal-body').html('');
        });       
   });  
})
        
// makes the previous and next buttons funcion         
$(document).on('click', 'a.controls', function(){
    var index = $(this).attr('href');
    var src = $('ul.row li:nth-child('+ index +') img').attr('src');             
    
    $('.modal-body img').attr('src', src);
    
    var newPrevIndex = parseInt(index) - 1; 
    var newNextIndex = parseInt(newPrevIndex) + 2; 
    
    if($(this).hasClass('previous')){               
        $(this).attr('href', newPrevIndex); 
        $('a.next').attr('href', newNextIndex);
    }else{
        $(this).attr('href', newNextIndex); 
        $('a.previous').attr('href', newPrevIndex);
    }
    
    //hides the previous and next bottons at ends of the sequence
    var total = $('ul.row li').length + 1; 
    //hides next button
    if(total === newNextIndex){
        $('a.next').hide();
    }else{
        $('a.next').show()
    }            
    //hides prev button
    if(newPrevIndex === 0){
        $('a.previous').hide();
    }else{
        $('a.previous').show()
    }
        
    return false;
})

// javascript for mailchip form

// function($){
//     window.fnames = new Array(); 
//     window.ftypes = new Array();
//     fnames[0]='EMAIL';
//     ftypes[0]='email';
//     fnames[1]='FNAME';
//     ftypes[1]='text';
//     fnames[2]='LNAME';
//     ftypes[2]='text';
// }

// (jQuery));
// var $mcj = jQuery.noConflict(true);