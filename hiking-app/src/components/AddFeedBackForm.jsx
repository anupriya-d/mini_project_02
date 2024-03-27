import { Button, Dialog, DialogActions, DialogContent, FormControl, TextField } from "@mui/material";
import { useState } from "react";


function AddFeedBackForm({ onAddFeedBack }) {
  const [name, setName] = useState(""); // controlled input fields are stored in state
  const [review, setReview] = useState("");
  

  const [open, setOpen] = useState(false);

  // React.FormEvent is a special type to represent an event triggered by a form
  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(false)

    // by passing in individual values, it doesn't have to be a complete MovieType yet
    onAddFeedBack( name, review );

    // reset values back to empty for another movie
    setName('');
    setReview('');
   
  };

  return (
    <div className="AddFeedBackForm">
      <Dialog open={open} onClose={() => setOpen(false)}>
      <form onSubmit={handleSubmit}>

      <DialogContent>
          {/* make sure each input field has a label */}

          <TextField id="standard-basic" label="FeedBack Name:" variant="standard" value={name}
              onChange={(e) => setName(e.target.value)} name="name"/>

          <TextField id="standard-basic" label="FeedBack Review" variant="standard" value={review}
              onChange={(e) => setReview(e.target.value)} name="review"/>          

          </DialogContent>
          <DialogActions>
            <Button type="submit">Submit</Button>
          </DialogActions>
          </form>
        </Dialog>

        <Button onClick={() => setOpen(true)}>Add FeedBack</Button>

    </div>
  );
}

export default AddFeedBackForm