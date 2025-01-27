import { StyleSheet, useColorScheme} from 'react-native'



export const GlobalStyles = StyleSheet.create({
    
    container: {
        width:"100%",
        height:"100%",
        backgroundColor: '#ffffff',
    },
    button:{
        width:"80",
        height:"60",
        backgroundColor:"#4370f7",
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center"
    },
    text:{
        color:"black",
        fontSize:20,
        textAlign:"center",
        fontWeight:"bold"
    },
    equation:{
        width:"100%" ,
        height:"40%",
        flex:1,
        justifyContent:"flex-end",
        backgroundColor:"#becccc",
    },
    row:{
        width:"100%" ,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
    },
    table:{
        width:"100%" ,
        height:"60%",
        backgroundColor:"#d5ebea",
        padding:20,
        flexGrow:0,
        alignItems:"center",
        justifyContent:"space-evenly",
    },
    inputText:{
        color:"black",
        fontSize:30,
        textAlign:"right"
    },
    numbers:{
        backgroundColor:"pink",
        alignItems:"center",
        justifyContent:"center",
    },
    operators:{
        backgroundColor:"green",
    }

})