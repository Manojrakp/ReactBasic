import { StyleSheet } from "react-native";
import { Image, type ImageSource } from "expo-image";

type Props = {
  imgSource: ImageSource;
  selectedImg?: string;
};

export default function ImageViewer({ imgSource, selectedImg }: Props) {
  const imgageSource = selectedImg ? { uri: selectedImg } : imgSource;
  return <Image source={imgageSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
