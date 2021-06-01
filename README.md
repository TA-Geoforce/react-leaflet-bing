# react-leaflet-bing [![npm version](https://img.shields.io/npm/v/react-leaflet-bing-v2.svg)](https://www.npmjs.com/package/react-leaflet-bing-v2)![npm downloads](https://img.shields.io/npm/dw/react-leaflet-bing-v2)
Bing layer as React component for Leaflet  build on top of [React-Leaflet](https://github.com/PaulLeCam/react-leaflet).

![Bing example](images/example.gif)

## Complete example with react-leaflet-geosearch

To get started, to be able to run the example you have execute:
```bash
npm install
```

```jsx
import React from 'react';
import { MapContainer, TileLayer, LayersControl } from 'react-leaflet'
import {BingLayer} from '../src'

const { BaseLayer, Overlay } = LayersControl;


export default class BingExample extends React.Component {

  constructor() {
    super();
    this.state = {
      geodata: null,
      isadded: false
    }
  }

  render() {
    const bing_key = "YOUR-BING-KEY"
    return (
      
        <MapContainer center={[42.09618442380296, -71.5045166015625]} zoom={2} zoomControl={true}>
          <LayersControl position='topright'>
            <BaseLayer  name='OpenStreetMap.Mapnik'>
              <TileLayer  url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"/>
            </BaseLayer>
            <BaseLayer checked name='Bing Maps Roads'>
              <BingLayer  bingkey={bing_key} type="Road"/>
            </BaseLayer>
            <BaseLayer checked name='Bing Maps Satelite'>
              <BingLayer  bingkey={bing_key} />
            </BaseLayer>
            <BaseLayer checked name='Bing Maps Satelite with Labels'>
              <BingLayer  bingkey={bing_key} type="AerialWithLabels" />
            </BaseLayer>
          </LayersControl>
        </MapContainer>
    )
  }
}
```

You can find the following example in the folder ```example```. Run the above code by executing the following scripts in package.json, with the order they are stated underneath:

1) ```build```

1) ```example```

# Options

option     | type   |   | default
-----------|--------|---|--------------
subdomains | array  |   | [0, 1, 2, 3]
type       | string |One of the following values: <ul><li> Aerial– Aerial imagery.</li><li>AerialWithLabels –Aerial imagery with a road overlay.</li><li>AerialWithLabelsOnDemand - Aerial imagery with on-demand road overlay.</li><li>CanvasDark - A dark version of the road maps.</li><li>CanvasLight - A lighter version of the road maps which also has some of the details such as hill shading disabled.</li><li>CanvasGray - A grayscale version of the road maps.</li><li>Road – Roads without additional imagery.</li></ul> see: https://msdn.microsoft.com/en-us/library/ff701724.aspx| 'Aerial'
attribution | string |   | 'Bing'
culture     | string | for supported culture codes see: https://msdn.microsoft.com/en-us/library/hh441729.aspx | ''
style       | string | REST style parameters see: https://msdn.microsoft.com/en-us/library/mt823636.aspx#Related%20Resources | ''

For more details on how to use this plugin check the example.

