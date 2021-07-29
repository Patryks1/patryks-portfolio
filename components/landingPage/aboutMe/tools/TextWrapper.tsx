import { useFrame, useThree } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh, Vector3 } from 'three';
import { Text } from '@react-three/drei';

interface TextWrapperProps {
  text: string;
  position?: Vector3 | [number, number, number];
}

interface TextMesh extends Mesh {
  color?: string;
}

const TextWrapper = (props: TextWrapperProps): JSX.Element => {
  const { text, position } = props;

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
      onPointerEnter={() => (textRef.current.color = 'hotpink')}
      onPointerLeave={() => (textRef.current.color = 'white')}>
      {text}
    </Text>
  );
};

export default TextWrapper;
