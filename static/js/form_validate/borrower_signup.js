$(function(){
    $("#borrowersignup").validate({
        ignore:'',
		errorElement: 'div',
		errorClass: 'error-message error',
        onfocusout: function(element) {
            this.element(element);
        },
        rules: {
                "password": {required: true,isAlphaNum:true},
                "confirm_password": {required: true,isAlphaNum:true,equalTo: "#password"},
                "pin": {required: true,number:true,minlength:6,maxlength:6},
                "confirm_pin": {required: true,number:true,minlength:6,maxlength:6,equalTo: "#pin"},
				"is_agree":{terms:true}
        },
        messages: {
            confirm_password:{                
                equalTo: "Password and confirm password do not match."
            },
            confirm_pin:{                
                equalTo: "Pin and confirm pin does not match."
            }
        },
		errorPlacement: function (error, element) {
	
			if (element.attr("name") == "is_agree") {
				error.insertAfter($("#br_agreeError"));
			} else {
				error.insertAfter(element);
			}

		},
        success: function(){
            
        },
        submitHandler: function (form) {
            $('#boSubmitID').attr('disabled','disabled');
            form.submit();
        },
        
    });
});
