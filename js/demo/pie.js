var pieData = {
    labels: ["Essentials", "Non Essentials", "On the Fence"],
    datasets: [{
        data: [55, 30, 15],
        backgroundColor: ['#079bd7', '#bc5656', '#35c576'],
        hoverBackgroundColor: ['#0690c6', '#a44141', '#2ba160'],
        hoverBorderColor: "rgba(234, 236, 244, 1)",
    }]
};

// Get the context of the canvas element we want to select
var ctx = document.getElementById("myPieChart").getContext("2d");
//new Chart(ctx).Pie(pieData);
/* New way to instantiate so that it do not thows Uncaught
 TypeError: (intermediate value).Pie is not a function" */
var myPieChart = new Chart(ctx, {
    type: 'pie',
    data: pieData,
    options: {
        maintainAspectRatio: false,
        tooltips: {
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10,
        },
        legend: {
            display: true
        },
    }

});