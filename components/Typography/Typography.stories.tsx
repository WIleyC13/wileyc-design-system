import React from 'react';
import { Typography } from './Typography';

export default {
    title: 'Components/Typography',
    component: Typography,
};

const Template = (args) => <Typography {...args} />;

export const Default = Template.bind({});
Default.args = {
    variant: 'h1',
    text: 'Default Typography',
};

export const AllVariants = () => (
    <div>
        <Typography variant="h1" text="Heading 1" />
        <Typography variant="h2" text="Heading 2" />
        <Typography variant="h3" text="Heading 3" />
        <Typography variant="h4" text="Heading 4" />
        <Typography variant="h5" text="Heading 5" />
        <Typography variant="h6" text="Heading 6" />
        <Typography variant="p" text="This is a paragraph." />
        <Typography variant="smallText" text="This is small text." />
        <Typography variant="link" text={<a href="#">This is a link</a>} />
        <Typography variant="blockquote" text="This is a blockquote." />
        <Typography variant="code" text="This is inline code." />
        <Typography variant="list" text={
            <ul>
                <Typography variant="listItem" text="List item 1" />
                <Typography variant="listItem" text="List item 2" />
                <Typography variant="listItem" text="List item 3" />
            </ul>
        } />
    </div>
);