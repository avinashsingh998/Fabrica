function updateProduct(elem){
    var num = 0;
    $(".girls-card").hide();
    if($("#check-top").is(":checked")) { $(".girls-top-check").show(); num++ };
    if($("#check-jeans").is(":checked")) { $(".girls-jeans-check").show(); num++};
    if($("#check-bottoms").is(":checked")) { $(".girls-bottoms-check").show(); num++ };
    if($("#check-outwear").is(":checked")) { $(".girls-outwears-check").show(); num++ };
    if($("#check-shoes").is(":checked")) { $(".girls-shoes-check").show(); num++ };
    if($("#check-activewear").is(":checked")) { $(".girls-activewear-check").show(); num++ };

    if(num==0) $(".girls-card").show();
    console.log(num);    
}