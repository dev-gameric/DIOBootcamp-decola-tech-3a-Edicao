import React from 'react';
import {View, Image, Text, StyleSheet, SafeAreaView, StatusBar, Pressable, Linking, ListRenderItem} from 'react-native';

const fotoPerfil = 'https://avatars.githubusercontent.com/u/93603008?v=4';
const corGithub = '#040109';
const corFonte = '#C9D1D9';
const corFonteDark = '#8F969E' ;
const linkgithub = 'https://github.com/dev-gameric'

const App = () => {
    const abrirlinkgithub = async () => {
        console.log("Verificando link");
        const res = await Linking.canOpenURL(linkgithub);
        if (res) {
            console.log("Link Aprovado");
            console.log("Abrindo link");
            await Linking.openURL(linkgithub);
        }
    };
    return (
        <SafeAreaView  style={style.container}>
            <StatusBar backgroundColor={corGithub} barStyle="light-content"/>
            <View style={style.content}>
                <Image accessibilityLabel='Eric Silva com um plano de fundo azul' source={{uri: fotoPerfil}} style={style.fotoperfil}/>
                <Text accessibilityLabel='Nome: Eric Silva' style={style.name}>Eric Silva</Text>
                <Text accessibilityLabel='Nickname: dev-gameric' style={style.nickname}>dev-Gameric</Text>
                <Text accessibilityLabel='Idade: 21 anos Naturalidade: Brasília - DF' style={style.descricao}>📅Idade: 21 anos 👶🏼Naturalidade: Brasília - DF</Text>
                <View>
                    
                </View>
                <Pressable onPress={abrirlinkgithub}>
                <View style={style.botao}>
                <Text style={style.textobotao}>Abrir no github</Text>
                </View>
                </Pressable>
            </View>  
        </SafeAreaView>
    )
};

export default App;

const style = StyleSheet.create ({
    container: {
        backgroundColor: corGithub,
        flex: 1,
        justifyContent: 'center',
    },

    content: {
        alignItems: 'center',
    },

    fotoperfil: {
        width: 200,
        height: 200,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: 'white',
    },

    name: {
        fontWeight: 'bold',
        fontSize: 26,
        color: corFonte,
        marginTop: 10,
    },

    nickname: {
        fontSize: 17,
        color: corFonteDark,
    },

    descricao: {
        fontWeight: 'bold',
        fontSize: 15,
        color: corFonte,
    },

    linhadefault: {
        color: 'green',
    },

    botao: {
        alignItems: 'center',
        backgroundColor: corFonteDark,
        padding: 22,
        marginTop: 30,
        borderRadius: 10,
    },
    
    textobotao: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'white',
    },
});
