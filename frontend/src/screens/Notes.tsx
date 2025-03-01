import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Modal, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as DocumentPicker from "expo-document-picker";

const subjects = ["DSA", "OS", "AI", "ML", "CN", "DBMS", "TOC", "SE", "Compiler", "Cyber Security", "Cloud Computing"];

const Notes = () => {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [files, setFiles] = useState({}); // Object to store files per subject
  const [modalVisible, setModalVisible] = useState(false);

  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    if (result.type === "success" && selectedSubject) {
      setFiles((prevFiles) => ({
        ...prevFiles,
        [selectedSubject]: [...(prevFiles[selectedSubject] || []), result],
      }));
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {subjects.map((subject, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.subjectBox, { backgroundColor: getRandomColor() }]}
            onPress={() => {
              setSelectedSubject(subject);
              setModalVisible(true);
            }}
          >
            <Text style={styles.subjectText}>{subject}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Floating Button for Adding Files */}
      <TouchableOpacity style={styles.floatingButton} onPress={pickDocument}>
        <Ionicons name="add" size={32} color="white" />
      </TouchableOpacity>

      {/* Modal to Show Files of Selected Subject */}
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>{selectedSubject}</Text>
          <FlatList
            data={files[selectedSubject] || []}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => <Text style={styles.fileText}>{item.name}</Text>}
          />
          <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
            <Text style={styles.closeText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const getRandomColor = () => {
  const colors = ["#FF6B6B", "#4CAF50", "#C4E538", "#48C9B0", "#8E44AD", "#F1C40F", "#3498DB"];
  return colors[Math.floor(Math.random() * colors.length)];
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F8F9FA", padding: 20 },
  subjectBox: { padding: 20, marginVertical: 10, borderRadius: 15, alignItems: "center", elevation: 3 },
  subjectText: { fontSize: 20, fontWeight: "bold", color: "white" },
  floatingButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#0052D4",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  modalContainer: { flex: 1, backgroundColor: "white", padding: 20, justifyContent: "center", alignItems: "center" },
  modalTitle: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  fileText: { fontSize: 18, marginTop: 5 },
  closeButton: { marginTop: 20, backgroundColor: "red", padding: 10, borderRadius: 10 },
  closeText: { color: "white", fontWeight: "bold" },
});

export default Notes;
