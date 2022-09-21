import { ActivityIndicator } from 'react-native';
import { THEME } from '../../theme';

import { Container } from './styles';

export function Loading() {
  return (
    <Container>
        <ActivityIndicator color={THEME.COLORS.PRIMARY} />
    </Container>
  );
}