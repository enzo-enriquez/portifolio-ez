import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import ContainerAtvFt from "../../components/ContainerAtvFt";
import ImgRadioativo from "../../imagens/natureza/ATIVIDADE AUTORIA NATUREZA PORTFOLIO.png"
import ImgEsgoto from "../../imagens/natureza/ESGOTO DOMESTICO - NATUREZA.png"
import ImgIndustria from "../../imagens/natureza/PRODUÇÃO DE ACIDO SULFURICO - NATUREZA.png"
import ImgMapa from "../../imagens/natureza/MAPA MENTAL ELETROSTÁTICA - NATUREZA.png"
import ImgMapaVacina from "../../imagens/natureza/vacinas.png"
import ImgGloss from "../../imagens/natureza/glossario.png"
import Imgsite from "../../imagens/natureza/magnetico.png"

import "./Natureza.css";

function Natureza() {
  return (
    <Container>
        <h1 style={{ margin: "20px 0", textAlign: "center" }}>1º Trimestre</h1>
        <Row>
            <ContainerAtvFt
              ImgAtv={ImgRadioativo}
              TituloATv="Decaimento Radioativo"
              AssuntoAtv="Decaimento Radioativo"
              Ch="Competências e Habilidades Desenvolvidas: C1, H1, H3 e H4."
              Objetivo="Objetivo: Compreender as ciências naturais e as tecnologias como construções humanas associadas à cultura dos povos e suas visões de mundo."
              LinkAtv="https://docs.google.com/document/d/1FKGN3f6G1mtvJVykVaNj734PaFnz7QBP3aMMmQJGAbE/edit?pli=1&tab=t.0"
            />
        </Row>
        <Row>
            <ContainerAtvFt
              ImgAtv={ImgEsgoto}
              TituloATv="Poluição"
              AssuntoAtv="Tipos de poluição"
              Ch="Competências e Habilidades Desenvolvidas: C1 - H1, H2 e H4"
              Objetivo="Criar uma apresentação sobre poluição. Comentário: Importante para entender meios de poluição e formas de conscientização."
              LinkAtv="https://www.canva.com/design/DAGe5hgZ8AA/TAZJqrQ6WxNO43-1VpzXww/edit"
            />
        </Row>
        <Row>
            <ContainerAtvFt
              ImgAtv={ImgIndustria}
              TituloATv="Estequiometria e indústria brasileira"
              AssuntoAtv="ESTEQUIOMETRIA"
              Ch="Competências e Habilidades Desenvolvidas: C2 - H7, H9 e H10"
              Objetivo="Objetivo: Apresentar sobre ácido sulfúrico na indústria brasileira e gravar um vídeo. Comentário: Interessante para aprender sobre a indústria e reações químicas."
              LinkAtv="https://www.youtube.com/watch?v=qOuNngrAEJM"
            />
        </Row>
        <Row>
            <ContainerAtvFt
              ImgAtv={ImgMapa}
              TituloATv="Mapa mental"
              AssuntoAtv="Eletrostática"
              Ch="Competências e Habilidades Desenvolvidas: H29, H30 e H31"
              Objetivo="Objetivo: Criar um mapa mental sobre eletrostática."
              LinkAtv="https://docs.google.com/document/d/1NfSAX0QLmf6ngn4tOaNCl13aJlahDOom8TEWs56GDn4/edit?usp=sharing"
            />
        </Row>
         <h1 style={{ margin: "20px 0", textAlign: "center" }}>2º Trimestre</h1>
                   <Row>
            <ContainerAtvFt
              ImgAtv={ImgMapaVacina}
              TituloATv="Sistema Imunológicos e Vacinas"
              AssuntoAtv="Vacinas"
              Ch="C4 - H23"
              Objetivo=" explicar o que é  Sistema Imunológico e as vacinas fazendo um mapa mental ."
              LinkAtv="https://drive.google.com/file/d/1ckbbTuyPJtrManVr4yOIZJsjhlCskfJu/view?usp=sharing"
            />
        </Row>
         <Row>
            <ContainerAtvFt
              ImgAtv={ImgGloss}
              TituloATv="Glossário Eletroquímica"
              AssuntoAtv="Eletroquímica"
              Ch="Competências e Habilidades Desenvolvidas: C2 - H6, H7 e H9 "
              Objetivo="criar de um glossário técnico ilustrado e matemático, com os principais conceitos de eletroquímica e eletricidade, destacando definições, aplicações cotidianas, fórmulas matemáticas relevantes e ilustrações explicativas."
              LinkAtv="https://www.canva.com/design/DAGr1A35Iek/xgriUhqVWbhEbdRg6zsj1g/edit"
            />
        </Row>
         <Row>
            <ContainerAtvFt
              ImgAtv={Imgsite}
              TituloATv="Site Magnetismo"
              AssuntoAtv="campo magnético"
              Ch="Competências e Habilidades Desenvolvidas:C2 - H6, H7 e H9 "
              Objetivo="compreender o campo magnético da Terra, os fenômenos das auroras austrais e boreais, e como esses temas estão relacionados ao eletromagnetismo estudado em sala de aula. O resultado será a criação de um site educativo com 6 páginas, com textos, imagens, vídeos e curiosidades científicas."
              LinkAtv="https://sites.google.com/estudante.sesisenai.org.br/site-magnetismo/v%C3%ADdeos-explicativos-e-curiosidades?authuser=0&pli=1"
            />
        </Row>
    </Container>
    
  )
}

export default Natureza