var wms_layers = [];

var lyr_lycee_2022_georeftif_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "lycee_2022_georef.tif",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/lycee_2022_georeftif_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [541793.240792, 5450755.857027, 544052.580204, 5452549.290022]
                            })
                        });
var format_tacetracks_1 = new ol.format.GeoJSON();
var features_tacetracks_1 = format_tacetracks_1.readFeatures(json_tacetracks_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tacetracks_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tacetracks_1.addFeatures(features_tacetracks_1);
var lyr_tacetracks_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tacetracks_1, 
                style: style_tacetracks_1,
                interactive: true,
                title: '<img src="styles/legend/tacetracks_1.png" /> tace — tracks'
            });
var format_pointsoiseaux_2 = new ol.format.GeoJSON();
var features_pointsoiseaux_2 = format_pointsoiseaux_2.readFeatures(json_pointsoiseaux_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pointsoiseaux_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pointsoiseaux_2.addFeatures(features_pointsoiseaux_2);
var lyr_pointsoiseaux_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pointsoiseaux_2, 
                style: style_pointsoiseaux_2,
                interactive: true,
                title: '<img src="styles/legend/pointsoiseaux_2.png" /> points oiseaux'
            });

lyr_lycee_2022_georeftif_0.setVisible(true);lyr_tacetracks_1.setVisible(true);lyr_pointsoiseaux_2.setVisible(true);
var layersList = [lyr_lycee_2022_georeftif_0,lyr_tacetracks_1,lyr_pointsoiseaux_2];
lyr_tacetracks_1.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'line': 'line', 'locus_activity': 'locus_activity', });
lyr_pointsoiseaux_2.set('fieldAliases', {'oiseaux': 'oiseaux', 'nombre': 'nombre', 'type renco': 'type renco', });
lyr_tacetracks_1.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', 'line': 'TextEdit', 'locus_activity': 'TextEdit', });
lyr_pointsoiseaux_2.set('fieldImages', {'oiseaux': 'TextEdit', 'nombre': '', 'type renco': '', });
lyr_tacetracks_1.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', 'line': 'no label', 'locus_activity': 'no label', });
lyr_pointsoiseaux_2.set('fieldLabels', {'oiseaux': 'inline label', 'nombre': 'inline label', 'type renco': 'inline label', });
lyr_pointsoiseaux_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});