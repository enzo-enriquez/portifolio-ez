import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import ContainerAtvFt from "../../components/ContainerAtvFt";
import ImgDossie from "../../imagens/humanas/dossei.png"
import ImgJornal from "../../imagens/humanas/Jornal.png"
import ImgQuiz from "../../imagens/humanas/Quiz.png"
import ImgTotal from "../../imagens/humanas/Totalitarismo.png"
import ImgUnaids from "../../imagens/humanas/unaids.png"
import ImgGamma from "../../imagens/humanas/gama.png"
import ImgAurora from "../../imagens/humanas/aurora.png"
import ImgCien from "../../imagens/humanas/dossiecientista.png"

function Humanas() {
  return (
    <Container>
        <h1 style={{ margin: "20px 0", textAlign: "center" }}>1º Trimestre</h1>
        <Row>
            <ContainerAtvFt
              ImgAtv={ImgQuiz}
              TituloATv="Quiz"
              AssuntoAtv="Assunto: O imperialismo dos Estados Unidos "
              Ch="Competências e Habilidades Desenvolvidas:  H4, H7 e H8. "
              ComentárioPessoal="Cometário Pessoal: O grupo criou um quiz interativo sobre o imperialismo dos Estados Unidos, focando na Marcha para o Oeste, a Doutrina Monroe e o expansionismo, após pesquisa na plataforma Geekie."
              LinkAtv="https://www.canva.com/design/DAGiWwCIfrg/71wmABF2c5slz3jhPdfnFA/edit"
            />
        </Row>
        <Row>
            <ContainerAtvFt
              ImgAtv={ImgUnaids}
              TituloATv=" UNAIDS"
              AssuntoAtv="Assunto: UNAIDS, o programa da ONU contra o HIV/AIDS "
              Ch="Competências e Habilidades Desenvolvidas:  C2, H8, H10 e H12. "
              ComentárioPessoal="O grupo pesquisou sobre o UNAIDS, programa da ONU contra o HIV/AIDS, analisando seu funcionamento e impacto global. O trabalho destacou a importância da cooperação internacional em saúde e o papel das organizações multilaterais na solução de desafios complexos."
              LinkAtv="https://www.canva.com/design/DAGg9IDYaBs/1R4hhO5FK8FN_u8gp8cVCw/edit"
            />
        </Row>
        <h1 style={{ margin: "20px 0", textAlign: "center" }}>2º Trimestre</h1>
        <Row>
            <ContainerAtvFt
              ImgAtv={ImgJornal}
              TituloATv=" Jornal 1ª Guerra"
              AssuntoAtv="Assunto: 1ª Guerra Mundial  "
              Ch="Competências e Habilidades Desenvolvidas:  C2, H8, H10 e H12. "
              ComentárioPessoal="O grupo criar um Jornal Histórico sobre os acontecimentos do final da Primeira Grande Guerra. Como base, do material do Geekie One."
              LinkAtv="https://www.canva.com/design/DAGnhFyUQTg/BJlw7porDmrU6qjf1nq_yA/view?utm_content=DAGnhFyUQTg&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hdece9bb01a"
            />
        </Row>
        <Row>
            <ContainerAtvFt
              ImgAtv={ImgDossie}
              TituloATv=" Dossiê - Presidentes do Brasil"
              AssuntoAtv="dossiê sobre os presidentes brasileiros do período de 1894 a 1930."
              Ch="Competências e Habilidades Desenvolvidas:  C5 e C6 - H30, H36, H39, H40 "
              ComentárioPessoal="A turma elaborou um dossiê sobre os presidentes do Brasil entre 1894 e 1930. Minha equipe ficou responsável por pesquisar sobre Washington Luís, enquanto outro grupo desenvolveu o layout no Canva com a identidade da turma. Em seguida, todos reuniram as informações no modelo escolhido, assegurando uniformidade e boa organização."
              LinkAtv="https://www.canva.com/design/DAGpfJ_ldZY/587Mldy65ieArxKBtBH7ZA/view?utm_content=DAGpfJ_ldZY&utm_campaign=designshare&utm_medium=link&utm_source=viewer"
            />
        </Row>
        <Row>
            <ContainerAtvFt
              ImgAtv={ImgTotal}
              TituloATv=" Totalitarismo"
              AssuntoAtv="Totalitarismo e Nazismo em filmes"
              Ch="Competências e Habilidades Desenvolvidas:  C5 e C6 - H30, H36, H39, H40 "
              ComentárioPessoal="O grupo Compreendeu e analisou como cenas específicas retratam as características dos regimes totalitários e como os protagonistas resistem à opressão, valorizando a memória e a liberdade."
              LinkAtv="https://www.canva.com/design/DAGsnAiuJcA/bMElV1OhWc69e3kODM-R3w/view?utm_content=DAGsnAiuJcA&utm_campaign=designshare&utm_medium=link&utm_source=viewer"
            />
            <h1 style={{ margin: "20px 0", textAlign: "center" }}>3º Trimestre</h1>
              <ContainerAtvFt
              ImgAtv={ImgCien}
              TituloATv=" Dossiê da cientista"
              AssuntoAtv="Após a discussão sobre o Massacre de Manguinhos, a atividade consistiu em escolher um dos cientistas perseguidos e produzir um dossiê sobre sua vida e carreira."
              Ch="Competências e Habilidades Desenvolvidas:  C5 e C6 - H30, H36, H39, H40 "
              LinkAtv="https://docs.google.com/document/d/18blbz-eN6VWL-0OaBxwZ-InUsSrlWNZbfQu55dDKZ1c/edit?usp=sharing"
            />
              <ContainerAtvFt
              ImgAtv={ImgAurora}
              TituloATv=" Aurora do Sul"
              AssuntoAtv="A atividade consistiu em criar um projeto fictício para uma nova capital brasileira chamada Aurora do Sul, planejada para representar modernidade, sustentabilidade e integração regional."
              Ch="Competências e Habilidades Desenvolvidas:   C6 - H39 H40 "
              LinkAtv="https://docs.google.com/document/d/1c2RCYlsnNvMEH8GKRvZKJtR5hNt7Cbn56YKUywrmHM0/edit?usp=sharing"
            />
              <ContainerAtvFt
              ImgAtv={ImgGamma}
              TituloATv=" :A Engrenagem da Intervenção: Desvendando os Mecanismos dos EUA no Golpe de 1964"
              AssuntoAtv="  A turma foi dividida em grupos para pesquisar como os Estados Unidos influenciaram o golpe de 1964 no Brasil. Cada grupo estudou um tema específico e produziu um infográfico com imagens, além de uma apresentação oral explicando os principais mecanismos usados pelos EUA, como ações econômicas, midiáticas, militares e de inteligência."
              Ch="Competências e Habilidades Desenvolvidas:   C6 - H39 H40 "
              LinkAtv="https://operacao-brother-sam-o-a-7zto44w.gamma.site/"
            />
            
        </Row>


    </Container>
  )
}

export default Humanas