import React from "react";

function Note(props) {
  // eslint-disable-next-line
  const { key, id, title, content, onDelete } = props;

  function handleDelete() {
    onDelete(id);
  }
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button className="delete" onClick={handleDelete}>
        DELETE
      </button>
    </div>
  );
}

export default Note;
