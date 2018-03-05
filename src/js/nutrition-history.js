import { addNavToPage } from "./nav-utils.js";
import { redirectIfLoggedOut } from "./login-utils.js";
import { makeInvisible, makeVisible } from "./recipe-util.js";


redirectIfLoggedOut()
addNavToPage()
const caloriesId = 'calorie-chart-wrapper'
const dvId = 'dv-chart-wrapper'
const calorieFilterId = 'calorie-filter'
const dvFilterId = 'dv-filter'



function caloriesHandler(){
    makeVisible(caloriesId)
    makeInvisible(dvId)
}

function dailyValueHandler(){
    makeVisible(dvId)
    makeInvisible(caloriesId)
}

function addFilterHandlers(){
    document.getElementById(calorieFilterId).addEventListener('click',caloriesHandler)
    document.getElementById(dvFilterId).addEventListener('click', dailyValueHandler)
}

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
            data: [2000, 2408, 2000, 2234, 2314, 1878, 1952],
        }]
    },

    // Configuration options go here
    options: {
        title: {
            display: true,
            text: "This Week's Caloric Intake",
            fontSize: 20,
        },
        legend: {
            display: false,
        },
        scales: {
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Calories',
                    fontSize: 20,
                },
                ticks: {
                    suggestedMin: 1800,
                    suggestedMax: 2500,
                    fontSize: 14,
                }
            }],
            xAxes: [{
                ticks: {
                    fontSize: 14,
                }
            }]
        },
        elements: {
            line: {
                tension:0.5
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
            backgroundColor: ['rgb(128, 191, 255)','rgb(51, 204, 204)' ,'rgb(255, 153, 102)'],
            borderColor: 'rgb(255, 99, 132)',
            data: [60, 45, 80],
        }]
    },

    // Configuration options go here
    options: {
        title: {
            display: true,
            text: "Today's Nutrition Breakdown",
            fontSize: 20,
        },
        scales: {
            yAxes: [{
                scaleLabel:{
                    display: true,
                    labelString: '% Daily Value',
                    fontSize: 20
                },
                ticks: {
                    suggestedMin: 0,
                    suggestedMax: 100,
                    fontSize: 14,
                }
            }],
            xAxes: [{
                scaleLabel:{
                    fontSize: 14,
                }
            }]
        },
        legend: {
            display: false,
        },
        
    }
});


addFilterHandlers()