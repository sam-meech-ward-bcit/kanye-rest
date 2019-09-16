
const quoteTag = $('#quote');

function generateQuote() {
  $.ajax({
    type: "GET",
    url: "https://api.kanye.rest/"
  }).then(data => {
    quoteTag.text(data.quote);
  }).catch(error => {
    console.log("ERROR", error);
  });
}

quoteTag.on('click', generateQuote);

generateQuote();