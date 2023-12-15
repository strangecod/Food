import { StyleSheet,View,Text,Image, TouchableOpacity} from "react-native";
 
export default function WelcomeScreen({navigation}){
    return(
    <View style={{flex:1,alignItems:"center"}}>
       <Image source={require("../../assets/images/welcome1.png")}></Image>
       <Text style={{color:"#f96163",fontSize:22,fontWeight:"bold"}}>50+ Premium Recipes</Text>
       <Text style={{fontSize:38,color:"#3c444c",fontWeight:"bold",marginBottom:20,marginTop:20}}>Easy TO COOK</Text>

       <TouchableOpacity
				onPress={() => navigation.navigate("RecipeList")}
                style={{backgroundColor:"#f96163",borderRadius:18,paddingVertical:18,width:"80%",alignItems:"center"}}>
        <Text style={{fontSize:18,fontWeight:"bold",color:"white"}}>Let's Go</Text>
       </TouchableOpacity>
    </View>
    );
}
const style=StyleSheet.create({});