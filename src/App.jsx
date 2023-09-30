import "./App.css";
import { Canvas } from "@react-three/fiber";
import Exp from "./components/Exp";

function App() {
  return (
    <Canvas
      camera={{
        fov: 64,
        position: [2.5, 1.5, 2.5],
      }}
    >
      <Exp />
    </Canvas>
  );
}

export default App;
