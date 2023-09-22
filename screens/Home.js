import React from "react";
import { styled } from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import colors from "../colors";

const Home = ({ navigation: { navigate } }) => {
  return (
    <View>
      <Title>Home</Title>
      <Btn onPress={() => navigate("Write")}>
        <Ionicons name="add" color="white" size={40} />
      </Btn>
    </View>
  );
};

const View = styled.View`
  flex: 1;
  background-color: ${colors.bgColor};
  padding: 0 50px;
  padding-top: 100px;
`;
const Title = styled.Text`
  color: ${colors.textColor};
  font-size: 38px;
  margin-bottom: 100px;
`;

const Btn = styled.TouchableOpacity`
  position: absolute;
  bottom: 50px;
  right: 50px;
  background-color: ${colors.btnColor};
  height: 80px;
  width: 80px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
`;

export default Home;
