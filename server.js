const { json } = require("express");
let fs =require ('fs')
const express = require("express");
const app = express();

const quotes = require("./quotes.json");

app.get('/quotes/:id', function(request, response) {
    let id = parseInt(request.params.id);
  const isANumber = !isNaN(id);
  if (isANumber && id >= 0) {
      id = parseInt(request.params.id);
      let quote = quotes.find((i) => i.id == id);
    if (quote) {
       // si existe
        response.json(quote);
    }   else {
        // si no existe
        response.status(404).send(`quote with id=${id} not found`);
      }
  }   else {
          response.status(400).send("id must be equal or larger than 0!");
      }


});




app.get("/quotes", function(req, res){
  
  console.log(response.json(quotes))
});



app.post("/quotes", function(req, res){
  let quotePost = req.body
  quotePost.id =Math.max(...quotes.map((i)=>i.id))+1.
  quotes.push(quotepost)
  fs.writeFile(quotes.json, JSON.stringify(quotes,null,2))
  res.status(201).json(quotePost)
  
});


app.put("/quotes/:id", function(req, res){
  let body = req.body
  quotePut.id =parseInt(request.params.id)
 let quoteModify = quote.find(jsn=>jsn.id ===id);
 quoteModify.author = body.author
 quoteModify.quote = body.quote
 fs.writeFile(quotes.json, JSON.stringify(quotes,null,2))
 res.status(201).json(quoteModify)
  
});

app.delete("/quotes/:id", function(req, res){
 id =parseInt(req.params.id)
 quotes = quotes.filter(i =>!(i.id == id))
 fs.writeFile(quotes.json, JSON.stringify(quotes,null,2))
 
  
});

app.listen(3000, () => console.log("Listening on port 3000"));







