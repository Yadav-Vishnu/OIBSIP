

setInterval(()=>{
    var date=new Date();

var time=date.toLocaleTimeString();

var day=date.toDateString();
$(".day").html(day);
$(".time").html(time);
},1000);


$('#Skills').on('click',()=>{
    $('#skills').css('display','block');
    $('#skills').addClass('animate__bounceIn');
    $('#intrest').css('display','none');
    $('#achivement').css('display','none');
    $('#projects').css('display','none');
    $('#contect').css('display','none');
    
})
$('#Intrest').on('click',()=>{
    $('#intrest').css('display','block');
    $('#intrest').addClass('animate__bounceIn');
    $('#skills').css('display','none');
    $('#achivement').css('display','none');
    $('#projects').css('display','none');
    $('#contect').css('display','none');
    
})
$('#Achivement').on('click',()=>{
    $('#achivement').css('display','block');
    $('#achivement').addClass('animate__bounceIn');
    $('#skills').css('display','none');
    $('#intrest').css('display','none');
    $('#projects').css('display','none');
    $('#contect').css('display','none');
    
})
$('#Project').on('click',()=>{
    $('#projects').css('display','block');
    $('#projects').addClass('animate__bounceIn');
    $('#skills').css('display','none');
    $('#intrest').css('display','none');
    $('#achivement').css('display','none');
    $('#contect').css('display','none');
    
})
$('#Contact').on('click',()=>{
    $('#contect').css('display','block');
    $('#contect').addClass('animate__bounceIn');
    $('#skills').css('display','none');
    $('#intrest').css('display','none');
    $('#achivement').css('display','none');
    $('#projects').css('display','none');
    
})






