import "./App.css";
import { decrement, increment } from "./features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { useGetPokemonByNameQuery } from "./api/pokemonApi";

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const { data, error, isLoading } = useGetPokemonByNameQuery("bulbasaur");

  return (
    <div className="App">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>{data.species.name}</h3>
          <img src={data.sprites.front_shiny} alt={data.species.name} />

          <div className="card">
            <button onClick={() => dispatch(increment())}>
              count is {count}
            </button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <p>
              Edit <code>src/App.tsx</code> and save to test HMR
            </p>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default App;
