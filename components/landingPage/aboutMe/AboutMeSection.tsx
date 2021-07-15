import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { SectionTitle, FadeInSection } from '../../Shared';
import { OrbitControls, Sphere, Text, Line } from '@react-three/drei';
import SkillGrid from './SkillGrid';
import SkillTab from './SkillTab';
import * as THREE from 'three';
import { Vector3 } from 'three';

/*
const Tools = (): JSX.Element => {
  const threeCanvasRef = useRef<HTMLCanvasElement>();

  const toolsArray = ['AWS', 'Postman', 'Azure'];

  useEffect(() => {
    setTimeout(() => {
      setup();
    }, 100);
  });

  const createTextWithLine = (text: string) => {
    return new THREE.TextGeometry(text, parameters);
  };

  // TODO: Turn the scene, Camera and render into a useThreeHook
  const setup = (): void => {
    const size = {
      width: 800,
      height: 700
    };

    const scene = new THREE.Scene();
    const aspectRatio = size.width / size.height;

    const camera = new THREE.PerspectiveCamera(35, aspectRatio, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(size.width, size.height);
    threeCanvasRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(10);
    const material = new THREE.MeshBasicMaterial({ wireframe: true, color: 0x00ff00 });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    camera.position.set(0, 0, 120);

    sphere.position.x = 0;
    sphere.position.y = 20;
    sphere.position.z = 0;

    const axes = new THREE.AxesHelper(5);
    scene.add(axes);

    const loader = new THREE.FontLoader();
    loader.load('fonts/helvetiker_regular.typeface.json', function (font) {
      const textGeometry = new THREE.TextGeometry('Hello three.js!', {
        font: font,
        size: 80,
        height: 5,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 10,
        bevelSize: 8,
        bevelOffset: 0,
        bevelSegments: 5
      });

      const textMaterial = new THREE.MeshPhongMaterial({ color: 0xfe98a0 });
      const text = new THREE.Mesh(textGeometry, textMaterial);
      text.position.x = 0;
      text.position.y = 20;
      text.position.z = 0;
      scene.add(text);
    });

    const animate = (): void => {
      requestAnimationFrame(animate);
      sphere.rotation.x += 0.01;
      sphere.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();
  };

  return <div className="w-full h-80" ref={(ref) => (threeCanvasRef.current = ref)}></div>;
};

const textProps = {
  fontSize: 3.9,
  font: 'http://fonts.gstatic.com/s/modak/v5/EJRYQgs1XtIEskMA-hI.woff'
};

function Title({ layers = undefined, ...props }) {
  const group = useRef();
  useEffect(() => {
    group.current.lookAt(0, 0, 0);
  }, []);

  return (
    <group {...props} ref={group}>
      <Text material-toneMapped={false} {...textProps} layers={layers}>
        codrops
      </Text>
    </group>
  );
}

function TitleCopies({ layers }) {
  const vertices = useMemo(() => {
    const y = new THREE.IcosahedronGeometry(12);
    return y.vertices;
  }, []);

  return (
    <group name="titleCopies">
      {vertices.map((vertex, i) => (
        <Title key={'name-' + i} name={'titleCopy-' + i} position={vertex} layers={layers} />
      ))}
    </group>
  );
}
*/

// Need sphere, Text with Line comp

interface ILineWithTextProps {
  text: string;
  position?: THREE.Vector3;
}

const LineWithText = (props: ILineWithTextProps): JSX.Element => {
  const { text, position } = props;
  const { camera } = useThree();
  const textRef = useRef();
  const lineRef = useRef();

  useFrame(() => {
    if (textRef.current !== undefined) {
      textRef.current.lookAt(camera.position);
    }
  });

  return (
    <>
      <Text
        color="white"
        position={position}
        scale={19}
        ref={textRef}
        onClick={(event) => {
          camera.lookAt(textRef.current.position);
          camera.position.lerp(
            new Vector3(
              textRef.current.position.x,
              textRef.current.position.y,
              textRef.current.position.z - 10
            ),
            1
          );
        }}
        onPointerEnter={() => (textRef.current.color = 'red')}
        onPointerLeave={() => (textRef.current.color = 'white')}>
        {text}
      </Text>
    </>
  );
};

const ToolsScene = (): JSX.Element => {
  const tools = ['AWS', 'AZURE', 'Another one'];
  return (
    <div style={{ width: '100%', height: 500 }}>
      <Canvas camera={{ position: [0, 0, 20] }}>
        <OrbitControls />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Sphere scale={10}>
          <meshBasicMaterial attach="material" color="hotpink" wireframe />
        </Sphere>
        <LineWithText text="AWS" position={[0, 0, 20]} />
        <LineWithText text="Azure" position={[20, 0, 0]} />
        <LineWithText text="Postman" position={[0, 20, 0]} />
        <LineWithText text="Test" position={[20, 20, 20]} />
        <LineWithText text="Test" position={[0, -20, 0]} />
        <LineWithText text="Test" position={[0, 0, -20]} />
        <LineWithText text="Test" position={[-20, 0, 0]} />
        <LineWithText text="Test" position={[-20, -20, -20]} />
      </Canvas>
    </div>
  );
};

const AboutMeSection = (): JSX.Element => {
  return (
    <section className="container mx-auto space-y-6 overflow-hidden pt-44">
      <FadeInSection>
        <SectionTitle title="About Me" />
      </FadeInSection>
      <div className="flex flex-col lg:flex-row text-center">
        <FadeInSection className="flex flex-col flex-shrink-0 space-y-4">
          <img
            className="w-80 h-80 object-center rounded-full mx-auto"
            src="./images/profile_pic.jpg"
            alt="profile_pic"
          />
          <h1 className="font-semibold">Patryk Slowinski</h1>
        </FadeInSection>

        <div className="flex flex-col mt-10 lg:mt-0 space-y-10">
          <FadeInSection className="px-5 lg:px-32">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repellat minus,
              consequuntur hic sapiente rerum veniam, velit, natus cumque magni nihil tenetur
              officia iure dicta quia quas fuga aliquid vero?
            </p>
          </FadeInSection>
          <FadeInSection className="flex flex-col">
            <h1 className="text-left px-20 text-pink-500 font-bold mb-2 flex justify-end text-xl">
              Skills
            </h1>
            <SkillGrid className="px-20">
              <SkillTab skillName="C# / ASP.NET" years={3} />
              <SkillTab skillName="JS / TS" years={2} />
              <SkillTab skillName="Node / React" years={2} />
              <SkillTab skillName="Next.js / Express.js" years={3} />
            </SkillGrid>
            <SkillGrid className="mt-4">
              <SkillTab skillName="Redis / Postgress" years={3} />
              <SkillTab skillName="MongoDB / MySql" years={3} />
              <SkillTab skillName="HTML / CSS / SCSS" years={3} />
              <SkillTab skillName="Redux / Tailwind" years={2} />
            </SkillGrid>
            <SkillGrid className="mt-4">
              <SkillTab skillName="AWS / Azure" years={3} />
              <SkillTab skillName="UT / BDD / TDD" years={3} />
              <SkillTab skillName="Rest / Soap" years={4} />
              <SkillTab skillName="XML / JSON" years={4} />
            </SkillGrid>
          </FadeInSection>
          <FadeInSection className="flex flex-col">
            <h1 className="text-left px-20 text-pink-500 font-bold mb-2 text-xl">Tools</h1>

            <ToolsScene />
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
