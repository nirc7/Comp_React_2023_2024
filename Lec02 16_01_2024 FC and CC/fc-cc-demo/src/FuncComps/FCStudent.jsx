
export default function FCStudent(props) {

  let gr = props.grade;
  if (90 < gr) {
    gr += 5;
  }

  if (gr < 60) {
    return (
      <>
        <h4>failed!</h4>
      </>
    );
  }

  function btnLearn() {
    gr += 2;
    console.log(gr);
  }

  function chgName(e) {
    console.log(e.target.value);
  }

  return (
    <div style={{
      color: "green",
      border: 'dashed orange 3px',
      borderRadius: 15,
      margin: 10,
      padding: 10
    }}>
      <h3>Studnet</h3>
      id={props.id} <br />
      name={props.name} <br />
      grade = {gr} <br />
      <button
        className="btn btn-outline-danger"
        onClick={btnLearn}>Learn</button> <br /> <br />
      NAME:<input type="text" onChange={chgName} />
    </div>
  );
}