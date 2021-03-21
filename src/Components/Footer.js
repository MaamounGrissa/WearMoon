function Footer () {
    return (
        <footer>
            <div className="mycontainer">
                <span className="myhr">&nbsp;</span>
            </div>
            <div className="myfooter">
                <div className="mycontainer">
                    <div   div className="logo">
                        <a href="/"><img src="/images/logo.png" alt="logo" /></a>
                    </div>
                    <div className="col">
                        <h3>Lien Utiles</h3>
                        <ul>
                            <li>Configurateur</li>
                            <li>Notre magasin</li>
                            <li>Notice et installation</li>
                            <li>Livraison Transport</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h3>Nous contacter</h3>
                        <h5>Adress :</h5>
                        <adress>3 rue du champ de verger Allones, Pays de la Loire, France</adress>
                        <h5>Telephone :</h5>
                        <a href="tel:+33243570087">+33 2 43 57 00 87</a>
                    </div>
                    <div className="col">
                        <h3>Horaires</h3>
                        <p>Lundi à Vendredi</p>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>7:30-12:00</span>
                        </p>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>13:30-18:00</span>
                        </p>
                        <p>Samedi</p>
                        <span>( Fermé les samedis de janvier et février )</span>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>9:00-12:00</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="overlay"></div>
        </footer>
    );
}

export default Footer;