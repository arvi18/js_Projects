let counter=$('#value');

let count=0;
$('.decrease').click(()=>{
    count--;
    counter.text(count);
});
$('.reset').click(()=>{
    count=0
    counter.text(count);
});
$('.increase').click(()=>{
    count++;
    counter.text(count);
});