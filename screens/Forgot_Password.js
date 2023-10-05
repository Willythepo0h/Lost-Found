import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {View, Text, Image, StyleSheet, TextInput, Keyboard, KeyboardAvoidingView, Animated} from 'react-native';
import Custom_Button from '../Components/Custom_Button';
import { useState, useRef, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const Forgot_Password = () => {
    const navigation = useNavigation();
    const [isEmailFocused, setisEmailFocused] = useState(false);
    const [isStudentNumberFocused, setIsStudentNumberFocused] = useState(false);
    const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
    const fadeAnim = useRef(new Animated.Value(0)).current;

    const handleGoBackPress = () => {
        navigation.navigate('Login');
      };

    const handleEmailFocus = () => {
        setisEmailFocused(true);
      };
    
    const handleStudentNumberFocus = () => {
        setIsStudentNumberFocused(true);
      };

    const handleEmailBlur = () => {
        setisEmailFocused(false);
      };
    
    const handleStudentNumberBlur = () => {
        setIsStudentNumberFocused(false);
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
                <Text style={styles.Title_Style}>Forgot Password/Recover Password</Text>
                <Text style={styles.Instruction_Style}>Enter your Student Number and T.I.P. Email to reset password...</Text>
            </View>

            <View style={styles.Divider}/>

            <View style={styles.SignUp_Container}>
                <Text style={styles.Login_Label}>Student Number</Text>
                <TextInput style={styles.Info_Container}
                placeholder={isStudentNumberFocused ? '' : 'Student Number'}
                onFocus={handleStudentNumberFocus}
                onBlur={handleStudentNumberBlur}/>

                <Text style={styles.Login_Label}>Email</Text>
                <TextInput style={styles.Info_Container}
                placeholder={isEmailFocused ? '' : 'T.I.P. Email'}
                onFocus={handleEmailFocus}
                onBlur={handleEmailBlur}/>

            </View>

            <View style={styles.Button_Container}>
                {!isKeyboardVisible && <Custom_Button title='Submit' />}
                {!isKeyboardVisible && <Custom_Button title='Go Back' onPress={handleGoBackPress}/>}
            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 6,
        paddingVertical: hp(5),
    },
    Header: {
        height: hp(12),
        backgroundColor: '#FFCA10',
    },
    Title_Style: {
        height: hp(7),
        width:'90%',
        color: 'black',
        fontSize: hp(3),
        fontFamily: 'monospace',
        alignSelf: 'center',
        //backgroundColor: 'pink'
    },
    Instruction_Style: {
        height: hp(5),
        width: '90%',
        fontSize: hp(2),
        fontFamily: 'monospace',
        alignSelf: 'center',
        textAlign: 'justify',
        //backgroundColor: 'skyblue',
    },
    Divider: {
        height: 1,
        width: '90%',
        backgroundColor: 'black',
        alignSelf: 'center',
        marginVertical: 10,
    },
    SignUp_Container: {
        flex: 2,
        marginTop: 25,
        paddingVertical: 20,
        //backgroundColor: 'pink'
    },
    Login_Label: {
        color: 'black',
        fontSize: hp(2.5),
        fontFamily: 'monospace',
        fontStyle: 'normal',
        width: '90%',
        alignSelf: 'center'
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
        fontSize: 16,
    },
    Button_Container: {
        flex: 1,
        gap: 10,
        justifyContent: 'center',
        alignContent: 'center',
        //backgroundColor: 'lightgreen',
    }
})

export default Forgot_Password;