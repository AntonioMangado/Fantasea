import { useEffect, useState } from "react";
import axios from "../../../../api/axios";
import CardsSlider from '../CardsSlider'
const GET_TRENDINGBOOKS_URL = '/api/trending'


const Trending = () => {

  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true)

  const retrieveCards = async () => {
    const response = await axios.get(GET_TRENDINGBOOKS_URL)
    setBooks(response.data)
    setLoading(false)
  }
  
  useEffect(() => {
    retrieveCards()
  }, [])

  return (
    <section id="trending" className="slider-container">
      <div className="title-and-link">
        <h3>Trending this month</h3>
        <p><a href="#">See all</a></p>
      </div>
      <>{books && !loading ? <CardsSlider books={books}/> : <></>}</>
    </section>
  );
};

export default Trending;