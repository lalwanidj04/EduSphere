import React from "react";
import { View, Text, TouchableOpacity, Image, Dimensions } from "react-native";

const { width } = Dimensions.get("window"); // Get device width dynamically

const HomeScreen = ({ navigateTo }) => {
  return (
    <View className="flex-1 justify-center items-center bg-white p-6">
      {/* Image Section */}
      <View className="mb-12">
        <Image
          source={require("../../assets/images/HomeScreen.jpg")}
          style={{ height: width * 0.7, width: width * 0.8 }}
          resizeMode="contain"
        />
      </View>

      {/* Text Section */}
      <Text className="text-5xl font-bold text-gray-800 mb-4">
        EduSphere
      </Text>
      <Text className="text-2xl text-gray-600 mb-12">
        Where Learning Finds a Friend
      </Text>

      {/* Buttons */}
      <View className="relative flex-row items-center justify-center w-full">
        {/* Login Button */}
        <TouchableOpacity
          onPress={() => navigateTo("Login")}
          className="bg-gray-500 py-6 rounded-full flex-row items-center"
          style={{ width: width * 0.43, marginRight: width * 0.3 }} // Button width is 40% of the screen width
        >
          <Text className="text-white text-xl text-center w-full">Login</Text>
        </TouchableOpacity>

        {/* Overlapping SignUp Button */}
        <TouchableOpacity
          onPress={() => navigateTo("SignUp")}
          className="absolute bg-yellow-500 py-6 rounded-full"
          style={{
            width: width * 0.4, 
            left: width * 0.38,
          }}
        >
          <Text className="text-white text-xl text-center w-full">SignUp</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
