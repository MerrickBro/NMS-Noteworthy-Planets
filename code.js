//Declare all Variables
var Glyphs = ["assets/PORTALSYMBOL.0.png", "assets/PORTALSYMBOL.1.png", "assets/PORTALSYMBOL.2.png", "assets/PORTALSYMBOL.3.png", "assets/PORTALSYMBOL.4.png", "assets/PORTALSYMBOL.5.png", "assets/PORTALSYMBOL.6.png", "assets/PORTALSYMBOL.7.png", "assets/PORTALSYMBOL.8.png", "assets/PORTALSYMBOL.9.png", "assets/PORTALSYMBOL.A.png", "assets/PORTALSYMBOL.B.png", "assets/PORTALSYMBOL.C.png", "assets/PORTALSYMBOL.D.png", "assets/PORTALSYMBOL.E.png", "assets/PORTALSYMBOL.F.png"];
setImageURL("LoadingGlyph1", Glyphs[(randomNumber(0, 15))]);
setImageURL("LoadingGlyph2", Glyphs[(randomNumber(0, 15))]);
var Music = [	"assets/NMS_MUSIC1.mp3", 	"assets/NMS_MUSIC2.mp3", "assets/NMS_MUSIC3.mp3", "assets/NMS_MUSIC4.mp3", "assets/NMS_MUSIC5.mp3", "assets/NMS_MUSIC6.mp3", "assets/NMS_MUSIC7.mp3"];

var AppHelpImages = ["assets/0TUT.jpg", "assets/1TUT.jpg", "assets/2TUT.jpg", "assets/3TUT.jpg", "assets/4TUT.jpg", "assets/5TUT.jpg"];
var GlyphIDS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
var ProtectionTypes = ["assets/Render.protectcold.png", "assets/Render.protectheat.png", "assets/Render.protectradi.png", "assets/Render.protecttoxi.png", "assets/TransparentImg.png"];
var PlanetUploaders = getColumn("PlanetUploaders", "Uploader");
var Planets = getColumn("PlanetUploaders", "Planets");
var totalCheck = getColumn("NMS_Planets", "id");
var idList = getColumn("NMS_Planets", "id");
var allList = getColumn("NMS_Planets", "All");
var discovererList = getColumn("NMS_Planets", "Discoverer");
var totalCheck = getColumn("NMS_Planets", "id");
var nameList = getColumn("NMS_Planets", "Name");
var starSystemList = getColumn("NMS_Planets", "StarSystem");
var galaxyList = getColumn("NMS_Planets", "Galaxy");
var typeList = getColumn("NMS_Planets", "Type");
var economyList = getColumn("NMS_Planets", "Economy");
var descriptionList = getColumn("NMS_Planets", "Description");
var hazardList = getColumn("NMS_Planets", "ProtectionType");
var lifeformList = getColumn("NMS_Planets", "Lifeform");
var resource1List = getColumn("NMS_Planets", "Resource1");
var resource2List = getColumn("NMS_Planets", "Resource2");
var resource3List = getColumn("NMS_Planets", "Resource3");
var sentinelList = getColumn("NMS_Planets", "Sentinel");
var factsList = getColumn("NMS_Planets", "Facts");
var imageList = getColumn("NMS_Planets", "Image");
var glyph1List = getColumn("NMS_Planets", "Glyph1");
var glyph2List = getColumn("NMS_Planets", "Glyph2");
var glyph3List = getColumn("NMS_Planets", "Glyph3");
var glyph4List = getColumn("NMS_Planets", "Glyph4");
var glyph5List = getColumn("NMS_Planets", "Glyph5");
var glyph6List = getColumn("NMS_Planets", "Glyph6");
var glyph7List = getColumn("NMS_Planets", "Glyph7");
var glyph8List = getColumn("NMS_Planets", "Glyph8");
var glyph9List = getColumn("NMS_Planets", "Glyph9");
var glyph10List = getColumn("NMS_Planets", "Glyph10");
var glyph11List = getColumn("NMS_Planets", "Glyph11");
var glyph12List = getColumn("NMS_Planets", "Glyph12");
var postStatus = 0;
var uploaderPostStatus = 1;
var musicStatus = "On";
var musicPlaying = 0;
var lastMusicPlaying = 0;
var sentinelImageStatus = 0;
var helpImageStatus = 0;
var currentPlanet = 0;
var protTypeInput = 0;
var inputGlyph1 = 0;
var inputGlyph2 = 0;
var inputGlyph3 = 0;
var inputGlyph4 = 0;
var inputGlyph5 = 0;
var inputGlyph6 = 0;
var inputGlyph7 = 0;
var inputGlyph8 = 0;
var inputGlyph9 = 0;
var inputGlyph10 = 0;
var inputGlyph11 = 0;
var inputGlyph12 = 0;
var i = 0;
//Grabs all info from Planet submitter screen and adds a new row to the Main data table
onEvent("planetUploadButton", "click", function( ) {
  PlanetUploaders = getColumn("PlanetUploaders", "Uploader");
  Planets = getColumn("PlanetUploaders", "Planets");
  if (getText("factsInput") == "" || getText("factsInput") == " ") {
    setText("factsInput", "No Facts");
  }
  if (("" == getText("planetNameInput")) || ("" == getText("imageInput") || ("" == getText("discovererInput") || ("" == getText("starSystemNameInput"))))) {
    postStatus = 0;
  } else if ((getText("planetTypeInput") == " ")) {
    createRecord("NMS_Planets", {Name:(getText("planetNameInput")), Galaxy:(getText("galaxyInput")), Description:(getText("planetDescriptionInput")), Type:false, Lifeform:(getText("lifeformInput")), Economy:(getText("economyInput")), Resource1:(getText("resource1Input")), Resource2:(getText("resource2Input")), Resource3:(getText("resource3Input")), Facts:(getText("factsInput")), Image:(getText("imageInput")), Glyph1:(getImageURL("GlyphInput1")), Glyph2:(getImageURL("GlyphInput2")), Glyph3:(getImageURL("GlyphInput3")), Glyph4:(getImageURL("GlyphInput4")), Glyph5:(getImageURL("GlyphInput5")), Glyph6:(getImageURL("GlyphInput6")), Glyph7:(getImageURL("GlyphInput7")), Glyph8:(getImageURL("GlyphInput8")), Glyph9:(getImageURL("GlyphInput9")), Glyph10:(getImageURL("GlyphInput10")), Glyph11:(getImageURL("GlyphInput11")), Glyph12:(getImageURL("GlyphInput12")), Discoverer:(getText("discovererInput")), ProtectionType:(getImageURL("protTypeInput")), StarSystem:(getText("starSystemNameInput")), Sentinel:(getText("sentinelInput")), All:"All"}, function(record) {
      console.log("New Planet Added!");
    });
    postStatus = 1;
  } else {
    createRecord("NMS_Planets", {Name:(getText("planetNameInput")), Galaxy:(getText("galaxyInput")), Description:(getText("planetDescriptionInput")), Type:(getText("planetTypeInput")), Lifeform:(getText("lifeformInput")), Economy:(getText("economyInput")), Resource1:(getText("resource1Input")), Resource2:(getText("resource2Input")), Resource3:(getText("resource3Input")), Facts:(getText("factsInput")), Image:(getText("imageInput")), Glyph1:(getImageURL("GlyphInput1")), Glyph2:(getImageURL("GlyphInput2")), Glyph3:(getImageURL("GlyphInput3")), Glyph4:(getImageURL("GlyphInput4")), Glyph5:(getImageURL("GlyphInput5")), Glyph6:(getImageURL("GlyphInput6")), Glyph7:(getImageURL("GlyphInput7")), Glyph8:(getImageURL("GlyphInput8")), Glyph9:(getImageURL("GlyphInput9")), Glyph10:(getImageURL("GlyphInput10")), Glyph11:(getImageURL("GlyphInput11")), Glyph12:(getImageURL("GlyphInput12")), Discoverer:(getText("discovererInput")), ProtectionType:(getImageURL("protTypeInput")), StarSystem:(getText("starSystemNameInput")), Sentinel:(getText("sentinelInput")), All:"All"}, function(record) {
      console.log("New Planet Added!");
    });
    postStatus = 1;
  }
  declareLists();
  if (postStatus == 0) {
    setProperty("planetUploadButton", "background-color", rgb(245,0,0));
    setTimeout(function() {
      setProperty("planetUploadButton", "background-color", rgb(0,0,0));
    }, 1250);
  } else if (postStatus == 1) {
    for (i = 0; i < PlanetUploaders.length - 1; i++) {
      if (PlanetUploaders[i] == getText("discovererInput")) {
        updateRecord("PlanetUploaders", {id:i + 1, Uploader:(getText("discovererInput")), Planets:(Planets[i] + 1)}, function(record, success) {
          
        });
        uploaderPostStatus = 0;
      }
    }
    if (uploaderPostStatus == 1) {
      createRecord("PlanetUploaders", {Uploader:(getText("discovererInput")), Planets:1}, function(record) {
        
      });
    }
    uploaderPostStatus = 1;
    for (i = 1; i < 12; i++) {
      setImageURL("GlyphInput"+i, "assets/PORTALSYMBOL.0.png");
    }
    setText("planetNameInput", "");
    setText("imageInput", "");
    setText("discovererInput", "");
    setText("starSystemNameInput", "");
    setText("factsInput", "Facts Area");
    inputGlyph1 = 0;
    inputGlyph2 = 0;
    inputGlyph3 = 0;
    inputGlyph4 = 0;
    inputGlyph5 = 0;
    inputGlyph6 = 0;
    inputGlyph7 = 0;
    inputGlyph8 = 0;
    inputGlyph9 = 0;
    inputGlyph10 = 0;
    inputGlyph11 = 0;
    inputGlyph12 = 0;
    setProperty("planetUploadButton", "background-color", "green");
    setTimeout(function() {
      setProperty("planetUploadButton", "background-color", rgb(0,0,0));
    }, 1250);
  }
});
//Music control
onEvent("musicButton", "click", function( ) {
  if (musicStatus == "On") {
    setImageURL("musicButton", "icon://fa-volume-off");
    stopSound();
    musicStatus = "Off";
  } else if ((musicStatus == "Off")) {
    setImageURL("musicButton", "icon://fa-volume-up");
    musicPlaying = randomNumber(0, Music.length - 1);
    if (lastMusicPlaying != musicPlaying) {
      playSound(Music[musicPlaying], true);
    } else {
      musicPlaying = randomNumber(0, Music.length - 1);
      playSound(Music[musicPlaying], true);
    }
    lastMusicPlaying = musicPlaying;
    musicStatus = "On";
    setText("musicNumberDisp", musicPlaying + 1);
    setProperty("musicNumberDisp", "hidden", false);
    setTimeout(function() {
      setProperty("musicNumberDisp", "hidden", true);
    }, 2000);
  }
});
//Planet submitter image upload and preview
onEvent("imageInput", "keypress", function( ) {
  setImageURL("imageInputPreview", getText("imageInput"));
});
onEvent("imageInputPreview", "click", function( ) {
  setImageURL("imageInputPreview", getText("imageInput"));
});
onEvent("sentinelHelpSwapButton", "click", function( ) {
  if (sentinelImageStatus == 0) {
    setImageURL("sentinelHelpImage", "assets/Annotation-2023-04-14-073652.jpg");
    sentinelImageStatus = 1;
  } else if (sentinelImageStatus == 1) {
    setImageURL("sentinelHelpImage", "assets/Annotation-2023-04-14-073639.jpg");
    sentinelImageStatus = 0;
  }
});
//All screen change buttons
onEvent("sentinelHelp", "click", function( ) {
  setScreen("SentinelInputHelpScreen");
});
onEvent("sentinelHelpBackButton", "click", function( ) {
  setScreen("PlanetInputter");
});
onEvent("planetInputterBackButton", "click", function( ) {
  setScreen("HomeScreen");
});
onEvent("infoScreenButton", "click", function( ) {
  setScreen("PlanetInfo");
});
onEvent("viewerBackButton", "click", function( ) {
  setScreen("HomeScreen");
});
onEvent("planetSubmitScreenButton", "click", function( ) {
  setScreen("PlanetInputter");
});
onEvent("planetViewScreenButton", "click", function( ) {
  setScreen("PlanetViewer");
});
onEvent("infoBackButton", "click", function( ) {
  setScreen("PlanetViewer");
});
onEvent("searchScreenBackButton", "click", function( ) {
  setScreen("PlanetViewer");
});
onEvent("searchScreenButton", "click", function( ) {
  setScreen("SearchScreen");
});
onEvent("searchScreenButton2", "click", function( ) {
  setScreen("SearchScreen");
});
//Planet submitter hazard changing code
onEvent("protTypeInput", "click", function( ) {
  if (protTypeInput < ProtectionTypes.length - 1) {
    protTypeInput = protTypeInput + 1;
  } else {
    protTypeInput = 0;
  }
  setImageURL("protTypeInput", ProtectionTypes[protTypeInput]);
});
//Planet submitter glyph changing code
onEvent("GlyphInput1", "click", function( ) {
  if (inputGlyph1 < Glyphs.length - 1) {
    inputGlyph1 = inputGlyph1 + 1;
  } else {
    inputGlyph1 = 0;
  }
  setImageURL("GlyphInput1", Glyphs[inputGlyph1]);
});
onEvent("GlyphInput2", "click", function( ) {
  if (inputGlyph2 < Glyphs.length - 1) {
    inputGlyph2 = inputGlyph2 + 1;
  } else {
    inputGlyph2 = 0;
  }
  setImageURL("GlyphInput2", Glyphs[inputGlyph2]);
});
onEvent("GlyphInput3", "click", function( ) {
  if (inputGlyph3 < Glyphs.length - 1) {
    inputGlyph3 = inputGlyph3 + 1;
  } else {
    inputGlyph3 = 0;
  }
  setImageURL("GlyphInput3", Glyphs[inputGlyph3]);
});
onEvent("GlyphInput4", "click", function( ) {
  if (inputGlyph4 < Glyphs.length - 1) {
    inputGlyph4 = inputGlyph4 + 1;
  } else {
    inputGlyph4 = 0;
  }
  setImageURL("GlyphInput4", Glyphs[inputGlyph4]);
});
onEvent("GlyphInput5", "click", function( ) {
  if (inputGlyph5 < Glyphs.length - 1) {
    inputGlyph5 = inputGlyph5 + 1;
  } else {
    inputGlyph5 = 0;
  }
  setImageURL("GlyphInput5", Glyphs[inputGlyph5]);
});
onEvent("GlyphInput6", "click", function( ) {
  if (inputGlyph6 < Glyphs.length - 1) {
    inputGlyph6 = inputGlyph6 + 1;
  } else {
    inputGlyph6 = 0;
  }
  setImageURL("GlyphInput6", Glyphs[inputGlyph6]);
});
onEvent("GlyphInput7", "click", function( ) {
  if (inputGlyph7 < Glyphs.length - 1) {
    inputGlyph7 = inputGlyph7 + 1;
  } else {
    inputGlyph7 = 0;
  }
  setImageURL("GlyphInput7", Glyphs[inputGlyph7]);
});
onEvent("GlyphInput8", "click", function( ) {
  if (inputGlyph8 < Glyphs.length - 1) {
    inputGlyph8 = inputGlyph8 + 1;
  } else {
    inputGlyph8 = 0;
  }
  setImageURL("GlyphInput8", Glyphs[inputGlyph8]);
});
onEvent("GlyphInput9", "click", function( ) {
  if (inputGlyph9 < Glyphs.length - 1) {
    inputGlyph9 = inputGlyph9 + 1;
  } else {
    inputGlyph9 = 0;
  }
  setImageURL("GlyphInput9", Glyphs[inputGlyph9]);
});
onEvent("GlyphInput10", "click", function( ) {
  if (inputGlyph10 < Glyphs.length - 1) {
    inputGlyph10 = inputGlyph10 + 1;
  } else {
    inputGlyph10 = 0;
  }
  setImageURL("GlyphInput10", Glyphs[inputGlyph10]);
});
onEvent("GlyphInput11", "click", function( ) {
  if (inputGlyph11 < Glyphs.length - 1) {
    inputGlyph11 = inputGlyph11 + 1;
  } else {
    inputGlyph11 = 0;
  }
  setImageURL("GlyphInput11", Glyphs[inputGlyph11]);
});
onEvent("GlyphInput12", "click", function( ) {
  if (inputGlyph12 < Glyphs.length - 1) {
    inputGlyph12 = inputGlyph12 + 1;
  } else {
    inputGlyph12 = 0;
  }
  setImageURL("GlyphInput12", Glyphs[inputGlyph12]);
});
//Updates planet viewer, searcher, and info screen
onEvent("newPlanetSearchButton", "click", function( ) {
  var begginingPlanetCount = allList.length;
  declareLists();
  currentPlanet = 0;
  updateViewer(currentPlanet);
  var finalPlanetCount = allList.length;
  setText("postersNames", "-" + PlanetUploaders.join("-\n-") + "-");
  if (finalPlanetCount - begginingPlanetCount == 1) {
    setText("newPlanetSearchOutput", (finalPlanetCount - begginingPlanetCount) + " New Planet");
  } else {
    setText("newPlanetSearchOutput", (finalPlanetCount - begginingPlanetCount) + " New Planets");
  }
  setProperty("newPlanetSearchOutput", "hidden", false);
  setTimeout(function() {
    setProperty("newPlanetSearchOutput", "text", allList.length + " Total Planets");
    setTimeout(function() {
      setProperty("newPlanetSearchOutput", "hidden", true);
    }, 1500);
  }, 1500);
});
function updateViewer(viewingPlanet) {
  setText("selectedPlanet", (viewingPlanet + 1) + "/" + (nameList.length));
  if (descriptionList[viewingPlanet] ==(((((( "Deathly Green Anomaly" || "Harsh Blue Globe") || "Imminent Core Detonation") || "Planetary Anomaly") || "Stellar Corruption Detected") || "Terraforming Catastrophe") || "Vermillion Globe") || (typeList[viewingPlanet] == false)) {
    setText("planetDescription", (descriptionList[viewingPlanet]));
  } else if (descriptionList[viewingPlanet] == "Of Light") {
    setText("planetDescription", ((typeList[viewingPlanet]) +" ")+ (descriptionList[viewingPlanet]));
  } else {
    setText("planetDescription", (descriptionList[viewingPlanet] +" ")+ (typeList[viewingPlanet]));
  }
  if (factsList[viewingPlanet] == "No Facts") {
    setText("factsArea", "");
  } else {
    setText("factsArea", factsList[viewingPlanet]);
  }
  setText("discovererLabel", "Posted By: " + discovererList[viewingPlanet]);
  setText("planetTitle", nameList[viewingPlanet]);
  setText("galaxyName", galaxyList[viewingPlanet]);
  setText("sentinelLabel", sentinelList[viewingPlanet]);
  setText("nameLabel2", nameList[viewingPlanet]);
  setText("starSystemLabel", starSystemList[viewingPlanet]);
  setText("starSystemLabel2", starSystemList[viewingPlanet]);
  setText("galaxyLabel2", galaxyList[viewingPlanet]);
  setText("resourceInfo1", resource1List[viewingPlanet]);
  setText("resourceInfo2", resource2List[viewingPlanet]);
  setText("resourceInfo3", resource3List[viewingPlanet]);
  setText("economyLabel", economyList[viewingPlanet] + " : " + lifeformList[viewingPlanet]);
  setImageURL("hazardProtDisplay", hazardList[viewingPlanet]);
  setImageURL("planetViewerBackground", imageList[viewingPlanet]);
  setImageURL("infoImage", imageList[viewingPlanet]);
  setImageURL("viewGlyph1", glyph1List[viewingPlanet]);
  setImageURL("viewGlyph2", glyph2List[viewingPlanet]);
  setImageURL("viewGlyph3", glyph3List[viewingPlanet]);
  setImageURL("viewGlyph4", glyph4List[viewingPlanet]);
  setImageURL("viewGlyph5", glyph5List[viewingPlanet]);
  setImageURL("viewGlyph6", glyph6List[viewingPlanet]);
  setImageURL("viewGlyph7", glyph7List[viewingPlanet]);
  setImageURL("viewGlyph8", glyph8List[viewingPlanet]);
  setImageURL("viewGlyph9", glyph9List[viewingPlanet]);
  setImageURL("viewGlyph10", glyph10List[viewingPlanet]);
  setImageURL("viewGlyph11", glyph11List[viewingPlanet]);
  setImageURL("viewGlyph12", glyph12List[viewingPlanet]);
}
//Declares variables again
function declareLists() {
  totalCheck = getColumn("NMS_Planets", "id");
  if (totalCheck.length > idList.length) {
    allList = getColumn("NMS_Planets", "All");
    idList = getColumn("NMS_Planets", "id");
    discovererList = getColumn("NMS_Planets", "Discoverer");
    nameList = getColumn("NMS_Planets", "Name");
    starSystemList = getColumn("NMS_Planets", "StarSystem");
    galaxyList = getColumn("NMS_Planets", "Galaxy");
    descriptionList = getColumn("NMS_Planets", "Description");
    typeList = getColumn("NMS_Planets", "Type");
    economyList = getColumn("NMS_Planets", "Economy");
    hazardList = getColumn("NMS_Planets", "ProtectionType");
    lifeformList = getColumn("NMS_Planets", "Lifeform");
    resource1List = getColumn("NMS_Planets", "Resource1");
    resource2List = getColumn("NMS_Planets", "Resource2");
    resource3List = getColumn("NMS_Planets", "Resource3");
    sentinelList = getColumn("NMS_Planets", "Sentinel");
    factsList = getColumn("NMS_Planets", "Facts");
    imageList = getColumn("NMS_Planets", "Image");
    glyph1List = getColumn("NMS_Planets", "Glyph1");
    glyph2List = getColumn("NMS_Planets", "Glyph2");
    glyph3List = getColumn("NMS_Planets", "Glyph3");
    glyph4List = getColumn("NMS_Planets", "Glyph4");
    glyph5List = getColumn("NMS_Planets", "Glyph5");
    glyph6List = getColumn("NMS_Planets", "Glyph6");
    glyph7List = getColumn("NMS_Planets", "Glyph7");
    glyph8List = getColumn("NMS_Planets", "Glyph8");
    glyph9List = getColumn("NMS_Planets", "Glyph9");
    glyph10List = getColumn("NMS_Planets", "Glyph10");
    glyph11List = getColumn("NMS_Planets", "Glyph11");
    glyph12List = getColumn("NMS_Planets", "Glyph12");
    PlanetUploaders = getColumn("PlanetUploaders", "Uploader");
    Planets = getColumn("PlanetUploaders", "Planets");
  }
}
//Searches for planets in the planet search screen by checking to see if rows match the criteria the person inputs
onEvent("searchButton", "click", function( ) {
  setProperty("searchOutputPlanet", "text", "");
  setProperty("searchOutputDiscoverer", "text", "");
  for (i = 0; i < idList.length; i++) {
    if ((getText("searchGalaxyDropdown") == galaxyList[i] || getText("searchGalaxyDropdown") == allList[i]) && (getText("searchDropdown") == descriptionList[i] || getText("searchDropdown") == typeList[i] || getText("searchDropdown") == economyList[i] || getText("searchDropdown") == lifeformList[i] || getText("searchDropdown") == resource1List[i] || getText("searchDropdown") == resource2List[i] || getText("searchDropdown") == resource3List[i] || getText("searchDropdown") == discovererList[i] || getText("searchDropdown") == allList[i])) {
      setProperty("searchOutputPlanet", "text", getText("searchOutputPlanet") + idList[i] + " " + nameList[i] + "\n");
      setProperty("searchOutputDiscoverer", "text", getText("searchOutputDiscoverer") + discovererList[i] + " " + idList[i] + "\n");
    }
  }
});
//Random stuff
onEvent("viewNumberButton", "click", function( ) {
  if (idList.length >= getNumber("viewNumberInput") && getNumber("viewNumberInput") > 0) {
    currentPlanet = getNumber("viewNumberInput") - 1;
    updateViewer(currentPlanet);
    setScreen("PlanetViewer");
  }
});
timedLoop(125, function() {
  setImageURL("randomGlyphScreenButton", Glyphs[randomNumber(0, 15)]);
});
onEvent("nextButton", "click", function( ) {
  nextPlanet();
});
onEvent("nextButton2", "click", function( ) {
  nextPlanet();
});
onEvent("previousButton", "click", function( ) {
  prevPlanet();
});
onEvent("previousButton2", "click", function( ) {
  prevPlanet();
});
onEvent("randomGlyphScreenButton", "click", function( ) {
  setScreen("RandomGlyphs");
});
onEvent("randomGlyphBackButton", "click", function( ) {
  setScreen("HomeScreen");
});
onEvent("helpButton", "click", function( ) {
  setScreen("HelpScreen");
});
onEvent("helpExitButton", "click", function( ) {
  setScreen("HomeScreen");
});
onEvent("glyphGeneratorButton", "click", function( ) {
  randomGlyphs();
});
onEvent("helpPrevButton", "click", function( ) {
  if (helpImageStatus == 0) {
    helpImageStatus = AppHelpImages.length - 1;
  } else {
    helpImageStatus = helpImageStatus - 1;
  }
  setImageURL("helpImage", AppHelpImages[helpImageStatus]);
});
onEvent("helpNextButton", "click", function( ) {
  if (helpImageStatus == AppHelpImages.length - 1) {
    helpImageStatus = 0;
  } else {
    helpImageStatus = helpImageStatus + 1;
  }
  setImageURL("helpImage", AppHelpImages[helpImageStatus]);
});
//Generates the random Glyphs on the Random Glyphs screen
function randomGlyphs() {
  setText("glyphText", "");
  for (var i = 1; i <= 12; i++) {
    var newGlyph = randomNumber(0, 15);
    setImageURL("randGlyph" + i, Glyphs[newGlyph]);
    if (i == 5 || i == 9) {
      setText("glyphText", (getText("glyphText") + ":") + GlyphIDS[newGlyph]);
    } else {
      setText("glyphText", getText("glyphText") + GlyphIDS[newGlyph]);
    }
  }
}
function prevPlanet() {
  if (currentPlanet == 0) {
    currentPlanet = nameList.length - 1;
  } else {
    currentPlanet = currentPlanet - 1;
  }
  updateViewer(currentPlanet);
}
function nextPlanet() {
  if (currentPlanet == nameList.length - 1) {
    currentPlanet = 0;
  } else {
    currentPlanet = currentPlanet + 1;
  }
  updateViewer(currentPlanet);
}
function keyInput(event) {
  if (event.key == "Left") {
    prevPlanet();
  } else if ((event.key == "Right")) {
    nextPlanet();
  } else if ((event.key == "Home")) {
    setScreen("HomeScreen");
  }
}
onEvent("RandomGlyphs", "keyup", function() {
	randomGlyphs();
});
onEvent("LoadingScreen", "keyup", function(event) {
	keyInput(event);
});
onEvent("PlanetViewer", "keyup", function(event) {
	keyInput(event);
});
onEvent("PlanetInfo", "keyup", function(event) {
	keyInput(event);
});
onEvent("PlanetInputter", "keyup", function(event) {
	setImageURL("imageInputPreview", getText("imageInput"));
	keyInput(event);
});
onEvent("SearchScreen", "keyup", function(event) {
	keyInput(event);
});
onEvent("HomeScreen", "keyup", function(event) {
	keyInput(event);
});
onEvent("ATLAS", "click", function( ) {
	setScreen("AppInfoScreen");
});
onEvent("ATLAS2", "click", function( ) {
	setScreen("HomeScreen");
});
onEvent("nameHelpScreenBackButton", "click", function( ) {
	setScreen("PlanetInputter");
});
onEvent("nameHelpButton", "click", function( ) {
	setScreen("NameInputHelpScreen");
});
onEvent("imageInputHelpButton", "click", function( ) {
  setScreen("ImageHelp");
});
onEvent("imageHelpScreenBackButton", "click", function( ) {
  setScreen("PlanetInputter");
});
onEvent("WikiLink", "click", function( ) {
	open("https://nomanssky.fandom.com/wiki/No_Man%27s_Sky_Wiki");
});
declareLists();
updateViewer(currentPlanet);
setText("postersNames", ("|-" + PlanetUploaders.join("-|\n|-")) + "-|");
lastMusicPlaying = randomNumber(0, Music.length - 1);
playSound(Music[lastMusicPlaying], true);
setScreen("HomeScreen");
