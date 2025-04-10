import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Button,
  StyleSheet,
} from "react-native";

// Define prop types for the Cat component
type CatProps = {
  name: string;
};

const Cat: React.FC<CatProps> = ({ name }) => {
  const [isHungry, setIsHungry] = useState<boolean>(true);

  return (
    <View style={styles.catContainer}>
      <Text style={styles.catText}>
        I am <Text style={styles.catName}>{name}</Text>, and I am{" "}
        <Text style={isHungry ? styles.hungry : styles.full}>
          {isHungry ? "hungry" : "full"}
        </Text>
        !
      </Text>
      <Button
        onPress={() => setIsHungry(false)}
        disabled={!isHungry}
        title={isHungry ? "Pour me some milk, please!" : "Thank you!"}
        color={isHungry ? "#FF9800" : "#4CAF50"}
      />
    </View>
  );
};

const Cafe: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome to the Cat Cafe! 🐱</Text>
      <Cat name="Munkustrap" />
      <Cat name="Spot" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFFDE7",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#3E2723",
    textAlign: "center",
  },
  catContainer: {
    marginBottom: 20,
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#F0F4C3",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  catText: {
    fontSize: 18,
    marginBottom: 10,
  },
  catName: {
    fontWeight: "bold",
    color: "#5D4037",
  },
  hungry: {
    color: "#E64A19",
    fontWeight: "bold",
  },
  full: {
    color: "#388E3C",
    fontWeight: "bold",
  },
});

export default Cafe;
