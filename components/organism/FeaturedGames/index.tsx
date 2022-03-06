import React, { useCallback, useEffect, useState } from "react";
import { gameItemTypes } from "../../../services/data-types";
import { getFeaturedGames } from "../../../services/player";
import GamesItem from "../../molecules/GamesItem";

export default function FeaturedGames() {
  const [gameList, setGameList] = useState([]);
  const getFeaturedGameList = useCallback( async() => {
      const data = await getFeaturedGames();
      setGameList(data)

  },[getFeaturedGames])

  // useEffect(async () => {
  //   const response = await axios.get(
  //     "https://bwa-storegg.herokuapp.com/api/v1/players/landingpage"
  //   );
  //   console.log(response.data.data);
  //   setGameList(response.data.data)
    
    
  // });

  useEffect(()=> {
    getFeaturedGameList()
  },[])

  return (
    <section className="featured-game pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Our Featured
          <br /> Games This Year
        </h2>
        <div
          className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
          data-aos="fade-up"
        >
          {gameList.map((item : gameItemTypes) => {            
            return (
              <GamesItem
                id={item._id}
                key={item?._id}
                title={item.name}
                Category={item.category.name}
                thumbnail={item.thumbnail}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
