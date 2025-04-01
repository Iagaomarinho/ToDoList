import { Text, StyleSheet, View, Button } from "react-native";
import _tarefa from "../types/tarefa";

export default function Tarefa(props:{dados:_tarefa, handleDeletePress: any}){
    return <View style={styles.view}>
                <Text>{props.dados.texto}</Text>
                <Button title="Excluir" color="red" onPress={()=>{ props.handleDeletePress(props.dados.id) }}/>
            </View>;
}

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F7F7F8', 
    padding: 15,
    borderRadius: 15,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  texto: {
    flex: 1,
    fontSize: 18,
    color: '#333',
    marginRight: 10,
    fontFamily: 'San Francisco', 
    maxWidth: '80%', 
    overflow: 'hidden',
  },
});
