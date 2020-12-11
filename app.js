//jshint esversion:6

const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const request = require('request');
const lodash = require('lodash');
const app = express();

app.use(bodyparser.urlencoded({
  extended: true
}));

mongoose.connect("mongodb://localhost:27017/ClimateDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.set("view engine", "ejs");

app.use(express.static("public"));

const monthSchema = new mongoose.Schema({
  state:String,
  crops:[String]
});

const State = mongoose.model("State", monthSchema);

const Andra_Pradesh = new State({
  state:"Andhra Pradesh",
  crop:["Pearl Millet ","Maize","Finger Millet","Legume","Tobacco","Cotton"]
});

const Arunachal_Pradesh = new State({
  state:"Arunachal Pradesh",
  crop:["Rice", "Maize","Millet","Wheat","Sugarcane","Gingern"]
});

const Assam = new State({
  state:"Assam",
  crop:["Jute","Potato","Sugarcan","Pulses","Arecanuts"]
});

const Bihar = new State({
  state:"Bihar",
  crop:["Rice","Wheat","Maize","Onion","Potato","Cauliflower","Eggplant"]
});

const Chhattisgarh = new State({
  state:"Chhattisgarh",
  crop:["Peanut,Wheat,Maize,coarse grains, wheat, maize, groundnut, pulses", "oilseeds"]
});

const Goa = new State({
  state:"Goa",
  crop:["paddy, ragi, maize, jowar, bajra, pulses, cashew-nut"]
});

const Gujarat = new State({
  state:"Gujarat",
  crop:["tobacco","cotton", "groundnuts", "wheat", "jowar", "bajra","tur", "gram"]
});

const Haryana = new State({
  state:"Haryana",
  crop:["wheat", "rice","sugarcane", "cotton", "oilseeds", "pulses", "barley", "maize", "millet", "sesame", "jute"]
});

const Himachal_Pradesh = new State({
  state:"Himachal Pradesh:",
  crop:["wheat", "maize", "rice", "barley", "seed-potato", "ginger", "vegetables","vegetable seeds", "mushrooms", "chicory seeds", "hops", "olives", "fig"]
});
const Jharkhand = new State({
  state:"Jharkhand",
  crop:["Paddy", "maize", "pulses", "sunflower", "groundnut"]
});
const Karnataka = new State({
  state:"Karnataka",
  crop:["Rice", "Ragi", "Jowar", "pulses", "oilseeds", "cardamom", "chillies", "cotton", "sugarcane"]
});
const Kerala = new State({
  state:"Kerala",
  crop:["Rice", "pulses", "coconut", "rubber", "tea", "coffee", "pepper", "cardamom", "areca nut", "ginger", "nutmeg", "cinnamon", "paddy tapioca"]
});
const Madhya_Pradesh = new State({
  state:"Madhya Pradesh",
  crop:["Rice", "Wheat", "Jwar", "Maize", "Gram", "Towar", "Cotton", "Sugarcane"]
});
const Maharashtra = new State({
  state:"Maharashtra",
  crop:["wheat", "rice", "jowar", "bajra", "pulses", "groundnut", "cotton", "sugarcane", "turmeric", "tabacco"]
});
const West_Bengal  = new State({
  state:"West Bengal ",
  crop:["Rice","Jute","Tea","Potatoes","Oilseeds","Betel","Vine","Tobacco","Wheat"," Barley","Maize"]
});
const Uttarakhand = new State({
  state:"Uttarakhand",
  crop:["Basmati rice","wheat","soybeans","groundnuts","coarse cereals","pulses","oil seeds"]
});
const Uttar_Pradesh = new State({
  state:"Uttar Pradesh",
  crop:["Wheat","Rice", "pulses", "oilseeds"," potatoes","Sugarcane"]
});
const Tripura = new State({
  state:"Tripura",
  crop:["Rice", "jackfruit", "pineapple","potato", "sugarcane", "chilli","natural rubber"]
});
const Tamil_Nadu = new State({
  state:"Tamil Nadu",
  crop:["cotton", "sugarcane"," tea", "coffee","coconut", "rice","jowar", "ragi", "bajra", "maize","pulses"]
});
const Sikkim = new State({
  state:"Kerala",
  crop:["maize","millet","wheat","barley","oranges","tea","cardamom"]
});
const Rajasthan = new State({
  state:"Rajasthan",
  crop:["Wheat","Sugarcane","Bajra","Barley","Jowar","Maize","Chili","Cotton","Mango","Rice","Vegetables","Groundnut","Oil seeds","Pulses"]
});
const Punjab = new State({
  state:"Kerala",
  crop:["Wheat","Rice","Maize","Barley","Pulses","Rapeseed","Mustard","Sunflower","Oil Seeds","Sugarcane","Cotton","Fruits","Vegetables"]
});
const Odisha = new State({
  state:"Odisha",
  crop:["Rice","pulses","oil seeds","jute","roselle","sugarcane","coconut","turmeric"]
});
const Nagaland = new State({
  state:"Nagaland",
  crop:["Rice","millet","maize","pulses","coffee","cardamom","tea"]
});
const Mizoram = new State({
  state:"Mizoram",
  crop:["Mandarin","Orange","Banana","Passion Fruit","Grapes","Hatkora","Pineapple", "Papaya"]
});
const Meghalaya = new State({
  state:"Meghalaya",
  crop:["Potatoes","Rice","Maize","pineapples","bananas","papayas","spices"]
});
const Manipur = new State({
  state:"Manipur",
  crop:["Sugarcane","Tobacco","Cotton","Jute","Oilseeds","Sugarcane","Potato","Tobacco","Mustard","Pulses"]
});

app.post("/crop",function(req,res){
  State.find(function(err, states) {
     if (err) {
       console.log(err);
     } else {
       states.forEach(function(state) {
         state.state[index];
       });
     }
   });
});

//
// const cropschema = new mongoose.Schema({
//   crop:String,
//   precipitation: String,
//   soil:String
// });
//
// const State = mongoose.model("State", monthSchema);
//
// const Crop = mongoose.model("Crop", cropschema);

// const maharashtra = new State({
//   state:"Maharashtra",
//   crop:["Wheat","Rice","Jute"]
// });
//
// const wheat = new Crop({
//   crop:"Wheat",
//   precipitation:65,
//   temperature:30
// });

// State.insertMany(maharashtra, function(err) {
//    if (err) {
//      console.log(err);
//    } else {
//      console.log("Success");
//    }
//  });

 // Crop.insertMany(wheat, function(err) {
 //    if (err) {
 //      console.log(err);
 //    } else {
 //      console.log("Success");
 //    }
 //  });
 //
 //  State.find(function(err, states) {
 //    if (err) {
 //      console.log(err);
 //    } else {
 //      mongoose.connection.close();
 //      states.forEach(function(state) {
 //        console.log(state.state);
 //      });
 //    }
 //  });
 //
 //  Crop.find(function(err, crops) {
 //    if (err) {
 //      console.log(err);
 //    } else {
 //      crops.forEach(function(crop) {
 //        console.log(crop.crop);
 //      });
 //    }
 //  });

app.get("/",function(req,res){
  const url = "https://api.weatherbit.io/v2.0/history/daily?city=Mumbai,IN&start_date=2020-02-18&end_date=2020-02-19&key=d58a021bfa6d42fa97d2706f4660180a";
  request.get(url,function(err,response,body){
    const weatherdata = JSON.parse(body);
    console.log(weatherdata)
    // const precipitation = weatherdata.data[0].precip;
    res.render("index",{});
  });
});

app.get("/contact-us",function(req,res){
  res.render("contact-us",{});
});

app.get("/crop",function(req,res){
  res.render("crop",{});
});

app.listen(3000);
