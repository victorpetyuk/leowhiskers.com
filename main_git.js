fred = new Fred("your api key");

var reverseRepoDict = {

}

var date;
var value;

fred.getSeriesObservations({series_id: 'RRPONTSYD'}, function(error, result) {
    for (var i = 0; i < result["observations"].length; i++) {
        if (result["observations"][i]["value"] != ".") {
            date = result["observations"][i]["date"]
            value = result["observations"][i]["value"]
            reverseRepoDict[date] = value
        }
    } 
})

const ctx = document.getElementById('myChart').getContext("2d");

var labels = Object.keys(reverseRepoDict)

setTimeout(() => {console.log(reverseRepoDict)}, 1000)

var reverseRepoChart = new Chart(myChart, {
    type:"line",
    data:{
        labels:[],
        datasets:[]
    },
    options: {}
})