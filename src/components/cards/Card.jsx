import Card from 'react-bootstrap/Card';

function CartaChica(texto) {
  return <Card body>{{texto}}</Card>;
}
function CartaFoto(titulo,img,text) {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={{img}} />
        <Card.Body>
          <Card.Title>{{titulo}}</Card.Title>
          <Card.Text>{{text}}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
  
export  {CartaChica, CartaFoto};