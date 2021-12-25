import styles from './Story.module.css';
import Icon from '@components/Icon';
import { useState, useEffect } from 'react';
import cn from 'classnames';

interface StoryProps {
    className?: string;
    children: React.ReactNode;
    showNavigation?: boolean;
}

function Story({ className, children, showNavigation = false }: StoryProps) {
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [mount, setMount] = useState<boolean>(false);
    const [pages] = useState<HTMLLIElement[]>(Array.from(children as HTMLCollectionOf<HTMLLIElement>));

    const navigateTo = (direction: 'next' | 'prev' | number): void => {
        if (typeof direction === 'number') {
            setCurrentPage(direction);
        } else {
            if (direction === 'next') {
                pages.length - 1 > currentPage && setCurrentPage((prev) => prev + 1);
            } else {
                currentPage > 0 && setCurrentPage((prev) => prev - 1);
            }
        }
    }

    useEffect(() => {
        setMount(true);

        // start playing story automatically
        // const timer = setInterval(() => {
        //     navigateTo('next');
        // }, 8000);

        // return () => { clearInterval(timer) }
    }, []);

    return (
        <div className={cn(styles.story, `${className}`)}>
            <ul className={styles.bars}>
                {mount && pages.map((_, i) => (
                    <li key={i} onClick={() => navigateTo(i)} className={cn(styles.bar, { [styles.active]: i === currentPage })}>
                        <div className={styles.barInner} />
                    </li>))}
            </ul>
            <div className={styles.content}>
                {showNavigation && <Icon type="chevron-left" size={48} onClick={() => navigateTo('prev')} />}
                <ul className={styles.pages}>
                    {pages.filter((_, i) => i === currentPage)}
                </ul>
                {showNavigation && <Icon type="chevron-right" size={48} onClick={() => navigateTo('next')} />}
            </div>
        </div>
    );
}

interface PageProps {
    children: React.ReactNode;
}

function Page({ children }: PageProps) {
    return (
        <li className={styles.page}>
            {children}
        </li>
    );
}

export default Object.assign(Story, { Page });