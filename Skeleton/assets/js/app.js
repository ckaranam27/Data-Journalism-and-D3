// D3 Scatterplot Assignment

// Students:
// =========
// Follow your written instructions and create a scatter plot with D3.js.
// When the browser window is resized, makeResponsive() is called.
d3.select(window).on("resize",makeResponsive);
// When the browser loads, makeResponsive() is called.
makeResponsive();

// if the SVG area isn't empty when the browser loads,
// remove it and replace it with a resized version of the chart
  var svgArea = d3.select("body").select("svg");
// clear svg is not empty
if (!svgArea.empty()){
    svgArea.remove();
}
 // SVG wrapper dimensions are determined by the current width and
    // height of the browser window.
    // var svgWidth = window.innerWidth;
    // var svgHeight = window.innerHeight;
    var svgWidth = 960;
    var svgHeight = 500;

    var margin = {
        top: 40,
        right: 40,
        bottom: 80,
        left:100
    };

    var width = svgWidth - margin.left - margin.right;
    var height = svgHeight -margin.top - margin.bottom;

      // Create an SVG wrapper, append an SVG group that will hold our chart,
    // and shift the latter by left and top margins.
    var chartGroup = svg.append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);
    // Initial Params
    var chosenXAxis = "poverty";
    var chosenYAxis = "healthcare";
     // function used for updating x-scale var upon click on axis label
     function xScale (demoData, chosenXAxis) {
         //create scales
         var xLinerScale = d3.scaleLinear()
         .domain([d3.min(demoData, d =>d[chosenXAxis]) * 0.8,
        d3.max(demoData, d => d[chosenXAxis] * 1.2)
         ])
         .range([0,width]);
         return xLinearScale;
     }

    }