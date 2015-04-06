#!/usr/bin/env node
var gdal = require('gdal');
var fs = require('fs');
var path = require('path');

var dir, file, output;
var cmd = ['--togeojson'];
var curr_cmd = cmd[0];
var opts = [];
var arg = process.argv.slice(2,process.argv.length);

for (var i=0,len=arg.length; i<len; ++i)
{
    var index = cmd.indexOf(arg[i]);
    if ( index >= 0) 
    {
      curr_cmd = cmd[index];
      break;
    }
    else opts.push(arg[i]);
}

switch(opts.length){
  case 1:
    file = opts[0];
    break;
  case 2:
    file = opts[0];
    output = opts[1];
    break;
  default:
    throw 'input format wrong!';
    process.exit(0);
    break;
}

saveGeoJSON(dir,file,output);

function saveGeoJSON(dir,shp,saveas){
  if (dir) process.chdir(dir);
  var dataset = gdal.open(shp);
  // sample: open a shapefile and display all features as geojson
  var layers = [];
  
  dataset.layers.forEach(function(layer){
    var collection = {type: 'FeatureCollection', features:[]};
    layers.push(collection);
    layer.features.forEach(function(feature) {
      var obj = {
        type: "Feature",
        geometry: JSON.parse(feature.getGeometry().toJSON()),
        properties: {}
      };
      feature.fields.forEach(function(value, key) { obj.properties[key]=value; });
      collection.features.push(obj);
    });
  });

  saveas = saveas||[shp.split('.')[0],'json'].join('.');
  fs.writeFileSync(saveas,JSON.stringify(layers));
  console.log(saveas)
}