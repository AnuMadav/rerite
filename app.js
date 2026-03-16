//jshint es version6

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const session = require("express-session");

const app = express();

// Setup sessions
app.use(session({
  secret: 'serveup-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false, maxAge: 24 * 60 * 60 * 1000 }
}));

var options = {
  weekday: "long",
  day: "numeric",
  month: "long",
};

function escapeRegex(text) {
  if (!text) return "";
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

app.use(express.static("static"));

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
var urusernames = [];
var myagreeNames = [];
var myqueryNames = [];
var mylistnames = [];
var ruralserialnos = [];
var ruraltitles = [];
var rurallinks = [];
var ruralauthors = [];
var ruralbriefs = [];
var ruralpolicys = [];
var urbanserialnos = [];
var urbantitles = [];
var urbanlinks = [];
var urbanauthors = [];
var urbanbriefs = [];
var urbanpolicys = [];
var geriatricserialnos = [];
var geriatrictitles = [];
var geriatriclinks = [];
var geriatricauthors = [];
var geriatricbriefs = [];
var geriatricpolicys = [];
var reservationserialnos = [];
var reservationtitles = [];
var reservationlinks = [];
var reservationauthors = [];
var reservationbriefs = [];
var reservationpolicys = [];
var monetaryserialnos = [];
var monetarytitles = [];
var monetarylinks = [];
var monetaryauthors = [];
var monetarybriefs = [];
var monetarypolicys = [];
var fiscalserialnos = [];
var fiscaltitles = [];
var fiscallinks = [];
var fiscalauthors = [];
var fiscalbriefs = [];
var fiscalpolicys = [];
var environmentserialnos = [];
var environmenttitles = [];
var environmentlinks = [];
var environmentauthors = [];
var environmentbriefs = [];
var environmentpolicys = [];
var healthserialnos = [];
var healthtitles = [];
var healthlinks = [];
var healthauthors = [];
var healthbriefs = [];
var healthpolicys = [];
var waterserialnos = [];
var watertitles = [];
var waterlinks = [];
var waterauthors = [];
var waterbriefs = [];
var waterpolicys = [];
var foreignserialnos = [];
var foreigntitles = [];
var foreignlinks = [];
var foreignauthors = [];
var foreignbriefs = [];
var foreignpolicys = [];
var infrastructureserialnos = [];
var infrastructuretitles = [];
var infrastructurelinks = [];
var infrastructureauthors = [];
var infrastructurebriefs = [];
var infrastructurepolicys = [];
var tradeserialnos = [];
var tradetitles = [];
var tradelinks = [];
var tradeauthors = [];
var tradebriefs = [];
var tradepolicys = [];
var youthserialnos = [];
var youthtitles = [];
var youthlinks = [];
var youthauthors = [];
var youthbriefs = [];
var youthpolicys = [];
var disabilityserialnos = [];
var disabilitytitles = [];
var disabilitylinks = [];
var disabilityauthors = [];
var disabilitybriefs = [];
var disabilitypolicys = [];
var educationserialnos = [];
var educationtitles = [];
var educationlinks = [];
var educationauthors = [];
var educationbriefs = [];
var educationpolicys = [];
var industrialserialnos = [];
var industrialtitles = [];
var industriallinks = [];
var industrialauthors = [];
var industrialbriefs = [];
var industrialpolicys = [];
var manufacturingserialnos = [];
var manufacturingtitles = [];
var manufacturinglinks = [];
var manufacturingauthors = [];
var manufacturingbriefs = [];
var manufacturingpolicys = [];
var agriculturalserialnos = [];
var agriculturaltitles = [];
var agriculturallinks = [];
var agriculturalauthors = [];
var agriculturalbriefs = [];
var agriculturalpolicys = [];
var tribalserialnos = [];
var tribaltitles = [];
var triballinks = [];
var tribalauthors = [];
var tribalbriefs = [];
var tribalpolicys = [];
var welfareserialnos = [];
var welfaretitles = [];
var welfarelinks = [];
var welfareauthors = [];
var welfarebriefs = [];
var welfarepolicys = [];
var cyberserialnos = [];
var cybertitles = [];
var cyberlinks = [];
var cyberauthors = [];
var cyberbriefs = [];
var cyberpolicys = [];
var housingserialnos = [];
var housingtitles = [];
var housinglinks = [];
var housingauthors = [];
var housingbriefs = [];
var housingpolicys = [];
var genderserialnos = [];
var gendertitles = [];
var genderlinks = [];
var genderauthors = [];
var genderbriefs = [];
var genderpolicys = [];
var tourismserialnos = [];
var tourismtitles = [];
var tourismlinks = [];
var tourismauthors = [];
var tourismbriefs = [];
var tourismpolicys = [];
var energyserialnos = [];
var energytitles = [];
var energylinks = [];
var energyauthors = [];
var energybriefs = [];
var energypolicys = [];
var economicserialnos = [];
var economictitles = [];
var economiclinks = [];
var economicauthors = [];
var economicbriefs = [];
var economicpolicys = [];
var judicialserialnos = [];
var judicialtitles = [];
var judiciallinks = [];
var judicialauthors = [];
var judicialbriefs = [];
var judicialpolicys = [];
var securityserialnos = [];
var securitytitles = [];
var securitylinks = [];
var securityauthors = [];
var securitybriefs = [];
var securitypolicys = [];
var inclusiveserialnos = [];
var inclusivetitles = [];
var inclusivelinks = [];
var inclusiveauthors = [];
var inclusivebriefs = [];
var inclusivepolicys = [];
var telecomserialnos = [];
var telecomtitles = [];
var telecomlinks = [];
var telecomauthors = [];
var telecombriefs = [];
var telecompolicys = [];
var competitionserialnos = [];
var competitiontitles = [];
var competitionlinks = [];
var competitionauthors = [];
var competitionbriefs = [];
var competitionpolicys = [];
var fintechserialnos = [];
var fintechtitles = [];
var fintechlinks = [];
var fintechauthors = [];
var fintechbriefs = [];
var fintechpolicys = [];
var scitechserialnos = [];
var scitechtitles = [];
var scitechlinks = [];
var scitechauthors = [];
var scitechbriefs = [];
var scitechpolicys = [];
var electoralserialnos = [];
var electoraltitles = [];
var electorallinks = [];
var electoralauthors = [];
var electoralbriefs = [];
var electoralpolicys = [];
var nutritionserialnos = [];
var nutritiontitles = [];
var nutritionlinks = [];
var nutritionauthors = [];
var nutritionbriefs = [];
var nutritionpolicys = [];
var povertyserialnos = [];
var povertytitles = [];
var povertylinks = [];
var povertyauthors = [];
var povertybriefs = [];
var povertypolicys = [];
var labourserialnos = [];
var labourtitles = [];
var labourlinks = [];
var labourauthors = [];
var labourbriefs = [];
var labourpolicys = [];
var peaceserialnos = [];
var peacetitles = [];
var peacelinks = [];
var peaceauthors = [];
var peacebriefs = [];
var peacepolicys = [];
var spaceserialnos = [];
var spacetitles = [];
var spacelinks = [];
var spaceauthors = [];
var spacebriefs = [];
var spacepolicys = [];
var justiceserialnos = [];
var justicetitles = [];
var justicelinks = [];
var justiceauthors = [];
var justicebriefs = [];
var justicepolicys = [];
var personnelserialnos = [];
var personneltitles = [];
var personnellinks = [];
var personnelauthors = [];
var personnelbriefs = [];
var personnelpolicys = [];
var accountabilityserialnos = [];
var accountabilitytitles = [];
var accountabilitylinks = [];
var accountabilityauthors = [];
var accountabilitybriefs = [];
var accountabilitypolicys = [];
var culturalserialnos = [];
var culturaltitles = [];
var culturallinks = [];
var culturalauthors = [];
var culturalbriefs = [];
var culturalpolicys = [];
var freedomserialnos = [];
var freedomtitles = [];
var freedomlinks = [];
var freedomauthors = [];
var freedombriefs = [];
var freedompolicys = [];
var citizenshipserialnos = [];
var citizenshiptitles = [];
var citizenshiplinks = [];
var citizenshipauthors = [];
var citizenshipbriefs = [];
var citizenshippolicys = [];
var miscserialnos = [];
var misctitles = [];
var misclinks = [];
var miscauthors = [];
var miscbriefs = [];
var miscpolicys = [];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

const mongoose = require("mongoose");

(async () => {
  try {
    await mongoose.connect(
      process.env.MONGODB_URI
    );
    console.log("Connected successfully");
  } catch (error) {
    console.error("Connection error:", error);
  }
})();

app.get("/test", async function (req, res) {
  try {
    const results = await Arg.find({ id3: "Mental Health in contemporary times" }).limit(20);
    results.forEach((r) => {
      console.log(`${r.id3}: ${r.marg}`);
    });
    res.send("HI");
  } catch (err) {
    console.error("Test route error:", err);
    res.status(500).send("Error");
  }
});

// add at appropriate place in app.js (replace your existing /list/:listname handler)
app.get("/list/:listname", async (req, res) => {
  try {
    const listname = req.params.listname;
    const userEnrollment = req.session.enrollment || "ERN000012025";

    // Find saved items for this list and user's enrollment
    const saved = await Mysavedarg.find({ 
      mylistargname: listname,
      myenrollmentnumber: userEnrollment
    }).lean();

    // If nothing saved for this list, render empty page (no args)
    if (!saved || saved.length === 0) {
      // Fetch UI helpers filtered by enrollment
      const mylistnames = await Mysavedarg.find({
        myenrollmentnumber: userEnrollment
      }).distinct("mylistargname");
      const urusernames = await Mystudyteam.find({
        myenrollmentnumber: userEnrollment
      }).distinct("urusername");
      const kindOfDay = new Date().toLocaleDateString("en-US", options);

      return res.render("list", {
        listname,
        args: [],
        mylistnames: mylistnames || [],
        urusernames: urusernames || [],
        userEnrollment,
        kindOfDay,
      });
    }

    // Extract all UIDAs (unique)
    const uidas = [...new Set(saved.map((s) => s.myuida).filter(Boolean))];

    // Fetch matching arguments (use .lean() so it's a plain object for EJS)
    const args = await Arg.find({ ida: { $in: uidas } })
      .sort({ _id: -1 })
      .lean();

    // UI helper lists filtered by enrollment
    const mylistnames = await Mysavedarg.find({
      myenrollmentnumber: userEnrollment
    }).distinct("mylistargname");
    const urusernames = await Mystudyteam.find({
      myenrollmentnumber: userEnrollment
    }).distinct("urusername");

    const kindOfDay = new Date().toLocaleDateString("en-US", options);

    return res.render("list", {
      listname,
      args,
      mylistnames: mylistnames || [],
      urusernames: urusernames || [],
      userEnrollment,
      kindOfDay,
    });
  } catch (err) {
    console.error("Error rendering list page:", err);
    return res.status(500).send("Server error");
  }
});

// Referred items for a given enrollment number
app.get("/referred/:enrollment", async (req, res) => {
  try {
    // Use session enrollment, not URL parameter
    const userEnrollment = req.session.enrollment || "ERN000012025";

    // Query myreferreds collection where myenrollmentnumber matches
    const referred = await Myreferred.find({
      myenrollmentnumber: userEnrollment
    }).lean();

    if (!referred || referred.length === 0) {
      const mylistnames = await Mysavedarg.find({
        myenrollmentnumber: userEnrollment
      }).distinct("mylistargname");
      const urusernames = await Mystudyteam.find({
        myenrollmentnumber: userEnrollment
      }).distinct("urusername");
      const kindOfDay = new Date().toLocaleDateString("en-US", options);

      return res.render("referred", {
        enrollment: userEnrollment,
        args: [],
        mylistnames: mylistnames || [],
        urusernames: urusernames || [],
        kindOfDay,
      });
    }

    // Collect unique UIDs referred to this user
    const uidas = [...new Set(referred.map((r) => r.uruida).filter(Boolean))];

    // Fetch matching arguments from Arg collection
    const args = await Arg.find({ ida: { $in: uidas } }).sort({ _id: -1 }).lean();

    const mylistnames = await Mysavedarg.find({
      myenrollmentnumber: userEnrollment
    }).distinct("mylistargname");
    const urusernames = await Mystudyteam.find({
      myenrollmentnumber: userEnrollment
    }).distinct("urusername");
    const kindOfDay = new Date().toLocaleDateString("en-US", options);

    return res.render("referred", {
      enrollment: userEnrollment,
      args,
      mylistnames: mylistnames || [],
      urusernames: urusernames || [],
      kindOfDay,
    });
  } catch (err) {
    console.error("Error rendering referred page:", err);
    return res.status(500).send("Server error");
  }
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

//MY ESSENTIALS
const myessentialsSchema = {
  myusername: { 
    type: String,
  },
  myenrollmentnumber: { 
    type: String,
  },
  myemailadress: { 
    type: String,
  },
};

//MY STUDYTEAM
const mystudyteamsSchema = {
  urenrollmentnumber: {
    type: String,
  },
  urusername: {
    type: String,
  },
  myenrollmentnumber: {
    type: String,
  },
};

//MY SAVEDARG
const mysavedargsSchema = {
  myenrollmentnumber: {
    type: String,
  },
  mylistargname: {
    type: String,
  },
  myuida: {
    type: String,
  },
  mylistname: { 
    type: String 
  },
};

//MY REFERRED
const myreferredSchema = {
  myenrollmentnumber: {
    type: String,
  },
  uruida: {
    type: String,
  },
  urenrollrefname: {
    type: String,
  },
};

//MY SOCIALS
const mysocialSchema = {
  myagreecomment: {
    type: String,
  },
  myquerycomment: {
    type: String,
  },
  anuida: {
    type: String,
  },
  myenrollmentnumber: {
    type: String,
  },
};

//basic search
const mybasicsearchSchema = {
  basicsearch: {
    type: String,
  },
};

//MY POLICY
const mypoliciesSchema = {
  serialno: {
    type: String,
  },
  title: {
    type: String,
  },
  link: {
    type: String,
  },
  author: {
    type: Array,
  },
  brief: {
    type: String,
  },
  policy: {
    type: Array,
  },
};

const Arg = mongoose.model("Arg", argsSchema);
const Myessential = mongoose.model("Myessential", myessentialsSchema);
const Mystudyteam = mongoose.model("Mystudyteam", mystudyteamsSchema);
const Mysavedarg = mongoose.model("Mysavedarg", mysavedargsSchema);
const Myreferred = mongoose.model("Myreferred", myreferredSchema);
const Mysocial = mongoose.model("Mysocial", mysocialSchema);
const Basicsearch = mongoose.model("Basicsearch", mybasicsearchSchema);
const Mypolicy = mongoose.model("Mypolicy", mypoliciesSchema);

const myessential1 = new Myessential({
  myusername: "",
  myenrollmentnumber: "",
  myemailadress: "",
});

const mystudyteam1 = new Mystudyteam({
  myenrollmentnumber: "",
  urusername: "",
  urenrollmentnumber: "",
});

const mysavedarg1 = new Mysavedarg({
  myenrollmentnumber: "",
  mylistargname: "",
  myuida: "",
  mylistname: "",
});

const myreferred1 = new Myreferred({
  myenrollmentnumber: "",
  uruida: "",
  urenrollrefname: "",
});

const mysocial1 = new Mysocial({
  myagreecomment: "",
  myquerycomment: "",
  anuida: "",
  myenrollmentnumber: "",
});

const mybasicsearch1 = new Basicsearch({
  basicsearch: "",
});

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

const mypolicy1 = new Mypolicy({
  serialno: "",
  title: "",
  link: "",
  author: "", 
  brief: "",
  policy: "",
});

const find = (async () => {
  const args = await Arg.find({ ida: { $exists: true } }).sort({ _id: -1 }).limit(100);
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
  });
})();

(async () => {
  const mystudyteams = await Mystudyteam.find({ urenrollmentnumber: { $exists: true, $ne: null } }).sort({ _id: -1 }).limit(10);
  mystudyteams.forEach(function (mystudyteam) {
    var urusername = mystudyteam.urusername;

    urusernames.push(urusername);
  });
})();

(async () => {
  const savedargs = await Mysavedarg.find({ mylistname: { $exists: true, $ne: null } }).sort({ _id: -1 }).limit(4);
  savedargs.forEach(function (s) {
    mylistnames.push(s.mylistname);
  });
})();

(async () => {
  const socials = await Mysocial.find({});
  socials.forEach(function (s) {
    var myagreecomment = s.myagreecomment || s.agreeName || "";
    var myquerycomment = s.myquerycomment || s.queryName || "";

    myagreeNames.push(myagreecomment);
    myqueryNames.push(myquerycomment);
  });
})();

(async () => {
  const mypolicies = await Mypolicy.find({ policy: "rural" }).sort({ _id: -1 });
  mypolicies.forEach(function (mypolicy) {
    var ruraltitle = mypolicy.title;
    var ruralserialno = mypolicy.serialno;
    var rurallink = mypolicy.link;
    var ruralauthor = mypolicy.author;
    var ruralbrief = mypolicy.brief;
    var ruralpolicy = mypolicy.policy;

    ruraltitles.push(ruraltitle);
    ruralserialnos.push(ruralserialno);
    rurallinks.push(rurallink);
    ruralauthors.push(ruralauthor);
    ruralbriefs.push(ruralbrief);
    ruralpolicys.push(ruralpolicy);
  });
})();

(async () => {
  const mypolicies = await Mypolicy.find({ policy: "urban" }).sort({ _id: -1 });
  mypolicies.forEach(function (mypolicy) {
    var urbantitle = mypolicy.title;
    var urbanserialno = mypolicy.serialno;
    var urbanlink = mypolicy.link;
    var urbanauthor = mypolicy.author;
    var urbanbrief = mypolicy.brief;
    var urbanpolicy = mypolicy.policy;

    urbantitles.push(urbantitle);
    urbanserialnos.push(urbanserialno);
    urbanlinks.push(urbanlink);
    urbanauthors.push(urbanauthor);
    urbanbriefs.push(urbanbrief);
    urbanpolicys.push(urbanpolicy);
  });
})();

(async () => {
  const mypolicies = await Mypolicy.find({ policy: "geriatric" }).sort({ _id: -1 });
  mypolicies.forEach(function (mypolicy) {
    var geriatrictitle = mypolicy.title;
    var geriatricserialno = mypolicy.serialno;
    var geriatriclink = mypolicy.link;
    var geriatricauthor = mypolicy.author;
    var geriatricbrief = mypolicy.brief;
    var geriatricpolicy = mypolicy.policy;

    geriatrictitles.push(geriatrictitle);
    geriatricserialnos.push(geriatricserialno);
    geriatriclinks.push(geriatriclink);
    geriatricauthors.push(geriatricauthor);
    geriatricbriefs.push(geriatricbrief);
    geriatricpolicys.push(geriatricpolicy);
  });
})();

(async () => {
  const mypolicies = await Mypolicy.find({ policy: "reservation" }).sort({ _id: -1 });
  mypolicies.forEach(function (mypolicy) {
    var reservationtitle = mypolicy.title;
    var reservationserialno = mypolicy.serialno;
    var reservationlink = mypolicy.link;
    var reservationauthor = mypolicy.author;
    var reservationbrief = mypolicy.brief;
    var reservationpolicy = mypolicy.policy;

    reservationtitles.push(reservationtitle);
    reservationserialnos.push(reservationserialno);
    reservationlinks.push(reservationlink);
    reservationauthors.push(reservationauthor);
    reservationbriefs.push(reservationbrief);
    reservationpolicys.push(reservationpolicy);
  });
})();

(async () => {
  const mypolicies = await Mypolicy.find({ policy: "monetary" }).sort({ _id: -1 });
  mypolicies.forEach(function (mypolicy) {
    var monetarytitle = mypolicy.title;
    var monetaryserialno = mypolicy.serialno;
    var monetarylink = mypolicy.link;
    var monetaryauthor = mypolicy.author;
    var monetarybrief = mypolicy.brief;
    var monetarypolicy = mypolicy.policy;

    monetarytitles.push(monetarytitle);
    monetaryserialnos.push(monetaryserialno);
    monetarylinks.push(monetarylink);
    monetaryauthors.push(monetaryauthor);
    monetarybriefs.push(monetarybrief);
    monetarypolicys.push(monetarypolicy);
  });
})();

(async () => {
  const mypolicies = await Mypolicy.find({ policy: "fiscal" }).sort({ _id: -1 });
  mypolicies.forEach(function (mypolicy) {
    var fiscaltitle = mypolicy.title;
    var fiscalserialno = mypolicy.serialno;
    var fiscallink = mypolicy.link;
    var fiscalauthor = mypolicy.author;
    var fiscalbrief = mypolicy.brief;
    var fiscalpolicy = mypolicy.policy;

    fiscaltitles.push(fiscaltitle);
    fiscalserialnos.push(fiscalserialno);
    fiscallinks.push(fiscallink);
    fiscalauthors.push(fiscalauthor);
    fiscalbriefs.push(fiscalbrief);
    fiscalpolicys.push(fiscalpolicy);
  });
})();

(async () => {
  const mypolicies = await Mypolicy.find({ policy: "environment" }).sort({ _id: -1 });
  mypolicies.forEach(function (mypolicy) {
    var environmenttitle = mypolicy.title;
    var environmentserialno = mypolicy.serialno;
    var environmentlink = mypolicy.link;
    var environmentauthor = mypolicy.author;
    var environmentbrief = mypolicy.brief;
    var environmentpolicy = mypolicy.policy;

    environmenttitles.push(environmenttitle);
    environmentserialnos.push(environmentserialno);
    environmentlinks.push(environmentlink);
    environmentauthors.push(environmentauthor);
    environmentbriefs.push(environmentbrief);
    environmentpolicys.push(environmentpolicy);
  });
})();

(async () => {
  const mypolicies = await Mypolicy.find({ policy: "health" }).sort({ _id: -1 });
  mypolicies.forEach(function (mypolicy) {
    var healthtitle = mypolicy.title;
    var healthserialno = mypolicy.serialno;
    var healthlink = mypolicy.link;
    var healthauthor = mypolicy.author;
    var healthbrief = mypolicy.brief;
    var healthpolicy = mypolicy.policy;

    healthtitles.push(healthtitle);
    healthserialnos.push(healthserialno);
    healthlinks.push(healthlink);
    healthauthors.push(healthauthor);
    healthbriefs.push(healthbrief);
    healthpolicys.push(healthpolicy);
  });
})();

(async () => {
  const mypolicies = await Mypolicy.find({ policy: "water" }).sort({ _id: -1 });
  mypolicies.forEach(function (mypolicy) {
    var watertitle = mypolicy.title;
    var waterserialno = mypolicy.serialno;
    var waterlink = mypolicy.link;
    var waterauthor = mypolicy.author;
    var waterbrief = mypolicy.brief;
    var waterpolicy = mypolicy.policy;

    watertitles.push(watertitle);
    waterserialnos.push(waterserialno);
    waterlinks.push(waterlink);
    waterauthors.push(waterauthor);
    waterbriefs.push(waterbrief);
    waterpolicys.push(waterpolicy);
  });
})();

(async () => {
  const mypolicies = await Mypolicy.find({ policy: "foreign" }).sort({ _id: -1 });
  mypolicies.forEach(function (mypolicy) {
    var foreigntitle = mypolicy.title;
    var foreignserialno = mypolicy.serialno;
    var foreignlink = mypolicy.link;
    var foreignauthor = mypolicy.author;
    var foreignbrief = mypolicy.brief;
    var foreignpolicy = mypolicy.policy;

    foreigntitles.push(foreigntitle);
    foreignserialnos.push(foreignserialno);
    foreignlinks.push(foreignlink);
    foreignauthors.push(foreignauthor);
    foreignbriefs.push(foreignbrief);
    foreignpolicys.push(foreignpolicy);
  });
})();

(async () => {
  const mypolicies = await Mypolicy.find({ policy: "infrastructure" }).sort({ _id: -1 });
  mypolicies.forEach(function (mypolicy) {
    var infrastructuretitle = mypolicy.title;
    var infrastructureserialno = mypolicy.serialno;
    var infrastructurelink = mypolicy.link;
    var infrastructureauthor = mypolicy.author;
    var infrastructurebrief = mypolicy.brief;
    var infrastructurepolicy = mypolicy.policy;

    infrastructuretitles.push(infrastructuretitle);
    infrastructureserialnos.push(infrastructureserialno);
    infrastructurelinks.push(infrastructurelink);
    infrastructureauthors.push(infrastructureauthor);
    infrastructurebriefs.push(infrastructurebrief);
    infrastructurepolicys.push(infrastructurepolicy);
  });
})();

(async () => {
  const mypolicies = await Mypolicy.find({ policy: "trade" }).sort({ _id: -1 });
  mypolicies.forEach(function (mypolicy) {
    var tradetitle = mypolicy.title;
    var tradeserialno = mypolicy.serialno;
    var tradelink = mypolicy.link;
    var tradeauthor = mypolicy.author;
    var tradebrief = mypolicy.brief;
    var tradepolicy = mypolicy.policy;

    tradetitles.push(tradetitle);
    tradeserialnos.push(tradeserialno);
    tradelinks.push(tradelink);
    tradeauthors.push(tradeauthor);
    tradebriefs.push(tradebrief);
    tradepolicys.push(tradepolicy);
  });
})();

(async () => {
  const mypolicies = await Mypolicy.find({ policy: "youth" }).sort({ _id: -1 });
  mypolicies.forEach(function (mypolicy) {
    var youthtitle = mypolicy.title;
    var youthserialno = mypolicy.serialno;
    var youthlink = mypolicy.link;
    var youthauthor = mypolicy.author;
    var youthbrief = mypolicy.brief;
    var youthpolicy = mypolicy.policy;

    youthtitles.push(youthtitle);
    youthserialnos.push(youthserialno);
    youthlinks.push(youthlink);
    youthauthors.push(youthauthor);
    youthbriefs.push(youthbrief);
    youthpolicys.push(youthpolicy);
  });
})();

(async () => {
  const mypolicies = await Mypolicy.find({ policy: "disability" }).sort({ _id: -1 });
  mypolicies.forEach(function (mypolicy) {
    var disabilitytitle = mypolicy.title;
    var disabilityserialno = mypolicy.serialno;
    var disabilitylink = mypolicy.link;
    var disabilityauthor = mypolicy.author;
    var disabilitybrief = mypolicy.brief;
    var disabilitypolicy = mypolicy.policy;

    disabilitytitles.push(disabilitytitle);
    disabilityserialnos.push(disabilityserialno);
    disabilitylinks.push(disabilitylink);
    disabilityauthors.push(disabilityauthor);
    disabilitybriefs.push(disabilitybrief);
    disabilitypolicys.push(disabilitypolicy);
  });
})();

(async () => {
  const mypolicies = await Mypolicy.find({ policy: "education" }).sort({ _id: -1 });
  mypolicies.forEach(function (mypolicy) {
    var educationtitle = mypolicy.title;
    var educationserialno = mypolicy.serialno;
    var educationlink = mypolicy.link;
    var educationauthor = mypolicy.author;
    var educationbrief = mypolicy.brief;
    var educationpolicy = mypolicy.policy;

    educationtitles.push(educationtitle);
    educationserialnos.push(educationserialno);
    educationlinks.push(educationlink);
    educationauthors.push(educationauthor);
    educationbriefs.push(educationbrief);
    educationpolicys.push(educationpolicy);
  });
})();

(async () => {
  const mypolicies = await Mypolicy.find({ policy: "industrial" }).sort({ _id: -1 });
  mypolicies.forEach(function (mypolicy) {
    var industrialtitle = mypolicy.title;
    var industrialserialno = mypolicy.serialno;
    var industriallink = mypolicy.link;
    var industrialauthor = mypolicy.author;
    var industrialbrief = mypolicy.brief;
    var industrialpolicy = mypolicy.policy;

    industrialtitles.push(industrialtitle);
    industrialserialnos.push(industrialserialno);
    industriallinks.push(industriallink);
    industrialauthors.push(industrialauthor);
    industrialbriefs.push(industrialbrief);
    industrialpolicys.push(industrialpolicy);
  });
})();

(async () => {
  const mypolicies = await Mypolicy.find({ policy: "manufacturing" }).sort({ _id: -1 });
  mypolicies.forEach(function (mypolicy) {
    var manufacturingtitle = mypolicy.title;
    var manufacturingserialno = mypolicy.serialno;
    var manufacturinglink = mypolicy.link;
    var manufacturingauthor = mypolicy.author;
    var manufacturingbrief = mypolicy.brief;
    var manufacturingpolicy = mypolicy.policy;

    manufacturingtitles.push(manufacturingtitle);
    manufacturingserialnos.push(manufacturingserialno);
    manufacturinglinks.push(manufacturinglink);
    manufacturingauthors.push(manufacturingauthor);
    manufacturingbriefs.push(manufacturingbrief);
    manufacturingpolicys.push(manufacturingpolicy);
  });
})();

(async () => {
  const mypolicies = await Mypolicy.find({ policy: "agricultural" }).sort({ _id: -1 });
  mypolicies.forEach(function (mypolicy) {
    var agriculturaltitle = mypolicy.title;
    var agriculturalserialno = mypolicy.serialno;
    var agriculturallink = mypolicy.link;
    var agriculturalauthor = mypolicy.author;
    var agriculturalbrief = mypolicy.brief;
    var agriculturalpolicy = mypolicy.policy;

    agriculturaltitles.push(agriculturaltitle);
    agriculturalserialnos.push(agriculturalserialno);
    agriculturallinks.push(agriculturallink);
    agriculturalauthors.push(agriculturalauthor);
    agriculturalbriefs.push(agriculturalbrief);
    agriculturalpolicys.push(agriculturalpolicy);
  });
})();

(async () => {
  const mypolicies = await Mypolicy.find({ policy: "tribal" }).sort({ _id: -1 });
  mypolicies.forEach(function (mypolicy) {
    var tribaltitle = mypolicy.title;
    var tribalserialno = mypolicy.serialno;
    var triballink = mypolicy.link;
    var tribalauthor = mypolicy.author;
    var tribalbrief = mypolicy.brief;
    var tribalpolicy = mypolicy.policy;

    tribaltitles.push(tribaltitle);
    tribalserialnos.push(tribalserialno);
    triballinks.push(triballink);
    tribalauthors.push(tribalauthor);
    tribalbriefs.push(tribalbrief);
    tribalpolicys.push(tribalpolicy);
  });
})();

(async () => {
  const mypolicies = await Mypolicy.find({ policy: "welfare" }).sort({ _id: -1 });
  mypolicies.forEach(function (mypolicy) {
    var welfaretitle = mypolicy.title;
    var welfareserialno = mypolicy.serialno;
    var welfarelink = mypolicy.link;
    var welfareauthor = mypolicy.author;
    var welfarebrief = mypolicy.brief;
    var welfarepolicy = mypolicy.policy;

    welfaretitles.push(welfaretitle);
    welfareserialnos.push(welfareserialno);
    welfarelinks.push(welfarelink);
    welfareauthors.push(welfareauthor);
    welfarebriefs.push(welfarebrief);
    welfarepolicys.push(welfarepolicy);
  });
})();

(async () => {
  const mypolicies = await Mypolicy.find({ policy: "cyber" }).sort({ _id: -1 });
  mypolicies.forEach(function (mypolicy) {
    var cybertitle = mypolicy.title;
    var cyberserialno = mypolicy.serialno;
    var cyberlink = mypolicy.link;
    var cyberauthor = mypolicy.author;
    var cyberbrief = mypolicy.brief;
    var cyberpolicy = mypolicy.policy;

    cybertitles.push(cybertitle);
    cyberserialnos.push(cyberserialno);
    cyberlinks.push(cyberlink);
    cyberauthors.push(cyberauthor);
    cyberbriefs.push(cyberbrief);
    cyberpolicys.push(cyberpolicy);
  });
})();

(async () => {
  const mypolicies = await Mypolicy.find({ policy: "housing" }).sort({ _id: -1 });
  mypolicies.forEach(function (mypolicy) {
    var housingtitle = mypolicy.title;
    var housingserialno = mypolicy.serialno;
    var housinglink = mypolicy.link;
    var housingauthor = mypolicy.author;
    var housingbrief = mypolicy.brief;
    var housingpolicy = mypolicy.policy;

    housingtitles.push(housingtitle);
    housingserialnos.push(housingserialno);
    housinglinks.push(housinglink);
    housingauthors.push(housingauthor);
    housingbriefs.push(housingbrief);
    housingpolicys.push(housingpolicy);
  });
})();

(async () => {
  const mypolicies = await Mypolicy.find({ policy: "gender" }).sort({ _id: -1 });
  mypolicies.forEach(function (mypolicy) {
    var gendertitle = mypolicy.title;
    var genderserialno = mypolicy.serialno;
    var genderlink = mypolicy.link;
    var genderauthor = mypolicy.author;
    var genderbrief = mypolicy.brief;
    var genderpolicy = mypolicy.policy;

    gendertitles.push(gendertitle);
    genderserialnos.push(genderserialno);
    genderlinks.push(genderlink);
    genderauthors.push(genderauthor);
    genderbriefs.push(genderbrief);
    genderpolicys.push(genderpolicy);
  });
})();

(async () => {
  const mypolicies = await Mypolicy.find({ policy: "tourism" }).sort({ _id: -1 });
  mypolicies.forEach(function (mypolicy) {
    var tourismtitle = mypolicy.title;
    var tourismserialno = mypolicy.serialno;
    var tourismlink = mypolicy.link;
    var tourismauthor = mypolicy.author;
    var tourismbrief = mypolicy.brief;
    var tourismpolicy = mypolicy.policy;

    tourismtitles.push(tourismtitle);
    tourismserialnos.push(tourismserialno);
    tourismlinks.push(tourismlink);
    tourismauthors.push(tourismauthor);
    tourismbriefs.push(tourismbrief);
    tourismpolicys.push(tourismpolicy);
  });
})();

(async () => {
  const mypolicies = await Mypolicy.find({ policy: "energy" }).sort({ _id: -1 });
  mypolicies.forEach(function (mypolicy) {
    var energytitle = mypolicy.title;
    var energyserialno = mypolicy.serialno;
    var energylink = mypolicy.link;
    var energyauthor = mypolicy.author;
    var energybrief = mypolicy.brief;
    var energypolicy = mypolicy.policy;

    energytitles.push(energytitle);
    energyserialnos.push(energyserialno);
    energylinks.push(energylink);
    energyauthors.push(energyauthor);
    energybriefs.push(energybrief);
    energypolicys.push(energypolicy);
  });
})();

(async () => {
  const mypolicies = await Mypolicy.find({ policy: "economic" }).sort({ _id: -1 });
  mypolicies.forEach(function (mypolicy) {
    var economictitle = mypolicy.title;
    var economicserialno = mypolicy.serialno;
    var economiclink = mypolicy.link;
    var economicauthor = mypolicy.author;
    var economicbrief = mypolicy.brief;
    var economicpolicy = mypolicy.policy;

    economictitles.push(economictitle);
    economicserialnos.push(economicserialno);
    economiclinks.push(economiclink);
    economicauthors.push(economicauthor);
    economicbriefs.push(economicbrief);
    economicpolicys.push(economicpolicy);
  });
})();

(async () => {
  const mypolicies = await Mypolicy.find({ policy: "judicial" }).sort({ _id: -1 });
  mypolicies.forEach(function (mypolicy) {
    var judicialtitle = mypolicy.title;
    var judicialserialno = mypolicy.serialno;
    var judiciallink = mypolicy.link;
    var judicialauthor = mypolicy.author;
    var judicialbrief = mypolicy.brief;
    var judicialpolicy = mypolicy.policy;

    judicialtitles.push(judicialtitle);
    judicialserialnos.push(judicialserialno);
    judiciallinks.push(judiciallink);
    judicialauthors.push(judicialauthor);
    judicialbriefs.push(judicialbrief);
    judicialpolicys.push(judicialpolicy);
  });
})();

(async () => {
  const mypolicies = await Mypolicy.find({ policy: "security" }).sort({ _id: -1 });
  mypolicies.forEach(function (mypolicy) {
    var securitytitle = mypolicy.title;
    var securityserialno = mypolicy.serialno;
    var securitylink = mypolicy.link;
    var securityauthor = mypolicy.author;
    var securitybrief = mypolicy.brief;
    var securitypolicy = mypolicy.policy;

    securitytitles.push(securitytitle);
    securityserialnos.push(securityserialno);
    securitylinks.push(securitylink);
    securityauthors.push(securityauthor);
    securitybriefs.push(securitybrief);
    securitypolicys.push(securitypolicy);
  });
})();

(async () => {
  const mypolicies = await Mypolicy.find({ policy: "inclusive" }).sort({ _id: -1 });
  mypolicies.forEach(function (mypolicy) {
    var inclusivetitle = mypolicy.title;
    var inclusiveserialno = mypolicy.serialno;
    var inclusivelink = mypolicy.link;
    var inclusiveauthor = mypolicy.author;
    var inclusivebrief = mypolicy.brief;
    var inclusivepolicy = mypolicy.policy;

    inclusivetitles.push(inclusivetitle);
    inclusiveserialnos.push(inclusiveserialno);
    inclusivelinks.push(inclusivelink);
    inclusiveauthors.push(inclusiveauthor);
    inclusivebriefs.push(inclusivebrief);
    inclusivepolicys.push(inclusivepolicy);
  });
})();

(async () => {
  const mypolicies = await Mypolicy.find({ policy: "telecom" }).sort({ _id: -1 });
  mypolicies.forEach(function (mypolicy) {
    var telecomtitle = mypolicy.title;
    var telecomserialno = mypolicy.serialno;
    var telecomlink = mypolicy.link;
    var telecomauthor = mypolicy.author;
    var telecombrief = mypolicy.brief;
    var telecompolicy = mypolicy.policy;

    telecomtitles.push(telecomtitle);
    telecomserialnos.push(telecomserialno);
    telecomlinks.push(telecomlink);
    telecomauthors.push(telecomauthor);
    telecombriefs.push(telecombrief);
    telecompolicys.push(telecompolicy);
  });
})();

(async () => {
  const mypolicies = await Mypolicy.find({ policy: "competition" }).sort({ _id: -1 });
  mypolicies.forEach(function (mypolicy) {
    var competitiontitle = mypolicy.title;
    var competitionserialno = mypolicy.serialno;
    var competitionlink = mypolicy.link;
    var competitionauthor = mypolicy.author;
    var competitionbrief = mypolicy.brief;
    var competitionpolicy = mypolicy.policy;

    competitiontitles.push(competitiontitle);
    competitionserialnos.push(competitionserialno);
    competitionlinks.push(competitionlink);
    competitionauthors.push(competitionauthor);
    competitionbriefs.push(competitionbrief);
    competitionpolicys.push(competitionpolicy);
  });
})();

(async () => {
  const mypolicies = await Mypolicy.find({ policy: "fintech" }).sort({ _id: -1 });
  mypolicies.forEach(function (mypolicy) {
    var fintechtitle = mypolicy.title;
    var fintechserialno = mypolicy.serialno;
    var fintechlink = mypolicy.link;
    var fintechauthor = mypolicy.author;
    var fintechbrief = mypolicy.brief;
    var fintechpolicy = mypolicy.policy;

    fintechtitles.push(fintechtitle);
    fintechserialnos.push(fintechserialno);
    fintechlinks.push(fintechlink);
    fintechauthors.push(fintechauthor);
    fintechbriefs.push(fintechbrief);
    fintechpolicys.push(fintechpolicy);
  });
})();

(async () => {
  const mypolicies = await Mypolicy.find({ policy: "scitech" }).sort({ _id: -1 });
  mypolicies.forEach(function (mypolicy) {
    var scitechtitle = mypolicy.title;
    var scitechserialno = mypolicy.serialno;
    var scitechlink = mypolicy.link;
    var scitechauthor = mypolicy.author;
    var scitechbrief = mypolicy.brief;
    var scitechpolicy = mypolicy.policy;

    scitechtitles.push(scitechtitle);
    scitechserialnos.push(scitechserialno);
    scitechlinks.push(scitechlink);
    scitechauthors.push(scitechauthor);
    scitechbriefs.push(scitechbrief);
    scitechpolicys.push(scitechpolicy);
  });
})();

(async () => {
  const mypolicies = await Mypolicy.find({ policy: "electoral" }).sort({ _id: -1 });
  mypolicies.forEach(function (mypolicy) {
    var electoraltitle = mypolicy.title;
    var electoralserialno = mypolicy.serialno;
    var electorallink = mypolicy.link;
    var electoralauthor = mypolicy.author;
    var electoralbrief = mypolicy.brief;
    var electoralpolicy = mypolicy.policy;

    electoraltitles.push(electoraltitle);
    electoralserialnos.push(electoralserialno);
    electorallinks.push(electorallink);
    electoralauthors.push(electoralauthor);
    electoralbriefs.push(electoralbrief);
    electoralpolicys.push(electoralpolicy);
  });
})();

(async () => {
  const mypolicies = await Mypolicy.find({ policy: "nutrition" }).sort({ _id: -1 });
  mypolicies.forEach(function (mypolicy) {
    var nutritiontitle = mypolicy.title;
    var nutritionserialno = mypolicy.serialno;
    var nutritionlink = mypolicy.link;
    var nutritionauthor = mypolicy.author;
    var nutritionbrief = mypolicy.brief;
    var nutritionpolicy = mypolicy.policy;

    nutritiontitles.push(nutritiontitle);
    nutritionserialnos.push(nutritionserialno);
    nutritionlinks.push(nutritionlink);
    nutritionauthors.push(nutritionauthor);
    nutritionbriefs.push(nutritionbrief);
    nutritionpolicys.push(nutritionpolicy);
  });
})();

(async () => {
  const mypolicies = await Mypolicy.find({ policy: "poverty" }).sort({ _id: -1 });
  mypolicies.forEach(function (mypolicy) {
    var povertytitle = mypolicy.title;
    var povertyserialno = mypolicy.serialno;
    var povertylink = mypolicy.link;
    var povertyauthor = mypolicy.author;
    var povertybrief = mypolicy.brief;
    var povertypolicy = mypolicy.policy;

    povertytitles.push(povertytitle);
    povertyserialnos.push(povertyserialno);
    povertylinks.push(povertylink);
    povertyauthors.push(povertyauthor);
    povertybriefs.push(povertybrief);
    povertypolicys.push(povertypolicy);
  });
})();

(async () => {
  const mypolicies = await Mypolicy.find({ policy: "labour" }).sort({ _id: -1 });
  mypolicies.forEach(function (mypolicy) {
    var labourtitle = mypolicy.title;
    var labourserialno = mypolicy.serialno;
    var labourlink = mypolicy.link;
    var labourauthor = mypolicy.author;
    var labourbrief = mypolicy.brief;
    var labourpolicy = mypolicy.policy;

    labourtitles.push(labourtitle);
    labourserialnos.push(labourserialno);
    labourlinks.push(labourlink);
    labourauthors.push(labourauthor);
    labourbriefs.push(labourbrief);
    labourpolicys.push(labourpolicy);
  });
})();

(async () => {
  const mypolicies = await Mypolicy.find({ policy: "peace" }).sort({ _id: -1 });
  mypolicies.forEach(function (mypolicy) {
    var peacetitle = mypolicy.title;
    var peaceserialno = mypolicy.serialno;
    var peacelink = mypolicy.link;
    var peaceauthor = mypolicy.author;
    var peacebrief = mypolicy.brief;
    var peacepolicy = mypolicy.policy;

    peacetitles.push(peacetitle);
    peaceserialnos.push(peaceserialno);
    peacelinks.push(peacelink);
    peaceauthors.push(peaceauthor);
    peacebriefs.push(peacebrief);
    peacepolicys.push(peacepolicy);
  });
})();

(async () => {
  const mypolicies = await Mypolicy.find({ policy: "space" }).sort({ _id: -1 });
  mypolicies.forEach(function (mypolicy) {
    var spacetitle = mypolicy.title;
    var spaceserialno = mypolicy.serialno;
    var spacelink = mypolicy.link;
    var spaceauthor = mypolicy.author;
    var spacebrief = mypolicy.brief;
    var spacepolicy = mypolicy.policy;

    spacetitles.push(spacetitle);
    spaceserialnos.push(spaceserialno);
    spacelinks.push(spacelink);
    spaceauthors.push(spaceauthor);
    spacebriefs.push(spacebrief);
    spacepolicys.push(spacepolicy);
  });
})();

(async () => {
  const mypolicies = await Mypolicy.find({ policy: "justice" }).sort({ _id: -1 });
  mypolicies.forEach(function (mypolicy) {
    var justicetitle = mypolicy.title;
    var justiceserialno = mypolicy.serialno;
    var justicelink = mypolicy.link;
    var justiceauthor = mypolicy.author;
    var justicebrief = mypolicy.brief;
    var justicepolicy = mypolicy.policy;

    justicetitles.push(justicetitle);
    justiceserialnos.push(justiceserialno);
    justicelinks.push(justicelink);
    justiceauthors.push(justiceauthor);
    justicebriefs.push(justicebrief);
    justicepolicys.push(justicepolicy);
  });
})();

(async () => {
  const mypolicies = await Mypolicy.find({ policy: "personnel" }).sort({ _id: -1 });
  mypolicies.forEach(function (mypolicy) {
    var personneltitle = mypolicy.title;
    var personnelserialno = mypolicy.serialno;
    var personnellink = mypolicy.link;
    var personnelauthor = mypolicy.author;
    var personnelbrief = mypolicy.brief;
    var personnelpolicy = mypolicy.policy;

    personneltitles.push(personneltitle);
    personnelserialnos.push(personnelserialno);
    personnellinks.push(personnellink);
    personnelauthors.push(personnelauthor);
    personnelbriefs.push(personnelbrief);
    personnelpolicys.push(personnelpolicy);
  });
})();

(async () => {
  const mypolicies = await Mypolicy.find({ policy: "accountability" }).sort({ _id: -1 });
  mypolicies.forEach(function (mypolicy) {
    var accountabilitytitle = mypolicy.title;
    var accountabilityserialno = mypolicy.serialno;
    var accountabilitylink = mypolicy.link;
    var accountabilityauthor = mypolicy.author;
    var accountabilitybrief = mypolicy.brief;
    var accountabilitypolicy = mypolicy.policy;

    accountabilitytitles.push(accountabilitytitle);
    accountabilityserialnos.push(accountabilityserialno);
    accountabilitylinks.push(accountabilitylink);
    accountabilityauthors.push(accountabilityauthor);
    accountabilitybriefs.push(accountabilitybrief);
    accountabilitypolicys.push(accountabilitypolicy);
  });
})();

(async () => {
  const mypolicies = await Mypolicy.find({ policy: "cultural" }).sort({ _id: -1 });
  mypolicies.forEach(function (mypolicy) {
    var culturaltitle = mypolicy.title;
    var culturalserialno = mypolicy.serialno;
    var culturallink = mypolicy.link;
    var culturalauthor = mypolicy.author;
    var culturalbrief = mypolicy.brief;
    var culturalpolicy = mypolicy.policy;

    culturaltitles.push(culturaltitle);
    culturalserialnos.push(culturalserialno);
    culturallinks.push(culturallink);
    culturalauthors.push(culturalauthor);
    culturalbriefs.push(culturalbrief);
    culturalpolicys.push(culturalpolicy);
  });
})();

(async () => {
  const mypolicies = await Mypolicy.find({ policy: "freedom" }).sort({ _id: -1 });
  mypolicies.forEach(function (mypolicy) {
    var freedomtitle = mypolicy.title;
    var freedomserialno = mypolicy.serialno;
    var freedomlink = mypolicy.link;
    var freedomauthor = mypolicy.author;
    var freedombrief = mypolicy.brief;
    var freedompolicy = mypolicy.policy;

    freedomtitles.push(freedomtitle);
    freedomserialnos.push(freedomserialno);
    freedomlinks.push(freedomlink);
    freedomauthors.push(freedomauthor);
    freedombriefs.push(freedombrief);
    freedompolicys.push(freedompolicy);
  });
})();

(async () => {
  const mypolicies = await Mypolicy.find({ policy: "citizenship" }).sort({ _id: -1 });
  mypolicies.forEach(function (mypolicy) {
    var citizenshiptitle = mypolicy.title;
    var citizenshipserialno = mypolicy.serialno;
    var citizenshiplink = mypolicy.link;
    var citizenshipauthor = mypolicy.author;
    var citizenshipbrief = mypolicy.brief;
    var citizenshippolicy = mypolicy.policy;

    citizenshiptitles.push(citizenshiptitle);
    citizenshipserialnos.push(citizenshipserialno);
    citizenshiplinks.push(citizenshiplink);
    citizenshipauthors.push(citizenshipauthor);
    citizenshipbriefs.push(citizenshipbrief);
    citizenshippolicys.push(citizenshippolicy);
  });
})();

(async () => {
  const mypolicies = await Mypolicy.find({ policy: "misc" }).sort({ _id: -1 });
  mypolicies.forEach(function (mypolicy) {
    var misctitle = mypolicy.title;
    var miscserialno = mypolicy.serialno;
    var misclink = mypolicy.link;
    var miscauthor = mypolicy.author;
    var miscbrief = mypolicy.brief;
    var miscpolicy = mypolicy.policy;

    misctitles.push(misctitle);
    miscserialnos.push(miscserialno);
    misclinks.push(misclink);
    miscauthors.push(miscauthor);
    miscbriefs.push(miscbrief);
    miscpolicys.push(miscpolicy);
  });
})();
    
app.get("/index", async function (req, res) {
  var today = new Date();
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
    urusernames: urusernames,
  });
});

app.get("/", async function (req, res) {
  res.render("home");
});

app.get("/register", async function (req, res) {
  res.render("register");
});

app.get("/policy", async function (req, res) {
  const userEnrollment = req.session.enrollment || "ERN000012025";
  
  res.render("policy", {
    userEnrollment: userEnrollment,
    ruraltitles: ruraltitles,
    ruralserialnos: ruralserialnos,
    rurallinks:  rurallinks,
    ruralauthors: ruralauthors,
    ruralbriefs:  ruralbriefs,
    ruralpolicys: ruralpolicys,
    urbantitles: urbantitles,
    urbanserialnos: urbanserialnos,
    urbanlinks:  urbanlinks,
    urbanauthors: urbanauthors,
    urbanbriefs:  urbanbriefs,
    urbanpolicys: urbanpolicys,
    geriatrictitles: geriatrictitles,
    geriatricserialnos: geriatricserialnos,
    geriatriclinks:  geriatriclinks,
    geriatricauthors: geriatricauthors,
    geriatricbriefs:  geriatricbriefs,
    geriatricpolicys: geriatricpolicys,
    reservationtitles: reservationtitles,
    reservationserialnos: reservationserialnos,
    reservationlinks:  reservationlinks,
    reservationauthors: reservationauthors,
    reservationbriefs:  reservationbriefs,
    reservationpolicys: reservationpolicys,
    monetarytitles: monetarytitles,
    monetaryserialnos: monetaryserialnos,
    monetarylinks:  monetarylinks,
    monetaryauthors: monetaryauthors,
    monetarybriefs:  monetarybriefs,
    monetarypolicys: monetarypolicys,
    fiscaltitles: fiscaltitles,
    fiscalserialnos: fiscalserialnos,
    fiscallinks:  fiscallinks,
    fiscalauthors: fiscalauthors,
    fiscalbriefs:  fiscalbriefs,
    fiscalpolicys: fiscalpolicys,
    environmenttitles: environmenttitles,
    environmentserialnos: environmentserialnos,
    environmentlinks:  environmentlinks,
    environmentauthors: environmentauthors,
    environmentbriefs:  environmentbriefs,
    environmentpolicys: environmentpolicys,
    healthtitles: healthtitles,
    healthserialnos: healthserialnos,
    healthlinks:  healthlinks,
    healthauthors: healthauthors,
    healthbriefs:  healthbriefs,
    healthpolicys: healthpolicys,
    watertitles: watertitles,
    waterserialnos: waterserialnos,
    waterlinks:  waterlinks,
    waterauthors: waterauthors,
    waterbriefs:  waterbriefs,
    waterpolicys: waterpolicys,
    foreigntitles: foreigntitles,
    foreignserialnos: foreignserialnos,
    foreignlinks:  foreignlinks,
    foreignauthors: foreignauthors,
    foreignbriefs:  foreignbriefs,
    foreignpolicys: foreignpolicys,
    infrastructuretitles: infrastructuretitles,
    infrastructureserialnos: infrastructureserialnos,
    infrastructurelinks:  infrastructurelinks,
    infrastructureauthors: infrastructureauthors,
    infrastructurebriefs:  infrastructurebriefs,
    infrastructurepolicys: infrastructurepolicys,
    tradetitles: tradetitles,
    tradeserialnos: tradeserialnos,
    tradelinks:  tradelinks,
    tradeauthors: tradeauthors,
    tradebriefs:  tradebriefs,
    tradepolicys: tradepolicys,
    youthtitles: youthtitles,
    youthserialnos: youthserialnos,
    youthlinks:  youthlinks,
    youthauthors: youthauthors,
    youthbriefs:  youthbriefs,
    youthpolicys: youthpolicys,
    disabilitytitles: disabilitytitles,
    disabilityserialnos: disabilityserialnos,
    disabilitylinks:  disabilitylinks,
    disabilityauthors: disabilityauthors,
    disabilitybriefs:  disabilitybriefs,
    disabilitypolicys: disabilitypolicys,
    educationtitles: educationtitles,
    educationserialnos: educationserialnos,
    educationlinks:  educationlinks,
    educationauthors: educationauthors,
    educationbriefs:  educationbriefs,
    educationpolicys: educationpolicys,
    industrialtitles: industrialtitles,
    industrialserialnos: industrialserialnos,
    industriallinks:  industriallinks,
    industrialauthors: industrialauthors,
    industrialbriefs:  industrialbriefs,
    industrialpolicys: industrialpolicys,
    manufacturingtitles: manufacturingtitles,
    manufacturingserialnos: manufacturingserialnos,
    manufacturinglinks:  manufacturinglinks,
    manufacturingauthors: manufacturingauthors,
    manufacturingbriefs:  manufacturingbriefs,
    manufacturingpolicys: manufacturingpolicys,
    agriculturaltitles: agriculturaltitles,
    agriculturalserialnos: agriculturalserialnos,
    agriculturallinks:  agriculturallinks,
    agriculturalauthors: agriculturalauthors,
    agriculturalbriefs:  agriculturalbriefs,
    agriculturalpolicys: agriculturalpolicys,
    tribaltitles: tribaltitles,
    tribalserialnos: tribalserialnos,
    triballinks:  triballinks,
    tribalauthors: tribalauthors,
    tribalbriefs:  tribalbriefs,
    tribalpolicys: tribalpolicys,
    welfaretitles: welfaretitles,
    welfareserialnos: welfareserialnos,
    welfarelinks:  welfarelinks,
    welfareauthors: welfareauthors,
    welfarebriefs:  welfarebriefs,
    welfarepolicys: welfarepolicys,
    cybertitles: cybertitles,
    cyberserialnos: cyberserialnos,
    cyberlinks:  cyberlinks,
    cyberauthors: cyberauthors,
    cyberbriefs:  cyberbriefs,
    cyberpolicys: cyberpolicys,
    housingtitles: housingtitles,
    housingserialnos: housingserialnos,
    housinglinks:  housinglinks,
    housingauthors: housingauthors,
    housingbriefs:  housingbriefs,
    housingpolicys: housingpolicys,
    gendertitles: gendertitles,
    genderserialnos: genderserialnos,
    genderlinks:  genderlinks,
    genderauthors: genderauthors,
    genderbriefs:  genderbriefs,
    genderpolicys: genderpolicys,
    tourismtitles: tourismtitles,
    tourismserialnos: tourismserialnos,
    tourismlinks:  tourismlinks,
    tourismauthors: tourismauthors,
    tourismbriefs:  tourismbriefs,
    tourismpolicys: tourismpolicys,
    energytitles: energytitles,
    energyserialnos: energyserialnos,
    energylinks:  energylinks,
    energyauthors: energyauthors,
    energybriefs:  energybriefs,
    energypolicys: energypolicys,
    economictitles: economictitles,
    economicserialnos: economicserialnos,
    economiclinks:  economiclinks,
    economicauthors: economicauthors,
    economicbriefs:  economicbriefs,
    economicpolicys: economicpolicys,
    judicialtitles: judicialtitles,
    judicialserialnos: judicialserialnos,
    judiciallinks:  judiciallinks,
    judicialauthors: judicialauthors,
    judicialbriefs:  judicialbriefs,
    judicialpolicys: judicialpolicys,
    securitytitles: securitytitles,
    securityserialnos: securityserialnos,
    securitylinks:  securitylinks,
    securityauthors: securityauthors,
    securitybriefs:  securitybriefs,
    securitypolicys: securitypolicys,
    inclusivetitles: inclusivetitles,
    inclusiveserialnos: inclusiveserialnos,
    inclusivelinks:  inclusivelinks,
    inclusiveauthors: inclusiveauthors,
    inclusivebriefs:  inclusivebriefs,
    inclusivepolicys: inclusivepolicys,
    telecomtitles: telecomtitles,
    telecomserialnos: telecomserialnos,
    telecomlinks:  telecomlinks,
    telecomauthors: telecomauthors,
    telecombriefs:  telecombriefs,
    telecompolicys: telecompolicys,
    competitiontitles: competitiontitles,
    competitionserialnos: competitionserialnos,
    competitionlinks:  competitionlinks,
    competitionauthors: competitionauthors,
    competitionbriefs:  competitionbriefs,
    competitionpolicys: competitionpolicys,
    fintechtitles: fintechtitles,
    fintechserialnos: fintechserialnos,
    fintechlinks:  fintechlinks,
    fintechauthors: fintechauthors,
    fintechbriefs:  fintechbriefs,
    fintechpolicys: fintechpolicys,
    scitechtitles: scitechtitles,
    scitechserialnos: scitechserialnos,
    scitechlinks:  scitechlinks,
    scitechauthors: scitechauthors,
    scitechbriefs:  scitechbriefs,
    scitechpolicys: scitechpolicys,
    electoraltitles: electoraltitles,
    electoralserialnos: electoralserialnos,
    electorallinks:  electorallinks,
    electoralauthors: electoralauthors,
    electoralbriefs:  electoralbriefs,
    electoralpolicys: electoralpolicys,
    nutritiontitles: nutritiontitles,
    nutritionserialnos: nutritionserialnos,
    nutritionlinks:  nutritionlinks,
    nutritionauthors: nutritionauthors,
    nutritionbriefs:  nutritionbriefs,
    nutritionpolicys: nutritionpolicys,
    povertytitles: povertytitles,
    povertyserialnos: povertyserialnos,
    povertylinks:  povertylinks,
    povertyauthors: povertyauthors,
    povertybriefs:  povertybriefs,
    povertypolicys: povertypolicys,
    labourtitles: labourtitles,
    labourserialnos: labourserialnos,
    labourlinks:  labourlinks,
    labourauthors: labourauthors,
    labourbriefs:  labourbriefs,
    labourpolicys: labourpolicys,
    peacetitles: peacetitles,
    peaceserialnos: peaceserialnos,
    peacelinks:  peacelinks,
    peaceauthors: peaceauthors,
    peacebriefs:  peacebriefs,
    peacepolicys: peacepolicys,
    spacetitles: spacetitles,
    spaceserialnos: spaceserialnos,
    spacelinks:  spacelinks,
    spaceauthors: spaceauthors,
    spacebriefs:  spacebriefs,
    spacepolicys: spacepolicys,
    justicetitles: justicetitles,
    justiceserialnos: justiceserialnos,
    justicelinks:  justicelinks,
    justiceauthors: justiceauthors,
    justicebriefs:  justicebriefs,
    justicepolicys: justicepolicys,
    personneltitles: personneltitles,
    personnelserialnos: personnelserialnos,
    personnellinks:  personnellinks,
    personnelauthors: personnelauthors,
    personnelbriefs:  personnelbriefs,
    personnelpolicys: personnelpolicys,
    accountabilitytitles: accountabilitytitles,
    accountabilityserialnos: accountabilityserialnos,
    accountabilitylinks:  accountabilitylinks,
    accountabilityauthors: accountabilityauthors,
    accountabilitybriefs:  accountabilitybriefs,
    accountabilitypolicys: accountabilitypolicys,
    culturaltitles: culturaltitles,
    culturalserialnos: culturalserialnos,
    culturallinks:  culturallinks,
    culturalauthors: culturalauthors,
    culturalbriefs:  culturalbriefs,
    culturalpolicys: culturalpolicys,
    freedomtitles: freedomtitles,
    freedomserialnos: freedomserialnos,
    freedomlinks:  freedomlinks,
    freedomauthors: freedomauthors,
    freedombriefs:  freedombriefs,
    freedompolicys: freedompolicys,
    citizenshiptitles: citizenshiptitles,
    citizenshipserialnos: citizenshipserialnos,
    citizenshiplinks:  citizenshiplinks,
    citizenshipauthors: citizenshipauthors,
    citizenshipbriefs:  citizenshipbriefs,
    citizenshippolicys: citizenshippolicys,
    misctitles: misctitles,
    miscserialnos: miscserialnos,
    misclinks:  misclinks,
    miscauthors: miscauthors,
    miscbriefs:  miscbriefs,
    miscpolicys: miscpolicys,
  });
});

app.get("/login", async function (req, res) {
  res.render("login");
});

app.get("/basicsearch", async function (req, res) {
  var today = new Date();
  var day = today.toLocaleDateString("en-US", options);
  const userEnrollment = req.session.enrollment || "ERN000012025";

  res.render("basicsearch", {
    kindOfDay: day,
    userEnrollment: userEnrollment,
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
    urusernames: urusernames,
    mylistnames: mylistnames,
  });
});

app.get("/advancedsearch", async function (req, res) {
  var today = new Date();
  var day = today.toLocaleDateString("en-US", options);
  const userEnrollment = req.session.enrollment || "ERN000012025";

  res.render("advancedsearch", {
    kindOfDay: day,
    userEnrollment: userEnrollment,
    mainArguments: [],
    supArgument1s: [],
    supArgument2s: [],
    supArgument3s: [],
    newspaperjournals: [],
    opiniondates: [],
    chapters: [],
    termtitles: [],
    termexplanations: [],
    uidas: [],
    wnewss: [],
    wpoint1s: [],
    wpoint2s: [],
    wpoint3s: [],
    wpoint4s: [],
    wpoint5s: [],
    wopinionons: [],
    wopinion1s: [],
    wopinionbys: [],
    wbooktitles: [],
    wauthortitles: [],
    wpublications: [],
    urusernames: urusernames,
    mylistnames: mylistnames,
  });
});

app.get("/study", async function (req, res) {
  var today = new Date();
  var day = today.toLocaleDateString("en-US", options);
  const userEnrollment = req.session.enrollment || "ERN000012025";

  // Fetch study team members for this user only
  const userStudyTeam = await Mystudyteam.find({ 
    myenrollmentnumber: userEnrollment 
  }).lean();
  
  // Extract usernames of study team members
  const userRusernames = userStudyTeam.map(st => st.urusername).filter(Boolean);

  // Fetch saved lists for this user's enrollment only
  const userSavedLists = await Mysavedarg.find({ 
    myenrollmentnumber: userEnrollment 
  }).distinct("mylistargname");

  res.render("study", {
    kindOfDay: day,
    userEnrollment: userEnrollment,
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
    urusernames: userRusernames,
    mylistnames: userSavedLists || [],
  });
});

// Catch up with study team - show agrees and queries from team members
app.get("/catchup", async function (req, res) {
  try {
    var today = new Date();
    var day = today.toLocaleDateString("en-US", options);
    const userEnrollment = req.session.enrollment || "ERN000012025";

    // Fetch study team members for this user
    const userStudyTeam = await Mystudyteam.find({ 
      myenrollmentnumber: userEnrollment 
    }).lean();
    
    // Extract enrollment numbers of study team members
    const teamEnrollments = userStudyTeam.map(st => st.urenrollmentnumber).filter(Boolean);

    // Fetch social comments (agrees and queries) from team members
    const socialComments = await Mysocial.find({
      myenrollmentnumber: { $in: teamEnrollments },
      $or: [
        { myagreecomment: { $exists: true, $ne: "" } },
        { myquerycomment: { $exists: true, $ne: "" } }
      ]
    }).sort({ _id: -1 }).lean();

    // Fetch corresponding arguments
    const anuidas = [...new Set(socialComments.map(s => s.anuida).filter(Boolean))];
    const args = await Arg.find({ ida: { $in: anuidas } }).lean();

    // Create a map of ida -> arg for easy lookup
    const argMap = {};
    args.forEach(arg => {
      argMap[arg.ida] = arg;
    });

    // Attach argument details to each comment
    const commentsWithArgs = socialComments.map(comment => ({
      ...comment,
      arg: argMap[comment.anuida] || {}
    }));

    const mylistnames = await Mysavedarg.distinct("mylistargname");
    
    res.render("catchup", {
      kindOfDay: day,
      userEnrollment: userEnrollment,
      comments: commentsWithArgs,
      mylistnames: mylistnames || []
    });
  } catch (err) {
    console.error("Catchup error:", err);
    return res.status(500).send("Server error");
  }
});

app.post("/index", async function (req, res) {
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

  await arg.save();

  res.redirect("/index");
});

app.post("/register", async function(req, res) {
  try {
    const { myusername, myenrollmentnumber, myemailadress } = req.body;

    const existingUser = await Myessential.findOne({
      myusername: myusername,
      myenrollmentnumber: myenrollmentnumber,
      myemailadress: myemailadress,
    });

    if (existingUser) {
      return res.redirect("/login");
    }

    const newUser = new Myessential({
      myusername,
      myenrollmentnumber,
      myemailadress
    });

    await newUser.save();
    console.log("New user registered");

    return res.redirect("/login");

  } catch (err) {
    console.error("Registration error:", err);
    return res.status(500).send("Registration error");
  }
});

app.post("/login", async function(req, res) {
  try {
    const myenrollmentnumberName = req.body.myenrollmentnumber;
    const myusernameName = req.body.myusername;
    const myemailadressName = req.body.myemailadress;

    const myessential = await Myessential.findOne({
      myusername: myusernameName,
      myenrollmentnumber: myenrollmentnumberName,
      myemailadress: myemailadressName,
    });

    if (myessential) {
      // Store user info in session
      req.session.enrollment = myenrollmentnumberName;
      req.session.username = myusernameName;
      req.session.email = myemailadressName;
      return res.redirect("/study");
    } else {
      console.log("User not found");
      return res.redirect("/register");
    }

  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).send("Login error");
  }
});

app.post("/study", async function (req, res) {
  var myagreeName = req.body.agreecomment;
  var myqueryName = req.body.querycomment;
  var urusernameName = req.body.yourusername;
  var urenrollidName = req.body.yourenrollid;
  var mylistnameName = req.body.listname;
  var myuidargName = req.body.myuida;
  var anuidargName = req.body.anuida;
  var uruidargName = req.body.uruida;
  var myenrollmentnumberName = req.body.myenrollmentnumber;
  var myusernameName = req.body.myusername
  var myemailadressName = req.body.myemailadress;
  var mylistargnameName = req.body.listargname;
  var urenrollrefnameName = req.body.urenrollrefname;

  // If the user submitted a new list name (from the "Add New List" modal),
  // create a Mysavedarg entry so the list shows up in UI helper lists.
  // Avoid creating duplicates.
  if (mylistnameName && mylistnameName.trim()) {
    const listnameClean = mylistnameName.trim();
    try {
      const exists = await Mysavedarg.findOne({ mylistargname: listnameClean });
      if (!exists) {
        const newList = new Mysavedarg({
          myenrollmentnumber: myenrollmentnumberName || "",
          mylistargname: listnameClean,
          myuida: "",
          mylistname: listnameClean,
        });
        await newList.save();
      }
    } catch (err) {
      console.error("Error creating new list:", err);
    }
  }


    const mystudyteam = new Mystudyteam({
      myenrollmentnumber: myenrollmentnumberName,
      urusername: urusernameName,
      urenrollmentnumber: urenrollidName,
    });

    // Save one Mysavedarg document per selected list. Handle single selection (string) or multiple (array).
    const mysavedargPromises = [];
    if (mylistargnameName) {
      const selections = Array.isArray(mylistargnameName) ? mylistargnameName : [mylistargnameName];
      for (const ln of selections) {
        const s = new Mysavedarg({
          myenrollmentnumber: myenrollmentnumberName,
          mylistargname: ln,
          myuida: myuidargName,
          mylistname: mylistnameName,
        });
        mysavedargPromises.push(s.save());
      }
    }

    const myreferred = new Myreferred({
      myenrollmentnumber: myenrollmentnumberName,
      uruida: uruidargName,
      urenrollrefname: urenrollrefnameName,
    });

    const mysocial = new Mysocial({
      myagreecomment: myagreeName,
      myquerycomment: myqueryName,
      anuida: anuidargName,
      myenrollmentnumber: myenrollmentnumberName,
    });

    // Await all saves so errors are caught and we don't pass arrays into String fields.
    await mystudyteam.save();
    await Promise.all(mysavedargPromises);
    await myreferred.save();
    await mysocial.save();

    res.redirect("/study");

});

app.post("/basicsearch", async function (req, res) {
  try {
    var bsearchtopic = req.body.chapter || req.body.topic || req.body.subject;

    const mybasicsearch = new Basicsearch({ basicsearch: bsearchtopic });
    await mybasicsearch.save();

    const docs = await Arg.find({ id3: bsearchtopic })
      .sort({ _id: -1 })
      .limit(200);

    const res_uida = [];
    const res_mainArguments = [];
    const res_supArgument1s = [];
    const res_supArgument2s = [];
    const res_supArgument3s = [];
    const res_opiniondates = [];
    const res_newspaperjournals = [];
    const res_chapters = [];
    const res_termtitles = [];
    const res_termexplanations = [];
    const res_wnewss = [];
    const res_wpoint1s = [];
    const res_wpoint2s = [];
    const res_wpoint3s = [];
    const res_wpoint4s = [];
    const res_wpoint5s = [];
    const res_wopinionons = [];
    const res_wopinion1s = [];
    const res_wopinionbys = [];
    const res_wbooktitles = [];
    const res_wauthortitles = [];
    const res_wpublications = [];

    docs.forEach((doc) => {
      res_uida.push(doc.ida || "");
      res_mainArguments.push(doc.marg || "");
      res_supArgument1s.push(doc.sarg1 || "");
      res_supArgument2s.push(doc.sarg2 || "");
      res_supArgument3s.push(doc.sarg3 || "");
      res_opiniondates.push(doc.opd || "");
      res_newspaperjournals.push(doc.njs || "");
      res_chapters.push(doc.id3 || "");
      res_termtitles.push(doc.trm || "");
      res_termexplanations.push(doc.texp || "");
      res_wnewss.push(doc.nws || "");
      res_wpoint1s.push(doc.pnt1 || "");
      res_wpoint2s.push(doc.pnt2 || "");
      res_wpoint3s.push(doc.pnt3 || "");
      res_wpoint4s.push(doc.pnt4 || "");
      res_wpoint5s.push(doc.pnt5 || "");
      res_wopinionons.push(doc.opnn || "");
      res_wopinion1s.push(doc.opn1 || "");
      res_wopinionbys.push(doc.opnb || "");
      res_wbooktitles.push(doc.btle || "");
      res_wauthortitles.push(doc.btar || "");
      res_wpublications.push(doc.bpne || "");
    });

    var today = new Date();
    var day = today.toLocaleDateString("en-US", options);

    res.render("basicsearch", {
      kindOfDay: day,
      mainArguments: res_mainArguments,
      supArgument1s: res_supArgument1s,
      supArgument2s: res_supArgument2s,
      supArgument3s: res_supArgument3s,
      newspaperjournals: res_newspaperjournals,
      opiniondates: res_opiniondates,
      chapters: res_chapters,
      termtitles: res_termtitles,
      termexplanations: res_termexplanations,
      uidas: res_uida,
      wnewss: res_wnewss,
      wpoint1s: res_wpoint1s,
      wpoint2s: res_wpoint2s,
      wpoint3s: res_wpoint3s,
      wpoint4s: res_wpoint4s,
      wpoint5s: res_wpoint5s,
      wopinionons: res_wopinionons,
      wopinion1s: res_wopinion1s,
      wopinionbys: res_wopinionbys,
      wbooktitles: res_wbooktitles,
      wauthortitles: res_wauthortitles,
      wpublications: res_wpublications,
      urusernames: urusernames || [],
      mylistnames: mylistnames || [],
    });
  } catch (err) {
    console.error("Basicsearch query error:", err);
    res.status(500).send("Search error");
  }
});

app.post("/advancedsearch", async function (req, res) {
  try {
    const q = (req.body.string || "").trim();
    if (!q) return res.redirect("/advancedsearch");

    const regex = new RegExp(escapeRegex(q), "i");

    // FIXED: await the query
    const docs = await Arg.find({
      $or: [
        { marg: regex },
        { sarg1: regex },
        { sarg2: regex },
        { sarg3: regex },
        { texp: regex },
        { nws: regex },
        { pnt1: regex },
        { pnt2: regex },
        { pnt3: regex },
        { pnt4: regex },
        { pnt5: regex },
        { opn1: regex },
        { opnb: regex },
      ],
    })
      .sort({ _id: -1 })
      .limit(1000);

    const res_uida = [];
    const res_mainArguments = [];
    const res_supArgument1s = [];
    const res_supArgument2s = [];
    const res_supArgument3s = [];
    const res_opiniondates = [];
    const res_newspaperjournals = [];
    const res_chapters = [];
    const res_termtitles = [];
    const res_termexplanations = [];
    const res_wnewss = [];
    const res_wpoint1s = [];
    const res_wpoint2s = [];
    const res_wpoint3s = [];
    const res_wpoint4s = [];
    const res_wpoint5s = [];
    const res_wopinionons = [];
    const res_wopinion1s = [];
    const res_wopinionbys = [];
    const res_wbooktitles = [];
    const res_wauthortitles = [];
    const res_wpublications = [];

    docs.forEach((doc) => {
      res_uida.push(doc.ida || "");
      res_mainArguments.push(doc.marg || "");
      res_supArgument1s.push(doc.sarg1 || "");
      res_supArgument2s.push(doc.sarg2 || "");
      res_supArgument3s.push(doc.sarg3 || "");
      res_opiniondates.push(doc.opd || "");
      res_newspaperjournals.push(doc.njs || "");
      res_chapters.push(doc.id3 || "");
      res_termtitles.push(doc.trm || "");
      res_termexplanations.push(doc.texp || "");
      res_wnewss.push(doc.nws || "");
      res_wpoint1s.push(doc.pnt1 || "");
      res_wpoint2s.push(doc.pnt2 || "");
      res_wpoint3s.push(doc.pnt3 || "");
      res_wpoint4s.push(doc.pnt4 || "");
      res_wpoint5s.push(doc.pnt5 || "");
      res_wopinionons.push(doc.opnn || "");
      res_wopinion1s.push(doc.opn1 || "");
      res_wopinionbys.push(doc.opnb || "");
      res_wbooktitles.push(doc.btle || "");
      res_wauthortitles.push(doc.btar || "");
      res_wpublications.push(doc.bpne || "");
    });

    var today = new Date();
    var day = today.toLocaleDateString("en-US", options);

    res.render("advancedsearch", {
      kindOfDay: day,
      mainArguments: res_mainArguments,
      supArgument1s: res_supArgument1s,
      supArgument2s: res_supArgument2s,
      supArgument3s: res_supArgument3s,
      newspaperjournals: res_newspaperjournals,
      opiniondates: res_opiniondates,
      chapters: res_chapters,
      termtitles: res_termtitles,
      termexplanations: res_termexplanations,
      uidas: res_uida,
      wnewss: res_wnewss,
      wpoint1s: res_wpoint1s,
      wpoint2s: res_wpoint2s,
      wpoint3s: res_wpoint3s,
      wpoint4s: res_wpoint4s,
      wpoint5s: res_wpoint5s,
      wopinionons: res_wopinionons,
      wopinion1s: res_wopinion1s,
      wopinionbys: res_wopinionbys,
      wbooktitles: res_wbooktitles,
      wauthortitles: res_wauthortitles,
      wpublications: res_wpublications,
      urusernames: urusernames || [],
      mylistnames: mylistnames || [],
    });
  } catch (err) {
    console.error("Advanced search error:", err);
    res.status(500).send("Search error");
  }
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port, async function () {
  console.log(`Server running on port ${port}`);
});
