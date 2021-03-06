import React, {useState} from 'react';
import './styles.css';
import logo from "../../assets/logo2.png"

function App() {
  return (
    <body>
      <div className="pre-loader">
        <div className='wrapper'>
          <div id='content'>
            <nav className='navbar navbar-expand-md navbar-light fixed-top'>
              <div className='container-fluid'>
                <img className='logo' src={logo} alt="123Projetei logo"/>
              </div>
            </nav>
            <div className="insert-container mx-auto col-10">
              <h1 className='title'>Inserir Pessoa</h1>
              <label htmlFor='cpf'> CPF</label>
              <input
                type="text"
                name="cpf"
                className="input"
              />
              <label htmlFor='name'> Nome Completo</label>
              <input
                type="text"
                name="name"
                className="input"
              />
              <label htmlFor='telephone'> Telefone</label>
              <input
                type="tel"
                name="telephone"
                className="input"
              />
              <label htmlFor='date'> Data de Nascimento</label>
              <input
                type="date"
                name="date"
                className="input"
              />
              <button className='btn'>Insert</button>
            </div>
            <div class="banner-desktop banner">
              <div class="image-banner-area">
                <div class="par-banner-inner">
                  <a target="_blank" href="/projetos/245">
                    <img class="banner-img" 
                      src="https://imagem-123projetei.com/ecommerce/architecturalProjects/ready/245/images/project_245_image_fachada_frontal.min.jpg" 
                      alt="Projeto 245 - Fachada Frontal: A textura de madeira torna a fachada moderna com linhas retas e rigorosas mais suave, transformando seu impacto imponente em encanto e tranquilidade."
                    />
                  </a>
                  <a target="_blank" href="/projetos/709">
                    <img class="banner-img" 
                      src="https://imagem-123projetei.com/ecommerce/architecturalProjects/ready/709/images/project_709_image_fachada.min.jpg" 
                      alt="Projeto 709 - Fachada: Com v??rios elementos em destaque a fachada do projeto 709 recebe um design moderno e delicado. Composta por cores claras de verde, branco, amadeirado, revestimento de pedras naturais e um lindo vidro frontal, a estrutura impressiona e encanta ao olhar."
                    />
                  </a>
                  <a target="_blank" href="/projetos/C-121">
                    <img class="banner-img" 
                      src="https://imagem-123projetei.com/ecommerce/commercialProjects/C-121/images/project_C-121_image_fachada_vista_pela_saida.min.jpg" 
                      alt="Projeto C-121 - Fachada vista pela sa??da: Posto de combust??vel moderno com cor vibrante. O estabelecimento recebe destaque no bairro onde est?? situado pela elementos de destaque e a sua cor."
                    />
                  </a>
                  <a target="_blank" href="/projetos/P-917">
                    <img class="banner-img" 
                      src="https://imagem-123projetei.com/ecommerce/architecturalProjects/custom/P-917/images/project_P-917_image_fachada_com_muro.min.jpg" 
                      alt="Projeto P-917 - Fachada com Muro: O muro da fachada cont??m vidros, port??es e porta que permitem visualizar a parte interna do terreno, al??m de ser revestido com m??rmore escuro e ter um pequeno jardim externo, que deixa a vista marcante e muito elegante."
                    />
                  </a>
                </div>
                <div class="impar banner-inner">
                  <a target="_blank" href="/projetos/304">
                    <img class="banner-img" 
                      src="https://imagem-123projetei.com/ecommerce/architecturalProjects/ready/304/images/image_fachada_moderna.min.jpg" 
                      alt="Projeto 304 - Fachada Moderna: Com linhas retas e encaixe de figuras geom??tricas, a fachada do projeto conta com uma garagem com capacidade para dois carros e cobertura em sua entrada garantida pela espessa platibanda. Arandelas destacam os revestimentos fachada enquanto o p?? direito alto ?? evidenciado pela esquadria em vidro. "
                    />
                  </a>
                  <a target="_blank" href="/projetos/C-117">
                    <img class="banner-img" 
                      src="https://imagem-123projetei.com/ecommerce/commercialProjects/C-117/images/project_C-117_image_predio_misto.min.jpg" 
                      alt="Projeto C-117 - Pr??dio Misto: Empreedimento misto de m??dio porte com 5 pavimentos. O pr??dio conta com o pavimento t??rreo comercial e 4 pavimentos residenciais com 2 apartamentos cada."
                    />
                  </a>
                  <a target="_blank" href="/projetos/485">
                    <img class="banner-img" 
                      src="https://imagem-123projetei.com/ecommerce/architecturalProjects/ready/485/images/image_fachada_frontal.min.jpg" 
                      alt="Projeto 485 - Fachada Frontal: Repleta de diferentes elementos arquitet??nicos e variados revestimentos, a fachada do projeto impressiona com seus deslumbrantes detalhes, exuberante paisagismo e harmonia entre diferentes texturas. "
                    />
                  </a>
                  <a target="_blank" href="/projetos/P-1477">
                    <img class="banner-img" 
                      src="https://imagem-123projetei.com/ecommerce/architecturalProjects/custom/P-1477/images/project_P-1477_image_fachada_diurna.min.jpg" 
                      alt="Projeto P-1477 - Fachada Diurna: O projeto P-1477 apresenta uma bel??ssima casa t??rrea em estilo contempor??neo com 126,13 m?? de ??rea constru??da. A casa ?? composta, em sua totalidade, por um misto de tons claros, escuros e coloridos, que deixam a estrutura ??nica e destaque na vizinhan??a."
                    />
                  </a>
                </div>
                <div class="par-banner-inner">
                  <a target="_blank" href="/projetos/C-113">
                    <img class="banner-img" 
                      src="https://imagem-123projetei.com/ecommerce/commercialProjects/C-113/images/project_C-113_image_edificio_comercial_.min.jpg" 
                      alt="Projeto C-113 - Edif??cio Comercial : Detalhes da fachada principal."
                    />
                  </a>
                  <a target="_blank" href="/projetos/686">
                    <img class="banner-img" 
                      src="https://imagem-123projetei.com/ecommerce/architecturalProjects/ready/686/images/image_fachada_frontal.min.jpg" 
                      alt="Projeto 686 - Fachada Frontal: Com uma linda e alta vitrine frontal, juntamente de um belo jardim, exaltam e trazem vida para a resid??ncia."
                    />
                  </a>
                  <a target="_blank" href="/projetos/P-1379">
                    <img class="banner-img" 
                      src="https://imagem-123projetei.com/ecommerce/architecturalProjects/custom/P-1379/images/project_P-1379_image_fachada.min.jpg" 
                      alt="Projeto P-1379 - Fachada: O projeto P-1379 apresenta uma linda casa t??rrea em estilo moderno e cercada por um marcante muro frontal. Sem d??vidas, o muro destaca a vista o tipo da modelagem das paredes, jardim e revestimento de alvenaria aparente."
                    />
                  </a>
                  <a target="_blank" href="/projetos/C-122">
                    <img class="banner-img" 
                      src="https://imagem-123projetei.com/ecommerce/commercialProjects/C-122/images/project_C-122_image_fachada___.min.jpg" 
                      alt="Projeto C-122 - Fachada   : A 123 barbearia possui uma bel??ssima fachada moderna inspirada no estilo industrial. O destaque da fachada se da pela combina????o do tijolo aparente com o revestimento em madeira escuro e as suas esquadrias pretas."
                    />
                  </a>
                </div>
                <div class="impar banner-inner">
                  <a target="_blank" href="/projetos/711">
                    <img class="banner-img" 
                      src="https://imagem-123projetei.com/ecommerce/architecturalProjects/ready/711/images/project_711_image_fachada_frontal.min.jpg" 
                      alt="Projeto 711 - Fachada Frontal: Com uma linda paisagem de campo, o projeto 711 impressiona com seu design imponente e estilo r??stico. A fachada frontal possui vista da su??te master e sala de cinema do pavimento 1, al??m de encantar com a alvenaria aparente e telhado colonial alaranjado."
                    />
                  </a>
                  <a target="_blank" href="/projetos/P-1825">
                    <img class="banner-img" 
                      src="https://imagem-123projetei.com/ecommerce/architecturalProjects/custom/P-1825/images/project_P-1825_image_fachada.min.jpg" 
                      alt="Projeto P-1825 - Fachada: O projeto P-1825 apresenta um lindo sobrado em estilo colonial e cercado de uma bela paisagem de campo. O projeto conta um amplo terreno de ??rea verde e 216,97m?? de ??rea constru??da."
                    />
                  </a>
                  <a target="_blank" href="/projetos/P-1671">
                    <img class="banner-img" 
                      src="https://imagem-123projetei.com/ecommerce/architecturalProjects/custom/P-1671/images/project_P-1671_image_fachada.min.jpg" 
                      alt="Projeto P-1671 - Fachada: O projeto P-1671 apresenta uma linda casa t??rrea em estilo moderno, terreno irregular e com desn??vel. A fachada da casa apresenta tons claros de marrom, creme e branco, al??m de um design inovador que destaca a vista juntamente com o belo jardim e a paisagem. "
                    />
                  </a>
                  <a target="_blank" href="/projetos/708">
                    <img class="banner-img"
                      src="https://imagem-123projetei.com/ecommerce/architecturalProjects/ready/708/images/project_708_image_fachada_com_muro.min.jpg" 
                      alt="Projeto 708 - Fachada com Muro: Mesmo distante ?? poss??vel ver a beleza do projeto 708 atrav??s das grades vazadas do muro frontal, que permitem a vista do detalhe amadeirado da garagem, jardim e p??-direito alto com vidra??as espelhadas. "
                    />
                  </a>
                </div>
                <div class="par-banner-inner">
                  <a target="_blank" href="/projetos/P-1477">
                    <img class="banner-img" 
                      src="https://imagem-123projetei.com/ecommerce/architecturalProjects/custom/P-1477/images/project_P-1477_image_fachada_diurna.min.jpg" 
                      alt="Projeto P-1477 - Fachada Diurna: O projeto P-1477 apresenta uma bel??ssima casa t??rrea em estilo contempor??neo com 126,13 m?? de ??rea constru??da. A casa ?? composta, em sua totalidade, por um misto de tons claros, escuros e coloridos, que deixam a estrutura ??nica e destaque na vizinhan??a."
                    />
                  </a>
                  <a target="_blank" href="/projetos/358">
                    <img class="banner-img" 
                      src="https://imagem-123projetei.com/ecommerce/architecturalProjects/ready/358/images/image_fachada_frontal.min.jpg" 
                      alt="Projeto 358 - Fachada Frontal: Com espessa platibanda em cinza suave, detalhes em branco e revestimento de madeira, a elegante e bela fachada tem seu encanto garantido.  "
                    />
                  </a>
                  <a target="_blank" href="/projetos/C-118">
                    <img class="banner-img" 
                      src="https://imagem-123projetei.com/ecommerce/commercialProjects/C-118/images/project_C-118_image_predio_comercial_.min.jpg" 
                      alt="Projeto C-118 - Pr??dio Comercial : Empreendimento comercial de m??dio porte de 3 pavimentos e com 5 salas comerciais de diferentes tamanhos. "
                    />
                  </a>
                  <a target="_blank" href="/projetos/712">
                    <img class="banner-img" 
                      src="https://imagem-123projetei.com/ecommerce/architecturalProjects/ready/712/images/project_712_image_fachada.min.jpg" 
                      alt="Projeto 712 - Fachada: O destaque da fachada ?? o conjunto de texturas, elementos e vegeta????o que contempla a estrutura frontal do loft. A colora????o branca da estrutura contrasta com a linda trepadeira, que tem origem no muro de pedra, percorre o pergolado e paredes at?? na laje verde."
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default App;
