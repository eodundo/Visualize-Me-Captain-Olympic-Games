function buildCharts(year){
    d3.csv("../new_athletes_events.csv").then(function(data) {
    var sampleYear = {};
    var newYear = data.filter(function(entry) {
    if (sampleYear[entry.Year]) {
    return false;
    }
        

}); 
        

      var resultArray = Object.keys(sampleYear).filter(x => x.Year == year); 
      var result = resultArray[0];
      var country = data.Team;
      console.log(resultArray);
      var gold = data.gold;
      var silver = data.silver;
      var bronze = data.bronze;

      // Building barcharts
      var yTicks = country.map(x =>` ${x}`);
      var barData = [
      {
        y:yTicks,
        x:gold,
        type:"bar",
        orientation:"h",

      }];
      var barLayout = {
        title:"type",
        margin:{t:30,l:150}
      };
      Plotly.newPlot("bar", barData, barLayout)
        });
    }



    function init(){
    var mySelect = d3.select("#selDataset");
    d3.csv("../new_athletes_events.csv").then(function(data) {
        console.log(data);

        
        var sampleYear = {};
        var newYear = data.filter(function(entry) {
    if (sampleYear[entry.Year]) {
        return false;
    }
    sampleYear[entry.Year] = true;
    return true;
});
        console.log("Year", sampleYear);
        Object.keys(sampleYear).forEach((key)=>{
            mySelect.append("option")
            .text(key)
            .property("value", key);
        });
        
    var firstYear = 1896;
    buildCharts(firstYear);

    var sampleTeam = {};
        var newTeam = data.filter(function(entry) {
    if (sampleTeam[entry.Team]) {
        return false;
    }
    sampleTeam[entry.Team] = true;
    return true;
});
        console.log("Team", sampleTeam);
        Object.keys(sampleTeam).forEach((key)=>{
            mySelect.append("option")
            .text(key)
            .property("value", key);
        });
        
    var firstTeam = "China";
    buildCharts(firstTeam);

    var sampleName = {};
        var newName = data.filter(function(entry) {
    if (sampleName[entry.Name]) {
        return false;
    }
    sampleName[entry.Name] = true;
    return true;
});
        console.log("Name", sampleName);
        Object.keys(sampleName).forEach((key)=>{
            mySelect.append("option")
            .text(key)
            .property("value", key);
        });
        
    var firstName = "A Dijiang";
    buildCharts(firstName);


    });
}
init();   