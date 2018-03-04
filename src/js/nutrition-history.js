var ctx = document.getElementById('calorie-chart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        datasets: [{
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [2000, 2408, 1852, 2234, 2314, 1796, 1952],
        }]
    },

    // Configuration options go here
    options: {
        title: {
            display: true,
            text: 'Calorie History',
        },
        legend: {
            display: false,
        },
        elements: {
            line: {
                tension:.5
            }
        }
    }
});

var ctx = document.getElementById('nutrition-breakdown').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ["Carbs", "Protein", "Fat"],
        datasets: [{
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [10, 10, 10],
        }]
    },

    // Configuration options go here
    options: {
        title: {
            display: true,
            text: 'Nutrition Breakdown',
        },
        legend: {
            display: false,
        },
    }
});