import React from 'react';
import { Backsplash } from './Backsplash'

export default {
    title: 'Components/Backsplash',
    component: Backsplash,
};

const Template = (args) => <Backsplash {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'This is the backsplash content',
};