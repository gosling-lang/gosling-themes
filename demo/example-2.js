example2 = {
    "title": "Gosling Theme",
    "subtitle": "Using the gosling themes, you can easily apply styling to gosling visualizations",
    "layout": "linear",
    "arrangement": "vertical",
    "centerRadius": 0.8,
    "xDomain": { "chromosome": "1", "interval": [1, 3000500] },
    "views": [
        {
            "id": "view-1",
            "tracks": [
                {
                    "data": {
                        "url": "https://server.gosling-lang.org/api/v1/tileset_info/?d=cistrome-multivec",
                        "type": "multivec",
                        "row": "sample",
                        "column": "position",
                        "value": "peak",
                        "categories": ["sample 1", "sample 2", "sample 3", "sample 4"],
                        "binSize": 4
                    },
                    "mark": "rect",
                    "x": { "field": "start", "type": "genomic", "axis": "top" },
                    "xe": { "field": "end", "type": "genomic" },
                    "row": { "field": "sample", "type": "nominal", "legend": true },
                    "color": { "field": "peak", "type": "quantitative", "legend": true },
                    "tooltip": [
                        { "field": "start", "type": "genomic", "alt": "Start Position" },
                        { "field": "end", "type": "genomic", "alt": "End Position" },
                        {
                            "field": "peak",
                            "type": "quantitative",
                            "alt": "Value",
                            "format": ".2"
                        },
                        { "field": "sample", "type": "nominal", "alt": "Sample" }
                    ],
                    "width": 600,
                    "height": 130
                }
            ]
        },
        {
            "tracks": [
                {
                    "data": {
                        "url": "https://server.gosling-lang.org/api/v1/tileset_info/?d=cistrome-multivec",
                        "type": "multivec",
                        "row": "sample",
                        "column": "position",
                        "value": "peak",
                        "categories": ["sample 1", "sample 2", "sample 3", "sample 4"]
                    },
                    "mark": "bar",
                    "x": { "field": "position", "type": "genomic", "axis": "top" },
                    "y": { "field": "peak", "type": "quantitative" },
                    "row": { "field": "sample", "type": "nominal" },
                    "color": { "field": "sample", "type": "nominal", "legend": true },
                    "tooltip": [
                        { "field": "position", "type": "genomic", "alt": "Position" },
                        {
                            "field": "peak",
                            "type": "quantitative",
                            "alt": "Value",
                            "format": ".2"
                        },
                        { "field": "sample", "type": "nominal", "alt": "Sample" }
                    ],
                    "width": 600,
                    "height": 130
                }
            ]
        },
        {
            "tracks": [
                {
                    "data": {
                        "url": "https://server.gosling-lang.org/api/v1/tileset_info/?d=cistrome-multivec",
                        "type": "multivec",
                        "row": "sample",
                        "column": "position",
                        "value": "peak",
                        "categories": ["sample 1", "sample 2", "sample 3", "sample 4"]
                    },
                    "mark": "bar",
                    "x": { "field": "position", "type": "genomic", "axis": "top" },
                    "y": { "field": "peak", "type": "quantitative", "grid": true },
                    "color": { "field": "sample", "type": "nominal", "legend": true },
                    "tooltip": [
                        { "field": "position", "type": "genomic", "alt": "Position" },
                        {
                            "field": "peak",
                            "type": "quantitative",
                            "alt": "Value",
                            "format": ".2"
                        },
                        { "field": "sample", "type": "nominal", "alt": "Sample" }
                    ],
                    "width": 600,
                    "height": 130
                }
            ]
        },
        {
            "alignment": "overlay",
            "data": {
                "url": "https://server.gosling-lang.org/api/v1/tileset_info/?d=cistrome-multivec",
                "type": "multivec",
                "row": "sample",
                "column": "position",
                "value": "peak",
                "categories": ["sample 1", "sample 2", "sample 3", "sample 4"]
            },
            "x": { "field": "position", "type": "genomic", "axis": "top" },
            "y": { "field": "peak", "type": "quantitative" },
            "row": { "field": "sample", "type": "nominal" },
            "color": { "field": "sample", "type": "nominal", "legend": true },
            "tracks": [
                { "mark": "line" },
                {
                    "mark": "point",
                    "size": { "field": "peak", "type": "quantitative", "range": [0, 2] }
                }
            ],
            "tooltip": [
                { "field": "position", "type": "genomic", "alt": "Position" },
                {
                    "field": "peak",
                    "type": "quantitative",
                    "alt": "Value",
                    "format": ".2"
                },
                { "field": "sample", "type": "nominal", "alt": "Sample" }
            ],
            "width": 600,
            "height": 130
        },
        {
            "tracks": [
                {
                    "data": {
                        "url": "https://server.gosling-lang.org/api/v1/tileset_info/?d=cistrome-multivec",
                        "type": "multivec",
                        "row": "sample",
                        "column": "position",
                        "value": "peak",
                        "categories": ["sample 1", "sample 2", "sample 3", "sample 4"]
                    },
                    "mark": "point",
                    "x": { "field": "position", "type": "genomic", "axis": "top" },
                    "y": { "field": "peak", "type": "quantitative" },
                    "row": { "field": "sample", "type": "nominal" },
                    "size": { "field": "peak", "type": "quantitative" },
                    "color": { "field": "sample", "type": "nominal", "legend": true },
                    "opacity": { "value": 0.5 },
                    "tooltip": [
                        { "field": "position", "type": "genomic", "alt": "Position" },
                        {
                            "field": "peak",
                            "type": "quantitative",
                            "alt": "Value",
                            "format": ".2"
                        },
                        { "field": "sample", "type": "nominal", "alt": "Sample" }
                    ],
                    "width": 600,
                    "height": 130
                }
            ]
        },
        {
            "tracks": [
                {
                    "data": {
                        "url": "https://server.gosling-lang.org/api/v1/tileset_info/?d=cistrome-multivec",
                        "type": "multivec",
                        "row": "sample",
                        "column": "position",
                        "value": "peak",
                        "categories": ["sample 1", "sample 2", "sample 3", "sample 4"]
                    },
                    "mark": "point",
                    "x": { "field": "position", "type": "genomic", "axis": "top" },
                    "y": { "field": "peak", "type": "quantitative", "grid": true },
                    "size": { "field": "peak", "type": "quantitative" },
                    "color": { "field": "sample", "type": "nominal", "legend": true },
                    "opacity": { "value": 0.5 },
                    "tooltip": [
                        { "field": "position", "type": "genomic", "alt": "Position" },
                        {
                            "field": "peak",
                            "type": "quantitative",
                            "alt": "Value",
                            "format": ".2"
                        },
                        { "field": "sample", "type": "nominal", "alt": "Sample" }
                    ],
                    "width": 600,
                    "height": 130
                }
            ]
        },
        {
            "tracks": [
                {
                    "data": {
                        "url": "https://server.gosling-lang.org/api/v1/tileset_info/?d=cistrome-multivec",
                        "type": "multivec",
                        "row": "sample",
                        "column": "position",
                        "value": "peak",
                        "categories": ["sample 1", "sample 2", "sample 3", "sample 4"]
                    },
                    "mark": "area",
                    "x": { "field": "position", "type": "genomic", "axis": "top" },
                    "y": { "field": "peak", "type": "quantitative" },
                    "row": { "field": "sample", "type": "nominal" },
                    "color": { "field": "sample", "type": "nominal", "legend": true },
                    "stroke": { "value": "white" },
                    "strokeWidth": { "value": 0.5 },
                    "tooltip": [
                        { "field": "position", "type": "genomic", "alt": "Position" },
                        {
                            "field": "peak",
                            "type": "quantitative",
                            "alt": "Value",
                            "format": ".2"
                        },
                        { "field": "sample", "type": "nominal", "alt": "Sample" }
                    ],
                    "width": 600,
                    "height": 130
                }
            ]
        },
        {
            "tracks": [
                {
                    "data": {
                        "url": "https://raw.githubusercontent.com/sehilyi/gemini-datasets/master/data/circos-segdup-edited.txt",
                        "type": "csv",
                        "chromosomeField": "c2",
                        "genomicFields": ["s1", "e1", "s2", "e2"]
                    },
                    "mark": "withinLink",
                    "x": {
                        "field": "s1",
                        "type": "genomic",
                        "domain": { "chromosome": "1", "interval": [103900000, 104100000] }
                    },
                    "xe": { "field": "e1", "type": "genomic" },
                    "x1": {
                        "field": "s2",
                        "type": "genomic",
                        "domain": { "chromosome": "1" }
                    },
                    "x1e": { "field": "e2", "type": "genomic" },
                    "color": { "field": "s1", "type": "nominal" },
                    "stroke": { "value": "black" },
                    "strokeWidth": { "value": 0.5 },
                    "opacity": { "value": 0.2 },
                    "width": 600,
                    "height": 130
                }
            ]
        }
    ]
}