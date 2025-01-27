import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";

const { width } = Dimensions.get("window");

const LoginScreen = ({navigateTo}) => {
  return (
    <KeyboardAvoidingView
      className="flex-1"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        className="flex-1 bg-white"
        keyboardShouldPersistTaps="handled"
      >
        {/* Top Image */}
        <Image
          source={require("../../assets/images/loginscreen2.jpg")} // Replace with your actual illustration image
          style={{
            height: width * 0.7,
            width: width,
            position: "absolute",
            top: 0,
            zIndex: -1,
          }}
          resizeMode="cover"
        />

        {/* Rounded Box */}
        <View
          className="flex-1 bg-gray-100 rounded-t-3xl shadow-lg px-6 pt-8 pb-6 mt-[50%]"
          style={{ marginTop: width * 0.65 }}
        >
          {/* Title Section */}
          <Text className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Welcome Back!
          </Text>

          {/* Social Media Login Options */}
          <View className="flex-row justify-evenly mb-4">
            <TouchableOpacity className="bg-gray-200 w-12 h-12 rounded-full items-center justify-center shadow">
                <Text className="text-lg font-bold text-gray-700">F</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-gray-200 w-12 h-12 rounded-full items-center justify-center shadow">
                <Text className="text-lg font-bold text-gray-700">T</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-gray-200 w-12 h-12 rounded-full items-center justify-center shadow">
                <Text className="text-lg font-bold text-gray-700">G</Text>
            </TouchableOpacity>
        </View>

          <Text className="text-sm text-gray-600 mb-6 text-center">
            or use your email account
          </Text>

          {/* Input Fields */}
          <View className="space-y-4 mb-6">
            <TextInput
              className="w-full h-12 border border-gray-300 rounded-lg px-4 text-gray-800 mb-3"
              placeholder="Email"
              placeholderTextColor="#aaa"
            />
            <TextInput
              className="w-full h-12 border border-gray-300 rounded-lg px-4 text-gray-800"
              placeholder="Password"
              secureTextEntry
              placeholderTextColor="#aaa"
            />
          </View>

          {/* Register Button */}
          <TouchableOpacity className="w-full h-12 bg-green-500 rounded-lg items-center justify-center">
            <Text className="text-white text-lg font-bold">LOGIN</Text>
          </TouchableOpacity>

          {/* Footer */}
          <Text className="text-sm text-gray-600 text-center mt-4">
            Don't have an account?{" "}
            <TouchableOpacity onPress={() => navigateTo("SignUp")}>
                <Text className="text-green-500 font-bold">SignUp</Text>
            </TouchableOpacity>
            
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
