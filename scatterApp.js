// set the dimensions and margins of the graph
var margin = {top: 20, right: 20, bottom: 50, left: 70},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var x = d3.scaleLinear().range([0, width]);
var y = d3.scaleLinear().range([height, 0]);

var svg = d3.select("#scatter").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
      "translate(" + margin.left + "," + margin.top + ")");

// Read the data
d3.csv("Data/PPIvsUnemployment.csv").then(function(data) {
  data.forEach(d => {
    d.ID = d.ID;
    d.State = d.State;
    d.FY = +d.FY;
    d.PPI = +d.PPI;
    d.UnemploymentRate = +d.UnemploymentRate;
  });

  x.domain(d3.extent(data, function(d) { return +d.UnemploymentRate}));
  y.domain([0, d3.max(data, function(d) { return +d.PPI})]);

  // Add x axis
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

  // Add x axis label
  svg.append("text")
    .style("text-anchor", "middle")
    .attr("transform", "translate("+ (width/2) +","+(height + margin.top + 20) + ")")
    .text("Unemployment Rate (%)");

  // Add y axis
  svg.append("g")
   .call(d3.axisLeft(y));

  // Add y axis label
  svg.append("text")
    .attr("text-anchor", "middle")
    .attr("transform", "rotate(-90)")
    .attr("y", 0 - margin.left)
    .attr("x",0 - (height / 2))
    .attr("dy", "1em")
    .text("Property Price Index")

  // List of groups
  var allGroup = d3.map(data, function(d){return(d.State)}).keys()

  // Add dots
  var dots = svg.append('g')
    .selectAll("dot")
    .data(data.filter(function(d){return d.State==allGroup[0]}))
    .enter()
    .append("circle")
      .attr("cx", function (d) { return x(+d.UnemploymentRate); } )
      .attr("cy", function (d) { return y(+d.PPI); } )
      .attr("r", 7)
      .style("fill", "#69b3a2")
      .style("opacity", 0.3)
      .style("stroke", "white")
  
  // Add a tooltip
    var toolTip = d3.tip()
    .attr("class", "tooltip")
    .offset([80, -60])
    .html(function(d) {
      return (`FY${d.FY}<br>Unemployment Rate: ${d.UnemploymentRate}%<br>Property Price Index: ${d.PPI}`);
    });

    dots.call(toolTip);

    dots.on("click", function(data) {
      toolTip.show(data, this);
    })

      .on("mouseout", function(data, index) {
        toolTip.hide(data);
      })


  // Add options to button
  d3.select("#selectButton")
    .selectAll('myOptions')
      .data(allGroup)
    .enter()
      .append('option')
    .text(function (d) { return d; })
    .attr("value", function (d) { return d; })
  
  // A function that update the chart
  function update(selectedGroup) {

    // Create new data with the selection?
    var dataFilter = data.filter(function(d){return d.State==selectedGroup})
    
    console.log(dataFilter)

    // Give these new data to update chart
    dots
        .data(dataFilter)
        .transition()
        .duration(1000)
          .attr("cx", function (d) { return x(+d.UnemploymentRate); } )
          .attr("cy", function (d) { return y(+d.PPI); } )
          .attr("r", 7)
          .style("fill", "#69b3a2")
          .style("opacity", 0.3)
          .style("stroke", "white")
  }

  // When the button is changed, run the updateChart function
  d3.select("#selectButton").on("change", function(d) {
      // recover the option that has been chosen
      var selectedOption = d3.select(this).property("value")
      // run the updateChart function with this selected option
      update(selectedOption)
})
});
