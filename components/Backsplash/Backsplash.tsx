import React from 'react';
// @ts-ignore
import styles from './Backsplash.module.css';

type BacksplashProps = {
    children: React.ReactNode;
};

export default function Backsplash({ children }: BacksplashProps) {
    return (
        <div className={styles.backsplash}>
            {children}
            <svg
                className={styles.wave}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
            >
                <path
                    fill="#1DB954"
                    fillOpacity="1"
                    d="M0,224L48,213.3C96,203,192,181,288,192C384,203,480,245,576,245.3C672,245,768,203,864,186.7C960,171,1056,181,1152,186.7C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
            </svg>
        </div>
    );
}