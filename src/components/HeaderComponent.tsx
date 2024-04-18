import {NavLink} from 'react-router-dom';

export function HeaderComponent() {
    return (
        <header className={'d-flex align-items-center justify-content-between'}>
            <div>
                <img
                    src="../assets/photo.png"
                    style={{maxHeight: '90%', borderRadius: '50%'}}
                    alt={'My photo'}/>
            </div>
            <div>
                <nav>
                    <NavLink to={'/'}>
                        <span>
                            Accueil
                        </span>
                    </NavLink>
                    <NavLink to={'/A-propos'}>
                        <span>
                            A propos
                        </span>
                    </NavLink>
                    <NavLink to={'/Projets'}>
                        <span>
                            Projets
                        </span>
                    </NavLink>
                    <NavLink to={'/Contacts'}>
                        <span>
                            Contacts
                        </span>
                    </NavLink>
                </nav>
            </div>
        </header>
    );
}
