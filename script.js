
const quoteTag = $('#quote');

function generateQuote() {
  $.ajax({
    type: "GET",
    url: "kanye/quote.php"
  }).then(data => {
    quoteTag.text(data.quote);
  }).catch(error => {
    console.log("ERROR", error);
  });
}

quoteTag.on('click', generateQuote);

generateQuote();