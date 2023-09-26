import { styled } from "styled-components";

import colors from "../colors";
import { useState } from "react";
import { Alert } from "react-native";

const emotions = ["🥰", "🤪", "🥸", "😎", "🙄", "🤩", "😬"];
const Write = () => {
  const [selectedEmotion, setEmotion] = useState(null);
  console.log("selectedEmotion: ", selectedEmotion);
  const [feelings, setFeelings] = useState("");
  console.log("feelings: ", feelings);
  const onChangeText = (text) => setFeelings(text);
  const onEmotionPress = (face) => setEmotion(face);
  const onSubmit = () => {
    if (!feelings || !selectedEmotion) {
      Alert.alert("Please complete form.");
    }
  };

  return (
    <View>
      <Title>How do you feel today?</Title>
      <Emotions>
        {emotions.map((emotion, index) => (
          <Emotion
            selected={emotion === selectedEmotion}
            onPress={() => onEmotionPress(emotion)}
            key={index}
          >
            <EmotionText>{emotion}</EmotionText>
          </Emotion>
        ))}
      </Emotions>
      <TextInput
        returnKeyType="done"
        onSubmitEditing={onSubmit}
        onChangeText={onChangeText}
        value={feelings}
        placeholder="White your feelings..."
      />
      <Btn onPress={onSubmit}>
        <BtnText>Save</BtnText>
      </Btn>
    </View>
  );
};

const View = styled.View`
  background-color: ${colors.bgColor};
  flex: 1;
  padding: 0 30px;
`;
const Title = styled.Text`
  color: ${colors.textColor};
  margin: 50px 0;
  text-align: center;
  font-size: 28px;
  font-weight: 500;
`;

const TextInput = styled.TextInput`
  background-color: #fff;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 18px;
`;

const Btn = styled.TouchableOpacity`
  width: 100%;
  margin-top: 30px;
  padding: 10px 20px;
  align-items: center;
  background-color: ${colors.btnColor};
  border-radius: 20px;
`;
const BtnText = styled.Text`
  color: #fff;
  font-weight: 500;
  font-size: 18px;
`;
const Emotions = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;
const Emotion = styled.TouchableOpacity`
  background-color: #fff;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
  padding: 10px;
  border-radius: 10px;
  overflow: hidden;
  border-width: ${(props) => (props.selected ? "1px" : 0)};
  border-color: rgba(0, 0, 0, 0.5);
`;

const EmotionText = styled.Text`
  font-size: 24px;
`;

export default Write;
