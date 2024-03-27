import { useState } from "react";
import Feedback from "../components/FeedBack";
import { feedbacks } from "../data/feedbacks";
import AddFeedBackForm from "../components/AddFeedBackForm";

function FeedBackList() {
  // SHOULD NOT modify currentMovies directly - ONLY via the setCurrentMovies function to ensure state is managed properly
  const [currentFeedBacks, setCurrentFeedBacks] = useState(feedbacks);

  // takes separate values to use when creating a new movie, so we can also add in the id
  const handleAddFeedBack= (name,review) => {
    let newFeedBack = {name, review, id: currentFeedBacks.length + 1};

    // this works because currentMovies is an array of MovieTypes, and here we are adding a new MovieType to the list
    setCurrentFeedBacks([...currentFeedBacks, newFeedBack]) // add new movie to existing list, store new array in state
  }  

  // iterate over each movie, print the title in a list
  const feedbackItems = currentFeedBacks.map((feedback) => (
    // <li key={movie.id}>{movie.title} ({movie.year}): {movie.synopsis}</li>
    <Feedback
      key={feedback.id}
      id={feedback.id}
      name={feedback.name}
      review={feedback.review}
    />
  ));

  return <div>

<ul>
        {feedbackItems}
      </ul>
      <AddFeedBackForm onAddFeedBack={handleAddFeedBack}/>

  </div>;
}

// ++ How could we add a search field for movies? after covering form input fields
export default FeedBackList;
