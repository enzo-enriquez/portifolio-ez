import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ContainerAtvFt(props) {
  return (
    <Container className="container-atv">
        <Row>
            <Col  md={4}>
                <img src={props.ImgAtv}/>
            </Col>
            <Col md={8}>
                <h1>{props.TituloATv}</h1>
                <p>{props.AssuntoAtv}</p>
                <p>{props.Ch}</p>
                <p>{props.Objetivo}</p>
                <p>{props.ComentárioPessoal}</p>
                <button  className="btn-curriculo"  onClick={() => window.open(props.LinkAtv, '_blank')} >Visitar Atividade</button>
            </Col>
        </Row>
    </Container>
  )
}

export default ContainerAtvFt