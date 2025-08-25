import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import ContainerAtvFt from "../../components/ContainerAtvFt";
import ImgExer from "../../imagens/Banco/Exercicios.png"

function BancoDados() {
  return (
    <Container>
        <h1 style={{ margin: "20px 0", textAlign: "center" }}>2º Trimestre</h1>
        <Row>
            <ContainerAtvFt
              ImgAtv={ImgExer}
              TituloATv="Exercícios Modelagem Conceitual"
              AssuntoAtv="modelagem Conceitual"
              Ch="Competências e Habilidades Desenvolvidas: H1, H2, H3 e H4"
              Objetivo="Objetivo: Praticar exercícios sobre modelagem conceitual para compreender melhor a estrutura dos dados, identificar entidades, atributos e relacionamentos, além de desenvolver a habilidade de representar sistemas de forma organizada e padronizada."
              LinkAtv="https://docs.google.com/document/d/1qVWpJLtSz6p5lyY0WOJA4-Yel9r4Q16EAMYDMfylq3Q/edit?usp=sharing"
            />
        </Row>
    </Container>
  )
}

export default BancoDados