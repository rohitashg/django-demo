$(function(){
    //$('.error-message').hide();
    $("#registerFORMID").validate({
        ignore:'',
		errorElement: 'div',
		errorClass: 'error-message error',
        onfocusout: function(element) {
            this.element(element);
        },
        rules: {
                "firstname": {required: true},
                "lastname": {required: true},
                "company_id" : {required :true},
                "contact_no": {required: true},
				"email": {required: true},
                "confirm_email": {required: true},
				"password": {required: true,isAlphaNum:true},
                "confirm_password": {required: true,isAlphaNum:true,equalTo: "#passwordID"},
				"is_agree":{terms:true}
        },
        messages: {
            confirm_password:{                
                equalTo: "Password and confirm password do not match."
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
            $('#registerSubmitID').attr('disabled','disabled');
            form.submit();
        },
        
    });
});


