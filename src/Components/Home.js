import React, {Component} from 'react';

class Home extends Component {
    render () {
        return (
            <div className="main-content">
                <div className="fixed-section">
                    <div className="slider">
                        <img src="/images/slide.png" alt="slide" />
                    </div>
                    <div className="mycontainer">
                        <div className="categories">
                            <div className="category">
                                <img src="/images/categories/category1.png" alt="Category" />
                                <h3>Lame <br /> Commposite</h3>
                            </div>
                            <div className="category">
                                <img src="/images/categories/category2.png" alt="Category" />
                                <h3>Lame <br /> en bois</h3>
                            </div>
                            <div className="category">
                                <img src="/images/categories/category3.png" alt="Category" />
                                <h3>Panneau <br /> bois</h3>
                            </div>
                            <div className="category">
                                <img src="/images/categories/category4.png" alt="Category" />
                                <h3>Grille <br /> rigide</h3>
                            </div>
                            <div className="category">
                                <img src="/images/categories/category5.png" alt="Category" />
                                <h3>Gabion</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="scroll-section">
                    <div className="mycontainer">
                        <div className="config-block">
                            <svg className="e-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42.09 62.734">
                                <g transform="translate(-122.347 -60.728)">
                                <path class="a" d="M223.7,23.548V12.186H181.611V23.548Z" transform="translate(-59.264 48.542)"/>
                                <path class="a" d="M223.7,59.515H193.773V44.631H223.7V33.909h-42.09V70.877H223.7Z" transform="translate(-59.264 52.585)"/>
                                </g>
                            </svg>
                            <img src="/images/icons/config.png" alt="config"></img>
                            <div className="txt-block">
                                <h3>Configurez votre espace</h3>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidu.</p>
                            </div>
                            <svg className="arrow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </div>
                    </div>
                    <div className="carousel">
                        <h2>Nos realisations</h2>
                        <div className="mycarousel">
                            <h3>Panneau bois</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis quidem doloremque veniam aliquam nam. 
                                Ad est fugiat odit incidunt atque! Voluptatem consectetur eius a quaerat obcaecati ratione quibusdam vitae? Quaerat.
                                consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidu. Ad est fugiat odit incidunt atque!</p>
                            <div className="carousel-navs">
                                <button className="nav-prev"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                                </svg></button>
                                <div className="carousel-dots">
                                    <span className="dot">&nbsp;</span>
                                    <span className="dot active">&nbsp;</span>
                                    <span className="dot">&nbsp;</span>
                                    <span className="dot">&nbsp;</span>
                                </div>
                                <button  className="nav-next"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg></button>
                            </div>
                        </div>
                        <div className="images">
                            <div className="img-container">
                                <img src="/images/realisation.png" alt="img" />
                            </div>
                            <svg className="e-icon" xmlns="http://www.w3.org/2000/svg" width="150" height="200" viewBox="0 0 42.09 62.734">
                                <g transform="translate(-122.347 -60.728)">
                                <path class="a" d="M223.7,23.548V12.186H181.611V23.548Z" transform="translate(-59.264 48.542)"/>
                                <path class="a" d="M223.7,59.515H193.773V44.631H223.7V33.909h-42.09V70.877H223.7Z" transform="translate(-59.264 52.585)"/>
                                </g>
                            </svg>
                        </div>
                    </div>
                    <div className="mycontainer">
                        <div className="portfolio">
                            <div className="block block-1">
                                <h2>Notice <br /> & Installation</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur. Facilis quidem doloremque veniam aliquam nam. 
                                Ad est fugiat odit incidunt atque!</p>
                                <a className="plus" href="/plus"> <span>En savoir plus</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                            </div>
                            <div className="block block-n">
                                <img src="/images/portfolio/img1.png" alt="Portfolio" />
                                <svg className="e-icon" xmlns="http://www.w3.org/2000/svg" width="150" height="200" viewBox="0 0 42.09 62.734">
                                    <g transform="translate(-122.347 -60.728)">
                                    <path class="a" d="M223.7,23.548V12.186H181.611V23.548Z" transform="translate(-59.264 48.542)"/>
                                    <path class="a" d="M223.7,59.515H193.773V44.631H223.7V33.909h-42.09V70.877H223.7Z" transform="translate(-59.264 52.585)"/>
                                    </g>
                                </svg>
                            </div>
                            <div className="block block-n">
                                <img src="/images/portfolio/img2.png" alt="Portfolio" />
                                <svg className="e-icon" xmlns="http://www.w3.org/2000/svg" width="150" height="200" viewBox="0 0 42.09 62.734">
                                    <g transform="translate(-122.347 -60.728)">
                                    <path class="a" d="M223.7,23.548V12.186H181.611V23.548Z" transform="translate(-59.264 48.542)"/>
                                    <path class="a" d="M223.7,59.515H193.773V44.631H223.7V33.909h-42.09V70.877H223.7Z" transform="translate(-59.264 52.585)"/>
                                    </g>
                                </svg>
                            </div>
                            <div className="block block-n">
                                <img src="/images/portfolio/img3.png" alt="Portfolio" />
                                <svg className="e-icon" xmlns="http://www.w3.org/2000/svg" width="150" height="200" viewBox="0 0 42.09 62.734">
                                    <g transform="translate(-122.347 -60.728)">
                                    <path class="a" d="M223.7,23.548V12.186H181.611V23.548Z" transform="translate(-59.264 48.542)"/>
                                    <path class="a" d="M223.7,59.515H193.773V44.631H223.7V33.909h-42.09V70.877H223.7Z" transform="translate(-59.264 52.585)"/>
                                    </g>
                                </svg>
                            </div>
                            <div className="block block-n">
                                <img src="/images/portfolio/img4.png" alt="Portfolio" />
                                <svg className="e-icon" xmlns="http://www.w3.org/2000/svg" width="150" height="200" viewBox="0 0 42.09 62.734">
                                    <g transform="translate(-122.347 -60.728)">
                                    <path class="a" d="M223.7,23.548V12.186H181.611V23.548Z" transform="translate(-59.264 48.542)"/>
                                    <path class="a" d="M223.7,59.515H193.773V44.631H223.7V33.909h-42.09V70.877H223.7Z" transform="translate(-59.264 52.585)"/>
                                    </g>
                                </svg>
                            </div>
                            <div className="block block-n">
                                <img src="/images/portfolio/img5.png" alt="Portfolio" />
                                <svg className="e-icon" xmlns="http://www.w3.org/2000/svg" width="150" height="200" viewBox="0 0 42.09 62.734">
                                    <g transform="translate(-122.347 -60.728)">
                                    <path class="a" d="M223.7,23.548V12.186H181.611V23.548Z" transform="translate(-59.264 48.542)"/>
                                    <path class="a" d="M223.7,59.515H193.773V44.631H223.7V33.909h-42.09V70.877H223.7Z" transform="translate(-59.264 52.585)"/>
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="carousel reverse">
                        
                        <div className="empty-col"></div>
                        <div className="col2">
                            <h2>Notre magasin</h2>
                            <div className="mycarousel">
                                <img src="/images/magasin.png" alt="Magasin" />
                                <div className="infos">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis quidem doloremque veniam aliquam nam. 
                                        Ad est fugiat odit incidunt atque! </p>
                                    <a className="plus" href="/plus"> <span>En savoir plus</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="images">
                            <div className="img-container">
                                <img src="/images/magasin-bg.png" alt="img" />
                            </div>
                            <svg className="e-icon" xmlns="http://www.w3.org/2000/svg" width="150" height="200" viewBox="0 0 42.09 62.734">
                                <g transform="translate(-122.347 -60.728)">
                                <path class="a" d="M223.7,23.548V12.186H181.611V23.548Z" transform="translate(-59.264 48.542)"/>
                                <path class="a" d="M223.7,59.515H193.773V44.631H223.7V33.909h-42.09V70.877H223.7Z" transform="translate(-59.264 52.585)"/>
                                </g>
                            </svg>
                        </div>
                    </div>
                    <div className="overlay"></div>
                </div>
            </div>
        );
    }
}

export default Home;