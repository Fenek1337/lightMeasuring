let ctxFirst = document.getElementById("chartFirst");
let ctxSecond = document.getElementById("chartSecond");
let ctxThird = document.getElementById("chartThird");
let ctxFourth = document.getElementById("chartFourth");
let ctxFifth = document.getElementById("chartFifth");
let ctxSixth = document.getElementById("chartSixth");
let ctxSeventh = document.getElementById("chartSeventh");
let ctxEighth = document.getElementById("chartEighth");
let ctxNinth = document.getElementById("chartNinth");
let ctxTenth = document.getElementById("chartTenth");
let ctxEleventh = document.getElementById("chartEleventh");
let ctxTwelfth = document.getElementById("chartTwelfth");
let ctxThirteenth = document.getElementById("chartThirteenth");
let ctxFourteenth = document.getElementById("chartFourteenth");
let ctxFifteenth = document.getElementById("chartFifteenth");
let ctxSixteenth = document.getElementById("chartSixteenth");

const settings = {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            fontColor: "#ecf0f1",
            borderColor: "#FF5733",
            data: [],
            fill: false,
            pointStyle: 'circle',
            backgroundColor: '#FF5733',
            pointRadius: 3,
            pointHoverRadius: 5,
            lineTension: 0.3,
        }]
    },
    options: {
        responsive: true,
        legend: {
            display: false
        },
        tooltpis: {
            enabled: false
        },
        title: {
            fontColor: "#ecf0f1",
            display: true,
            text: "Simple title"
        },
        plugins: {
            datalabels: {
                backgroundColor: '#FF5733',
                borderRadius: 4,
                color: 'white',
                font: {
                    weight: 'bold'
                }
            }
        },
        scales: {
            xAxes: [{
                gridLines: {
                    color: "#576574"
                }
            }],
            yAxes: [{
                stacked: true,
                gridLines: {
                    color: "#576574"
                },
                ticks: {
                    fontColor: "#ecf0f1"
                }
            }]
        }
    }
}

let chartFirst = new Chart(ctxFirst, JSON.parse(JSON.stringify(settings)));
chartFirst.options.title.text = "Lux1";
let chartSecond = new Chart(ctxSecond, JSON.parse(JSON.stringify(settings)));
chartSecond.options.title.text = "Lux2";
let chartThird = new Chart(ctxThird, JSON.parse(JSON.stringify(settings)));
chartThird.options.title.text = "Lux3";
let chartFourth = new Chart(ctxFourth, JSON.parse(JSON.stringify(settings)));
chartFourth.options.title.text = "Lux4";
let chartFifth = new Chart(ctxFifth, JSON.parse(JSON.stringify(settings)));
chartFifth.options.title.text = "Lux5";
let chartSixth = new Chart(ctxSixth, JSON.parse(JSON.stringify(settings)));
chartSixth.options.title.text = "Lux6";
let chartSeventh = new Chart(ctxSeventh, JSON.parse(JSON.stringify(settings)));
chartSeventh.options.title.text = "Lux7";
let chartEighth = new Chart(ctxEighth, JSON.parse(JSON.stringify(settings)));
chartEighth.options.title.text = "Lux8";
let chartNinth = new Chart(ctxNinth, JSON.parse(JSON.stringify(settings)));
chartNinth.options.title.text = "Lux9";
let chartTenth = new Chart(ctxTenth, JSON.parse(JSON.stringify(settings)));
chartTenth.options.title.text = "Lux10";
let chartEleventh = new Chart(ctxEleventh, JSON.parse(JSON.stringify(settings)));
chartEleventh.options.title.text = "Lux11";
let chartTwelfth = new Chart(ctxTwelfth, JSON.parse(JSON.stringify(settings)));
chartTwelfth.options.title.text = "Lux12";
let chartThirteenth = new Chart(ctxThirteenth, JSON.parse(JSON.stringify(settings)));
chartThirteenth.options.title.text = "Lux13";
let chartFourteenth = new Chart(ctxFourteenth, JSON.parse(JSON.stringify(settings)));
chartFourteenth.options.title.text = "Lux14";
let chartFifteenth = new Chart(ctxFifteenth, JSON.parse(JSON.stringify(settings)));
chartFifteenth.options.title.text = "Lux15";
let chartSixteenth = new Chart(ctxSixteenth, JSON.parse(JSON.stringify(settings)));
chartSixteenth.options.title.text = "Lux16";

let socket = io.connect("http://localhost:4000");

// TODO: zrobić funkcję, która będzie sprawdzać czy przez Socket przechodzi dany topic.
// TODO: zrobić funkcję, która będzie zwracać średnie z godziny z pojedynczych/wszystkich czujników.

let manageCharts = function (chart, msg) {
    if (chart.data.labels.length != 15) {
        chart.data.labels.push("");
        chart.data.datasets.forEach(function (dataset) {
            dataset.data.push(msg.message);
        });
    } else {
        chart.data.labels.shift();
        chart.data.labels.push("");
        chart.data.datasets.forEach(function (dataset) {
            dataset.data.shift();
            dataset.data.push(msg.message);
        });
    }
    chart.update();
};

socket.on("connect", function () {
    socket.on("lux1", function (data) {

        manageCharts(chartFirst, data);

    });
    socket.on("lux2", function (data) {

        manageCharts(chartSecond, data);

    });
    socket.on("lux3", function (data) {

        manageCharts(chartFirst, data);

    });
    socket.on("lux4", function (data) {

        manageCharts(chartFirst, data);

    });
    socket.on("lux5", function (data) {

        manageCharts(chartFirst, data);

    });
    socket.on("lux6", function (data) {

        manageCharts(chartFirst, data);

    });
    socket.on("lux7", function (data) {

        manageCharts(chartFirst, data);

    });
    socket.on("lux8", function (data) {

        manageCharts(chartFirst, data);

    });
    socket.on("lux9", function (data) {

        manageCharts(chartFirst, data);

    });
    socket.on("lux10", function (data) {

        manageCharts(chartFirst, data);

    });
    socket.on("lux11", function (data) {

        manageCharts(chartFirst, data);

    });
    socket.on("lux12", function (data) {

        manageCharts(chartFirst, data);

    });
    socket.on("lux13", function (data) {

        manageCharts(chartFirst, data);

    });
    socket.on("lux14", function (data) {

        manageCharts(chartFirst, data);

    });
    socket.on("lux15", function (data) {

        manageCharts(chartFirst, data);

    });
    socket.on("lux16", function (data) {

        manageCharts(chartFirst, data);

    });
});