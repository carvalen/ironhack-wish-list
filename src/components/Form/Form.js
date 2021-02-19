import React from 'react';
 
function Form(props) {
    const [wish, setWish] = React.useState("");
    const handleSubmit = (event) => {
      event.preventDefault()
      props.addWish(wish)
      setWish("")
    }
    const handleChange = (event) => setWish(event.target.value)
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={wish}
          name="wish"
          id="wish"
          onChange={handleChange}
        />
        <button type="submit">Add Wish</button>
      </form>
    );
  }

  export default Form;