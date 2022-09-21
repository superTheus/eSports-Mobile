import backgroundImg from '../../assets/background-galaxy.png';

import { Container } from './styles';



interface Props {
    children: React.ReactNode;
}

export function Background({children}: Props) {
  return (
    <Container 
        source={backgroundImg} 
        defaultSource={backgroundImg} 
    >
        {children}
    </Container>
  );
}