import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const LogLineChart = ({ data }) => {
  const chartRef = useRef();

  useEffect(() => {
    const svg = d3.select(chartRef.current);
    svg.selectAll('*').remove(); // Clear the chart before drawing

    const width = 500;
    const height = 300;
    const margin = { top: 20, right: 30, bottom: 30, left: 40 };

    const x = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.x)])
      .range([margin.left, width - margin.right]);

    const y = d3.scaleLog()
      .domain([1, d3.max(data, d => d.y)])
      .range([height - margin.bottom, margin.top]);

    const xAxis = g => g
      .attr('transform', `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x).ticks(width / 80).tickSizeOuter(0));

    const yAxis = g => g
      .attr('transform', `translate(${margin.left},0)`)
      .call(d3.axisLeft(y));

    const line = d3.line()
      .x(d => x(d.x))
      .y(d => y(d.y));

    svg.append('g').call(xAxis);
    svg.append('g').call(yAxis);

    svg.append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', 'steelblue')
      .attr('stroke-width', 1.5)
      .attr('d', line);
  }, [data]);

  return <svg ref={chartRef} width="500" height="300"></svg>;
};

export default LogLineChart;