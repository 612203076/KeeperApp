import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

function CreateArea(props) {
  const [isExpanded, setExpanded] = React.useState(false);
  const [note, setNote] = React.useState({
    title: "",
    content: "", // Make sure "content" key is used correctly here
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function addInList(event) {
    event.preventDefault(); // Prevent form from refreshing the page
    props.onAdd(note); // Call parent function to add the note
    setNote({ title: "", content: "" }); // Clear the form after adding
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            onChange={handleChange}
            name="title"
            placeholder="Title"
            value={note.title} // Make sure the value is linked correctly
          />
        )}
        <textarea
          onChange={handleChange}
          onClick={expand}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? "3" : "1"}
          value={note.content} // Correctly bind the value to the state
        />
        <Zoom in={isExpanded ? true : false}>
          <Fab onClick={addInList}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
