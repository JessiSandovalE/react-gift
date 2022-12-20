import { useState } from 'react';

export const AddCategory = ({onNewCategory}) => {
  const [inputValue, setInputValue] = useState('')

  const onInputChanged = ({target}) => {
    setInputValue(target.value)
  }

  const handleSubmit = (event)=> {
    event.preventDefault();
    if(inputValue.trim() <=1)return;
    setInputValue('')
    onNewCategory(inputValue.trim());
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={(event) => onInputChanged(event)}
      />
    </form>
  )
}
