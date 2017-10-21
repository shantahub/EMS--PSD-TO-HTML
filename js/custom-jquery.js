$(document).ready(function(){
		    $("#email").click(function(){
		        $(".b_user").removeClass('b_top');
		        if($("#pwd").val() == "")
		         $(".b_pass").addClass('b_top');
		    });
		    $("#pwd").click(function(){
		       $(".b_pass").removeClass('b_top');
		         if($("#email").val() == "")	
		         $(".b_user").addClass('b_top');
		    });
		      
			    $( "#datepicker" ).datepicker();
			 
		});