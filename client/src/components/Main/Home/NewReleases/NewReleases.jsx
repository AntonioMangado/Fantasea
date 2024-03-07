import { useEffect, useState } from "react";
import axios from "../../../../api/axios";
import CardsSlider from '../CardsSlider'
const GET_BOOKS_URL = '/api/newreleases'


const NewReleases = () => {

  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true)

  const retrieveCards = async () => {
    const response = await axios.get(GET_BOOKS_URL)
    setBooks(response.data)
    setLoading(false)
  }
  
  useEffect(() => {
    retrieveCards()
  }, [])

  return (
    <section id="new-releases" className="slider-container">
      <div className="title-and-link">
        <h3>New releases</h3>
        <p><a href="#">See all</a></p>
      </div>
      <>{books && !loading ? <CardsSlider books={books}/> : <></>}</>
    </section>
  );
};

export default NewReleases;
