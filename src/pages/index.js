import React from 'react';

import Layout from '../components/Layout';

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import Resume from '../components/Sections/Resume'
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <Resume
        firstName={config.firstName}
        lastName={config.lastName}
        address={config.address}
        email={config.email}
        socialLinks={config.socialLinks}
      >
        <p>
          Sou Desenvolvedora Pleno Full Stack na Avanade, Pós Graduanda na Especialização em Gestão Ágil de Projetos, <br />Graduada no Curso Superior em Análise e Desenvolvimento de Sistemas pela Estácio, Técnica em Informática com ênfase em Programação, Colunista Tech + Programador(a) e Social Media no coletivo InspirAda na Computação. <br />
        </p>
        <p>
          Sou membra ativa nas comunidades ligadas á tecnologia: PyLadies Recife, Facebook Developers Circle Recife, Reprograma, WoMakersCode e Women Who Code Recife. <br />
        </p>
        <p>
          Também sou membra da comunidade Se Candidate Mulher! Ligada á mulheres de diversas outras áreas.
        </p>
      </Resume>
      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experiência</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Software Engineer Full Stack</h3>
              <div className="subheading mb-3">Avanade</div>
              <br />
              <p className="mb-0">
                Projeto 01<br />
                - Atuava como Developer Front End<br />

              </p>
              <br />
              <p className="mb-0">
                Projeto 02<br />
                - Atuava como Developer Front End

              </p>
              <br />
              <p className="mb-0">
                Projeto 03 <br />
                - Atuando como Analista de Testes (QA - Quality Assurance)<br />

              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Agosto 2020 - Atualmente</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Desenvolvedora de Software Front End</h3>
              <div className="subheading mb-3">Procenge Tecnologia</div>
              <p className="mb-0">
                - Atuava como Desenvolvedor (a) Front End <br />
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Abril 2020 - Agosto 2020</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">New Associate Software Engineering</h3>
              <div className="subheading mb-3">Accenture</div>
              <p className="mb-0">
                Projeto 01<br />
                - Atuava como Desenvolvedora ODI Oracle <br />
              </p>
              <br />
              <p className="mb-0">
                Projeto 02<br />
                - Atuava como Desenvolvedora Full Stack <br />
                {/* - Atuava também na função de PMO <br /> */}
              </p>
              <br />
              <p className="mb-0">
                Projeto 03 <br />
                - Atuava como Analista Siebel8 <br />
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Fevereiro 2018 - Abril 2020</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Estagiário (a) de Suporte de TI </h3>
              <div className="subheading mb-3">Empresa de Urbanização da Prefeitura do Recife - URB RECIFE</div>
              <p className="mb-0">
                - Atuava como Estagiária de Suporte de TI
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Março 2016 - Janeiro 2018</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Formação Acadêmica</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">CESAR SCHOOL</h3>
              <div className="subheading mb-3">Pós-Graduação em Gestão Ágil de Projetos</div>
              <div>Especialização em Gestão Ágil de Projetos(GAP) tem como objetivo promover a habilidade de entender, adaptar e utilizar metodologias ágeis de forma prática, consistente e eficaz dentro do processo de gerenciamento de projetos.</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Fevereiro 2021 - Dezembro 2022</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Estácio</h3>
              <div className="subheading mb-3">Análise e Desenvolvimento de Sistemas  </div>
              <div> Graduação Tecnológica. </div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Agosto 2017 - Junho 2020</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">
            Tecnologias &amp; Hard Skills
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-html5"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-css3-alt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-js-square"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-angular"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-react"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-node-js"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-java"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-git"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-npm"></i>
            </li>
          </ul>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
            Banco de dados: Oracle SQL, PL/SQL, MongoDB
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
            Linguagens: C#
            </li>
          </ul>
          <br />
          <div className="subheading mb-3">Ferramentas &amp; Soft Skills</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
                Metodologias Ágeis: Scrum e Kanban
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
                Versionamento: Git, GitHub, GitLab
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
                Agile Development
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
                Comunicação
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
                Espírito de equipe
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
                Flexibilidade
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Gestão de projetos
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
                Inteligência Emocional
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
                Liderança
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
                Pensamento Analítico e Criativo
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
                Proatividade
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
                Resiliência.
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      {/* <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Interests</h2>
          <p>
            Apart from being a web developer, I enjoy most of my time being
            outdoors. In the winter, I am an avid skier and novice ice climber.
            During the warmer months here in Colorado, I enjoy mountain biking,
            free climbing, and kayaking.
          </p>
          <p className="mb-0">
            When forced indoors, I follow a number of sci-fi and fantasy genre
            movies and television shows, I am an aspiring chef, and I spend a
            large amount of my free time exploring the latest technology
            advancements in the front-end web development world.
          </p>
        </div>
      </section>

      <hr className="m-0" /> */}

      {/* <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="awards"
      >
        <div className="w-100">
          <h2 className="mb-5">Projetos &amp; Iniciativas</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Google Analytics Certified Developer
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Mobile Web Specialist - Google Certification
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>1<sup>st</sup>
              Place - University of Colorado Boulder - Emerging Tech Competition
              2009
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>1<sup>st</sup>
              Place - University of Colorado Boulder - Adobe Creative Jam 2008
              (UI Design Category)
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>2<sup>nd</sup>
              Place - University of Colorado Boulder - Emerging Tech Competition
              2008
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>1<sup>st</sup>
              Place - James Buchanan High School - Hackathon 2006
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>3<sup>rd</sup>
              Place - James Buchanan High School - Hackathon 2005
            </li>
          </ul>
        </div>
      </section> */}
    </div>
  </Layout>
);

export default IndexPage;
