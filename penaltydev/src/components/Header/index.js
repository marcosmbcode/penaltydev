import React from 'react';

import "./style.css";

const Header = () => (
    <React.Fragment>
    <div className="header__content">
        <button type="button" className="nav__open-button">
            <i className="icon-menu" />
            <span>Todos os Produtos</span>
            </button>
            <div className="header__logo">
                <a href="/"> <img src={'https://lojaflecha.com.br/wp-content/uploads/2020/09/logo-penalty.png'} alt="Produto" /></a>
            </div>
            <div className="search">
                <form className="search__form" action>
                    <label className="search__label" htmlFor="search">Buscar</label>
                    <input id="search" type="text" className="search__input" autoComplete="off" placeholder="Encontre seus produtos" />
                        <button type="submit" className="search__button">
                            <i className="icon-search" />
                            <span className>Buscar</span>
                        </button>
                </form>
                <div className="search__results">
                    <div className="search__categories">
                        <ul className="search__categories__list" />
                    </div>
                    <div className="search__products">
                        <h4 className="search__products__title">Produtos encontrados</h4>
                        <ul className="search__products__list" />
                    </div>
                </div>
                <span className="overlay search__overlay" />
            </div>
            <div className="nav-utilities">
                <ul className="nav-utilities__list">
                    <li className="nav-utilities__item nav-utilities__item--contact"><a className="nav-utilities__link" href="https://penalty.zendesk.com/hc/pt-br"><i className="icon-help" /><span>Atendimento</span></a></li>
                    <li className="nav-utilities__item nav-utilities__item--corp"><a className="nav-utilities__link" href="/atendimento-corporativo"><i className="icon-email" /><span>Corporativo</span></a></li>
                    <li className="nav-utilities__item nav-utilities__item--profile profile"><i className="icon-user" /><p className="profile__text"><a className="profile__link" href="/login">Entre</a>ou
                    <a className="profile__link" href="/cadastro">Cadastre-se</a></p>
                    </li>
                    <li className="nav-utilities__item nav-utilities__item--cart cart">
                        <a className="cart__link" href="/checkout"><i className="icon-cart" /><span className="cart__quantity">0</span><span className="hide-label">Carrinho</span></a>
                        </li>
                </ul>
            </div>
    </div>

    <nav className="nav">
        <button className="nav__close-button"><span>Fechar</span></button>
            <div className="nav__content">
                <button type="button" className="nav__open-button"><i className="icon-menu" /><span>Todos os Produtos</span></button>
                <div className="profile">
                    <i className="icon-user" />
                    <p className="profile__text">
                    <a className="profile__link" href="/login">Entre</a> ou <a className="profile__link" href="/cadastro">Cadastre-se</a>
                    </p>
                </div>
                <ul className="nav__list">
                    <li className="nav__item nav__item--has-sublevel">
                        <a className="nav__link" href="/bolas">Bolas <i className="icon-arrow-right-2" /></a>
                        <ul className="nav__list nav__list--secondary">
                            <li className="nav__item">
                                <a className="nav__link" href="/bolas/futebol">Futebol</a>
                            </li>
                            <li className="nav__item">
                                <a className="nav__link" href="/bolas/volei">Vôlei</a>
                            </li><li className="nav__item">
                                <a className="nav__link" href="/bolas/basquete">Basquete</a>
                            </li>
                            <li className="nav__item">
                                <a className="nav__link" href="/bolas/handebol">Handebol</a>
                            </li>
                            <li className="nav__item">
                                <a className="nav__link" href="/bolas/esportes-de-praia">Esportes de Praia</a>
                            </li>
                            <li className="nav__item">
                                <a className="nav__link" href="/bolas/outros-esportes">Outros Esportes</a>
                            </li>
                            <li className="nav__item">
                                <a className="nav__link nav__link--all-products" href="/bolas">Todas as bolas</a>
                            </li>
                            <li className="nav__item nav__item--image">
                                <img alt="Banner Lançamentos" src="/arquivos/pnty-menu-banner-2.png?v=637356807520930000" />
                            </li>
                        </ul>
                    </li>
                    <li className="nav__item nav__item--has-sublevel">
                        <a className="nav__link" href="/calcados">Calçados <i className="icon-arrow-right-2" /></a>
                        <ul className="nav__list nav__list--secondary">
                            <li className="nav__item"><a className="nav__link" href="/calcados/chuteira-campo">Chuteira Campo</a></li>
                            <li className="nav__item"><a className="nav__link" href="/calcados/chuteira-society">Chuteira Society</a></li>
                            <li className="nav__item"><a className="nav__link" href="/calcados/chuteira-futsal">Chuteira Futsal</a></li>
                            <li className="nav__item nav__item--image">
                                <img alt="Banner Lançamentos" src="/arquivos/pnty-menu_banner.png?v=637352873281300000" />
                            </li>
                        </ul>
                    </li>
                    <li className="nav__item nav__item--has-sublevel">
                        <a className="nav__link" href="/roupas">Roupas <i className="icon-arrow-right-2" /></a>
                        <ul className="nav__list nav__list--secondary">
                            <li className="nav__item"><a className="nav__link" href="/roupas/agasalhos-e-jaquetas">Agasalhos e Jaquetas</a></li>
                            <li className="nav__item"><a className="nav__link" href="/roupas/bermudas-e-calcoes">Bermudas e Calções</a></li>
                            <li className="nav__item"><a className="nav__link" href="/roupas/camisas-e-camisetas">Camisas e Camisetas</a></li>
                            <li className="nav__item"><a className="nav__link" href="/roupas/arbitros-e-goleiros">Árbitros e Goleiros</a></li>
                            <li className="nav__item"><a className="nav__link" href="/roupas/meias-e-meioes">Meias e Meiões</a></li>
                            <li className="nav__item"><a className="nav__link" href="/roupas/termica-e-compressao">Térmica e Compressão</a></li>
                            <li className="nav__item nav__item--image">
                                <img alt="Banner Lançamentos" src="/arquivos/pnty-menu-banner-5.png?v=637356911131170000" />
                            </li>
                        </ul>
                    </li>
                    <li className="nav__item nav__item--has-sublevel">
                        <a className="nav__link" href="/equipamentos">Equipamentos <i className="icon-arrow-right-2" /></a>
                        <ul className="nav__list nav__list--secondary">
                            <li className="nav__item"><a className="nav__link" href="/equipamentos/acessorios-de-jogo">Acessórios de Jogo</a></li>
                            <li className="nav__item"><a className="nav__link" href="/equipamentos/luvas-de-goleiro">Luvas de Goleiro</a></li>
                            <li className="nav__item"><a className="nav__link" href="/equipamentos/mochilas">Mochilas</a></li>
                            <li className="nav__item"><a className="nav__link" href="/equipamentos/protecoes">Proteções</a></li>
                            <li className="nav__item nav__item--image">
                                <img alt="Banner Lançamentos" src="/arquivos/pnty-menu_banner-4.png?v=637354680872500000" />
                            </li>
                        </ul>
                    </li>
                    <li className="nav__item">
                        <a className="nav__link" href="/roupas/meias-e-meioes">Meias</a>
                    </li>
                    <li className="nav__item">
                        <a className="nav__link nav__item--inf" href="/atendimento-corporativo">Corporativo</a>
                    </li>
                    <li className="nav__item">
                        <a className="nav__link nav__item--inf" href="/lojas">Nossas Lojas</a>
                    </li>
                    <li className="nav__item">
                        <a className="nav__link nav__blog-mobile" href="https://eusoupenalty.com.br" style={{display: 'none'}}>
                        <div className="nav__blog-icon" />
                         #EuSouPenalty
                         </a>
                    </li>
                </ul>
                <a className="nav__blog" href="https://eusoupenalty.com.br">
                <div className="nav__blog-icon" />
                    #EuSouPenalty
                    </a>
                    <div className="nav-utilities">
                        <ul className="nav-utilities__list">
                            <li className="nav-utilities__item nav-utilities__item--contact">
                                <a className="nav-utilities__link" href="/atendimento"><i className="icon-help" /><span>Atendimento</span></a>
                            </li>
                            <li className="nav-utilities__item nav-utilities__item--logout">
                                <a className="nav-utilities__link" href="/logout"><i className="icon-logout" /><span>Sair</span></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <span className="overlay nav__overlay" />
    </nav>
 
            
 </React.Fragment>
);

export default Header;