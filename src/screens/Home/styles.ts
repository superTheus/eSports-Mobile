import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { THEME } from "../../theme";


export const Container = styled.View`
    flex: 1;
    align-items: center;
`;

export const Logo = styled.Image`
    width: 214px;
    height: 120px;
    margin-top: 74px;
    margin-bottom: 48px;
`;

export const styles = StyleSheet.create({
    constentList: {
        paddingLeft: 32,
        paddingRight: 0,
    }
});