import video from "../data/video.js";
import Comment from './Comment';
import Trash from "./Trash.js";
import Video from "./Video.js";
import VideosInfo from "./VideosInfo.js";
import VoteButton from "./VoteButton.js";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <Video emb={video.embedUrl}/>
      <VideosInfo title={video.title} views={video.views} createdAt={video.createdAt} />
      <VoteButton upVote={video.upvotes} downVote={video.downvotes} />
      <Trash/>
      <hr
        style={{
          color: "gray",
          backgroundColor: "gray",
          height: 3,
          margin: "3em "
        }}
      />
      <Comment comments={video.comments} />
    
    </div>

  );
}

export default App;
