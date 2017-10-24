$(function(){
    $("#forgotPassword").validate({
        ignore:'',
        onfocusout: function(element) {
            this.element(element);
        },
        rules: {
                "email": {required: true,email:true},
        },
        success: function () {
            
        },
        submitHandler: function (form) {
            form.submit();
            $("#submitButon").attr("disabled", "disabled");
        },
        
    });
});
