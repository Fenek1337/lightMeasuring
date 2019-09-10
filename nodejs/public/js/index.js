const socket = io();

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

const settingsAdditional = settings;
settingsAdditional.data.datasets.borderColor = "rgba(252, 92, 101,1.0)";
settingsAdditional.data.datasets.backgroundColor = "rgba(252, 92, 101,1.0)";

const ctx = document.querySelectorAll(".canvas");

let chartFirst, chartSecond, chartThird, chartFourth, chartFifth, chartSixth, chartSeventh, chartEighth, chartNinth, chartTenth, chartEleventh, chartTwelfth, chartThirteenth, chartFourteenth, chartFifteenth, chartSixteenth, chartSeventeenth, chartEighteenth, chartNineteenth, chartTwentyth, chartTwentyFirst, chartTwentySecond;

const charts = [chartFirst, chartSecond, chartThird, chartFourth, chartFifth, chartSixth, chartSeventh, chartEighth, chartNinth, chartTenth, chartEleventh, chartTwelfth, chartThirteenth, chartFourteenth, chartFifteenth, chartSixteenth, chartSeventeenth, chartEighteenth, chartNineteenth, chartTwentyth, chartTwentyFirst, chartTwentySecond];

for (var i = 0; i < charts.length; i++) {
    if (i < 16) {
        charts[i] = new Chart(ctx[i], JSON.parse(JSON.stringify(settings)));
    } else {
        charts[i] = new Chart(ctx[i], JSON.parse(JSON.stringify(settingsAdditional)));
    }

    charts[i].options.title.text = `Lux${i + 1}`;
}

// TODO: zrobić funkcję, która będzie sprawdzać czy przez Socket przechodzi dany topic.
// TODO: zrobić funkcję, która będzie zwracać średnie z godziny z pojedynczych/wszystkich czujników.

function manageCharts(chart, msg) {
    if (chart.data.labels.length != 5) {
        chart.data.labels.push("");
        chart.data.datasets.forEach((dataset) => dataset.data.push(msg));
    } else {
        chart.data.labels.shift();
        chart.data.labels.push("");
        chart.data.datasets.forEach((dataset) => {
            dataset.data.shift();
            dataset.data.push(msg);
        });
    }
    chart.update();
};

for (let arr in queries) {
    queries[arr].reverse();
    for (let i = 0; i < queries[arr].length; i++) {
        charts[arr - 1].data.labels.push("");
        charts[arr - 1].data.datasets.forEach((dataset) => dataset.data.push(Number(queries[arr][i].value).toFixed(2)));
        charts[arr - 1].update();
    }
    i = 0;
}
const buttonLeft = document.getElementById("left");
const buttonRight = document.getElementById("right");
const buttonSubmit = document.getElementById("submit");
const form = document.getElementById("form");



socket.on("connect", () => {
    socket.on("lux", (data) => {
        manageCharts(charts[data.sensorShort - 1], data.measurement);
    });


});

let pos = "left";



form.addEventListener("submit", (event) => {
    event.preventDefault();
    const emailValues = {};
    for (let k = 0; k < charts.length; k++) {
        if (charts[k].data.datasets[0].data[charts[k].data.datasets[0].data.length - 1] === undefined) {
            emailValues[k] = "Value inside chart not found";
        } else {
            emailValues[k] = charts[k].data.datasets[0].data[charts[k].data.datasets[0].data.length - 1];
        }

    }
    emailValues.side = document.querySelector('input[name="side"]:checked').value;
    socket.emit("send-mail", emailValues);
});

buttonLeft.addEventListener("click", () => {
    if (pos === "right") {
        window.scrollBy(-window.innerWidth, 0);
        pos = "left";
        buttonLeft.classList.remove("red");
        buttonRight.classList.remove("red");
        buttonSubmit.classList.remove("red");
    }
});
buttonRight.addEventListener("click", () => {
    if (pos === "left") {
        window.scrollBy(window.innerWidth, 0);
        pos = "right";
        buttonLeft.classList.add("red");
        buttonRight.classList.add("red");
        buttonSubmit.classList.add("red");
    }
});


