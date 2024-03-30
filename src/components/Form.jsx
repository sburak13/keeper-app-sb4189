import React from "react";

function Form(props) {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");

  function updateTitle(event) {
    setTitle(event.target.value);
  }

  function updateContent(event) {
    setContent(event.target.value);
  }

  function handleAdd() {
    props.onAdd(title, content);

    setTitle("");
    setContent("");
  }

  return (
    <div className="form">
      <input
        type="text"
        placeholder="Title"
        onChange={updateTitle}
        value={title}
      />
      <textarea
        placeholder="Take a note..."
        onChange={updateContent}
        value={content}
      />
      <button className="add" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
}

export default Form;
