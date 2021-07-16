import { useFrame, useThree } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh, Vector3 } from 'three';
import { Text } from '@react-three/drei';

interface TextWrapperProps {
  text: string;
  position?: Vector3 | [number, number, number];
  targetPosition?: Vector3;
  setHasTarget?: (value: boolean) => void;
}

interface TextMesh extends Mesh {
  color?: string;
}

const TextWrapper = (props: TextWrapperProps): JSX.Element => {
  const { text, position, targetPosition, setHasTarget } = props;

  const { camera } = useThree();
  const textRef = useRef<TextMesh>();

  useFrame(() => {
    textRef.current.lookAt(camera.position);
  });

  return (
    <Text
      color="white"
      position={position}
      scale={19}
      ref={textRef}
      onClick={() => {
        targetPosition.set(
          textRef.current.position.x - 10,
          textRef.current.position.y - 10,
          textRef.current.position.z - 10
        );
        setHasTarget(true);
      }}
      onPointerEnter={() => (textRef.current.color = 'hotpink')}
      onPointerLeave={() => (textRef.current.color = 'white')}>
      {text}
    </Text>
  );
};

export default TextWrapper;
