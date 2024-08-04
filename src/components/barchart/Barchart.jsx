import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import './BarChart.css'
const BarChart = ({ data }) => {
    const chartRef = useRef();
    const containerRef = useRef();

    useEffect(() => {
        const svg = d3.select(chartRef.current);

        const renderChart = () => {
            const containerWidth = containerRef.current.clientWidth;
            const containerHeight = containerRef.current.clientHeight;
            const margin = { top: 20, right: 30, bottom: 30, left: 40 };

            const width = containerWidth - margin.left - margin.right;
            const height = containerHeight - margin.top - margin.bottom;

            const x = d3.scaleBand()
                .domain(d3.range(data.length))
                .range([margin.left, width - margin.right])
                .padding(0.1);

            const y = d3.scaleLinear()
                .domain([0, d3.max(data)])
                .nice()
                .range([height - margin.bottom, margin.top]);

            svg.attr("width", containerWidth)
                .attr("height", containerHeight);

            svg.selectAll("*").remove();

            svg.append("g")
                .attr("fill", "steelblue")
                .selectAll("rect")
                .data(data)
                .join("rect")
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
        };

        renderChart();

        const resizeObserver = new ResizeObserver(renderChart);
        resizeObserver.observe(containerRef.current);

        return () => resizeObserver.unobserve(containerRef.current);
    }, [data]);

    return (
        <div ref={containerRef} className='container'>
            <svg ref={chartRef} ></svg>
        </div>
    );
};

export default BarChart;
