import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Container } from 'react-bootstrap';
import './sivak.css'

function SivakToWatchList() {

  const [likes, setLikes] = useState(100);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (isClicked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsClicked(!isClicked);
  };

  const [movies, setMovies] = useState([
    {
      title: "End of the Road",
      img: 'src/images/watch-list/02.jpg',
      description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
    },
    {
      title: "Do Revenge",
      img: 'src/images/watch-list/03.jpg',
      description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
    },
    {
      title: "Love in the Villa",
      img: 'src/images/watch-list/04.jpg',
      description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
    },
    {
      title: "Me Time",
      img: 'src/images/watch-list/05.jpg',
      description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
    }
  ]);

  const displayMovies = movies.map(
    (movie) => {
      return (
        <>
          <Card className='card'>
            <Card.Img className='img-fav-list' variant="top" src={movie.img} />
            <Card.Body>
              <Card.Title>{movie.title}</Card.Title>
              <Card.Text>
                {movie.description}
              </Card.Text>
              <Button variant="primary">Watch</Button>
              <span className={`like like-button ${isClicked && 'liked'}`} onClick={handleClick}>&#9786;</span>
              <span className="likes-counter">{`${likes}`}</span>
            </Card.Body>
          </Card>
        </>
      )
    }
  )
  return (
    <Container className="to_watch">
      <h3>My Favorite Watch List</h3>
      <Row className='movie-row'>{displayMovies}</Row>
    </Container>
  );
}

export default SivakToWatchList;