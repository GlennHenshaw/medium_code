
//
// Customizing Axes
// Code from the medium post: https://medium.com/@ghenshaw.work/customizing-axes-in-d3-js-99d58863738b
//

// Margin convention
const margin = {top: 20, right: 20, bottom: 20, left: 10};
const width = 500 - margin.left - margin.right,
      height = 300 - margin.top - margin.bottom;


const svg = d3.select("body").append("svg")
              .attr("width", width + margin.left + margin.right)
              .attr("height", height + margin.top + margin.bottom)
              .append("g")
              .attr("transform", `translate(${margin.left},${margin.top})`);


const min_data = 0, max_data = 10000;


let xScale = d3.scaleLinear()
               .domain([min_data, max_data])
               .range([0, width]);

let xAxisGenerator = d3.axisBottom(xScale);

// Customizations using the axis generator

xAxisGenerator.ticks(3);
xAxisGenerator.tickValues([3000,5000,9000]);
xAxisGenerator.tickFormat((d,i) => ['A','B','C'][i]);
xAxisGenerator.tickSize(-200);


let xAxis= svg.append("g")
              .call(xAxisGenerator);

// Customizations using the axis after it is called
xAxis.attr("transform",`translate(${0},${height})`);
xAxis.select(".domain")
     .attr("stroke","#E04836")
     .attr("stroke-width","10")
     .attr("opacity",".6")
     .attr("stroke-dasharray","4");
xAxis.selectAll(".tick text")
     .attr("font-size","20")
     .attr("rotate","15")
     .attr("font-family","cursive");
xAxis.selectAll(".tick line")
     .attr("stroke","steelBlue");
xAxis.select(":nth-child(3) line")
     .attr("stroke-width","10");

