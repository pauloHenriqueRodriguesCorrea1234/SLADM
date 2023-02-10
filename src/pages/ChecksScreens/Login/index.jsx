import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const Login = () => {

    const [email, setEmail] = useState('');
    const [passWord, setPassWors] = useState('');
    const [errorLogin, setErrorLogin] = useState('');

    return (
        <View>
            <TextInput
                placeholderTextColor="#FFF"
                placeholder="Informe seu E-mail"
                type='text'
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput placeholderTextColor="#FFF"
                secureTextEntry={true}
                placeholder={"Informe sua senha"}
                value={passWord}
                onChangeText={(text) => setPassWors(text)}
            />


            {/* Se errorLogin for verdadeiro entra nesta condição,
            se o email ou senha não existir exibe uma mensagem,
            se não não exibe nada.
            */}
            {errorLogin === true
                ?
                <View>
                    <Text>Ivalid e-mail or password</Text>
                </View>
                :
                <View />
            }

            {/* Verifica se o campo de email e senha foi preenchido se não estiver 
            o botão de login é desabilitado
            */}
            {email === "" || passWord === ""
                ?
                <TouchableOpacity disabled={true}>
                    <Text>LOGIN</Text>
                </TouchableOpacity>
                :
                <TouchableOpacity>
                    <Text>LOGIN</Text>
                </TouchableOpacity>
            }

            <TouchableOpacity>
                <Text>Forgot your passWord?</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text>SIGN UP</Text>
            </TouchableOpacity>

        </View>

    )
}

const styled = StyleSheet.create({
    conteiner: {
        flex: 1,
        backgroundColor:"#4D8900"
    }
})

export default Login;