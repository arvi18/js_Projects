const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

$(".btn").click(()=>{
    function randomNum(){
        return Math.round(Math.random()*(hex.length-1));
    }
    let hexStr="#";
    for(let i=0; i<=5; i++){
        hexStr+=""+hex[randomNum()];
    }
    $('body').css("background-color", hexStr);
    $(".color").css('color', hexStr);
    $(".color").text(hexStr);
});