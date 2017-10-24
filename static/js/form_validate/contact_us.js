$(function(){
    $("#ContactUsId").validate({
        ignore:'',
        errorElement: 'div',
        errorClass: 'error-message error',
        onfocusout: function(element) {
            this.element(element);
        },
        rules: {
                "email": {required: true,email:true},
                "name": {required: true},
                "subject": {required: true},
                "message" : {required :true},
                "phone": {
                            required: true,
                            minlength: 12
                        },
        },
        success: function () {
            
        },
        submitHandler: function (form) {
            form.submit();
            $("#submitButonId").text('Submitting');
            $("#submitButonId").attr("disabled", "disabled");
        },
    });
});
