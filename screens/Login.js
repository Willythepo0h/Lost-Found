import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {TouchableOpacity, View, Text, Image, StyleSheet, TextInput, Animated, Keyboard, KeyboardAvoidingView} from 'react-native';
import { useState, useEffect, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import Custom_Button from '../Components/Custom_Button';

const Login = () => {
    const navigation = useNavigation();
    const [isStudentNumberFocused, setIsStudentNumberFocused] = useState(false);
    const [isUsernameFocused, setIsUsernameFocused] = useState(false);
    const [isPasswordFocused, setIsPasswordFocused] = useState(false);
    const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
    const fadeAnim = useRef(new Animated.Value(0)).current;

    const handleSignUpPress = () => {
        navigation.navigate('Sign_Up');
      };
    
    const handleForgotPasswordPress = () => {
        navigation.navigate('Forgot_Password')
    };

    const handleStudentNumberFocus = () => {
        setIsStudentNumberFocused(true);
      };
    
    const handleUsernameFocus = () => {
        setIsUsernameFocused(true);
      };
    
    const handlePasswordFocus = () => {
        setIsPasswordFocused(true);
      };

    const handleStudentNumberBlur = () => {
        setIsStudentNumberFocused(false);
      };
    
    const handleUsernameBlur = () => {
        setIsUsernameFocused(false);
      };
    
    const handlePasswordBlur = () => {
        setIsPasswordFocused(false);
      };

    useEffect(() => {
    Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 2500, // Adjust the duration as needed
        useNativeDriver: true,
    }).start();

    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
        setIsKeyboardVisible(true);
    });
    
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
        setIsKeyboardVisible(false);
    });
    
    return () => {
        keyboardDidShowListener.remove();
        keyboardDidHideListener.remove();
    };
    }, []);
    
    return(
    <View style={styles.Container}>
        <View style={styles.Header}>
            <Image source={require('./../assets/cname.png')} style={styles.Company_Logo}/>
            <Image source={require('./../assets/TIP_Logo.png')} style={styles.TIP_Logo}/>
        </View>

        <View style={styles.Divider}/>
        
        <View style={styles.Login_Container}>
            <Text style={styles.Login_Label}>Student Number</Text>
            <TextInput style={styles.Info_Container}
            placeholder={isStudentNumberFocused ? '' : 'Student Number'}
            onFocus={handleStudentNumberFocus}
            onBlur={handleStudentNumberBlur}/>

            <Text style={styles.Login_Label}>Username</Text>
            <TextInput style={styles.Info_Container}
            placeholder={isUsernameFocused ? '' : 'Username'}
            onFocus={handleUsernameFocus}
            onBlur={handleUsernameBlur}/>
            
            <Text style={styles.Login_Label}>Password</Text>
            <TextInput style={styles.Info_Container}
            placeholder={isPasswordFocused ? '' : 'Password'}
            onFocus={handlePasswordFocus}
            onBlur={handlePasswordBlur}/>

            <View style={styles.Bottom}>
                <View style={styles.Left_Container}>
                    <Text style={styles.Normal}>Don't have an account yet?  
                        <TouchableOpacity onPress={handleSignUpPress}>
                            <Text style={styles.Styled_Text}>Sign Up</Text>
                        </TouchableOpacity>
                    </Text>
                </View>
                <View style={styles.Right_Container}>
                <TouchableOpacity onPress={handleForgotPasswordPress}><Text style={styles.Styled_Text}>Forgot Password?</Text></TouchableOpacity>
                </View>
            </View>
        </View>

        <View style={styles.Button_Container}>
            {!isKeyboardVisible && <Custom_Button title='Sign In' />}
        </View>
    </View>
    );
}

const styles = StyleSheet.create ({
    Container: {
        flex: 6,
        paddingVertical: hp(5),
    },
    Header: {
        height: hp(10),
        backgroundColor: '#FFCA10',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    Company_Logo: {
        height: hp(12),
        width: wp(64),
        resizeMode: 'contain'
    },
    TIP_Logo: {
        height: hp(8),
        width: wp(17),
        resizeMode: 'contain'
    },
    Divider: {
        height: 1,
        width: '90%',
        backgroundColor: 'black',
        alignSelf: 'center',
        marginVertical: 10,
    },
    Login_Container: {
        flex: 2,
        marginTop: 25,
        paddingVertical: 20,
    },
    Info_Container: {
        height: hp(7),
        width: '90%',
        borderWidth: 1,
        borderRadius: 30,
        alignSelf: 'center',
        borderColor: 'gray',
        marginBottom: 10,
        padding: 14,
        color: 'gray',
        fontSize: hp(3)
    },
    Login_Label: {
        color: 'black',
        fontSize: hp(2.5),
        fontFamily: 'monospace',
        fontStyle: 'normal',
        width: '90%',
        alignSelf: 'center'
    },
    Bottom: {
        height: hp(10),
        width: '90%',
        alignSelf: 'center',
        //backgroundColor: 'orange',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    Left_Container: {
        width: wp(30),
    },
    Right_Container: {
        width: wp(40),
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    Normal: {
        fontSize: hp(2),
        textAlign: 'justify'
    },
    Styled_Text: {
        fontSize: hp(2),
        textDecorationLine: 'underline',
        fontWeight: 'bold'
    },
    Button_Container: {
        flex: 1,
        //backgroundColor: 'pink',
        justifyContent: 'center',
        alignContent: 'center'
    }
})

export default Login;