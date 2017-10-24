$(function(){
    $("#resetPasswordForm").validate({
        ignore:'',
        onfocusout: function(element) {
            this.element(element);
        },
        rules: {
                "new_password": {required: true,isAlphaNum:true},
                "confirm_password": {required: true,isAlphaNum:true,equalTo: "#new-password"},
        },
        success: function () {
            
        },
        submitHandler: function (form) {
            form.submit();
            $("#submitButon").attr("disabled", "disabled");
        },
        
    });
});
