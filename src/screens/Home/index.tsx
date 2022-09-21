import { FlatList } from "react-native";
import LogoImg from "../../assets/logo-nlw-esports.png";
import { GameCard } from "../../components/GameCard";
import { Heading } from '../../components/Heading';
import { GAMES } from "../../utils/games";

import { Container, Logo, styles } from './styles';

export function Home() {
  return (
    <Container>
      <Logo
        source={LogoImg}
      />

      <Heading
        title="Encontre seu duo!"
        subtitle="Selecione o game que deseja jogar..."
      />

      <FlatList
        data={GAMES}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <GameCard
            data={item}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.constentList}
      />
    </Container>
  );
}
