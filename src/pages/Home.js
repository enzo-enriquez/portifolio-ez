import { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Ez from "../imagens/ez w cookie.jpeg";
import CurriculoImg from "../imagens/Curriculo.png"; 
import ModalCurriculo from "../components/ModalCurriculo";

function Home() {
  const [showModal, setShowModal] = useState(false);
  return (
    <Container fluid className="home py-5">
      <Row className="align-items-center">
        <Col xs={12} md={6} className="col-sobre-mim mb-4 mb-md-0">
          <h1 className="mb-3">Sobre mim</h1>
          <p>
            Meu nome é Enzo Lourenço Enriquez, atualmente estou no segundo ano
            do ensino médio, nasci em San Diego, Califórnia (EUA), mas voltei
            para o Brasil com 1 ano e 8 meses. Vim para Florianópolis para
            conhecer minha família brasileira. Tenho 1 irmão que tem apenas 3
            anos, ou seja, sou irmão mais velho. Eu tenho 17 anos e escolhi o
            Sesi Senai por recomendação familiar. Pretendo trabalhar com algo
            relacionado a gerir minha marca, marketing digital e criação de
            conteúdo. Quero fazer um curso para melhorar meu inglês porque, como
            eu saí cedo dos Estados Unidos, não me tornei fluente. Em questão de
            trabalho e também para viajar para fora do país. Falando um pouco
            sobre mim, eu gosto muito de jogar no meu computador e praticar
            esportes, gosto muito de sair com meus amigos, sou extremamente
            sociável e extrovertido. Um dos meus principais objetivos para os
            meus 18 anos é ter um público grande nas redes sociais, ter
            produzido alguns drops da minha marca (Meraki444), ter um plano em
            mente para conquistar a independência financeira e ter saúde.
          </p>
          <button
            className="btn-curriculo mt-3"
            onClick={() => setShowModal(true)}
          >
            Ver meu currículo
          </button>
        </Col>
        <Col xs={12} md={6} className="text-center">
          <img src={Ez} className="foto-ez img-fluid rounded shadow" alt="Enzo" />
        </Col>
      </Row>

      <ModalCurriculo
        show={showModal}
        handleClose={() => setShowModal(false)}
        imagem={CurriculoImg}
      />
    </Container>
  );
}

export default Home;
