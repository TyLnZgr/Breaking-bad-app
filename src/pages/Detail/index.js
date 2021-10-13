import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Loading from "../../components/Loading";
import "./Detail.css";
function Detail() {
  const { char_id } = useParams();
  //console.log(char_id);
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios(`https://www.breakingbadapi.com/api/characters/${char_id}`)
      .then((res) => res.data)
      .then((data) => setCharacter(data[0]))
      .finally(() => setLoading(false));
  }, [char_id]);

  return (
    <div className="container detail">
      {loading && <Loading />}
      {character && (
        <div>
          <h1>{character.name}</h1>
          <h3>{character.nickname}</h3>
          <img src={character.img} alt="" style={{ width: "30%" }} />
        </div>
      )}
      <pre>{JSON.stringify(character, null, 2)}</pre>
    </div>
  );
}

export default Detail;
