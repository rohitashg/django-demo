$(function(){
    $("#formForgotPin").validate({
        ignore:'',
        onfocusout: function(element) {
            this.element(element);
        },
        rules: {
                "new_pin": {required: true,minlength:6,maxlength:6},
                "confirm_pin": {required: true,minlength:6,maxlength:6,equalTo: "#new-pin"}
        },
        messages: {
            new_pin:{                
                minlength: "Pin must be 6 digit long.",
                maxlength: "Pin must be 6 digit long."
            },
            confirm_pin:{                
                minlength: "Pin must be 6 digit long.",
                maxlength: "Pin must be 6 digit long.",
                equalTo: "New pin and confirm pin does not match."
            }
        },
        success: function () {
            
        },
        submitHandler: function (form) {
            form.submit();
            $("#submitButon").attr("disabled", "disabled");
        },
        
    });
});
