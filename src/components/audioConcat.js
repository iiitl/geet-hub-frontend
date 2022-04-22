function audioConcat() {
  return <div className="App">
      ahoy1 beaches
    </div>;
}

export default audioConcat;

var audioconcat = require("audioconcat");

var songs = ["beatles.mp3", "greenday.mp3", "u2.mp3"];

audioconcat(songs)
  .concat("all.mp3")
  .on("start", function (command) {
    console.log("ffmpeg process started:", command);
  })
  .on("error", function (err, stdout, stderr) {
    console.error("Error:", err);
    console.error("ffmpeg stderr:", stderr);
  })
  .on("end", function (output) {
    console.error("Audio created in:", output);
  });


