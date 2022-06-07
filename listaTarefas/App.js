import React, { useEffect, useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import * as SQLite from 'expo-sqlite'
import { FlatList, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native'

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    margin: 10,
    fontSize: 30,
    padding: 8
  },
})


const db = SQLite.openDatabase('tarefas.db')

const App = () => {
  const [tarefa, setTarefa] = useState('')
  const [tarefas, setTarefas] = useState([])

  const createTables = () => {
    db.transaction(txn => {
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS tarefas (id INTEGER PRIMARY KEY AUTOINCREMENT, tarefa VARCHAR(20))`,
        []
      )
    })
  }

  const deleteTarefa = id => {
    db.transaction(tx => {
      tx.executeSql(
        `DELETE FROM tarefas WHERE id = ?`,
        [id],
        (sqlTxn, res) => {
          setTarefas('')
          getTarefas()
        },
      )
    })
  }

  const incluirTarefa = () => {
    if (!tarefa) {
      alert('Por favor, Informe uma tarefa')
      return
    }

    db.transaction(txn => {
      txn.executeSql(
        `INSERT INTO tarefas (tarefa) VALUES (?)`,
        [tarefa],
        (sqlTxn, res) => {
          getTarefas()
          setTarefa('')
        }
      )
    })
  }

  const getTarefas = () => {
    db.transaction(txn => {
      txn.executeSql(
        `SELECT * FROM tarefas`,
        [],
        (sqlTxn, res) => {
          let len = res.rows.length

          if (len > 0) {
            let resultado = []
            for (let i = 0; i < len; i++) {
              let item = res.rows.item(i)
              resultado.push({ id: item.id, tarefa: item.tarefa })}
            setTarefas(resultado)
          }
        },
      )
    })
  }

  const renderItem = ({ item }) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 8,
          margin: 8
        }}
      >
        <View style={{ flexDirection: 'row' }}>
          <Text
            style={{
              marginRight: 9,
              fontSize: 16,
            }}
          >
            {item.id}.
          </Text>
          <Text style={{ fontSize: 16}}>
            {item.tarefa}
          </Text>
        </View>

        <View>
          <TouchableOpacity
            onPress={() => {
              deleteTarefa(item.id)
            }}
          >
            <MaterialIcons name='delete' size={24} color='red'/>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  useEffect(() => {
    async function fetchTarefas() {
      await createTables()
      await getTarefas()
    }
    fetchTarefas()
  }, [])

  return (
    <View style={{ paddingTop: 25 }}>
      <StatusBar backgroundColor='white' />
      <Text style={styles.title}>Tarefas</Text>

      <View
        style={{
          flexDirection: 'row',
          borderWidth: 1,
          margin: 8,
        }}
      >
        <TextInput
          placeholder='Adicione uma tarefa'
          value={tarefa}
          onChangeText={setTarefa}
          style={{ padding: 18, fontSize: 18 }}
        />

        <View
          style={{
            alignItems: 'flex-end',
            marginTop: 15,
            marginBottom: 15,
            marginLeft: 'auto',
            marginRight: 15,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: 'black',
              borderRadius: 25,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={incluirTarefa}
          >
            <MaterialIcons color="white" name='add' size={35}/>
          </TouchableOpacity>
        </View>
      </View>

      <FlatList data={tarefas} renderItem={renderItem} key={t => t.id} />
    </View>
  )
}

export default App