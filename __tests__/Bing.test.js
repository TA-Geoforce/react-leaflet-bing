import React from 'react';
import { MapContainer, LayersControl } from "react-leaflet";
import { BingLayer } from '../src'
import { mount } from "enzyme"
import Enzyme from "enzyme"
import Adapter from "@wojtekmaj/enzyme-adapter-react-17"

Enzyme.configure({ adapter: new Adapter() })

const { BaseLayer } = LayersControl;

describe("Check if Bing renders", () => {
    it("Simple render of component", () => {
        const wrapper = mount(
            <MapContainer center={[42.09618442380296, -71.5045166015625]} zoom={2} zoomControl={true}>
                <LayersControl position='topright'>
                    <BaseLayer checked name='Bing Maps Roads'>
                        <BingLayer bingkey="your-key" type="Road"/>
                    </BaseLayer>
                 </LayersControl>
            </MapContainer>
        )
        expect((wrapper).find(BingLayer).prop('bingkey')).toEqual("your-key");
        expect((wrapper).find(BingLayer).prop('type')).toEqual("Road");
    })
})