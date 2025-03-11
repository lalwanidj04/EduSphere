import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import BottomNavigation from "./BottomNavigation";

const { width, height } = Dimensions.get("window");

interface ChatBotProps {
  navigateTo: (screen: string) => void;
}

const ChatBot: React.FC<ChatBotProps> = ({ navigateTo }) => {
  const [messages, setMessages] = useState([
    { id: "1", text: "Hello! 👋 How can I help you today?", sender: "bot" },
  ]);
  const [inputText, setInputText] = useState("");

  const sendMessage = () => {
    if (inputText.trim() === "") return;

    // Add user's message
    const newMessage = { id: Date.now().toString(), text: inputText, sender: "user" };
    setMessages([...messages, newMessage]);
    setInputText("");

    // Fake bot response after a short delay
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { id: Date.now().toString(), text: "I'm still learning! 😊", sender: "bot" },
      ]);
    }, 1000);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#181818" }}>
      {/* Chat Header */}
      <View
        style={{
          width: "100%",
          height: 90,
          backgroundColor: "#1E1E1E",
          justifyContent: "center",
          alignItems: "center",
          borderBottomWidth: 1,
          borderBottomColor: "#333",
        }}
      >
        <Text style={{ fontSize: 22, fontWeight: "bold", color: "#fff" }}>
          AI ChatBot 🤖
        </Text>
      </View>

      {/* Chat Messages */}
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: item.sender === "user" ? "row-reverse" : "row",
              alignItems: "center",
              marginVertical: 5,
              paddingHorizontal: 15,
            }}
          >
            {/* Chat Bubble */}
            <View
              style={{
                backgroundColor: item.sender === "user" ? "#007AFF" : "#444",
                padding: 12,
                borderRadius: 20,
                maxWidth: "75%",
              }}
            >
              <Text style={{ fontSize: 16, color: "#fff" }}>{item.text}</Text>
            </View>
          </View>
        )}
      />

      {/* Chat Input */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 10,
          backgroundColor: "#1E1E1E",
          borderTopWidth: 1,
          borderTopColor: "#333",
          marginBottom: 70,
        }}
      >
        <TextInput
          style={{
            flex: 1,
            backgroundColor: "#333",
            color: "#fff",
            paddingHorizontal: 15,
            paddingVertical: 10,
            borderRadius: 25,
          }}
          placeholder="Type a message..."
          placeholderTextColor="#888"
          value={inputText}
          onChangeText={(text) => setInputText(text)}
        />
        <TouchableOpacity
          onPress={sendMessage}
          style={{
            marginLeft: 10,
            backgroundColor: "#007AFF",
            padding: 12,
            borderRadius: 25,
          }}
        >
          <Ionicons name="send" size={24} color="white" />
        </TouchableOpacity>
      </View>

      

      {/* Bottom Navigation */}
      <BottomNavigation navigateTo={navigateTo} />
    </View>
  );
};

export default ChatBot;
