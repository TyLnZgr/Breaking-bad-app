import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCharacters } from "../../redux/charactersSlice";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  const characters = useSelector((state) => state.characters.items);
  const status = useSelector((state) => state.characters.status);
  const error = useSelector((state) => state.characters.error);
  const page = useSelector((state) => state.characters.page);
  const hasPage = useSelector((state) => state.characters.hasPage);

  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCharacters());
    }
  }, [dispatch, status]);

  if (status === "failed") {
    return <Error message={error} />;
  }
  return (
    <div className="container">
      <div className="row">
        {characters.map((character) => (
          <div key={character.char_id} className="card width m-3">
            <Link to={`/character/${character.char_id}`}>
              <img
                src={character.img}
                className="card-img-top image-width-height"
                alt={character.name}
              />
            </Link>
            <div className="card-body">
              <h4 className="card-title bg-dark text-white">
                {character.name}
              </h4>
              <h5 className="bg-danger text-white">{character.nickname}</h5>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        {status === "loading" && <Loading />}
        {hasPage && status !== "loading" && (
          <button
            className="btn btn-outline-secondary rounded"
            onClick={() => dispatch(fetchCharacters(page))}
          >
            Load More... ({page})
          </button>
        )}
        {!hasPage && <div>There is nothing character</div>}
      </div>
    </div>
  );
}

export default Home;
