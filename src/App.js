import React, { useState } from 'react';
import SingleColor from './SingleColor';

import Values from 'values.js';

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);
  const [duration,setDuration] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(duration);
      setError(false);
      setList(colors);
    } catch (error) {
      setError(true);
      
    }
  };
  return (
    <>
      <section className='container'>
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            className={error && 'error'}
            type='text'
            value={color}
            onChange={(e) => {
              setColor(e.target.value);
            }}
            placeholder={'#f15025'}
          />
          <input
           className='durarion-input'
            type='number'
            id='amount'
            placeholder='duration'
            value={duration}
            onChange={(e) => setDuration(parseInt(e.target.value))}
          />
          <button className='btn' type='submit'>
            submit
          </button>
        </form>
      </section>
      <section className='colors'>
        {list.map((color, index) => {
          const hex = color.hex;
          return (
            <SingleColor key={index} {...color} index={index} hexColor={hex} />
          );
        })}
      </section>
    </>
  );
}
{
  /* <section className='colors'>
  {list.map((color, index) => {
    return (
      <SingleColor key={index} {...color} index={index} hexColor={color.hex} />
    );
  })}
</section>; */
}
export default App;
