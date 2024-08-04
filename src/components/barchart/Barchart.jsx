import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const BarChart = ({ data }) => {
    const chartRef = useRef();

    useEffect(() => {
        const width = 1100;
        const height = 400;
        const margin = { top: 20, right: 30, bottom: 30, left: 40 };

        const x = d3.scaleBand()
            .domain(d3.range(data.length))
            .range([margin.left, width - margin.right])
            .padding(0.1);

        const y = d3.scaleLinear()
            .domain([0, d3.max(data)])
            .nice()
            .range([height - margin.bottom, margin.top]);

        const svg = d3.select(chartRef.current)
            .attr("width", width)
            .attr("height", height);

        svg.selectAll("*").remove();

        svg.append("g")
            .attr("fill", "steelblue")
            .selectAll("rect")
            .data(data)
            .join('rect')
            .attr("x", (d, i) => x(i))
            .attr("y", d => y(d))
            .attr("height", d => y(0) - y(d))
            .attr("width", x.bandwidth())
            .attr("rx", 12)
            .attr("ry", 12);

        svg.append("g")
            .attr("transform", `translate(0,${height - margin.bottom})`)
            .call(d3.axisBottom(x).tickFormat(i => i + 1).tickSizeOuter(0));

        svg.append("g")
            .attr("transform", `translate(${margin.left},0)`)
            .call(d3.axisLeft(y));
        // const parent = d3.select('.parent').style('display', 'flex');
        // const allOne = d3.selectAll('.one').style('width', (d, i) => i * 100 + 10 + "px").style('height', (d, i) => i * 200 + 10 + "px").style('border', '1px solid red').data([1, 34, 4, 5]).join('div').text(d => d);
    }, [data]);

    return (<>
        <svg ref={chartRef}></svg>
        {/* <div className='parent'>
            <div className="one"></div>
        </div> */}
    </>
    );
};

export default BarChart;