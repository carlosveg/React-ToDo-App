import "./form.css"

function Form() {

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form>
      <input type="text" id="" placeholder="Write a ToDo..." />
      <button onClick={handleSubmit}>Add</button>
    </form>
  )
}

export default Form;