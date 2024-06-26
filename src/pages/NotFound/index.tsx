import styles from './NotFound.module.scss';
import { ReactComponent as NotFoundImage } from 'assets/not_found.svg';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import { memo } from 'react';

export function NotFound() {
    const navigate = useNavigate();
    return (
        <div className={classNames({
            [styles.container]: true
        })}>
            <div className={styles.voltar}>
                <button onClick={() => navigate(-1)}>
                    {'< Voltar'}
                </button>
            </div>
            <NotFoundImage className={styles.image} />
            <h2>Página não encontrada!</h2>
        </div>
    );
}
export default memo(NotFound)