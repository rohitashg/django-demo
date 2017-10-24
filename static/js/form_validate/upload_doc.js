    

$(function(){
       $('#documentNameIds').getSelectBoxVal({"select_box_id":"documentNameIds"});
       $('#signatureTypeids').getSelectBoxVal({"select_box_id":"signatureTypeids"});
       
        $.validator.addMethod(
            "fileUploadPdf",
            function(value, element) {
                var fileName = value;
                var ext = fileName.split('.').pop();
                ext = ext.toLowerCase();
                var isFlag = true;
                if (ext!='pdf') {
                   isFlag = false;
                }
                return isFlag;
            }
        );
    
    $("#documentUploadForm").validate({
        ignore:'',
        onfocusout: function(element) {
            this.element(element); 
        },
        rules: {
                "name": {required: true},
                "signature_type": {required: true},
                "file_upload":{required:true,fileUploadPdf:true}
        },
        messages: {
			"file_upload":{required:"Please upload pdf file only.",
                           fileUploadPdf:"Please upload pdf file only."
                          },
		},
         errorPlacement: function(error, element) {
                    if (element.attr("name") == "name") {
                        error.insertAfter("#documentlistdiv");
                    }else if(element.attr("name") == "signature_type") {
                        error.insertAfter("#signatureListDiv");
                    }else if(element.attr("name") == "file_upload") {
                        error.insertAfter("#file-upload-inp");
                    }
                },
        invalidHandler: function(event, validator){
		  var errors = validator.numberOfInvalids();
        },        
        submitHandler: function (form) {
            form.submit();
            $("#submitButon").attr("disabled", "disabled");
        },
        
    });
});
