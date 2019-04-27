
var search = "Red Sox"
var year = 2014
var beginyear = 20140101
var endyear = 20190101
// var search = $("#searchTerm")
// var year = $("#startYear")
var apiKey = "Nv8KKzHV8oe7X8z5PYJH13PI2BFaMdiG"
// var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search +  "&fq=pub_year:(" + year +")&api-key=" + apiKey
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search +  "&facet=true&begin_date=" + beginyear + "&end_date=" + endyear + "&sort=relevance" +"&api-key=" + apiKey




$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
      console.log(response);

    var payload = response.response.docs;
    for(var i = 0; i < payload.length; i ++){
    console.log(payload[i].headline.main);
    console.log(payload[i].lead_paragraph);
    console.log(payload[i].web_url);
    console.log(" ");
    
    }
  });
