import { useRecoilState, useRecoilValue, RecoilRoot, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";

function App() {
  return (
    <>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </>
  );
}

function Count() {
  return (
    <>
      <CountRenderer />
      <CounterButton />
      <CountIsEven />
    </>
  );
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);

  return <div>{count}</div>

}

function CounterButton() {
  const setCount = useSetRecoilState(countAtom);

  console.log("buttons rendered");

  return (
    <div>
      <button onClick={() => setCount(count=>count + 1)}>Increase</button>
      <button onClick={() => setCount(count=>count - 1)}>Decrease</button>
    </div>
  );

    
   
}

function CountIsEven(){
  const isEven = useRecoilValue(evenSelector)
  return <div> { isEven && <h3>It is Even</h3>}</div>
}

export default App;
