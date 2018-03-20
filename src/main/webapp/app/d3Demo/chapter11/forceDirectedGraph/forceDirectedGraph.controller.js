(function () {
    'use strict';

    angular
        .module('jhipsterSampleApplicationApp')
        .controller('ForceDirectedGraphController', ForceDirectedGraphController);

    ForceDirectedGraphController.$inject = ['$scope'];

    function ForceDirectedGraphController($scope) {
        var vm = this;
        var w = 1280,
            h = 800,
            z = d3.scaleOrdinal(d3.schemeCategory10);

        var chartWidth = w;
        var chartHeight = h;


        var svg = d3.select("div.forceDirecteGraphRoot").append("svg")
            .attr("width", w)
            .attr("height", h);

        d3.json("data/flare.json", function (root) {
            var links = d3.hierarchy(root).links().map(function (link) {
                delete link.source.children;
                delete link.source.parent;
                delete link.target.children;
                delete link.target.parent;
                return link;
            });
            var nodes = flatten(root).map(function (node) {
                delete node.children;
                delete node.parent;
                return node;
            });;
            var range = nodes.length;
            var links = d3.range(0, range).map(function () { return { source: nodes[~~d3.randomUniform(range)()], target: nodes[~~d3.randomUniform(range)()] } })
            console.log(links);
            //return;
            nodes = nodes.map(function (node) {
                node.label = node.name;
                return node;
            });
            var simulation = d3.forceSimulation()
                .force("link", d3.forceLink().id(function (d) {
                    return d.index
                }))
                .force("charge", d3.forceManyBody())
                .force("y", d3.forceY(0))
                .force("x", d3.forceX(0))
                .force("center", d3.forceCenter(chartWidth / 2, chartHeight / 2));


            var link = svg.selectAll("line")
                .data(links)
                .enter().insert("line")
                .style("stroke", "#999")
                .style("stroke-width", "1px");

            var node = svg.selectAll("circle.node")
                .data(nodes)
                .enter().append("circle")
                .attr("r", 4.5)
                .style("fill", function (d) { return z(d.parent && d.parent.name); })
                .style("stroke", "#000")
                .call(d3.drag()
                    .on("start", dragstarted)
                    .on("drag", dragged)
                    .on("end", dragended));;

            simulation.on("tick", function (e) {
                link.attr("x1", function (d) { return d.source.x; })
                    .attr("y1", function (d) { return d.source.y; })
                    .attr("x2", function (d) { return d.target.x; })
                    .attr("y2", function (d) { return d.target.y; });

                node.attr("cx", function (d) { return d.x; })
                    .attr("cy", function (d) { return d.y; });
            });

            simulation
                .force("link")
                .links(links);
            simulation
                .nodes(nodes);
            function dragstarted(d) {
                if (!d3.event.active) simulation.alphaTarget(0.3).restart();
                d.fx = d.x;
                d.fy = d.y;
            }

            function dragged(d) {
                d.fx = d3.event.x;
                d.fy = d3.event.y;
            }

            function dragended(d) {
                if (!d3.event.active) simulation.alphaTarget(0);
                d.fx = null;
                d.fy = null;
            }
        });

        function flatten(root) { // <-A
            var nodes = [];
            function traverse(node, depth) {
                if (node.children) {
                    node.children.forEach(function (child) {
                        child.parent = node;
                        traverse(child, depth + 1);
                    });
                }
                node.depth = depth;
                nodes.push(node);
            }
            traverse(root, 1);
            return nodes;
        }


    }
})();
