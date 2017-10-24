$(function(){
        $('#country-id').getSelectBoxVal({"select_box_id":"country-id"});
        $('#selectBoxIds').getSelectBoxVal({"select_box_id":"selectBoxIds"});
        
        $("#closingFormIDTc").validate({
            ignore:'',
            onfocusout: function(element) {
                this.element(element);
            },
            rules: {
                  "zip_code": {required: false,minlength:5,maxlength:5},
                  "city": {required: false,minlength:3,maxlength:30},
            },
            
            success: function () {
                
            },
            submitHandler: function (form) {
                $('.btn').attr('disabled',true);
                $(".btn").prop({'disabled':true})
                form.submit();
            },
        });
        
       
	});
