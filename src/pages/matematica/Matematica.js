import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import ContainerAtvFt from "../../components/ContainerAtvFt";
import ImgBacara from "../../imagens/matemática/bacra.png"
import Imgdados from "../../imagens/matemática/dados.png"
import ImgPasse from "../../imagens/matemática/passe.png"
import ImgBanca from "../../imagens/matemática/quebrandoabanca.png"
import ImgBolo from "../../imagens/matemática/Bolo.png"


function Matematica() {
  return (
    <Container>
        <h1 style={{ margin: "20px 0", textAlign: "center" }}>1º Trimestre</h1>
        <Row>
            <ContainerAtvFt
                ImgAtv={ImgBacara}
                TituloATv="BACARÁ RELEITURA"
                AssuntoAtv="Probabilidade"
                Ch="C5 - H30 e H31"
                Objetivo="Criar uma releitura de um jogo sobre probabilidade."
                LinkAtv="https://docs.google.com/document/d/1ltHJdplTOUbKd2GmCC5SNmZDnb-LwKY_2atpzejBrxQ/edit?tab=t.0"
                />
        </Row>
        <Row>
            <ContainerAtvFt
                ImgAtv={ImgBanca}
                TituloATv="Quebrando a Banca"
                AssuntoAtv="Conceitos da matemática aplicada no filme"
                Ch="C5 - H31 e H32"
                Objetivo="Responder perguntas sobre o filme quebrando a banca e ligar ele com conceitos da matemática"
                LinkAtv="https://docs.google.com/document/d/1OX0N7bXeSYGYlTi3TNy_XOU85ACmrD8orjJ28jhpKyE/edit?tab=t.0"
                />
        </Row>
        <Row>
            <h1 style={{ margin: "20px 0", textAlign: "center" }}>2º Trimestre</h1>
            <ContainerAtvFt
                ImgAtv={Imgdados}
                TituloATv="Análise de dados redes sociais"
                AssuntoAtv="Estatísticas"
                Ch="C4 - H27 - H28 - H29"
                Objetivo="Análise e interpretação de informações do dia a dia dos estudantes, por meio de conceitos de estatística elementar, utilizando recursos digitais como Google Forms e Google Planilhas."
                LinkAtv="https://www.canva.com/design/DAGsDdDrl6c/lzrO330BcGIcXPcDjVhH_A/edit"
                />
        </Row>
        <Row>
            <ContainerAtvFt
                ImgAtv={ImgPasse}
                TituloATv="Avalia Sesi 1"
                AssuntoAtv=" Avaliação de matemática"
                Ch="C4 e C5 - H27 - H28 - H29 - H31 e H32"
                Objetivo="Fazer uma prova objetiva sobre os conceitos da matemática"
                />
        </Row>
        <h1 style={{ margin: "20px 0", textAlign: "center" }}>2º Trimestre</h1>
            <Row>
            <ContainerAtvFt
                ImgAtv={ImgBolo}
                TituloATv=" Bolo de caneca"
                AssuntoAtv="Proporção"
                Ch="C5 - H33"
                Objetivo="A atividade consistiu em aplicar o conceito matemático de proporção por meio da adaptação de uma receita de bolo de caneca. Em grupo, pesquisamos a receita original para uma porção e recalculamos as quantidades necessárias para o número de integrantes. Depois, preparamos o bolo usando micro-ondas, registramos o processo e avaliamos se as proporções estavam corretas. Por fim, apresentamos os resultados com tabela de ingredientes, cálculos e reflexão sobre o que aprendemos."
                LinkAtv="https://www.canva.com/design/DAG4BvQZDKU/pkHCvE4GyxN-8cF74qnIMQ/view?embed"
                />
        </Row>
    </Container>
  )
}

export default Matematica