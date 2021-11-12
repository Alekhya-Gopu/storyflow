import * as ReactSelect from 'react-select';
import styles from './Select.module.css';

export default function Select(props: ReactSelect.Props) {
    return (
        <ReactSelect.default
            className={styles.select}
            classNamePrefix="storyflow-select"
            {...props} />
    );
}