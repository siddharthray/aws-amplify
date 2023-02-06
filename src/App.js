// import React, { Component } from "react";
// import { withAuthenticator } from "aws-amplify-react";
import { withAuthenticator, Button, Heading } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { useState } from "react";

const styles = {
  container: {
    width: "100%",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 20,
  },
  todo: { marginBottom: 15 },
  input: {
    border: "none",
    backgroundColor: "#ddd",
    marginBottom: 10,
    padding: 8,
    fontSize: 18,
  },
  todoName: { fontSize: 20, fontWeight: "bold" },
  todoDescription: { marginBottom: 0 },
  button: {
    backgroundColor: "black",
    color: "white",
    outline: "none",
    fontSize: 18,
    padding: "12px 0px",
  },
};

/* src/App.js */
function App({ signOut, user }) {
  const [notes, setNote] = useState([
    {
      id: 1,
      note: "Hello World",
    },
  ]);

  return (
    <div style={styles.container}>
      <div className="flex justify-between">
        <div className="flex items-center justify-left">
          <Heading level={5}>Hello {user.attributes.email}</Heading>
        </div>
        <div className="flex items-center justify-right">
          <Button onClick={signOut}>Sign out</Button>
        </div>
      </div>

      <div className="flex flex-column items-center justify-center pa3 bg-washed-red">
        <h1 className="code f2-1">Amplify Notetaker</h1>
        {/* Note form */}
        <form className="mb3">
          <input
            type="text"
            className="pa2 f4"
            placeholder="Write your note..."
          />
          <button className="pa2 f4" type="submit">
            Add Note
          </button>
        </form>
        {/* Note Lists */}
        {notes.map((item) => (
          <div key={item.id} className="flex items-center">
            <li className="list pa1 f3">{item.note}</li>
            <button className="bg-transparent bn f4">
              <span>x</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default withAuthenticator(App);
