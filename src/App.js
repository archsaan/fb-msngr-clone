import { useState, useEffect } from "react";
import "./App.css";
import { FormControl, InputLabel, Input, Button } from "@material-ui/core";
import Messages from "./Messages";
import db from "./firebase.js";
import firebase from "firebase/app";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";
import IconButton from "@material-ui/core/IconButton";

function App() {
  const [input, setInput] = useState("");
  const [msgs, sendMsg] = useState([]);
  const [user, setUser] = useState("");
  useEffect(() => {
    setUser(prompt("Please enter your name?"));
  }, []);

  useEffect(() => {
    db.collection("messages")
      .orderBy("time", "asc")
      .onSnapshot((snapshot) => {
        sendMsg(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
      });
  }, []);
  const sendChatMsg = (event) => {
    event.preventDefault();
    db.collection("messages").add({
      user: user,
      message: input,
      time: firebase.firestore.FieldValue.serverTimestamp(),
    });
    // sendMsg([...msgs, { message: input, user: user }]);
    setInput("");
  };
  return (
    <div className="App">
      <img src="https://facebookbrand.com/wp-content/uploads/2020/10/Logo_Messenger_NewBlurple-399x399-1.png?w=100&h=100"></img>
      <h2>Hello {user}</h2>
      <form className="app__form">
        <FormControl>
          <InputLabel>Enter Text Here</InputLabel>
          <Input value={input} onChange={(e) => setInput(e.target.value)} />

          <IconButton variant="contained" color="primary" onClick={sendChatMsg}>
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>
      <FlipMove>
        {msgs.map((msg) => (
          <Messages key={msg.id} user={user} msg={msg.data} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
