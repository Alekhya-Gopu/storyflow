import styles from './Button.module.css';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
    size?: 'small' | 'medium' | 'large';
}

export default function Button({ children, onClick, type = 'button', disabled, size }: ButtonProps) {
    const getClassNameForSize = (size: ButtonProps['size']) => {
        switch (size) {
            case 'small':
                return styles.small;
            case 'medium':
                return styles.medium;
            case 'large':
                return styles.large;
            default:
                return styles.medium;
        }
    };

    return (
        <div className={getClassNameForSize(size)} style={{ width: '100%' }}>
            <button
                className={styles.button}
                onClick={onClick}
                type={type}
                disabled={disabled}>
                {children}
            </button>
        </div>
    );
}