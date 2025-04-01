import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView, Image } from 'react-native';
import _tarefa from './types/tarefa';
import Tarefa from './components/Tarefa';

export default function App() {
  const [novaTarefa, setNovaTarefa] = useState<string>('');
  const [tarefas, setTarefas] = useState<_tarefa[]>([]);

  function adicionarTarefa(){
    if(novaTarefa == ''){
      alert("Insira um texto");
      return;
    }
    let tarefa : _tarefa = {
      id : tarefas.length + 1,
      texto : novaTarefa
    };
    setTarefas([...tarefas, tarefa]);
    setNovaTarefa('');
  }

  function mostrarTarefas(){
    let saida = tarefas.map(t => <Tarefa key={t.id} dados={t} handleDeletePress={excluir} />);
    return saida;
  }

  function excluir(id :number){
    let f = tarefas.filter(t => t.id != id);
    setTarefas(f);

  }

  return (
    <View style={styles.container} key={"main"}>
      <View style={styles.contentContainer}>
        <Text style={styles.titulo}>To Do List</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} value={novaTarefa} onChangeText={setNovaTarefa} placeholder="Digite uma tarefa" placeholderTextColor="#AAA"/>
          </View>

        <Button title='Adicionar tarefa' onPress={adicionarTarefa} color="#007AFF"/>
        
        <ScrollView style={styles.tarefaList}>
          {mostrarTarefas()}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F5',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    maxWidth: 500,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  titulo: {
    fontSize: 32,
    fontWeight: '600',
    color: 'black',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  input: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    borderColor: '#D1D1D6',
    borderRadius: 10,
    paddingLeft: 15,
    fontSize: 18,
    backgroundColor: '#F7F7F8',
    color: '#333',
    marginRight: 10,
  },
  tarefaList: {
    width: '100%',
    marginTop: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
});