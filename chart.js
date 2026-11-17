export function createLineChart() {
    const ctx = document.getElementById('lineChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Yanvar', 'Febrar', 'Mart', 'April', 'May'],
            datasets: [{
                label: 'Monthly Sales',
                data: [3, 2, 3, 2, 3],
                borderColor: 'brown',
                backgroundColor: '#ffc80031',
                borderWidth: 2,
                fill: false
            }]
        },

        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true
                }
            }
        }
    });

    const ctc = document.getElementById('doughnutChart').getContext('2d');
    new Chart(ctc, {
        type: 'doughnut',
        data: {
            labels: ['Yanvar', 'Febrar', 'Mart', 'April', 'May'],
            datasets: [{
                label: 'Monthly Sales',
                data: [1, 4, 5, 5, 2],
                backgroundColor: '#1900ff31',
                borderColor: 'blue',
                borderWidth: 2,
                fill: false
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true
                }
            }
        }
    });

    const ctcc = document.getElementById('barChart').getContext('2d');
    new Chart(ctcc, {
        type: 'bar',
        data: {
            labels: ['Yanvar', 'Febrar', 'Mart', 'April', 'May'],
            datasets: [{
                label: 'Monthly Sales',
                data: [7, 9, 10, 20, 9],
                borderColor: 'aque',
                backgroundColor: '#00ffe131',
                borderWidth: 2,
                fill: false
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true
                }
            }
        }
    });

    const ctcx = document.getElementById('pieChart').getContext('2d');
    new Chart(ctcx, {
        type: 'pie',
        data: {
            labels: ['Yanvar', 'Febrar', 'Mart', 'April', 'May'],
            datasets: [{
                label: 'Monthly Sales',
                data: [3, 2, 3, 2, 3],
                borderColor: 'green',
                backgroundColor: '#3cd21b76',
                borderWidth: 2,
                fill: false
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true
                }
            }
        }
    });


    const ctxcc = document.getElementById('barrChart').getContext('2d');
    new Chart(ctxcc, {
        type: 'bar',
        data: {
            labels: ['Yanvar', 'Febrar', 'Mart', 'April', 'May', 'Iyun', 'Iyul'],
            datasets: [{
                label: 'Monthly Sales',
                data: [3, 4, -2, 3, 4, -3, -1],
                borderColor: 'red',
                backgroundColor: '#eeff0031',
                borderWidth: 2,
                fill: false
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true
                }
            }
        }
    });

    const ctxc = document.getElementById('areaChart').getContext('2d');
    new Chart(ctxc, {
        type: 'polarArea',
        data: {
            labels: ['Yanvar', 'Febrar', 'Mart', 'April', 'May', 'Iyun'],
            datasets: [{
                label: 'Monthly Sales',
                data: [4, 10, 3, 2, 3, 11],
                borderColor: 'red',
                backgroundColor: '#ff000031',
                borderWidth: 2,
                fill: false
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true
                }
            }
        }
    });



    const ccxx = document.getElementById('liineChart').getContext('2d');
    new Chart(ccxx, {
        type: 'line',
        data: {
            labels: ['Yanvar', 'Febrar', 'Mart', 'April', 'May'],
            datasets: [{
                label: 'Monthly Sales',
                data: [-3, 9, 3, 2, -9],
                borderColor: 'red',
                backgroundColor: '#ff000031',
                borderWidth: 2,
                fill: false
            },
                     {
                label: 'Monthly Sales',
                data: [8, -8, -1, 8, -9],
                borderColor: 'green',
                backgroundColor: '#04ff0031',
                borderWidth: 2,
                fill: false,
                yAxisID: 'y1'
            }
            ]
        },
        options: {
           responsive: true,
            plugins: {
                legend: {
                    display: true
                }
            }
        }
    });
}

