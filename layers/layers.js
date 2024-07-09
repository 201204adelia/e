var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_KecamatanBanyuwangi_1 = new ol.format.GeoJSON();
var features_KecamatanBanyuwangi_1 = format_KecamatanBanyuwangi_1.readFeatures(json_KecamatanBanyuwangi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KecamatanBanyuwangi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KecamatanBanyuwangi_1.addFeatures(features_KecamatanBanyuwangi_1);
var lyr_KecamatanBanyuwangi_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KecamatanBanyuwangi_1, 
                style: style_KecamatanBanyuwangi_1,
                popuplayertitle: "Kecamatan Banyuwangi",
                interactive: true,
                title: '<img src="styles/legend/KecamatanBanyuwangi_1.png" /> Kecamatan Banyuwangi'
            });
var format_Jarak2kmdaritempatwisata_2 = new ol.format.GeoJSON();
var features_Jarak2kmdaritempatwisata_2 = format_Jarak2kmdaritempatwisata_2.readFeatures(json_Jarak2kmdaritempatwisata_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jarak2kmdaritempatwisata_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jarak2kmdaritempatwisata_2.addFeatures(features_Jarak2kmdaritempatwisata_2);
var lyr_Jarak2kmdaritempatwisata_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jarak2kmdaritempatwisata_2, 
                style: style_Jarak2kmdaritempatwisata_2,
                popuplayertitle: "Jarak 2 km dari tempat wisata",
                interactive: true,
                title: '<img src="styles/legend/Jarak2kmdaritempatwisata_2.png" /> Jarak 2 km dari tempat wisata'
            });
var format_Jarak1kmdaritempatwisata_3 = new ol.format.GeoJSON();
var features_Jarak1kmdaritempatwisata_3 = format_Jarak1kmdaritempatwisata_3.readFeatures(json_Jarak1kmdaritempatwisata_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jarak1kmdaritempatwisata_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jarak1kmdaritempatwisata_3.addFeatures(features_Jarak1kmdaritempatwisata_3);
var lyr_Jarak1kmdaritempatwisata_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jarak1kmdaritempatwisata_3, 
                style: style_Jarak1kmdaritempatwisata_3,
                popuplayertitle: "Jarak 1 km dari tempat wisata",
                interactive: true,
                title: '<img src="styles/legend/Jarak1kmdaritempatwisata_3.png" /> Jarak 1 km dari tempat wisata'
            });
var format_TempatWisata_4 = new ol.format.GeoJSON();
var features_TempatWisata_4 = format_TempatWisata_4.readFeatures(json_TempatWisata_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TempatWisata_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TempatWisata_4.addFeatures(features_TempatWisata_4);
var lyr_TempatWisata_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TempatWisata_4, 
                style: style_TempatWisata_4,
                popuplayertitle: "Tempat Wisata",
                interactive: true,
    title: 'Tempat Wisata<br />\
    <img src="styles/legend/TempatWisata_4_0.png" /> Jembatan Kali Lo<br />\
    <img src="styles/legend/TempatWisata_4_1.png" /> Jembatan Wisata Pantai Boom<br />\
    <img src="styles/legend/TempatWisata_4_2.png" /> Kampong Wisata Temenggungan<br />\
    <img src="styles/legend/TempatWisata_4_3.png" /> Pantai Ancol Plengsengan<br />\
    <img src="styles/legend/TempatWisata_4_4.png" /> Pantai Cemara<br />\
    <img src="styles/legend/TempatWisata_4_5.png" /> Taman Blambangan<br />\
    <img src="styles/legend/TempatWisata_4_6.png" /> Taman Sayu Wiwit Park<br />'
        });

lyr_Positron_0.setVisible(true);lyr_KecamatanBanyuwangi_1.setVisible(true);lyr_Jarak2kmdaritempatwisata_2.setVisible(true);lyr_Jarak1kmdaritempatwisata_3.setVisible(true);lyr_TempatWisata_4.setVisible(true);
var layersList = [lyr_Positron_0,lyr_KecamatanBanyuwangi_1,lyr_Jarak2kmdaritempatwisata_2,lyr_Jarak1kmdaritempatwisata_3,lyr_TempatWisata_4];
lyr_KecamatanBanyuwangi_1.set('fieldAliases', {'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', });
lyr_Jarak2kmdaritempatwisata_2.set('fieldAliases', {'type': 'type', 'start': 'start', });
lyr_Jarak1kmdaritempatwisata_3.set('fieldAliases', {'type': 'type', 'start': 'start', });
lyr_TempatWisata_4.set('fieldAliases', {'Name': 'Name', 'Alamat': 'Alamat', 'Beroperasi': 'Beroperasi', 'HTM': 'HTM', 'Rating': 'Rating', 'Deskripsi': 'Deskripsi', 'Gambar': 'Gambar', });
lyr_KecamatanBanyuwangi_1.set('fieldImages', {'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', });
lyr_Jarak2kmdaritempatwisata_2.set('fieldImages', {'type': '', 'start': '', });
lyr_Jarak1kmdaritempatwisata_3.set('fieldImages', {'type': '', 'start': '', });
lyr_TempatWisata_4.set('fieldImages', {'Name': 'TextEdit', 'Alamat': 'TextEdit', 'Beroperasi': 'TextEdit', 'HTM': 'TextEdit', 'Rating': 'TextEdit', 'Deskripsi': 'TextEdit', 'Gambar': 'ExternalResource', });
lyr_KecamatanBanyuwangi_1.set('fieldLabels', {'WADMKK': 'inline label - always visible', 'WADMPR': 'inline label - always visible', });
lyr_Jarak2kmdaritempatwisata_2.set('fieldLabels', {'type': 'no label', 'start': 'no label', });
lyr_Jarak1kmdaritempatwisata_3.set('fieldLabels', {'type': 'no label', 'start': 'no label', });
lyr_TempatWisata_4.set('fieldLabels', {'Name': 'inline label - always visible', 'Alamat': 'inline label - always visible', 'Beroperasi': 'inline label - always visible', 'HTM': 'inline label - always visible', 'Rating': 'inline label - always visible', 'Deskripsi': 'inline label - always visible', 'Gambar': 'inline label - always visible', });
lyr_TempatWisata_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});