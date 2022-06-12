import { useState } from 'react'

function App() {
  const [counter, setCounter] = useState(0)

  const handleIncrement = () => setCounter(prev => prev + 1)
  const handleDecrease = () => setCounter(prev => prev - 1)

  return (
    <div className='container'>
      <div className='d-flex justify-content-center'>
        <h2>{counter}</h2>
      </div>
      <div className='d-flex justify-content-center'>
        <button className='m-2 btn btn-primary' onClick={handleIncrement}>Increase</button>
        <button className='m-2 btn btn-danger' onClick={handleDecrease}>Decrease</button>
      </div>
    </div>
  );
}

export default App;
