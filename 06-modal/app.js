// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

$(".modal-btn").click(()=>{
    $(".modal-overlay").addClass("open-modal")
});

$(".close-btn").click(()=>{
    $(".modal-overlay").removeClass("open-modal")
});