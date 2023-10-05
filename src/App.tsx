import React from 'react';
import { useState, useRef, useLayoutEffect } from 'react';
import './App.css';

function App() {

  const INITIAL_LIST = [
    {itemKey: 1, text: 'Item1', selected: false},
    {itemKey: 2, text: 'Item2', selected: false},
    {itemKey: 3, text: 'Item3', selected: false},
    {itemKey: 4, text: 'Item4', selected: false}  
  ]
  const [list, setList] = useState(INITIAL_LIST)
  const [undoList, setUndoList] = useState(INITIAL_LIST)
  const [hideInput, setHideInput] = useState(true)
  const [newText, setNewText] = useState("")
  const refList = useRef<HTMLUListElement>(null)
  const refNewItem = useRef<HTMLInputElement>(null)

  function handleSelect(id: number) {
    const listUpdated = [...list];
    listUpdated[id].selected = !listUpdated[id].selected;
    setList(listUpdated);
  }

  function handleUndo() {
    setList(undoList); 
    setHideInput(true);
    setNewText("");
  }

  function handleDelete(id: number = -1) {
    let listUpdated = [...list];
    if (id<0) {
      // Delete all selected items (same as filter all not selected)
      listUpdated = listUpdated.filter(item => item.selected === false);
    } else {
      // Delete only item with specific id
      listUpdated.splice (id,1);
    }
    setUndoList(list);
    setList(listUpdated);
    setHideInput(true);
    setNewText("");
  }

  function handleClickAdd() {
    if (newText.length>0) {
      handleItemAdd('Enter', newText)
    } 
    setHideInput(!hideInput);
  }

  function handleItemAdd(keyPressed: string, text: string) {
    if (text.length>0 && keyPressed==='Enter') {
      const maxKey = (list.length>0)?Math.max(...list.map(item => item.itemKey)):0
      setUndoList(list);
      setList([...list, {"itemKey": (maxKey+1), "text": text, "selected": false}]);
      setNewText("");
    }
  }

  useLayoutEffect(() => {
    if (!hideInput && refNewItem.current) {
      refNewItem.current.focus();
    }
    if (refList.current) {
      const topScroll: number = refList.current.scrollHeight - refList.current.clientHeight
      refList.current.scrollTo({top: topScroll});
    }
  })
  

  return (
    <div className="App">
      <div className="App-container">
        <header className="App-header">
          <h1>
            This is a technical proof
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt temporibus asperiores, fugit quaerat est illum saepe voluptatibus! In, officia suscipit recusandae quisquam quia nihil natus eum modi, qui non neque.
          </p>
        </header>
        <div className="App-body">
          <ul ref={refList} className='App-body-list'>
            {list.map ((item, index) => {
              return (
                <li className={'App-body-list-item' + ((item.selected===true)?' App-body-list-item-selected':'')} key={item.itemKey} onClick={() => handleSelect(index)} onDoubleClick={() => handleDelete(index)}>{item.text}</li>
              )
            })} 
            <li className='App-body-list-item'>
              <input ref={refNewItem} className='App-body-list-input' type='text' hidden={hideInput} value={newText} placeholder='Add new item ... and press ENTER' onChange={(event)=>setNewText(event.target.value)} onKeyDown={(event) => handleItemAdd(event.key, event.currentTarget.value)}></input>
            </li>
          </ul>
          <div className='App-body-buttons'>
            <button className='App-body-button App-body-button-undo' title="Undo" onClick={() => handleUndo()}>{'\u{21BA}'}</button>
            <button className='App-body-button' onClick={() => handleDelete()}>DELETE</button>
            <button className='App-body-button App-body-button-last' onClick={() => handleClickAdd()}>ADD</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
