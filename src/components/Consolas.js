import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//import CardGroup from 'react-bootstrap/CardGroup';

function consolas() {
    return (
        <div className='product-list'>
            <div className='product-card'>
                <center><img src="https://tutiendadevideojuegos.com/c/33-category_default_2x/consola-nintendo-switch.jpg" alt='god of war' className='product-image' /></center>
                <center><Card.Body>
                    <Card.Title>Nintendo Switch</Card.Title>
                    <Card.Text>
                        <h5>Precio:	US$250.00</h5>
                    </Card.Text>
                    <Button href='/Private' variant="primary">Comprar</Button>
                </Card.Body></center>
            </div>
            <div className='product-card'>
                <center><img src="https://tutiendadevideojuegos.com/c/31-category_default_2x/consola-ps4.jpg" alt='spider-man' className='product-image' /></center>
                <center><Card.Body>
                    <Card.Title>Playstation 4, PS4</Card.Title>
                    <Card.Text>
                        <h5>Precio:	US$329.19</h5>
                    </Card.Text>
                    <Button href='/Private' variant="primary" className='button'>Comprar</Button>
                </Card.Body></center>
            </div>
            <div className='product-card'>
                <center><img src="https://tutiendadevideojuegos.com/c/87-category_default_2x/consola-playstation-5-ps5.jpg" alt='Playstation 5, PS5' className='product-image' /></center>
                <center><Card.Body>
                    <Card.Title>Playstation 5, PS5</Card.Title>
                    <Card.Text>
                        <h5>Precio:	US$1,098.00</h5>
                    </Card.Text>
                    <Button href='/Private' variant="primary">Comprar</Button>
                </Card.Body></center>
            </div>
            <div className='product-card'>
                <center><img src="https://tutiendadevideojuegos.com/c/88-category_default_2x/consola-xbox-series-x.jpg" alt='Xbox Series x' className='product-image' /></center>
                <center><Card.Body>
                    <Card.Title>Xbox Series x</Card.Title>
                    <Card.Text>
                        <h5>Precio:	US$419.98</h5>
                    </Card.Text>
                    <Button href='/Private' variant="primary">Comprar</Button>
                </Card.Body></center>
            </div>
        </div>

    );
}

export default consolas;