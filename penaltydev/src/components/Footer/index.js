import React from 'react';

import "./style.css";

const Footer = () => (
    <React.Fragment>
    <div className="newsletter newsletter--visible" style={{display: 'block'}}>
        <div className="newsletter__content">
          <form action className="newsletter__form">
            <h3 className="newsletter__title">Cadastre-se para receber nossas novidades</h3>
            <div className="newsletter__fieldset">
              <label htmlFor="name" className="newsletter__label">Nome</label>
              <input className="newsletter__input newsletter__input--name" placeholder="Digite seu nome" type="text" id="name" />
              <label htmlFor="email" className="newsletter__label">Email</label>
              <input className="newsletter__input newsletter__input--email" placeholder="Digite seu email" type="text" id="email" />
            </div>
            <button className="newsletter__button button button--light-limegreen" type="submit">Receber Novidades</button>
          </form>
          <button className="newsletter__close-button">Fechar</button>
        </div>
    </div>
    
    <footer className="footer"><div className="benefits-bar">
          <div className="benefits-bar__content">
            <ul className="benefits-bar__list">
              <li className="benefits-bar__item">
                <a href="/atendimento" className="benefits-bar__link">
                  <i className="icon-exchange" />
                  <span className="benefits-bar__text">Trocas e <br /> Devoluções</span>
                </a>
              </li>
              <li className="benefits-bar__item">
                <a href="/lojas" className="benefits-bar__link">
                  <i className="icon-store" />
                  <span className="benefits-bar__text">Conheça nossas <br /> lojas físicas</span>
                </a>
              </li>
              <li className="benefits-bar__item">
                <a href="/atendimento" className="benefits-bar__link">
                  <i className="icon-credit-card" />
                  <span className="benefits-bar__text">Em até 10x sem juros<br /> no cartão de crédito</span>
                </a>
              </li>
              <li className="benefits-bar__item">
                <a href="/atletas-e-federacoes" className="benefits-bar__link">
                  <i className="icon-personalization" />
                  <span className="benefits-bar__text">Atletas e federações<br /> PENALTY</span>
                </a>
              </li>
              <li className="benefits-bar__item">
                <a href="/tecnologias" className="benefits-bar__link">
                  <i className="icon-ball" />
                  <span className="benefits-bar__text">Descubra nossas<br /> tecnologias</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__nav"><div className="footer__grid">
            <div className="footer__col footer__social"><div className="footer__logo pnty-logo-1">Penalty</div><h4 className="footer__subtitle">Siga a Penalty</h4><p className="footer__text">Onde tem Penalty, tem liga!</p><ul className="footer__social-list"><li className="footer__social-item footer__social-item--facebook"><a className="footer__social-link" href="https://www.facebook.com/penaltybr"  ><i className="icon-facebook" /><span className="footer__social-text">Facebook</span></a></li><li className="footer__social-item footer__social-item--instagram"><a className="footer__social-link" href="https://www.instagram.com/penaltybr"  ><i className="icon-instagram" /><span className="footer__social-text">Instagram</span></a></li><li className="footer__social-item footer__social-item--youtube"><a className="footer__social-link" href="https://www.youtube.com/user/PenaltyBR/videos"  ><i className="icon-youtube" /><span className="footer__social-text">Youtube</span></a></li><li className="footer__social-item footer__social-item--twitter"><a className="footer__social-link" href="https://twitter.com/penaltybr"  ><i className="icon-twitter" /><span className="footer__social-text">Twitter</span></a></li><li className="footer__social-item footer__social-item--linkedin"><a className="footer__social-link" href="https://www.linkedin.com/company/cambucisa/"  ><i className="icon-linkedin" /><span className="footer__social-text">Linkedin</span></a></li></ul></div><div className="footer__col footer__institutional footer__col--accordion"><button className="footer__button-accordion">Abrir</button><h4 className="footer__title">Institucional</h4><ul className="footer__list"><li className="footer__list-item"><a href="/institucional/quem-somos">Quem Somos</a></li><li className="footer__list-item"><a href="/institucional/trabalhe-conosco">Trabalhe Conosco</a></li><li className="footer__list-item"><a href="/universidade-penalty">Universidade Penalty</a></li><li className="footer__list-item"><a href="/institucional/penalty-internacional">Penalty Internacional</a></li><li className="footer__list-item"><a href="/lojas">Nossas Lojas</a></li><li className="footer__list-item"><a href="http://www.cambuci.com.br/"  >Cambuci SA</a></li></ul></div><div className="footer__col footer__contact footer__col--accordion"><button className="footer__button-accordion">Abrir</button><h4 className="footer__title">Atendimento</h4><ul className="footer__list"><li className="footer__list-item"><a href="/_secure/minha-conta#/orders">Acompanhar meus Pedidos</a></li><li className="footer__list-item"><a href="https://penalty.zendesk.com/hc/pt-br">Perguntas Frequentes</a></li><li className="footer__list-item"><a href="https://penalty.zendesk.com/hc/pt-br/articles/360046347011-Politica-de-Troca-e-Devolu%C3%A7%C3%A3o">Trocas e Devoluções</a></li><li className="footer__list-item"><a href="https://penalty.zendesk.com/hc/pt-br/articles/360046372891-Pol%C3%ADtica-de-Privacidade-e-Seguran%C3%A7a">Política de Privacidade</a></li><li className="footer__list-item"><a href="https://penalty.zendesk.com/hc/pt-br/articles/360048458252-Pol%C3%ADtica-de-Pagamento">Formas de Pagamento</a></li><li className="footer__list-item"><a href="/atendimento-corporativo">Atendimento Corporativo</a></li></ul></div><div className="footer__col footer__payment"><h4 className="footer__title">Formas de pagamento</h4><p className="footer__description">Parcele em até <b>10x sem juros*</b></p><div className="footer__payment-methods"><p>Visa | MasterCard | American Express | Elo | Hipercard | Boleto</p></div></div><div className="footer__col footer__security">
            <h4 className="footer__title">Patrocínios</h4>
            <ul className="footer__security-list">
                <li className="footer__security-item footer__security-item--nbb">
                    <a href="https://lnb.com.br/"  >
                        <img src="/arquivos/icon-nbb.png?v=637166138285770000" alt="NBB - Liga Nacional de Basquete" />
                    </a>
                </li>
                <li className="footer__security-item footer__security-item--cbfs">
                    <a href="https://www.cbfs.com.br/" >
                        <img src="/arquivos/icon-cbfs.png?v=637166138276230000" alt="CBFS - Confederação Brasileira de Futsal" />
                    </a>
                </li>
            </ul>
        </div>
        </div></div><div className="footer__copyright"><p className="footer__copyright-text">Copyright Penalty 2020 - www.penalty.com.br - TODOS OS DIREITOS RESERVADOS,
            CNPJ 61.088.894/0008-84, Av. Getulio Vargas, 930, 18130-430, São Roque - SP. É vetada a reprodução total ou
            parcial das informações aqui veiculadas sem a expressa autorização da administração do site. Os preços e
            condições de pagamento são válidos exclusivamente para compras realizadas via internet e poderão sofrer
            alteração sem aviso prévio. Em caso de divergência, o preço válido é sempre o do carrinho de compras.</p><div className="footer__copyright-logo pnty-logo-3" /></div></footer>    

    </React.Fragment> 
);

export default Footer;