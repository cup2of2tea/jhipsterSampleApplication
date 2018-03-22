(function () {
    'use strict';

    angular
        .module('jhipsterSampleApplicationApp')
        .controller('lvl1Controller', lvl1Controller);

    lvl1Controller.$inject = ['$scope'];

    function lvl1Controller($scope) {
        var data = {
            "app": [
                {
                    "id": "1",
                    "name": "App 1",
                    "coord": {
                        "x": "0",
                        "y": "0"
                    },
                    "cat": "cat 1",
                    "dates_application": {
                        "start": "2017-02-01",
                        "end": "2018-08-06"
                    }
                },
                {
                    "id": "2",
                    "name": "App 2",
                    "coord": {
                        "x": "100",
                        "y": "0"
                    },
                    "cat": "cat 1",
                    "dates_application": {
                        "start": "2017-02-01",
                        "end": "2018-08-06"
                    }
                },
                {
                    "id": "3",
                    "name": "App 3",
                    "coord": {
                        "x": "0",
                        "y": "100"
                    },
                    "cat": "cat 2",
                    "dates_application": {
                        "start": "2017-02-01",
                        "end": "2018-08-06"
                    }
                },
                {
                    "id": "4",
                    "name": "App 4",
                    "coord": {
                        "x": "100",
                        "y": "100"
                    },
                    "cat": "cat 3",
                    "dates_application": {
                        "start": "2017-02-01",
                        "end": "2018-08-06"
                    }
                }
            ],
            "links": [
                {
                    "id": "l1",
                    "name": "Link 1",
                    "app_src_id": "1",
                    "app_dest_id": "2",
                    "dates_application": {
                        "start": "2017-02-01",
                        "end": "2018-08-06"
                    }
                },
                {
                    "id": "l2",
                    "name": "Link 2",
                    "app_src_id": "2",
                    "app_dest_id": "1",
                    "dates_application": {
                        "start": "2017-02-01",
                        "end": "2018-08-06"
                    }
                },
                {
                    "id": "l3",
                    "name": "Link 3",
                    "app_src_id": "1",
                    "app_dest_id": "3",
                    "dates_application": {
                        "start": "2017-02-01",
                        "end": "2018-08-06"
                    }
                },
                {
                    "id": "l4",
                    "name": "Link 4",
                    "app_src_id": "1",
                    "app_dest_id": "4",
                    "dates_application": {
                        "start": "2017-02-01",
                        "end": "2018-08-06"
                    }
                }
            ]

        };


        function initBoxes(boxes) {
            g.selectAll("rect")
                .data(boxes)
                .enter()
                .append('rect')
                .attr('x', function (box) { return box.coord.x1; })
                .attr('y', function (box) { return box.coord.y1; })
                .attr('stroke', 'black')
                .attr('stroke-width', 1)
                .attr('fill', 'white')
                .classed('draggable', 'true')
                .classed('box', 'true')
                .attr('width', function (box) { return box.width; })
                .attr('height', function (box) { return box.height; })
                .call(drag);
        }   

        function initLinks(links) {
            g.selectAll("line")
                .data(links)
                .enter()
                .append('line')
                .classed('link',true)
                .attr('x1', function (link) {
                    return (link.source.coord.x1 + link.source.coord.x2) / 2;
                })
                .attr('y1', function (link) {
                    return (link.source.coord.y1 + link.source.coord.y2) / 2;
                })
                .attr('x2', function (link) {
                    return (link.target.coord.x1 + link.target.coord.x2) / 2;
                })
                .attr('y2', function (link) {
                    return (link.target.coord.y1 + link.target.coord.y2) / 2;
                })
                .attr('stroke', 'black')
                .attr('stroke-width', '2');

        }

        function drawBoxes() {
            g.selectAll(".link");
            
        }


        var vm = this;
        var w = 1280,
            h = 800;

        var chartWidth = w;
        var chartHeight = h;


        var svg = d3.select("div.lvl1").append("svg")
            .attr("width", w)
            .attr("height", h);


        var g = svg.append('g');


        var boxes = data.app.map(function (box) {
           //todo kill this
        	box.width=30;
        	box.height=30;
        	box.coord = {
                x1: parseInt(box.coord.x),
                y1: parseInt(box.coord.y),
                x2: parseInt(box.coord.x) + box.width,
                y2: parseInt(box.coord.y) + box.height
            };
            

            return box;
        });

        var links = data.links.map(function (link) {
            link.source = boxes.find(function (box) {
                return box.id == link.app_src_id;
            });
            link.target = boxes.find(function (box) {
                return box.id == link.app_dest_id;
            });
            return link;
        });

       

        //Create the zoom behavior to set for the draw
        var zoom = d3.zoom().on('zoom', zoomed);

        //Function called on the zoom event. It translate the draw on the zoommed point and scale with a certain factor
        function zoomed() {
            g.attr("transform", "translate(" + d3.event.transform.x + "," + d3.event.transform.y + ")scale(" + d3.event.transform.k + ")");
        }

        svg.call(zoom);



        var drag = d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended);


        function dragstarted(d) {
            d3.select(this).raise().classed("active", true);
        }

        function dragged(d) {
            var x1 = d3.event.x-d.width/2;
            var y1 = d3.event.y-d.height/2;
            var x2 = x1 + d.width;
            var y2 = y1 + d.height;

            d.coord.x1 = x1;
            d.coord.y1 = y1;
            d.coord.x2 = x2;
            d.coord.y2 = y2;

            d3.selectAll("line")
                .attr('x1', function (link) {
                    return (link.source.coord.x1 + link.source.coord.x2) / 2;
                })
                .attr('y1', function (link) {
                    return (link.source.coord.y1 + link.source.coord.y2) / 2;
                })
                .attr('x2', function (link) {
                    return (link.target.coord.x1 + link.target.coord.x2) / 2;
                })
                .attr('y2', function (link) {
                    return (link.target.coord.y1 + link.target.coord.y2) / 2;
                })
                .attr('stroke', 'black')
                .attr('stroke-width', '1');

            d3.select(this).attr("x", d.coord.x1)
                .attr("y", d.coord.y1);

        }

        function dragended(d) {
            d3.select(this).classed("active", false);
        }

        initLinks(links);
        initBoxes(boxes);

        //svg.call(zoom).on("mousedown.zoom", null).on("dblclick.zoom", zoomIn);


    }
})();
