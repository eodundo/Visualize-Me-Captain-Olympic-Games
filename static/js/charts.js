//Part 1
// var trace1 = {
//   x: ["beer", "wine", "martini", "margarita",
//     "ice tea", "rum & coke", "mai tai", "gin & tonic"],
//   y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//   type: "bar"
// };

// var data = [trace1];

// var layout = {
//   title: "Bar Chart"
// };

// Plotly.newPlot("plot", data, layout);


// // Part 2 - Adding attributes
var trace1 = {
  x: ["beer", "wine", "martini", "margarita",
      "ice tea", "rum & coke", "mai tai", "gin & tonic"],
  y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
  type: "bar"
};

//console.log("abc")

var data = [trace1];

var layout = {
  title: "'Bar' Chart",
  xaxis: { title: "Drinks"},
  yaxis: { title: "% of Drinks Ordered"}
};

Plotly.newPlot("plot", data, layout);


// // Part 3 - Line Chart
d3.json("http://127.0.0.1:5000/woman").then(function(data) {
    console.log(data);
    var trace1 = {
      x: data.Games,
      y: data.W_Count,
      type: "line"
    };
    
    var data = [trace1];
    
    var layout = {
      title: "Line Chart",
    };
    
    Plotly.newPlot("plot2", data, layout);
  });


// // Part 4 - Broken Pie Chart
// var trace1 = {
//   x: ["beer", "wine", "martini", "margarita",
//       "ice tea", "rum & coke", "mai tai", "gin & tonic"],
//   y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//   type: "pie"
// };

// var data = [trace1];

// var layout = {
//   title: "'Bar' Chart",
// };

// Plotly.newPlot("plot", data, layout);


// // Part 5 - Working Pie Chart
// var trace1 = {
//   labels: ["beer", "wine", "martini", "margarita",
//       "ice tea", "rum & coke", "mai tai", "gin & tonic"],
//   values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//   type: 'pie'
// };

// var data = [trace1];

// var layout = {
//   title: "'Pie' Chart",
// };

// Plotly.newPlot("plot3", data, layout);

// line of min and max ages

d3.json("http://127.0.0.1:5000/age").then(function(data) {
    console.log(data);
    var trace1 = {
      x: data.Games,
      y: data.min_ages,
      type: "line",
      name: "Youngest"
    };
    var trace2 = {
      x: data.Games,
      y: data.max_ages,
      type: "line",
      name: "Oldest"
    };
    var data = [trace1,trace2];
    
    var layout = {
      title: "Youngest and Oldest Olympians",
    };
    
    Plotly.newPlot("plot3", data, layout);
  });
