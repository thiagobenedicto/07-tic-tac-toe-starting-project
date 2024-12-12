import {useState} from 'react';

export default function Player({name, symbol}) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditName() {
    setIsEditing((editing) => !editing); // importante!
    // setIsEditing(!isEditing); // Como ele "agenda" a execusão dessas funcões, o isEditing tem o mesmo valor
    // setIsEditing(!isEditing);
  }

  let playerName = <span className='player-name'>{name}</span>;

  if (isEditing) {
    playerName = <input type='text' required value={name} />;
  }

  return (
    <li>
      <span className='player'>
        {playerName}
        <span className='player-symbol'>{symbol}</span>
      </span>
      <button onClick={handleEditName}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}
