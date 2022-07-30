import React, {useState} from 'react'
import './App.css';
const App = () => {
  const [items, setItems] = useState('');
  const [data, setData] = useState([]);

  //this will submit the form 
  const handleSubmit = e => {
    e.preventDefault();
    const newData = {id: new Date().getTime().toString(), items};
    setData([...data, newData]);
    setItems('');
  }

  //this function will remove the specific item from the list
  const removeItem = (id) => {
    let remItem = data.filter(item => {
      return item.id !== id;
    })
    setData(remItem);
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
      <input className='input' type={'text'} placeholder={'add item...'} value={items} onChange={(e) => setItems(e.target.value)} />
      <button type='submit'>submit</button>
      </form>
      <div className='data'>
        {data.map(item => {
          return(
            <div>
              <h1>Item: {item.items}</h1>
              <button className='delete-btn' onClick={(id) => removeItem(item.id)}>Delete</button>
            </div>
          )
        })}
      </div>
    </main>
  )
}

export default App