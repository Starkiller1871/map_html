import 'ol/ol.css';
import {Map,View} from "ol/";
import TileWMS from 'ol/source/TileWMS';
import TileLayer from 'ol/layer/Tile';
import Projection  from 'ol/proj/Projection';
//import { Image as ImageLayer } from 'ol/layer'; 
//import ImageWMS from 'ol/source/ImageWMS';

//const serverurl="http://192.168.6.228:8080/geoserver/wms";

const projection=new Projection({
code:'EPSG:32643',
   units:'m',
   axisOrientation:'neu',
   global:false
});

const odmsrc= new TileWMS({
    url:"http://localhost:8080/geoserver/ODM/wms",
    params:{
        "LAYERS":"ODM:odm_orthophoto",
        "VERSION":"1.1.1",
        "FORMAT":"image/jpeg"

    }
});
const odmlayer=new TileLayer({
    source:odmsrc
    

})





const view=new View({
    projection:projection,
    center:[365593.46172,1761637.27518],
    zoom:0,
    extent:[365371.1684157285,1761402.4960644639,365811.13917368726,1761790.86618869]

})

const map=new Map({
    target:"map",
    layers:[odmlayer],
    view:view

})

