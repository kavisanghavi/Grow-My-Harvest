window.onload = function counting(){
        var options = {
            useEasing : true,
            useGrouping : true,
            separator : ',',
            decimal : '.',
            prefix : '$',
            suffix : ''
        };
        var options2={
            useEasing : true,
            useGrouping : true,
            separator : ',',
            decimal : '.',
            prefix : '',
            suffix : ''
        }
        var first = new CountUp("fees", 0, 132, 0, 3, options);
        first.start();
        var second = new CountUp("refunds", 0, 120, 0, 3, options);
        second.start();
        var third = new CountUp("accounts", 0, 3, 0, 2, options2);
        third.start();
    }

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
//Drop Down div js


$(document).ready(function(){
    $(".more-details").click(function(){
        $(this).parent().siblings(".bank-fees-details").toggle("slide", { direction: "right" }, 3000);
        $(this).find('i:first').toggleClass("fa-chevron-circle-right fa-chevron-circle-down");
    });
});
