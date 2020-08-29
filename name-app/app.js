console.log("Hello");

$.ajax({
  url: "https://www.scorebat.com/video-api/v1/",
}).then(
  (data) => {
    // $("#video").append(data[0].videos[0].embed); //will display the video
    $("#video").append(data[5].embed);
    // $("#video").text(data[0].title + data[0].url);
    console.log(data[5]);
  },
  (error) => {}
);
