import styles from '@/styles/layoutHeader.module.css';
import { Link, Outlet, useLocation } from 'react-router-dom';
import LogoutBtn from './LogoutBtn';
/* fontAwesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons'

export default function LayoutHeader() {
  const location = useLocation();

  const handleLinkActive = (path: string) => {
    if (location.pathname === path) {
      return styles.isLinkActive;
    }
  };

  return (
    <>
      <div className={styles.header}>
        <div className={styles.layoutHeader}>
          <Link to='/dashboard' className={`${styles.headerLink} ${handleLinkActive('/dashboard')}`}>
            Pedidos
          </Link>
          <Link to='/statistics' className={`${styles.headerLink} ${handleLinkActive('/statistics')}`}>
            Estadísticas
          </Link>
        </div>
        <div className={`${styles.user}`}>
            <FontAwesomeIcon icon={faUser} size='2xl'/>
            <ul>
              <li>
              <Link to='/configuration' className={`${styles.headerLink} ${handleLinkActive('/configuration')}`}>
                Configuración
              </Link>
              </li>
              <li>
                <LogoutBtn />
              </li>
            </ul>
        </div>
      </div>
      <Outlet />
    </>
  );
}
