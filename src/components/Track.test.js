import React from 'react';

import {configure, shallow} from 'enzyme';

import Track from './Track';
import Video from './Video';

let wrapped = shallow(<Track 
    trackName="Brooks - If Only I Could"
    userName="Sabrina"
    userId="50bcaf297e91c862b2a91d7c"
    trackEId="/yt/U7KQ-8I_jYI" 
/>);

describe('<Track />', () => {
    it('render correctly <Track /> component', () => {  
        expect(wrapped).toMatchSnapshot();
    });
    it('should render one <Video /> element in <Track /> component', () => {
       expect(wrapped.find(Video)).toHaveLength(1);
    });
    it('should render track title correctly in <Track /> component', () => {
        expect(wrapped.find('.track__info > h2').text()).toEqual('Brooks - If Only I Could');
    });
    it('should render track username correctly in <Track /> component', () => {
        expect(wrapped.find('.track__username').text()).toEqual('Sabrina');
    });
    it('should render track user id correctly in <Track /> component', () => {
        expect(wrapped.find('.track__user-info').props().href).toEqual('https://openwhyd.org/u/50bcaf297e91c862b2a91d7c');
    });
});