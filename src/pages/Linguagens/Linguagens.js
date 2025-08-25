import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import ContainerAtvFt from "../../components/ContainerAtvFt";
import ImgBio from "../../imagens/linguagens/Bioagrafia .png"
import ImgInfo from "../../imagens/linguagens/Informa ENEM.png"
import ImgMatue from "../../imagens/linguagens/matue.png"
import ImgBola from "../../imagens/linguagens/outroLadoBola.png"
import ImgPadlet from "../../imagens/linguagens/Padlet.png"
import ImgPai from "../../imagens/linguagens/Pai.png"
import ImgRedacao from "../../imagens/linguagens/redacao.png"
import ImgVozes from "../../imagens/linguagens/Vozescriativas.png"


function Linguagens() {
  return (
    <Container>
        <h1 style={{ margin: "20px 0", textAlign: "center" }}>1º Trimestre</h1>
        <Row>
            <ContainerAtvFt
              ImgAtv={ImgPadlet}
              TituloATv="PADLET"
              AssuntoAtv="Assunto:Memórias Póstumas de Brás Cubas"
              Ch="Competências e Habilidades Desenvolvidas:C2 - H7, H9 e H10."
              Objetivo="Objetivo:Análisar a obra Memórias Póstumas de Brás Cubas e fazer um cometário"
              ComentárioPessoal='Comentário Pessoal: A análise de Memórias Póstumas de Brás Cubas revelou a genialidade de Machado de Assis, com sua narrativa irônica e crítica. Escrever a resenha ampliou minha visão sobre literatura. Habilidades'
              LinkAtv="https://padlet.com/claudiabechler/leituras-obrigat-rias-ufsc-2026-i3y2t016v48gskg"
            />
        </Row>
        <Row>
            <ContainerAtvFt
              ImgAtv={ImgInfo}
              TituloATv=" INFORMA ENEM"
              AssuntoAtv="Assunto: Repertório para redações do ENEM"
              Ch="Competências e Habilidades Desenvolvidas: C1, H1, H2 e H4."
              Objetivo="Objetivo: cria um site com varios repertórios para o ENEM"
              LinkAtv="https://sites.google.com/estudante.sesisenai.org.br/informa-enem-22/in%C3%ADcio"
            />
        </Row>
        <Row>
            <ContainerAtvFt
              ImgAtv={ImgBio}
              TituloATv=" BIOGRAFIA"
              AssuntoAtv="Assunto: Biografia pessoal"
              Ch="Competências e Habilidades Desenvolvidas: C4 - H23 / C5 - H24, H25 e H28."
              Objetivo="Objetivo: A atividade consistiu na criação da minha biografia profissional, destacando informações relevantes sobre minha trajetória e adaptando-a a diferentes contextos."
              ComentárioPessoal="Cometário Pessoal: O desafio de escrever em terceira pessoa me fez refletir sobre uma apresentação objetiva e autêntica. A experiência foi valiosa, pois enfatizou a importância de uma biografia bem estruturada para diversas oportunidades."
              LinkAtv="https://docs.google.com/document/d/1hPdpYc07yZQgxrv96zEMswp5Jfcir3LeFic2AofzllM/edit?tab=t.0"
            />
        </Row>
        <Row>
            <ContainerAtvFt
              ImgAtv={ImgVozes}
              TituloATv=" VOZES CRIATIVAS"
              AssuntoAtv="Assunto:"
              Ch="Competências e Habilidades Desenvolvidas:  C2, H7, H9 e H10."
              Objetivo="Objetivo:  criação de uma Revista Digital no Google Sites sobre Memórias Póstumas de Brás Cubas."
              ComentárioPessoal="Cometário Pessoal:A atividade foi enriquecedora por ser em grupo"
              LinkAtv="https://sites.google.com/estudante.sesisenai.org.br/vozes-criativas/atividades"
            />
        </Row>
        <Row>
            <ContainerAtvFt
              ImgAtv={ImgPai}
              TituloATv="PAI CONTRA MÃE"
              AssuntoAtv="Assunto: Leitura e análise da obra “Pai contra mãe”"
              Ch="Competências e Habilidades Desenvolvidas:  C2, H7, H9 e H10."
              Objetivo="Objetivo: Reescrever o texto pela visão da mãe e responder algumas perguntas "
              ComentárioPessoal="Cometário Pessoal: Nessa atividade podemos entender sobre o conto pai e mãe e aprender sobre o conto de Machado de Assis."
              LinkAtv="https://docs.google.com/document/d/1nnyA9BDzoRM9mFz1zbv9D8Mzht_NaFh6/edit"
            />
        </Row>
        <Row>
            <ContainerAtvFt
              ImgAtv={ImgRedacao}
              TituloATv="NOTA RED1000"
              AssuntoAtv="Assunto:desafios da inclusão social através do esporte no Brasil."
              Ch="Competências e Habilidades Desenvolvidas:  C2, H7, H9 e H10."
              Objetivo="Objetivo: Redação no estilo ENEM sobre os desafios da inclusão social através do esporte no Brasil."
              ComentárioPessoal="Cometário Pessoal: Foi uma experiência válida para aplicar o que aprendi sobre estrutura dissertativa"
              LinkAtv="https://portal.redacaonota1000.com.br/redacao/laudo/app/10806175"
            />
        </Row>
        <h1 style={{ margin: "20px 0", textAlign: "center" }}>2º Trimestre</h1>

        <Row>
            <ContainerAtvFt
              ImgAtv={ImgBola}
              TituloATv="Revista Literária com as atividades sobre os livros “Parque Industrial” e “O outro lado da bola” postados"
              AssuntoAtv="Assunto: “Parque Industrial” e “O outro lado da bola”"
              Ch="Competências e Habilidades Desenvolvidas: H11 e H25"
              Objetivo="Objetivo: Fazer reflexões sobre as obras “Parque Industrial” e “O outro lado da bola”. "
              LinkAtv="https://sites.google.com/estudante.sesisenai.org.br/vozes-criativas/atividades"
            />
        </Row>
        <Row>
            <ContainerAtvFt
              ImgAtv={ImgRedacao}
              TituloATv="Redação"
              AssuntoAtv="Assunto: Alternativas para reduzir a vulnerabilidade dos jovens frente aos golpes vituais no Brasil"
              Ch="Competências e Habilidades Desenvolvidas: H6 e H8"
              Objetivo="Objetivo: Fazer uma Redação estilo ENEM sobre o tema escolhido"
              ComentárioPessoal="Cometário Pessoal: Escrever uma redação sobre 'Alternativas para reduzir a vulnerabilidade dos jovens frente aos golpes virtuais no Brasil' foi um desafio e me fez refletir sobre como esse é um tema complexo e difícil de enfrentar."
              LinkAtv="https://portal.redacaonota1000.com.br/redacao/laudo/app/10806175"
            />
        </Row>
        <Row>
            <ContainerAtvFt
              ImgAtv={ImgMatue}
              TituloATv="Atividade de língua inglesa “Que tipo de arte você consome?”"
              AssuntoAtv="Assunto: Simple Past"
              Ch="Competências e Habilidades Desenvolvidas: H11 e H25 "
              Objetivo="Objetivo: Coloquem uma foto do artista Escrevem em inglês; Expliquem porque vocês se identificam com essas obras. "
              ComentárioPessoal="Cometário Pessoal: A atividade foi interessante, pois possibilitou pesquisar e aprender mais sobre a vida e as obras de um artista. Além disso, contribuiu para praticar a organização das ideias e a escrita de maneira clara e objetiva. "
              LinkAtv="https://docs.google.com/document/d/1c-mqtY50GtrQ_fhwcsYjKP0-a2dj-r-f1y05LRpBZ0k/edit?tab=t.0"
            />
        </Row>

    </Container>
  )
}

export default Linguagens