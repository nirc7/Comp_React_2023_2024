import React from 'react'

export default function FCPersonsList(props) {
  console.log('FCPL');
  
  let personsListStr = props.persons.map(per => {
    console.log(per.id);
    return <div
      key={per.id}
      style={{
        border: 'dashed orange 2px',
        margin: 5,
        padding: 3, borderRadius: 5
      }}>{per.id} -- {per.name}</div>
  });

  return (
    <div>FCPersonsList
      {personsListStr}
    </div>
  );
}
