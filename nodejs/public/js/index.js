const settings = {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            fontColor: "#ecf0f1",
            borderColor: "rgba(51, 217, 178,1.0)",
            data: [],
            fill: false,
            pointStyle: 'circle',
            backgroundColor: 'rgba(51, 217, 178,1.0)',
            pointRadius: 3,
            pointHoverRadius: 5,
            lineTension: 0.3,
        }]
    },
    options: {
        responsive: true,
        layout: {
            padding: {
                right: 40
            }
        },
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
                backgroundColor: 'rgba(51, 217, 178,1.0)',
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

const ctx = document.querySelectorAll(".canvas");

let chartFirst, chartSecond, chartThird, chartFourth, chartFifth, chartSixth, chartSeventh, chartEighth, chartNinth, chartTenth, chartEleventh, chartTwelfth, chartThirteenth, chartFourteenth, chartFifteenth, chartSixteenth;

const charts = [chartFirst, chartSecond, chartThird, chartFourth, chartFifth, chartSixth, chartSeventh, chartEighth, chartNinth, chartTenth, chartEleventh, chartTwelfth, chartThirteenth, chartFourteenth, chartFifteenth, chartSixteenth];

for (var i = 0; i < charts.length; i++) {
    charts[i] = new Chart(ctx[i], JSON.parse(JSON.stringify(settings)));
    charts[i].options.title.text = `Lux${i + 1}`;
}
let socket = io();

// TODO: zrobić funkcję, która będzie sprawdzać czy przez Socket przechodzi dany topic.
// TODO: zrobić funkcję, która będzie zwracać średnie z godziny z pojedynczych/wszystkich czujników.

let manageCharts = function (chart, msg) {
    if (chart.data.labels.length != 5) {
        chart.data.labels.push("");
        chart.data.datasets.forEach(function (dataset) {
            dataset.data.push(msg);
        });
    } else {
        chart.data.labels.shift();
        chart.data.labels.push("");
        chart.data.datasets.forEach(function (dataset) {
            dataset.data.shift();
            dataset.data.push(msg);
        });
    }
    chart.update();
};

socket.on("connect", () => {
    socket.on("lux", (data) => {
        manageCharts(charts[data.sensorShort - 1], data.measurement);
    });
});