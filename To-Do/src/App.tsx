import { useState } from 'react'
import * as C from './App.styles'
import {Item} from './types/Item'
import { ListItem } from './components/ListItem'
import { AddArea } from './components/AddArea'

const App = () =>{

  const [list, setList] = useState<Item[]>([
    {id:1, name:'Comprar leite na padaria', done: false},
    {id:2, name:'Comprar um bolo no mercado', done: false}
  ])

  const handleAddTask = (taskName: string) => {
    let newList = [...list]
    newList.push({
      id:list.length + 1,
      name: taskName,
      done: false
    })
    setList(newList)
  }

  return(
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        {/* Área de adicionar nova tarefa */}
        <AddArea onEnter={handleAddTask}/>

        {/* Lista de tarefas */}
        {list.map((item, index) => (
           <ListItem key={index} item={item}/> 
        ))}

      </C.Area>
    </C.Container>
  )
}

export default App