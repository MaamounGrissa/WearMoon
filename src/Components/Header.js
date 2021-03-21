import React, { Component } from 'react';

class Header extends Component {

    render() {
        return (
            <header>
                <div className="topbar">
                    <div className="mycontainer">
                        <div className="logo">
                            <a href="/"><img src="/images/logo.png" alt="logo" /></a>
                        </div>
                        <div className="search">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <input type="text" placeholder="Recherche" />
                        </div>
                        <div className="adress">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span>Notre magasin</span>
                        </div>
                        <svg className="mobile-nav-toggle" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        <div className="config">
                            <a href="/config">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                </svg>
                                <span>Configurateur</span>
                            </a>
                        </div>
                    </div>
                </div>
                <nav className="mycontainer">
                    <ul>
                        <li><a href="/">Accueil</a></li>
                        <li className="dropdown-container">
                            <span>Boutique</span>
                            <div className="dropdown">
                                <div className="boutique">
                                    <ul className="boutique-menu">
                                        <img src="/images/contact.png" alt="contact"/>
                                        <li><a href="/boutique">Lame Commposite</a></li>
                                        <li><a href="/boutique">Lame en bois</a></li>
                                        <li><a className="active" href="/boutique">Panneau bois</a></li>
                                        <li><a href="/boutique">Grille rigide</a></li>
                                        <li><a href="/boutique">Gabion</a></li>
                                    </ul>
                                    <a className="boutique-link" href="/boutique">Boutique</a>
                                </div>
                            </div>
                        </li>
                        <li><a href="/realisations">Nos réalisations</a></li>
                        <li className="dropdown-container">
                            <span>Contactez-nous</span>
                            <div className="dropdown">
                                <div className="contact">
                                    <div className="contact-head">
                                        <img src="/images/contact.png" alt="contact"/>
                                        <span>Coordonnées & map</span>
                                    </div>
                                    <div className="contact-desc">
                                        <p>Hey! Pour toute informations ou suggestions, Merci de remplir le formulaire suivant.</p>
                                    </div>
                                    <div className="contact-form">
                                        <form>
                                            <div>
                                                <input id="name" type="text" placeholder="Nom & Prénom" />
                                                <input id="email" type="email" placeholder="E-mail" />
                                                <label for="message">Message</label>
                                                <textarea id="message">
                                                </textarea>
                                            </div>
                                            <input type="submit" value="Envoyer" />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}


export default Header;