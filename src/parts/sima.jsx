
import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './sima.css';
import listMS from './list_of_movies';


let selected = [];
function SimaMovieList() {
  const [movies, setMovies] = useState(listMS()[0]);
  const [series, setSeries] = useState(listMS()[1]);

  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {setIndex(selectedIndex)};

  
  return (
      <div className="simapart">
        <p className="newList">

        </p>
        {/* <Row className=" bgrd">
          <div className="title_div">
            <span className="reco">Today's Recommendation</span>
            <h1 className="title_perfumier">The Perfumier</h1>
            <button type="button" className="btn btn-warning button_perfumier"><i className="bi bi-play"> Watch Now</i> </button>
          </div>
        </Row> */}

        <Row className="">
          <Col className="col-12">
            <h4 className="trending">Top 10 Trending Movies </h4>
          </Col>
        </Row>

        <Row >
          <Carousel activeIndex={index} onSelect={handleSelect}>
              {               
                movies.map((item) => 
                (
                  <Carousel.Item >
                    <Col key={"movie_"+String(item.rank)}>
                    <img src= {"/src/images/movies/" + String(item.rank) + ".jpg"} className="movies"/>
                    </Col>
                    <Carousel.Caption className="carocaption">
                    <button type="button" className="btn btn-primary button_perfumier"
                    onClick={
                      (event)=>{ 
                        
                        !selected.includes(item.title) && selected.push(item.title); 
                        console.log(selected);
                        }
                      }>
                      <i className="bi bi-play"> Add to Watch-list</i> 
                    </button>
                    <h3 className="h3buttons"> some icons </h3>
                    {/* <p>other butoon to be listened</p> */}
                  </Carousel.Caption> 
                  </Carousel.Item>                 
                )
                )
              }            
          </Carousel> 
        </Row>
        
        <Row className="">
          <Col className="col-12">
            <h4 className="trending">Popular Tv Series</h4>
          </Col>
        </Row>



        <Row className=" row-cols-1 row-cols-md-3 row-cols-lg-5">
          {
            series.map((item) => 
            (
              <Col key={"serie_"+String(item.rank)}>
                <img src= {"/src/images/series/" + String(item.rank) + ".jpg"} className="series"/>
              </Col>
            )
            )

          }
        </Row>
        
      </div>
  );
}




export default SimaMovieList;


// render()
// () => selected.push(item.title)                   
// setFoods([...foods, "cornflakes"])


// if (!selected.includes(item.title)) {{event.currentTarget.style.color='yellow'}}; 