import styles from './Input.module.css';

interface InputProps {
    type?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ type, placeholder, value, onChange }: InputProps) {
    return (
        <div className={styles.input}>
            <input
                className="field"
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}