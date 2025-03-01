import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Modal, FlatList, Button, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as DocumentPicker from "expo-document-picker";
import { supabase } from "../../supabase"; 

const subjects = ["DSA", "OS", "AI", "ML", "CN", "DBMS", "TOC", "SE", "Compiler", "Cyber Security", "Cloud Computing"];

const Notes = () => {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [files, setFiles] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [uploadModalVisible, setUploadModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  // Fetch files for a subject from Supabase
  const fetchFiles = async (subject) => {
    const { data, error } = await supabase.storage.from("pdf-notes").list(subject);
    if (error) {
      console.error("Error fetching files:", error);
      return;
    }
    setFiles((prev) => ({ ...prev, [subject]: data }));
  };

  // Upload File to Supabase
  const uploadFile = async () => {
    try {
      if (!selectedSubject) {
        Alert.alert("Error", "Please select a subject");
        return;
      }

      const result = await DocumentPicker.getDocumentAsync({});
      if (result.canceled || !result.assets || result.assets.length === 0) return;

      const file = result.assets[0];
      const filePath = `${selectedSubject}/${file.name}`;
      setLoading(true);

      const { error } = await supabase.storage.from("pdf-notes").upload(filePath, file.uri, {
        contentType: file.mimeType,
      });

      if (error) {
        console.error("Upload error:", error);
        Alert.alert("Upload Failed", error.message);
      } else {
        Alert.alert("Success", "File uploaded successfully!");
        fetchFiles(selectedSubject);
      }
    } catch (error) {
      console.error("Upload error:", error);
      Alert.alert("Upload Error", "Something went wrong!");
    } finally {
      setLoading(false);
      setUploadModalVisible(false);
    }
  };

  useEffect(() => {
    if (selectedSubject) fetchFiles(selectedSubject);
  }, [selectedSubject]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Notes</Text>
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

      {/* Floating Button to Upload */}
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => {
          if (!selectedSubject) setSelectedSubject(subjects[0]);
          setUploadModalVisible(true);
        }}
      >
        <Ionicons name="add" size={32} color="white" />
      </TouchableOpacity>

      {/* Modal to Show Files */}
      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>{selectedSubject}</Text>
          <FlatList
            data={files[selectedSubject] || []}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.fileItem}>
                <Text style={styles.fileEmoji}>📄</Text>
                <Text style={styles.fileText}>{item.name}</Text>
              </View>
            )}
          />
          <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
            <Text style={styles.closeText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      {/* Upload File Modal */}
      <Modal visible={uploadModalVisible} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Upload File</Text>
            <Text>Select Subject:</Text>
            <ScrollView style={styles.dropdown}>
              {subjects.map((subject, index) => (
                <TouchableOpacity
                  key={index}
                  style={[styles.dropdownItem, selectedSubject === subject && styles.selectedSubject]}
                  onPress={() => setSelectedSubject(subject)}
                >
                  <Text>{subject}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
            <Button title="Choose File" onPress={uploadFile} disabled={!selectedSubject || loading} />
            <Button title="Close" onPress={() => setUploadModalVisible(false)} />
          </View>
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
  header: { fontSize: 24, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
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
  modalContent: { width: "100%", padding: 20, backgroundColor: "white", borderRadius: 10, elevation: 5 },
  modalTitle: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  fileItem: { flexDirection: "row", alignItems: "center", marginVertical: 5 },
  fileEmoji: { fontSize: 24, marginRight: 10 },
  fileText: { fontSize: 18 },
  closeButton: { marginTop: 20, backgroundColor: "red", padding: 10, borderRadius: 10 },
  closeText: { color: "white", fontWeight: "bold" },
  dropdown: { maxHeight: 200, borderWidth: 1, borderColor: "#ccc", marginVertical: 10 },
  dropdownItem: { padding: 10, borderBottomWidth: 1, borderBottomColor: "#ccc" },
  selectedSubject: { backgroundColor: "#A3E4D7" },
});

export default Notes;
