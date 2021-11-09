import styles from './Card.module.css';
import Button from '@components/Button';
import Icon from '@components/Icon';

interface CardProps {
    id?: string;
    title: string;
    description: string;
    url: string
    cardActions?: [{ icon: string, action: () => Promise<void> }];
}

export default function Card({ id, title, description, url, cardActions }: CardProps) {
    return (
        <div className={styles.card}>
            <Icon type='external-link' size={28} />
            <a href={url} target='_blank' rel="noreferrer">
                <div className={styles.cardBody}>
                    <h3 className={styles.cardTitle}>{title}</h3>
                    <p className={styles.cardDescription}>{description}</p>
                </div>
                <div className={styles.cardActions}>
                    {id && cardActions && (
                        cardActions.map((item, index) => (
                            <Button key={id + index} size="small" onClick={() => item.action}>
                                <Icon type={item.icon} size={18} />
                            </Button>
                        ))
                    )}
                </div>
            </a>
        </div>
    )
}