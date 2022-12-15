import React, { useRef, Suspense, useState, useEffect } from "react";
import * as THREE from "three";
import { Canvas, useLoader } from "react-three-fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
// import { OrbitControls } from "drei";
// import { TextureLoader } from "three";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { Stage } from "@react-three/drei";
import * as S from "./style";

const App: React.FC = () => {
  const canvasElement = useRef<HTMLCanvasElement>(null);

  const [mousePos, setMousePos] = useState({});

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePos({ x: event.clientX, y: event.clientY });
      let xAxis = (window.innerWidth / 2 - event.pageX) / 14;
      let yAxis = (window.innerHeight / 2 - event.pageY) / 14;
      if (canvasElement.current)
        canvasElement.current.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const Box = () => {
    const materials = useLoader(MTLLoader, "/logo.mtl");
    const obj = useLoader(OBJLoader, "/logo.obj", (loader) => {
      materials.preload();
      loader.setMaterials(materials);
    });
    return <primitive object={obj} />;
  };

  return (
    <S.container>
      <Canvas
        style={{ width: "100%", height: "100%" }}
        className="canvas"
        ref={canvasElement}
      >
        <Suspense fallback={null}>
          <Stage preset={"soft"}>
            {/* <DeviceOrientationControls
            attachArray={undefined}
            attachObject={undefined}
            enableKeys={undefined}
          /> */}
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 15, 10]} angle={0.3} />
            <Box />
          </Stage>
        </Suspense>
      </Canvas>
      <S.text>
        <div className="text-box">
          <h1>Salt & Pepper</h1>
          <h2>digital production</h2>
          <span>Modern web and mobile development, Business</span>
          <br />
          <span>digitalization, Consulting, and Technical support</span>
        </div>
      </S.text>
    </S.container>
  );
};

export default App;
