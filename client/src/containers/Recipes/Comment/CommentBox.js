import React, { useState, useContext } from "react";
import { Divider, Avatar, Grid, Paper, TextField, Button, IconButton } from "@material-ui/core";
import { Edit, Delete } from "@material-ui/icons";
import moment from "moment";
import UserContext from "../../../context/UserContext/UserContext";

const imgLink = "https://source.unsplash.com/random";

function CommentBox() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const { userInfo } = useContext(UserContext);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (userInfo.username === "") {
      alert("Please login to comment");
      return;
    }
    if (comment.trim() !== "") {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  const formatTime = (timestamp) => {
    const currentTime = moment();
    const postTime = moment(timestamp);
    const diffMinutes = currentTime.diff(postTime, "minutes");

    if (diffMinutes < 1) {
      return "just now";
    } else if (diffMinutes < 60) {
      return `${diffMinutes} minutes ago`;
    } else if (diffMinutes < 1440) {
      const diffHours = Math.floor(diffMinutes / 60);
      return `${diffHours} hours ago`;
    } else {
      const diffDays = Math.floor(diffMinutes / 1440);
      return `${diffDays} days ago`;
    }
  };

  const handleEditComment = (index) => {
    const updatedComments = [...comments];
    const editedComment = window.prompt("Edit the comment", comments[index]);
    if (editedComment !== null) {
      updatedComments[index] = editedComment;
      setComments(updatedComments);
    }
  };

  const handleDeleteComment = (index) => {
    const updatedComments = [...comments];
    const confirmDelete = window.confirm("Are you sure you want to delete this comment?");
    if (confirmDelete) {
      updatedComments.splice(index, 1);
      setComments(updatedComments);
    }
  };

  return (
    <div style={{ padding: 14, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} className="comment">
      <h1 className="text-4xl text-copy-primary text-center font-bold py-2">
        Comments{" "}
        <span role="img" aria-label="icon">
          📝
        </span>
      </h1>
      <Paper style={{ padding: "40px 20px", width: "80%" }}>
        <form onSubmit={handleCommentSubmit}>
          <TextField
            label="Add a comment"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={comment}
            onChange={handleCommentChange}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ marginTop: 10 }}
            disabled={comment.length === 0}
          >
            Submit
          </Button>
        </form>
        <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
        {comments.map((comment, index) => (
          <Grid container wrap="nowrap" spacing={3} key={index}>
            <Grid item>
              <Avatar alt="img" style={{ marginTop: "20px" }} src={imgLink} />
            </Grid>
            <Grid justifyContent="left" item xs zeroMinWidth>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h4 style={{ margin: 0, textAlign: "left" }}>{userInfo.username}</h4>
                <div>
                  <IconButton onClick={() => handleEditComment(index)}>
                    <Edit />
                  </IconButton>
                  <IconButton onClick={() => handleDeleteComment(index)}>
                    <Delete />
                  </IconButton>
                </div>
              </div>
              <p style={{ textAlign: "left" }}>{comment}</p>
              <p style={{ textAlign: "left", color: "gray" }}>
                posted {formatTime(Date.now())}
              </p>
            </Grid>
          </Grid>
        ))}
      </Paper>
    </div>
  );
}

export default CommentBox;