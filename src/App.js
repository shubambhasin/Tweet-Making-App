import { useState } from "react";
import "./styles.css";

export default function App() {
  const [color, setColor] = useState("white");
  const [charCount, setCharCount] = useState(0);
  const [tweetData, setTweetData] = useState("");
  const [limitWarning, setLimitWarning] = useState("");
  const tweet = (e) => {
    makeFinalUrl()
    window.open(makeFinalUrl(), "_blank");
  };

  let url = `https://twitter.com/intent/tweet?text=`;

  const makeFinalUrl = () => {
    return url + `${tweetData}`;
  };
  const savetweet = (e) => {
    setTweetData(e.target.value);

    setCharCount(e.target.value.length);
    if (tweetData.length <= 280) {
      setLimitWarning("");
      setColor("white");
    } else {
      setColor("red");
      setLimitWarning("Char limit exceeded");
    }
  };

  console.log(tweetData);

  return (
    <div className="twitter">
      <h1>Personal Twitter</h1>
      <div className="tweet-container">
        <form>
          <textarea value={tweetData} onChange={savetweet} />
          <br />
          <div className="button-charCount">
            <button onClick={tweet}>Tweet</button>
            <span className="absolute"
              style={{
                fontSize: "large",
                padding: " 0.4rem 1rem",
                fontWeight: "bold",
                color: "white"
              }}
            >
              <span style={{ color: `${color}` }}>{charCount}</span> /280 {""}{" "}
              <span style={{ color: "red" }}>{limitWarning}</span>
            </span>
          </div>
        </form>
      </div>
      <div>
        <h1>Preview</h1>
        <div className="output" style={{ fontSize: "small" }}>
          <div>{tweetData}</div>
        </div>
      </div>
    </div>
  );
}
