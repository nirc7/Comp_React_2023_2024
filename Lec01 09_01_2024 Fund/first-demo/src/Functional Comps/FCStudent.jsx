
export default function FCStudent(props) {

  let gr = props.grade;
  if (gr < 100) {
    gr += 5;
  }

  return (
    <div style={{
      color: 'red',
      border: 'solid black 2px',
      borderRadius: 20,
      padding: 10,
      margin: 10
    }}>
      <h4>Student</h4>
      id={props.id} <br />
      name={props.name} <br />
      grade={gr}
    </div>
  );
}