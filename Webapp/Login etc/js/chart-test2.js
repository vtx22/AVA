var ctx = document.getElementById('myChart2');
var myChart = new Chart(ctx, {
    type: 'line',
    
    data: {
        labels: ['Januar', 'Februar', 'Maerz', 'April', 'Mai', 'Juni'],
        datasets: [{
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: 'rgba(18, 216, 250, 0.1)',
            borderColor: 'rgba(18, 216, 250, 0.5)',
            borderWidth: 1,
            labels: ['Temperatur']
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: true
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                },
                gridLines: {
                    color: 'rgba(255,255,255,0.05)'
                }
            }],
            xAxes: [{
                gridLines: {
                    color: 'rgba(255,255,255,0.05)'
                }
            }]
        }
    }
});