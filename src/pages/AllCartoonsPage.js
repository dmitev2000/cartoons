import CartoonList from "../components/cartoon/CartoonList";
import { useState, useEffect } from "react";
import { newCartoonsAdded } from './NewCartoonPage'

function AllCartoons() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedCartoons, setLoadedCartoons] = useState([]);
  const dependency = newCartoonsAdded;

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://cartoons-b0c5a-default-rtdb.europe-west1.firebasedatabase.app/cartoons.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const CARTOONS = [];
        for (const key in data) {
          const cartoon = {
            id: key,
            ...data[key]
          }
          CARTOONS.push(cartoon);
        }
        setIsLoading(false);
        setLoadedCartoons(CARTOONS);
      });
  }, [dependency]);

  if (isLoading) {
    return (
        <section>
            <h1>Loading...</h1>
        </section>
    );
}

  return (
    <div className="container">
      <h1 className="heading">All Cartoons</h1>
      <CartoonList cartoons={loadedCartoons} />
    </div>
  );
}

export default AllCartoons;
