import { View ,Text, SafeAreaView} from "react-native";
import Header from "../Header";
import SearchFilter from "../SearchFilter";
import CategoriesFilter from "../CategoriesFilter";
import RecipeCard from "../RecipeCard";

export default function RecipeListScreen(){
    return(
        <SafeAreaView style={{marginTop:50,flex:1,marginHorizontal:16}}>
            <Header headerText={"hi ,anany"} headerIcon={"bell-o"}/>
            <SearchFilter icon="search" placeholder={"Enter the favorite"}/>
            <View>
                <Text style={{fontSize:22,fontWeight:"bold"}}>Category</Text>
                <CategoriesFilter/>
                </View>

                <View style={{paddingTop:22}}>
                <Text style={{fontSize:25,fontWeight:"bold"}}>Recipies</Text>
               <RecipeCard/>
                </View>
            
        </SafeAreaView>
    );
}