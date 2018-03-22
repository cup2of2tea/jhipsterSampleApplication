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
                    "name": "Back-Office",
                    "coord": {
                        "x": "627",
                        "y": "23"
                    },
                    "cat": "backoffice",
                    "dates_application": {
                        "start": "2019-01-01",
                        "end": "2022-01-01"
                    },
                    "width": "200",
                    "height": "100"
                },
                {
                    "id": "2",
                    "name": "Manufacturing ERP",
                    "coord": {
                        "x": "962",
                        "y": "94"
                    },
                    "cat": "mrp",
                    "dates_application": {
                        "start": "2018-01-01",
                        "end": "2022-01-01"
                    },
                    "width": "200",
                    "height": "100"
                },
                {
                    "id": "3",
                    "name": "TMS",
                    "coord": {
                        "x": "291",
                        "y": "220"
                    },
                    "cat": "distribution",
                    "dates_application": {
                        "start": "2020-01-01",
                        "end": "2022-01-01"
                    },
                    "width": "200",
                    "height": "100"
                },
                {
                    "id": "4",
                    "name": "WMS",
                    "coord": {
                        "x": "533",
                        "y": "357"
                    },
                    "cat": "distribution",
                    "dates_application": {
                        "start": "2020-01-01",
                        "end": "2022-01-01"
                    },
                    "width": "200",
                    "height": "100"
                },
                {
                    "id": "5",
                    "name": "Legacy WMS",
                    "coord": {
                        "x": "904",
                        "y": "508"
                    },
                    "cat": "distribution",
                    "dates_application": {
                        "start": "2018-01-01",
                        "end": "2020-12-31"
                    },
                    "width": "200",
                    "height": "100"
                },
                {
                    "id": "6",
                    "name": "Legacy TMS",
                    "coord": {
                        "x": "382",
                        "y": "170"
                    },
                    "cat": "distribution",
                    "dates_application": {
                        "start": "2018-01-01",
                        "end": "2019-12-31"
                    },
                    "width": "200",
                    "height": "100"
                },
                {
                    "id": "7",
                    "name": "Legacy Back-Office",
                    "coord": {
                        "x": "551",
                        "y": "508"
                    },
                    "cat": "backoffice",
                    "dates_application": {
                        "start": "2018-01-01",
                        "end": "2019-12-31"
                    },
                    "width": "200",
                    "height": "100"
                }
            ],
            "links": [
                {
                    "id": "l1",
                    "name": "SAP/ALE",
                    "app_src_id": "2",
                    "app_dest_id": "7",
                    "dates_application": {
                        "start": "2018-01-01",
                        "end": "2019-12-31"
                    },
                    "interfaces":[
                        {
                            "name": "Material",
                            "master": "true"
                        },
                        {
                            "name": "Cost center",
                            "master": "true"
                        },
                        {
                            "name": "Business partners",
                            "master": "true"
                        },
                        {
                            "name": "Shipping Order",
                            "master": "false"
                        },
                        {
                            "name": "Invoice",
                            "master": "false"
                        }
                    ]
                },
                {
                    "id": "l2",
                    "name": "Point-To-Point Specific -SAP/ALE (CIF qRFC) - WMS",
                    "app_src_id": "2",
                    "app_dest_id": "5",
                    "dates_application": {
                        "start": "2018-01-01",
                        "end": "2020-12-31"
                    },
                    "interfaces":[
                        {
                            "name": "Outbound delivery",
                            "master": "false"
                        },
                        {
                            "name": "Inspection lot",
                            "master": "false"
                        },
                        {
                            "name": "Customer creation and update",
                            "master": "true"
                        },
                        {
                            "name": "Batch Master",
                            "master": "true"
                        }
                    ]
                },
                {
                    "id": "l3",
                    "name": "Point-To-Point Specific -SAP/ALE (CIF qRFC) - WMS",
                    "app_src_id": "7",
                    "app_dest_id": "5",
                    "dates_application": {
                        "start": "2018-01-01",
                        "end": "2020-12-31"
                    },
                    "interfaces":[
                        {
                            "name": "Stock movement",
                            "master": "false"
                        },
                        {
                            "name": "Inventory report",
                            "master": "false"
                        },
                        {
                            "name": "BOM",
                            "master": "true"
                        },
                        {
                            "name": "Batch Master",
                            "master": "true"
                        }
                    ]
                },
                {
                    "id": "l4",
                    "name": "Integration platform",
                    "app_src_id": "7",
                    "app_dest_id": "6",
                    "dates_application": {
                        "start": "2018-01-01",
                        "end": "2020-12-31"
                    },
                    "interfaces":[
                        {
                            "name": "Shipment",
                            "master": "false"
                        },
                        {
                            "name": "Purchase order",
                            "master": "false"
                        },
                        {
                            "name": "Logistics routes",
                            "master": "true"
                        }
                    ]
                },
                {
                    "id": "l5",
                    "name": "SAP/ALE",
                    "app_src_id": "2",
                    "app_dest_id": "1",
                    "dates_application": {
                        "start": "2019-01-01",
                        "end": "2021-12-31"
                    },
                    "interfaces":[
                        {
                            "name": "Material",
                            "master": "true"
                        },
                        {
                            "name": "Cost center",
                            "master": "true"
                        },
                        {
                            "name": "Business partners",
                            "master": "true"
                        },
                        {
                            "name": "Shipping Order",
                            "master": "false"
                        },
                        {
                            "name": "Internal orders",
                            "master": "false"
                        },
                        {
                            "name": "Inbound Delivery",
                            "master": "false"
                        }
                    ]
                },
                {
                    "id": "l6",
                    "name": "Point-To-Point Specific -SAP/ALE (CIF qRFC) - WMS",
                    "app_src_id": "2",
                    "app_dest_id": "4",
                    "dates_application": {
                        "start": "2020-01-01",
                        "end": "2021-12-31"
                    },
                    "interfaces":[
                        {
                            "name": "Outbound delivery",
                            "master": "false"
                        },
                        {
                            "name": "Inspection lot",
                            "master": "false"
                        },
                        {
                            "name": "Customer creation and update",
                            "master": "true"
                        },
                        {
                            "name": "Batch Master",
                            "master": "true"
                        }
                    ]
                },
                {
                    "id": "l7",
                    "name": "Point-To-Point Specific -SAP/ALE (CIF qRFC) - WMS",
                    "app_src_id": "1",
                    "app_dest_id": "4",
                    "dates_application": {
                        "start": "2019-01-01",
                        "end": "2021-12-31"
                    },
                    "interfaces":[
                        {
                            "name": "Stock movement",
                            "master": "false"
                        },
                        {
                            "name": "Inventory report",
                            "master": "false"
                        },
                        {
                            "name": "BOM",
                            "master": "true"
                        },
                        {
                            "name": "Batch Master",
                            "master": "true"
                        }
                    ]
                },
                {
                    "id": "l8",
                    "name": "Integration platform",
                    "app_src_id": "1",
                    "app_dest_id": "3",
                    "dates_application": {
                        "start": "2019-01-01",
                        "end": "2021-12-31"
                    },
                    "interfaces":[
                        {
                            "name": "Shipment",
                            "master": "false"
                        },
                        {
                            "name": "Purchase order",
                            "master": "false"
                        },
                        {
                            "name": "Logistics routes",
                            "master": "true"
                        }
                    ]
                }
            ]

        };

        var dates = [];
        for (var i = 2018; i <= 2021; i++) {
            dates.push(new Date(i, 0, 1));
        }

        $scope.valueDate = dates[0];


        function between(dateDeb, dateEnd, dateBetween) {
            return dateBetween >= dateDeb && dateBetween <= dateEnd;
        }


        function computeDisplayableObjects() {
            boxes = boxes.map(function (box) {
                if (between(box.dates_application.start, box.dates_application.end, $scope.valueDate)) {
                    box.display = true;
                } else {
                    box.display = false;
                }
                return box;
            });
            links = links.map(function (link) {
                if (between(link.dates_application.start, link.dates_application.end, $scope.valueDate)
                    && between(link.source.dates_application.start, link.source.dates_application.end, $scope.valueDate)
                    && between(link.target.dates_application.start, link.target.dates_application.end, $scope.valueDate)
                ) {
                    link.display = true;
                } else {
                    link.display = false;
                }
                return link;
            });
        }


        $scope.slider = {
            value: dates[0], // or new Date(2016, 7, 10) is you want to use different instances
            options: {
                stepsArray: dates,
                translate: function (date) {
                    if (date != null)
                        return date.getFullYear();
                    return '';
                },
                onChange: function () {
                    computeDisplayableObjects();
                    redraw();
                }
            }
        };

        function initBoxes(boxes) {
            var boxElements = g.selectAll("rect")
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

                boxElements.each(function(d){
                    this.classList.add(d.cat);
                });
        }


        function pointOnRect(x, y, minX, minY, maxX, maxY, validate) {
            //assert minX <= maxX;
            //assert minY <= maxY;
            if (validate && (minX < x && x < maxX) && (minY < y && y < maxY))
                return null;
            var midX = (minX + maxX) / 2;
            var midY = (minY + maxY) / 2;
            // if (midX - x == 0) -> m == ±Inf -> minYx/maxYx == x (because value / ±Inf = ±0)
            var m = (midY - y) / (midX - x);

            if (x <= midX) { // check "left" side
                var minXy = m * (minX - x) + y;
                if (minY <= minXy && minXy <= maxY)
                    return { x: minX, y: minXy };
            }

            if (x >= midX) { // check "right" side
                var maxXy = m * (maxX - x) + y;
                if (minY <= maxXy && maxXy <= maxY)
                    return { x: maxX, y: maxXy };
            }

            if (y <= midY) { // check "top" side
                var minYx = (minY - y) / m + x;
                if (minX <= minYx && minYx <= maxX)
                    return { x: minYx, y: minY };
            }

            if (y >= midY) { // check "bottom" side
                var maxYx = (maxY - y) / m + x;
                if (minX <= maxYx && maxYx <= maxX)
                    return { x: maxYx, y: maxY };
            }

            // edge case when finding midpoint intersection: m = 0/0 = NaN
            if (x === midX && y === midY) return { x: x, y: y };

            // Should never happen :) If it does, please tell me!
            return null;
        }


        function initLinks(links) {

            links = links.map(function (link) {
                var pointDeb = pointOnRect((link.target.coord.x1 + link.target.coord.x2) / 2,
                    (link.target.coord.y1 + link.target.coord.y2) / 2,
                    link.source.coord.x1 - 4, link.source.coord.y1 - 4,
                    link.source.coord.x2 + 4, link.source.coord.y2 + 4);
                var pointEnd = pointOnRect((link.source.coord.x1 + link.source.coord.x2) / 2,
                    (link.source.coord.y1 + link.source.coord.y2) / 2,
                    link.target.coord.x1 - 4, link.target.coord.y1 - 4,
                    link.target.coord.x2 + 4, link.target.coord.y2 + 4);
                link.coord = {};
                link.coord.x1 = pointDeb.x;
                link.coord.x2 = pointEnd.x;
                link.coord.y1 = pointDeb.y;
                link.coord.y2 = pointEnd.y;
                return link;
            });

            g.selectAll(".link")
                .data(links)
                .enter()
                .append('svg:path')
                .attr('d', function (link, i) {
                    var x1 = link.coord.x1;
                    var y1 = link.coord.y1;
                    var x2 = link.coord.x2;
                    var y2 = link.coord.y2;

                    return 'M ' + x1 + ',' + y1 + ' L ' + x2 + ',' + y2 + ''
                })
                .classed('link', true)
                .attr("marker-end", "url(#marker_arrow)")
                .attr('stroke', 'black')
                .attr('stroke-width', '2');


        }


        function initLabelLinks(links) {
            g.selectAll(".gLink")
                .data(links)
                .enter()
                .append("text")
                .attr("font-family", "Arial, Helvetica, sans-serif")
                .attr("x", function (d) {
                    if (d.coord.x2 > d.coord.x1) {
                        return (d.coord.x1 + (d.coord.x2 - d.coord.x1) / 2 - 10);
                    }
                    else {
                        return (d.coord.x2 + (d.coord.x1 - d.coord.x2) / 2 + 10);
                    }
                })
                .attr("y", function (d) {
                    if (d.coord.y2 > d.coord.y1) {
                        return (d.coord.y1 + (d.coord.y2 - d.coord.y1) / 2 - 10);
                    }
                    else {
                        return (d.coord.y2 + (d.coord.y1 - d.coord.y2) / 2 + 10);
                    }
                })
                .classed("gLink", true)
                .attr("fill", "Black")
                .style("font", "normal 14px Arial")
                .attr("dy", ".35em")
                .text(function (d) { return d.name; });
        }


        function initLabelBoxes(boxes) {

            g.selectAll(".gBox")
                .data(boxes)
                .enter()
                .append("text")
                .attr("font-family", "Arial, Helvetica, sans-serif")
                .attr('x', function (box) { return box.coord.x1 + box.width / 2; })
                .attr('y', function (box) { return box.coord.y1 + box.height / 2; })
                .classed("gBox", true)
                .attr("fill", "Black")
                .style("font", "normal 14px Arial")
                .attr("dy", ".35em").text(function (d) { return d.name; });
        }

       
       
       function initInterfaces(links){
    	   g.selectAll(".gInts").data(links).enter().append("rect").attr("x", function (d) {
               if (d.target.coord.x1 > d.source.coord.x1) {
                   return (d.source.coord.x1 + (d.target.coord.x1 - d.source.coord.x1) / 2);
               }
               else {
                   return (d.target.coord.x1 + (d.source.coord.x1 - d.target.coord.x1) / 2);
               }
           })
           .attr("y", function (d) {
               if (d.target.coord.y1 > d.source.coord.y1) {
                   return (d.source.coord.y1 + (d.target.coord.y1 - d.source.coord.y1) / 2);
               }
               else {
                   return (d.target.coord.y1 + (d.source.coord.y1 - d.target.coord.y1) / 2);
               }
           }).attr('width', 30)
           .attr('height', 30).attr("fill","White")
           .classed("gInts", true).attr('stroke', 'black').style("stroke-dasharray", ("3, 3"))
           .attr('stroke-width', 1);
    	   
       }


        function drawBoxes() {

        }

        function updateOpacityBoxes() {
            g.selectAll('.box')
                .attr('display', function (box) {
                    if (box.display) {
                        return 'inline';
                    } else {
                        return 'none';
                    }
                });
        }

        function updateOpacityLinks() {
            g.selectAll('.link')
                .attr('display', function (link) {
                    if (link.display) {
                        return 'inline';
                    } else {
                        return 'none';
                    }
                });
            g.selectAll('.arrowLeft')
                .attr('display', function (link) {
                    if (link.display) {
                        return 'inline';
                    } else {
                        return 'none';
                    }
                });
            g.selectAll('.arrowRight')
                .attr('display', function (link) {
                    if (link.display) {
                        return 'inline';
                    } else {
                        return 'none';
                    }
                });
        }

        function updateOpacityLabelLinks() {
            g.selectAll(".gLink")
                .attr('display', function (link) {
                    if (link.display) {
                        return 'inline';
                    } else {
                        return 'none';
                    }
                });
        }

        function updateOpacityLabelBoxes() {
            g.selectAll(".gBox")
                .attr('display', function (box) {
                    if (box.display) {
                        return 'inline';
                    } else {
                        return 'none';
                    }
                });
        }

        function drawLabelLinks() {
            g.selectAll(".gLink")
                .attr("x", function (d) {
                    if (d.coord.x2 > d.coord.x1) {
                        return (d.coord.x1 + (d.coord.x2 - d.coord.x1) / 2 - 10);
                    }
                    else {
                        return (d.coord.x2 + (d.coord.x1 - d.coord.x2) / 2 + 10);
                    }
                })
                .attr("y", function (d) {
                    if (d.coord.y2 > d.coord.y1) {
                        return (d.coord.y1 + (d.coord.y2 - d.coord.y1) / 2 - 10);
                    }
                    else {
                        return (d.coord.y2 + (d.coord.y1 - d.coord.y2) / 2 + 10);
                    }
                });
        }

        function drawLabelBoxes() {
            g.selectAll(".gBox")
                .attr('x', function (box) { return box.coord.x1 + box.width / 2; })
                .attr('y', function (box) { return box.coord.y1 + box.height / 2; });
        }


        function redraw() {
            updateOpacityBoxes();
            updateOpacityLinks();
            updateOpacityLabelLinks();
            updateOpacityLabelBoxes();
        }




        var vm = this;
        var w = 1700,
            h = 800;

        $scope.transform = { x: 0, y: 0, k: 1 };

        var chartWidth = w;
        var chartHeight = h;


        var svg = d3.select("div.lvl1").append("svg")
            .attr("width", w)
            .attr("height", h);


        var g = svg.append('g');




        var boxes = data.app.map(function (box) {
            //todo kill this
            box.width = 200;
            box.height = 100;
            box.coord = {
                x1: parseInt(box.coord.x),
                y1: parseInt(box.coord.y),
                x2: parseInt(box.coord.x) + box.width,
                y2: parseInt(box.coord.y) + box.height
            };
            box.dates_application.start = new Date(box.dates_application.start);
            box.dates_application.start.setHours(0);
            box.dates_application.end = new Date(box.dates_application.end);
            box.dates_application.end.setHours(0);

            return box;
        });

        var links = data.links.map(function (link) {
            link.source = boxes.find(function (box) {
                return box.id == link.app_src_id;
            });
            link.target = boxes.find(function (box) {
                return box.id == link.app_dest_id;
            });

            link.dates_application.start = new Date(link.dates_application.start);
            link.dates_application.start.setHours(0);
            link.dates_application.end = new Date(link.dates_application.end);
            link.dates_application.end.setHours(0);

            return link;
        });



        //Create the zoom behavior to set for the draw
        var zoom = d3.zoom().on('zoom', zoomed);

        //Function called on the zoom event. It translate the draw on the zoommed point and scale with a certain factor
        function zoomed() {
            $scope.transform = d3.event.transform;
            g.attr("transform", "translate(" + $scope.transform.x + "," + $scope.transform.y + ")scale(" + $scope.transform.k + ")");
        }

        svg.call(zoom);

        $scope.initZoom = function () {
            var xMin = 1000000;
            var yMin = 1000000;
            var xMax = -1000000;
            var yMax = -1000000;

            boxes.forEach(function (box) {
                if (!box.display) return;
                if (box.coord.x1 < xMin) {
                    xMin = box.coord.x1;
                }
                if (box.coord.y1 < yMin) {
                    yMin = box.coord.y1;
                }
                if (box.coord.x2 > xMax) {
                    xMax = box.coord.x2;
                }
                if (box.coord.y2 > yMax) {
                    yMax = box.coord.y2;
                }
            });



            var scale = Math.min(w / (xMax - xMin + 100), h / (yMax - yMin + 100));

            $scope.transform.x= -xMin + 50;
            $scope.transform.y= -yMin + 50;
            $scope.transform.k= scale ;
            g.attr("transform", "translate(" + ($scope.transform.x) + "," + ($scope.transform.y) + ")scale(" + $scope.transform.k + ")");
        }
        
        
        $scope.zoom = function (ratio) {
            $scope.transform.k = ratio * $scope.transform.k;
            g.attr("transform", "translate(" + $scope.transform.x + "," + $scope.transform.y + ")scale(" + $scope.transform.k + ")");
        }


        var markers = [
            { id: 0, name: 'circle', path: 'M 0, 0  m -5, 0  a 5,5 0 1,0 10,0  a 5,5 0 1,0 -10,0', viewbox: '-6 -6 12 12' }
            , { id: 1, name: 'square', path: 'M 0,0 m -5,-5 L 5,-5 L 5,5 L -5,5 Z', viewbox: '-5 -5 10 10' }
            , { id: 2, name: 'arrow', path: 'M 0,0 m -5,-5 L 5,0 L -5,5 Z', viewbox: '-5 -5 10 10' }
            , { id: 2, name: 'stub', path: 'M 0,0 m -1,-5 L 1,-5 L 1,5 L -1,5 Z', viewbox: '-1 -5 2 10' }
        ];

        var defs = svg.append("defs")

        var marker = defs.selectAll('marker')
            .data(markers)
            .enter()
            .append('svg:marker')
            .attr('id', function (d) { return 'marker_' + d.name })
            .attr('markerHeight', 5)
            .attr('markerWidth', 5)
            .attr('markerUnits', 'strokeWidth')
            .attr('orient', 'auto')
            .attr('refX', 0)
            .attr('refY', 0)
            .attr('viewBox', function (d) { return d.viewbox })
            .append('svg:path')
            .attr('d', function (d) { return d.path });


        var drag = d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended);


        function dragstarted(d) {
            // d3.select(this).raise().classed("active", true);
        }

        function dragged(d) {
            var x1 = d3.event.x - d.width / 2;
            var y1 = d3.event.y - d.height / 2;
            var x2 = x1 + d.width;
            var y2 = y1 + d.height;

            d.coord.x1 = x1;
            d.coord.y1 = y1;
            d.coord.x2 = x2;
            d.coord.y2 = y2;

            links = links.map(function (link) {
                var pointDeb = pointOnRect((link.target.coord.x1 + link.target.coord.x2) / 2,
                    (link.target.coord.y1 + link.target.coord.y2) / 2,
                    link.source.coord.x1 - 4, link.source.coord.y1 - 4,
                    link.source.coord.x2 + 4, link.source.coord.y2 + 4);
                var pointEnd = pointOnRect((link.source.coord.x1 + link.source.coord.x2) / 2,
                    (link.source.coord.y1 + link.source.coord.y2) / 2,
                    link.target.coord.x1 - 4, link.target.coord.y1 - 4,
                    link.target.coord.x2 + 4, link.target.coord.y2 + 4);
                link.coord.x1 = pointDeb.x;
                link.coord.x2 = pointEnd.x;
                link.coord.y1 = pointDeb.y;
                link.coord.y2 = pointEnd.y;
                return link;
            });

            d3.selectAll(".link")
                .attr('d', function (link, i) {
                    var x1 = link.coord.x1;
                    var y1 = link.coord.y1;
                    var x2 = link.coord.x2;
                    var y2 = link.coord.y2;

                    return 'M ' + x1 + ',' + y1 + ' L ' + x2 + ',' + y2 + ''
                });




            d3.select(this).attr("x", d.coord.x1)
                .attr("y", d.coord.y1);
            drawLabelLinks();
            drawLabelBoxes();
        }

        function dragended(d) {
            // d3.select(this).classed("active", false);

        }

        initLinks(links);
        initBoxes(boxes);
        initLabelBoxes(boxes);
       // initLabelLinks(links);
        initInterfaces(links)
        computeDisplayableObjects();
        redraw();
    }
})();
