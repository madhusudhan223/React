export default function FieldInput(props) {
  return (
    <div>
      <label htmlFor={props.id}></label>
      <input id={props.id} type="text" />
    </div>
  );
}
