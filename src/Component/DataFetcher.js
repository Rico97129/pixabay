import { useState,useEffect } from "react";
import FetchImg from "./FetchImg";
import ImageCard from "./ImageCard";
function DataFetcher() {
    const terms = ['apple', 'banana', 'orange', 'kiwi', 'grape','flower','simpson','juice','boring','fun'];
    const randomTerm = terms[Math.floor(Math.random() * terms.length)];
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState(randomTerm);
    const results = FetchImg(query);
  
    function onSubmit(e) {
      e.preventDefault();
      setQuery(search);
    }
  
    return (
      <div>
        <div className="flex flex-col justify-center items-center">
          <form onSubmit={onSubmit}>
            <input  className="content-centerborder rounded-lg py-2 px-3"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Recherchez une image"
            />
            <button type="submit">Rechercher</button>
          </form>
        </div>
        <br />
        {results.length > 0 ? (
          <div className="container mx-auto">
            <div className="grid grid-cols-3 gap-4">
              {results.map((item) => (
                <ImageCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        ) : (
          <p>Aucun résultat trouvé</p>
        )}
      </div>
    );
  }
  
  export default DataFetcher;
  