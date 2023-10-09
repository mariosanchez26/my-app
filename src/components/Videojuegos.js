import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//import CardGroup from 'react-bootstrap/CardGroup';

function videojuegos() {
    return (
        <div className='product-list'>
            <div className='product-card'>
            <center><img src="https://www.radioshackla.com/media/catalog/product/4/6/461622800018.new_tda9w70hmim7o1tl.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700" alt='god of war' className='product-image' /></center>
            <center><Card.Body>
                    <Card.Title>God Of War: Racnarok</Card.Title>
                    <Card.Text>
                        <h5>Precio: US$69.99</h5>
                    </Card.Text>
                    <Button href='/Private' variant="primary">Comprar</Button>
                </Card.Body></center>
            </div>
            <div className='product-card'>
                <center><img src="https://th.bing.com/th/id/OIP.SvjUrtyq_ZztGc8_OuHqNgAAAA?w=120&h=181&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt='spider-man' className='product-image' /></center>
                <center><Card.Body>
                    <Card.Title>Spider-Man: Miles Molares</Card.Title>
                    <Card.Text>
                    <h5>Precio:	US$36.44</h5>
                    </Card.Text>
                    <Button href='/Private' variant="primary">Comprar</Button>
                </Card.Body></center>
            </div>
            <div className='product-card'>
                <center><img src="https://www.elgallomasgallo.com.ni/media/catalog/product/m/a/mario-kart-8-deluxe-videojuego-nintendo-switch-168232-1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700" alt='super mario delux' className='product-image' /></center>
                <center><Card.Body>
                    <Card.Title>Super Mario 8 Deluxe</Card.Title>
                    <Card.Text>
                    <h5>Precio: US$59.88</h5>
                    </Card.Text>
                    <Button href='/Private' variant="primary">Comprar</Button>
                </Card.Body></center>
            </div>
            <div className='product-card'>
                <center><img src="https://tutiendadevideojuegos.com/221355-home_default_2x/pokemon-escarlata-nintendo-switch.jpg" alt='Pokemon Escarlata' className='product-image' /></center>
                <center><Card.Body>
                    <Card.Title>Pokemon Escarlata</Card.Title>
                    <Card.Text>
                    <h5>Precio: US$59.88</h5>
                    </Card.Text>
                    <Button href='/Private' variant="primary">Comprar</Button>
                </Card.Body></center>
            </div>
        </div>

    );
}

export default videojuegos;