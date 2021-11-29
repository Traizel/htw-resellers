import React from 'react';

import './Map.css';
import OlMap from 'ol/Map';
import OlView from 'ol/View';
import OlLayerTile from 'ol/layer/Tile';
import OlSourceOsm from 'ol/source/OSM';

import 'ol/ol.css';
import 'antd/dist/antd.css';

import {
    MapComponent
} from '@terrestris/react-geo';

const layer = new OlLayerTile({
    source: new OlSourceOsm()
});

const center = [788453.4890155146, 6573085.729161344];

const map = new OlMap({
    view: new OlView({
        center: center,
        zoom: 16,
    }),
    layers: [layer]
});

function OLMap() {
    return (
        <div className="ol-map">
            <MapComponent
                map={map}
            />
        </div>
    );
}

export default OLMap;