
import React from 'react';
import { Button as AriaButton } from 'react-aria-components';
import styles from './Button.module.css'
import { Typography } from '../Typography/Typography';

export function Button({ text, onClick }: { text: string, onClick: () => void }) {
    return (
        <AriaButton className={styles.styledButton} onPress={onClick}>
            <Typography text={text} variant={'h2'} />
        </AriaButton>
    )
}