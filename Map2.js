import 'ol/ol.css';
import{Map, View} from 'ol/';
import TileWMS from 'ol/source/TileWMS';
import TileLayer from 'ol/layer/Tile';
import { Image as ImageLayer } from 'ol/layer' 
import Projection from 'ol/proj/Projection';
import ImageWMS from 'ol/source/ImageWMS';




//const serverurl="http://192.168.6.228:8080/geoserver/wms";

const mapProjection=new Projection({
   code:'EPSG:32643',
   units:'m',
   axisOrientation:'neu',
   global:false
});
//ortho
 const orthosource=new TileWMS({
    url:"http://ec2-43-205-228-224.ap-south-1.compute.amazonaws.com:8080/geoserver/Curtorim/wms?service=WMS&version=1.1.0&request=GetMap&layers=Curtorim%3Acurtorim_cog&bbox=393138.47360920964%2C1691083.5993401834%2C394226.8364782684%2C1692292.8413278945&width=691&height=768&srs=EPSG%3A32643&styles=&format=application/openlayers",
    params:{"LAYERS":"Curtorim:curtorim" ,
     "VERSION":"1.1.1" , 
     "FORMAT":"image/jpeg"}

 });
 const ortholayer=new TileLayer({
    source:orthosource,
    visible:true, 
    // @ts-ignore
    name:'Curtorim'
 });
const handikurissrc=new ImageWMS({
    url:"http://ec2-43-205-228-224.ap-south-1.compute.amazonaws.com:8080/geoserver/Curtorim/wms?service=WMS&version=1.1.0&request=GetMap&layers=Curtorim%3Acurtorim-lines&bbox=393233.14733829827%2C1691275.4924189565%2C394122.8538951294%2C1692210.637745393&width=730&height=768&srs=EPSG%3A32643&styles=&format=application/openlayers",
    params:{"LAYERS":"Curtorim:curtorim-lines" , "VERSION":"1.1.1" , "FORMAT":"image/png"}
 })
 const handikuris=new ImageLayer({
    source:handikurissrc,
 })

const view=new View({
    center:[393615.64087,1691759.88130],
    zoom:15.7,
    extent:[392482.26872767013,1690868.0004283397,394920.8374327267,1692592.5770503664],
    projection:mapProjection
});
const map=new Map({
    target:"map2",
    layers:[ortholayer,handikuris],
    view:view

})
