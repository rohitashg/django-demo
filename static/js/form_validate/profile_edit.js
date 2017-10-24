$(function(){
    /** Here submit closing form edit data**/
        $.validator.addMethod(
            "phoneNumberValidator",
            function(value, element) {
                var foo = value.split("_").join("");
                var isFlag = true;
                if (foo.length < 12 && foo.length!=0) {
                   isFlag = false;
                }
                return isFlag;
            }
        );
        
    $("#profileEditFormId").validate({
        ignore:'',
        onfocusout: function(element) {
            this.element(element);
        },
        rules: {
                "firstname": {required: true},
                "lastname": {required: true},
                "contact_no": {required: true,phoneNumberValidator:true},
        },
        success: function () {
            
        },
        messages: {
            "contact_no":{ 
                minlength: "Please enter a valid phone number.",
                phoneNumberValidator:"Please enter a valid phone number.",
            },    
        },
        
        submitHandler: function (form) {
            form.submit();
            $("#submitButon").attr("disabled", "disabled");
        },
        
    });
});
