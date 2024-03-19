import styles from "./Arrow.module.css";

export const Arrow = ({ color }) => {
    return (
        <div className={styles.arrow}>
            <svg width="62.000000" height="33.000000" viewBox="0 0 62 33" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <desc>
                    Created with Pixso.
                </desc>
                <defs />
                <path id="coolicon" d="M45.2 33L62 16.5L45.2 0L43.38 1.79L57.05 15.23L0 15.23L0 17.76L57.05 17.76L43.38 31.2L45.2 33Z"
                    fill={color} fillOpacity="1.000000" fillRule="nonzero" />
            </svg>
        </div>
    );
};
