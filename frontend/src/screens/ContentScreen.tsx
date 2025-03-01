import React from 'react';
import {
    View,
    Text,
    Image,
    Dimensions,
    ScrollView,
    TouchableOpacity,
} from "react-native";

const { width } = Dimensions.get('window');
interface ContentScreenProps {
    navigateTo: (screen: string) => void;
  }
  
const ContentScreen = ({ navigateTo }: ContentScreenProps) => {
  return (
    <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        className="flex-1 bg-white"
        keyboardShouldPersistTaps="handled"
    >
        <View>
            <Image 
                source={require('../../assets/images/c6.jpg')} 
                style={{
                    height: width * 0.7,
                    width: width,
                    position: "absolute",
                    top: 0,
                    zIndex: -1,
                    borderBottomLeftRadius: 40, 
                    borderBottomRightRadius: 40, 
                }}
                resizeMode="cover"
            />
        </View>
        <View>
            <Text
                style={{
                    fontSize: 30,
                    fontWeight: 'bold',
                    color: '#fff',
                    marginTop: width * 0.1,
                    marginLeft: 20,
                }}
            >
                Hi!
            </Text>
            <Text
                style={{
                    fontSize: 30,
                    fontWeight: 'bold',
                    color: '#fff',
                    marginTop: 5, 
                    marginLeft: 20,
                }}
            >
                Edusphere
            </Text>
        </View>


        {/* Box Layout*/}
        <View
            style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                marginTop: width * 0.44, 
                padding: 10,
            }}
        >
            <TouchableOpacity style={{
                width: '48%', 
                height: 200,
                backgroundColor: '#C0DCC3',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 15, 
                borderRadius: 10, 
            }}>
                <Image 
                    source={require('../../assets/images/module2.jpg')}
                    style={{
                        width: 150,
                        height: 150,
                        borderRadius: 15,
                        shadowColor: '#000000',
                        shadowOffset: { width: 0, height: 0 }, 
                        shadowOpacity: 0.9,
                        shadowRadius: 10,
                        elevation: 10,
                    }}
                />                
                <Text 
                    style={{ 
                        color: '#4A4A4A', 
                        fontWeight: 'bold', 
                        fontSize: 16,
                        marginTop: 10,
                    }}>Modules</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
                width: '48%',
                height: 200,
                backgroundColor: '#FEF0C6',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 15,
                borderRadius: 10,
            }}>
                <Image 
                    source={require('../../assets/images/summarizer1.jpg')}
                    style={{
                        width: 150,
                        height: 150,
                        borderRadius: 15,
                        shadowColor: '#000000',
                        shadowOffset: { width: 0, height: 0 }, 
                        shadowOpacity: 0.9,
                        shadowRadius: 10,
                        elevation: 10,
                    }}
                />
                <Text 
                style={{ 
                        color: '#4A4A4A', 
                        fontWeight: 'bold', 
                        fontSize: 16,
                        marginTop: 10,
                    }}>Text Summarizer</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
                width: '48%',
                height: 200,
                backgroundColor: '#FEF0C6',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 15,
                borderRadius: 10,
                
            }}
            onPress={() => navigateTo("Notes")}>
                <Image 
                    source={require('../../assets/images/note4.jpg')}
                    style={{
                        width: 150,
                        height: 150,
                        borderRadius: 15,
                        shadowColor: '#000000',
                        shadowOffset: { width: 0, height: 0 }, 
                        shadowOpacity: 0.9,
                        shadowRadius: 10,
                        elevation: 10,
                    }}
                />
                <Text 
                    style={{ 
                        color: '#4A4A4A', 
                        fontWeight: 'bold', 
                        fontSize: 16,
                        marginTop: 10,
                    }}>Notes Section</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
                width: '48%',
                height: 200,
                backgroundColor: '#C0DCC3',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 15,
                borderRadius: 10,
            }}>
                <Image 
                    source={require('../../assets/images/game2.jpg')}
                    style={{
                        width: 150,
                        height: 150,
                        borderRadius: 15,
                        shadowColor: '#000000',
                        shadowOffset: { width: 0, height: 0 }, 
                        shadowOpacity: 0.9,
                        shadowRadius: 10,
                        elevation: 10,
                    }}
                />
                <Text 
                    style={{ 
                        color: '#4A4A4A', 
                        fontWeight: 'bold', 
                        fontSize: 16,
                        marginTop: 10,
                    }}>Games</Text>
            </TouchableOpacity>
        </View>

        {/* Bottom Navigation: Home, Profile, Setting */}
        <View
            style={{
                position: 'absolute',
                bottom: 6,
                left: 0,
                right: 0,
                flexDirection: 'row',
                justifyContent: 'space-around',
                backgroundColor: '#f1f1f9',
            }}
        >
            <TouchableOpacity>
                <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#333',}}>🏠</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
                height: 15,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Image 
                    source={require('../../assets/images/bot4.jpg')}
                    style={{
                        width: 80,
                        height: 80,
                        borderRadius: 50,
                        borderColor: '#ffffff',
                        borderWidth: 5,
                    }}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#333' }}>👤</Text>
            </TouchableOpacity>
        </View>

    </ScrollView>
  );
};

export default ContentScreen;
