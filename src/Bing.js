
import { createLayerComponent } from '@react-leaflet/core';
import {bingLayer} from './leaflet.bing';

const createLeafletElement = (props, context) => {

    const instance = L.bingLayer(props.bingkey, props);

    return { instance, context };
  }

export default createLayerComponent(createLeafletElement);
