import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import ContainerAtvFt from "../../components/ContainerAtvFt";
import ImgFigma from "../../imagens/Modelagem/Figma.png"
import ImgHamburguer from "../../imagens/Modelagem/hamburguer.png"
import ImgSA from "../../imagens/Modelagem/SA.png"

function ModelagemSistemas() {
  return (
    <Container>
       <h1 style={{ margin: "20px 0", textAlign: "center" }}>1º Trimestre</h1>
        <Row>
            <ContainerAtvFt
              ImgAtv={ImgHamburguer}
              TituloATv="HAMBURGUERIA"
              AssuntoAtv="Assunto: RF, RNF and RN"
              Ch="Competências e Habilidades Desenvolvidas: H4, H7, H8"
              Objetivo="Objetivo: Criar uma tabela sobre uma hamburgueria com seus requistios funcionais, não funcionais e suas regras de negócio."
              LinkAtv="https://docs.google.com/spreadsheets/d/1Q6n2Lv8y-bUOLz2G0FUhhUQFA_LWcxVuuFEw0himmEA/edit?gid=1153884228#gid=1153884228"
            />
        </Row>
        <Row>
            <ContainerAtvFt
              ImgAtv={ImgSA}
              TituloATv=" AQUASENSE"
              AssuntoAtv="Assunto: S.A - Apresentação 01"
              Ch="Competências e Habilidades Desenvolvidas: H1, H2, H3, H4, H6, H7"
              Objetivo='Objetivo: Criar uma apresentação para apresentarmos a primeira parte da SA "Situação de aprendizagem"'
              LinkAtv="https://www.canva.com/design/DAGhhINJpos/JIw9cY-KNCqUU8IvQjFYIg/edit"
            />
        </Row>
        <h1 style={{ margin: "20px 0", textAlign: "center" }}> 2º Trimestre</h1>
        <Row>
            <ContainerAtvFt
              ImgAtv={ImgFigma}
              TituloATv=" AQUASENSE Protótipo"
              AssuntoAtv="Assunto: S.A - FIGMA"
              Ch="Competências e Habilidades Desenvolvidas: H1, H2, H3, H4, H6, H7"
              Objetivo='Objetivo: Criar um Protótipo do app e do site da SA "Situação de aprendizagem"'
              LinkAtv="https://www.figma.com/design/yFJD9Am0RZdEwt6a92zC29/AquaSense-App?node-id=0-1&p=f&t=5tXwA3ZqzWg8XVCg-0"
            />
        </Row>
    </Container>
  )
}

export default ModelagemSistemas