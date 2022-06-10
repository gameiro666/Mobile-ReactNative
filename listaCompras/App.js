import React, { useEffect, useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import * as SQLite from 'expo-sqlite'
import { FlatList, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 32,
    padding: 8,
    margin: 10,
  },
  input: {
    fontSize: 18,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
  },
  input2: {
    width: 64,
    marginRight: 5,
    fontSize: 18,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
  },
})

const db = SQLite.openDatabase('db_produtos.db')

const App = () => {
  const [produto, setProduto] = useState('')
  const [produtos, setProdutos] = useState([])
  const [qtd, setQtd] = useState('')

  const createTables = () => {
    db.transaction(txn => {
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS produtos (id INTEGER PRIMARY KEY AUTOINCREMENT, qtd INT, name VARCHAR(20))`,
        []
      )
    })
  }

  const deleteproduto = id => {
    db.transaction(tx => {
      tx.executeSql(
        `DELETE FROM produtos WHERE id = ?`,
        [id],
        (sqlTxn, res) => {
          setProdutos('')
          getProdutos()
        }
      )
    })
  }

  const addproduto = () => {
    if (!produto || !qtd) {
      alert('Informe um produto')
      return
    }

    db.transaction(txn => {
      txn.executeSql(
        `INSERT INTO produtos (qtd,name) VALUES (?,?)`,
        [produto, qtd],
        (sqlTxn, res) => {
          getProdutos()
          setProduto('')
          setQtd('')
        }
      )
    })
  }

  const getProdutos = () => {
    db.transaction(txn => {
      txn.executeSql(`SELECT * FROM produtos`, [], (sqlTxn, res) => {
        let len = res.rows.length

        if (len > 0) {
          let resultado = []
          for (let i = 0; i < len; i++) {
            let item = res.rows.item(i)
            resultado.push({ id: item.id, qtd: item.qtd, name: item.name })
          }

          setProdutos(resultado)
        }
      })
    })
  }

  const renderItem = ({ item }) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottomWidth: 1,
          borderColor: 'black',
          margin: 8,
          padding: 4
        }}
      >
        <View style={{ flexDirection: 'row' }}>         
          <Text style={{ fontSize: 18, marginTop: 2 }}>{item.qtd}</Text>
          <Text style={{ fontSize: 18, marginLeft: 10, marginTop: 2 }}>
            ({item.name}){' '}
          </Text>
        </View>

        <View>
          <TouchableOpacity
            onPress={() => {
              deleteproduto(item.id)
            }}
          >
            <MaterialIcons name='delete' size={24} color='red'/>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  useEffect(() => {
    async function fetchData() {
      await createTables()
      await getProdutos()
    }
    fetchData()
  }, [])

  return (
    <View style={{ paddingTop: 20 }}>
      <StatusBar backgroundColor='white' />

      <Text style={styles.title}>Lista de Compras</Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          margin: 16,
          paddingHorizontal: 4,
        }}
      >
        <TextInput
          style={styles.input2}
          placeholder='Qtd'
          value={qtd}
          onChangeText={setQtd}
          keyboardType='numeric'
        />

        <TextInput
          style={styles.input}
          placeholder='Produto'
          value={produto}
          onChangeText={setProduto}
        />

        <View style={{ alignItems: 'center', marginTop: 20, marginBottom: 20 }}>
          <TouchableOpacity
            style={{
              backgroundColor: 'black',
              margin: 4,
              borderRadius: 25,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={addproduto}
          >
            <MaterialIcons color='white' name='add' size={30} />
          </TouchableOpacity>
        </View>
      </View>
              
      <FlatList data={produtos} renderItem={renderItem} key={t => t.id} />
      {produtos.length === 0 && (<Text style={{textAlign: 'center'}}>
        Ainda não há nenhum produto na lista.
        </Text>)}

    </View>
  )
}


export default App