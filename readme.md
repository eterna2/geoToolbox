# Node [geoToolbox](https://www.npmjs.org/package/geoToolbox)

A simple script to convert shapefiles into GeoJSON via GDAL. Will add in more tools in the future.

[![NPM](https://nodei.co/npm/geoToolbox.png?downloadRank=true&downloads=true)](https://nodei.co/npm/geoToolbox.png?downloadRank=true&downloads=true)
[![NPM Download Graph for geoToolbox](https://nodei.co/npm-dl/geoToolbox.png?months=6&height=3)](https://npmjs.org/package/geoToolbox)

### Installation
```
npm install -g geoToolbox
```

### Command Line
```
geoToolbox [cmd] [shapefile] [outputfile]
```

### Example
```
geoToolbox --togeojson sample.shp sample.json
```

### Available commands

1. *--togeojson*: Converts a shapefile into a geojson file.
