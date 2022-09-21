import styled from "styled-components/native";

import { THEME } from "../../theme";
import { StyleSheet } from "react-native";

export const Container = styled.TouchableOpacity`
    margin-right: 24px;
`;

export const Cover = styled.ImageBackground`
    width: 240px;
    height: 320px;
    justify-content: flex-end;
    border-radius: 8px;
    overflow: hidden;
`;

export const Name = styled.Text`
    color: ${THEME.COLORS.TEXT};
    font-size: ${THEME.FONT_SIZE.MD};
    font-family: ${THEME.FONT_FAMILY.BOLD};
`;

export const Ads = styled.Text`
    color: ${THEME.COLORS.CAPTION_300};
    font-size: ${THEME.FONT_SIZE.MD};
    font-family: ${THEME.FONT_FAMILY.REGULAR};
`;

export const styles = StyleSheet.create({
    footer: {
        width: '100%',
        height: 102,
        padding: 16,
        justifyContent: 'flex-end',
    }
})