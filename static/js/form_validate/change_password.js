$(function(){
    $("#changePassFormId").validate({
        ignore:'',
        onfocusout: function(element) {
            this.element(element);
        },
        rules: {
                "old_password": {required: true,isAlphaNum:true},
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
