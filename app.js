//jshint es version6

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "./static")));

var today = new Date();
var options = {
  weekday: "long",
  day: "numeric",
  month: "long",
};
var day = today.toLocaleDateString("en-US", options);

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
var termtitles = [];
var termexplanations = [];
var uidas = [];
var wnewss = [];
var wpoint1s = [];
var wpoint2s = [];
var wpoint3s = [];
var wpoint4s = [];
var wpoint5s = [];
var wopinionons = [];
var wopinion1s = [];
var wopinionbys = [];
var wbooktitles = [];
var wauthortitles = [];
var wpublications = [];

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
  opd: Date,
  njs: String,
  id3: String,
  trm: String,
  texp: String,
  ida: String,
  nws: String,
  pnt1: String,
  pnt2: String,
  pnt3: String,
  pnt4: String,
  pnt5: String,
  opnn: String,
  opn1: String,
  opnb: String,
  btle: String,
  btar: String,
  bpne: String,
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
  trm: "",
  texp: "",
  ida: "",
  nws: "",
  pnt1: "",
  pnt2: "",
  pnt3: "",
  pnt4: "",
  pnt5: "",
  opnn: "",
  opn1: "",
  opnb: "",
  btle: "",
  btar: "",
  bpne: "",
});

const defaultArgs = [];

Arg.insertMany(defaultArgs, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully saved items to DB.");
  }
});

Arg.find({}, null, { sort: { _id: -1 } }, function (err, args) {
  console.log(args);

  args.forEach(function (arg) {
    var mainArgument = arg.marg;
    var supArgument1 = arg.sarg1;
    var supArgument2 = arg.sarg2;
    var supArgument3 = arg.sarg3;
    var opeddate = arg.opd;
    var newsjournal = arg.njs;
    var chapter = arg.id3;
    var termtitle = arg.trm;
    var termexplanation = arg.texp;
    var uida = arg.ida;
    var wnew = arg.nws;
    var wpoint1 = arg.pnt1;
    var wpoint2 = arg.pnt2;
    var wpoint3 = arg.pnt3;
    var wpoint4 = arg.pnt4;
    var wpoint5 = arg.pnt5;
    var wopinionon = arg.opnn;
    var wopinion1 = arg.opn1;
    var wopinionby = arg.opnb;
    var wbooktitle = arg.btle;
    var wauthortitle = arg.btar;
    var wpublication = arg.bpne;

    mainArguments.push(mainArgument);
    supArgument1s.push(supArgument1);
    supArgument2s.push(supArgument2);
    supArgument3s.push(supArgument3);
    opiniondates.push(opeddate);
    newspaperjournals.push(newsjournal);
    chapters.push(chapter);
    termtitles.push(termtitle);
    termexplanations.push(termexplanation);
    uidas.push(uida);
    wnewss.push(wnew);
    wpoint1s.push(wpoint1);
    wpoint2s.push(wpoint2);
    wpoint3s.push(wpoint3);
    wpoint4s.push(wpoint4);
    wpoint5s.push(wpoint5);
    wopinionons.push(wopinionon);
    wopinion1s.push(wopinion1);
    wopinionbys.push(wopinionby);
    wbooktitles.push(wbooktitle);
    wauthortitles.push(wauthortitle);
    wpublications.push(wpublication);
    //  console.log(mainArguments + supArgument1s + supArgument2s + supArgument3s);
  });
}).limit(20);

app.get("/", function (req, res) {
  res.render("index", {
    kindOfDay: day,
    mainArguments: mainArguments,
    supArgument1s: supArgument1s,
    supArgument2s: supArgument2s,
    supArgument3s: supArgument3s,
    newspaperjournals: newspaperjournals,
    opiniondates: opiniondates,
    chapters: chapters,
    termtitles: termtitles,
    termexplanations: termexplanations,
    uidas: uidas,
    wnewss: wnewss,
    wpoint1s: wpoint1s,
    wpoint2s: wpoint2s,
    wpoint3s: wpoint3s,
    wpoint4s: wpoint4s,
    wpoint5s: wpoint5s,
    wopinionons: wopinionons,
    wopinion1s: wopinion1s,
    wopinionbys: wopinionbys,
    wbooktitles: wbooktitles,
    wauthortitles: wauthortitles,
    wpublications: wpublications,
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
  var termName = req.body.terminology;
  var tExpName = req.body.trmexplanation;
  var uidargName = req.body.uida;
  var newsName = req.body.news;
  var point1Name = req.body.point1;
  var point2Name = req.body.point2;
  var point3Name = req.body.point3;
  var point4Name = req.body.point4;
  var point5Name = req.body.point5;
  var opiniononName = req.body.opinionon;
  var opinion1Name = req.body.opinion1;
  var opinionbyName = req.body.opinionby;
  var booktitleName = req.body.booktitle;
  var bookauthorName = req.body.authortitle;
  var publicationName = req.body.publication;

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
    trm: termName,
    texp: tExpName,
    ida: uidargName,
    nws: newsName,
    pnt1: point1Name,
    pnt2: point2Name,
    pnt3: point3Name,
    pnt4: point4Name,
    pnt5: point5Name,
    opnn: opiniononName,
    opn1: opinion1Name,
    opnb: opinionbyName,
    btle: booktitleName,
    btar: bookauthorName,
    bpne: publicationName,
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
