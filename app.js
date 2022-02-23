//jshint es version6

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "./static")));

var margNames = [];
var sarg1Names = [];
var sarg2Names = [];
var sarg3Names = [];

var mainArguments = [];
var supArgument1s = [];
var supArgument2s = [];
var supArgument3s = [];
var opiniondates = [];
var newspaperjournals = [];
var chapters = [];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://rerite:vf69tgNdntAsh76@cluster0.zt8sx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

const argsSchema = {
  marg: String,
  sarg1: String,
  sarg2: String,
  sarg3: String,
  opd: String,
  njs: String,
  id3: String,
};

const Arg = mongoose.model("Arg", argsSchema);

const arg1 = new Arg({
  marg: "",
  sarg1: "",
  sarg2: "",
  sarg3: "",
  opd: "",
  njs: "",
  id3: "",
});

const defaultArgs = [];

Arg.insertMany(defaultArgs, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully saved items to DB.");
  }
});

Arg.find({}, function (err, args) {
  console.log(args);

  args.forEach(function (arg) {
    var mainArgument = arg.marg;
    var supArgument1 = arg.sarg1;
    var supArgument2 = arg.sarg2;
    var supArgument3 = arg.sarg3;
    var opeddate = arg.opd;
    var newsjournal = arg.njs;
    var chapter = arg.id3;

    mainArguments.push(mainArgument);
    supArgument1s.push(supArgument1);
    supArgument2s.push(supArgument2);
    supArgument3s.push(supArgument3);
    opiniondates.push(opeddate);
    newspaperjournals.push(newsjournal);
    chapters.push(chapter);

    //  console.log(mainArguments + supArgument1s + supArgument2s + supArgument3s);
  });
});

app.get("/", function (req, res) {
  var today = new Date();
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  var day = today.toLocaleDateString("en-US", options);

  res.render("index", {
    kindOfDay: day,
    mainArguments: mainArguments,
    supArgument1s: supArgument1s,
    supArgument2s: supArgument2s,
    supArgument3s: supArgument3s,
    newspaperjournals: newspaperjournals,
    opiniondates: opiniondates,
    chapters: chapters,
  });
  console.log(margNames + sarg1Names + sarg2Names + sarg3Names);
});
//app.get("/", function (req, res) {
//  Arg.find({}, function (err, args) {
//  args.forEach(function (arg) {
//   var mainArguments = arg.marg;
//  var supArgument1s = arg.sarg1;
// var supArgument2s = arg.sarg2;
// var supArgument3s = arg.sarg3;

//      res.render("index", {
//      mainArguments: mainArguments,
//     supArgument1s: supArgument1s,
//     supArgument2s: supArgument2s,
//     supArgument3s: supArgument3s,
//    });
// });
//});

app.post("/", function (req, res) {
  var margName = req.body.mainargument;
  var sarg1Name = req.body.supportingargument1;
  var sarg2Name = req.body.supportingargument2;
  var sarg3Name = req.body.supportingargument3;
  var opeddate = req.body.opiniondate;
  var newsjournal = req.body.newspaperjournal;
  var topic = req.body.chapter;
  //  margNames.push(margName);
  //  sarg1Names.push(sarg1Name);
  //  sarg2Names.push(sarg2Name);
  //  sarg3Names.push(sarg3Name);

  const arg = new Arg({
    marg: margName,
    sarg1: sarg1Name,
    sarg2: sarg2Name,
    sarg3: sarg3Name,
    opd: opeddate,
    njs: newsjournal,
    id3: topic,
  });

  arg.save();

  res.redirect("/");
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port, function () {
  console.log("Server running on port.");
});
