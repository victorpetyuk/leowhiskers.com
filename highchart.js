document.addEventListener('DOMContentLoaded', () => {
    Highcharts.chart('hcframe', {
        type: "spline",
        legend: {
            layout: "vertical",
            align: "right",
            verticalAlign: "middle"
        },
        xAxis: {
            categories: ['Apples', 'Bananas', 'Oranges']
        },
        series: [{
            name: 'John',
            data: [1, 2, 3]
        },
        {
            name: 'Jane',
            data: [2, 3, 3]
        }],
        title: {
            text: "Fruit Consumption"
        },
        plotOptions: {
            series: {
                cursor: "pointer",
                point: {
                    events: {
                        click: function () {
                            alert('Category: ' + this.category + ', value: ' + this.y);
                        }
                    }
                }
            }
        }
    });
});