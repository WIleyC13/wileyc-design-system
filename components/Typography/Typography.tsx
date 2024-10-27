import React from 'react';
// @ts-ignore
import styles from './Typography.module.css';

type TypographyProps = {
    variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'smallText' | 'link' | 'blockquote' | 'code' | 'list' | 'listItem';
    text: React.ReactNode;
};

export default function Typography({ variant, text }: TypographyProps) {
    const Tag = variant === 'p' || variant === 'smallText' || variant === 'link' || variant === 'blockquote' || variant === 'code' || variant === 'list' || variant === 'listItem' ? 'div' : variant;

    return (
        <Tag className={styles[variant]}>
            {text}
        </Tag>
    );
}