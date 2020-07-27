import React from 'react';

import {configure, shallow} from 'enzyme';

import Video from './Video';

let wrapped = shallow(<Video trackId="/yt/U7KQ-8I_jYI" trackName="Brooks - If Only I Could" />);

describe('<Video />', () => {
    it('render correctly <Video /> component', () => {  
        expect(wrapped).toMatchSnapshot();
    });
    it('should render src of <Video /> item to be YouTube url with video id passed in trackId prop', () => {
        const iframe = wrapped.find('iframe');
        const props = iframe.props();
        expect(props.src).toEqual('https://www.youtube.com/embed/U7KQ-8I_jYI');
    });
});