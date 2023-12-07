import Left from "./components/Left";
import Right from "./components/Right";

function App() {
  return (
    <div className="lg:flex">
      <div className="lg:w-3/5 h-full">
        <Left />
      </div>
      <div className="lg:w-2/5 h-full">
        <Right />
      </div>
    </div>
  );
}

export default App;
