import { LinearGradient } from 'expo-linear-gradient';
import { ImageSourcePropType, TouchableOpacityProps } from 'react-native';
import { THEME } from '../../theme';
import { Ads, Container, Cover, Name, styles } from './styles';


export interface GameCardProps{
    id: string;
    name: string;
    ads: string;
    cover: ImageSourcePropType;
}

interface Props extends TouchableOpacityProps {
    data: GameCardProps
}

export function GameCard({data}: Props) {
  return (
    <Container activeOpacity={0.6}>
        <Cover
            source={data.cover} 
            defaultSource={data.cover}
        >

        <LinearGradient
            colors={THEME.COLORS.FOOTER}
            style={styles.footer}
        >
            <Name> {data.name} </Name>
            <Ads> {data.ads} anúncios </Ads>
        </LinearGradient>

        </Cover>
    </Container>
  );
}