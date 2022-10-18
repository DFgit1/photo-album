$(document).ready(function () {

    $("#submit_btn").click(function () {
        let userName = $("#userName").val();
        let img_type = $("#img_type").val();
        let comment = $("#comment").val();


        console.log(userName, img_type, comment);

        if (userName.length <= 6) {
            $(".hidden-u").show();
         
            return;
        }

        if (img_type === "none") {
            $(".hidden-img").show();
            return;
        }

        if (comment === "") {
            $(".hidden-comment").show();
            return;
        }
        
    })
    
});


 