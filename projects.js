var titles = [[
    "Algorithm Racing!",
    "eSports Tracker",
    "Questions From a Stranger"
],[
    "CS 178: Machine Learning and Data Mining",
    "CS 171: Intro to Artificial Intelligence",
    "CS 121: Information Retrieval"
]]

var text = [[
    "The idea came to mind after a popular video on YouTube came around\
    where algorithms were visualized one by one, making funny sounds as they\
    were sorting. I thought it'd be a cooler idea to see two algorithms side\
    by side, racing each other to see which one finishes first. It tested my\
     knowledge on Big O time and other algorithm concepts.",

    "As an avid eSports watcher, I find it a bit hard trying to\
    switch between different sites to get information on the latest\
    eSport events. Being able to combine information from some of the\
    most popular games was the only solution. Now users can sort by\
    past, present, and future games all while sorting information by\
    specific categories.",

    "I've always wondered if people cared for purely anonymous advice being\
    handed out to others on the internet. Would it go poorly or would you actually\
    get some decent answers? I decided to create this website simply because I wanted\
    to test the idea of receiving advice as well as asking questions anonymously.\
    No one really knows who you are, and there are definitely no ID's to see who's\
    asking what or saying what."
],[
    "Probably one of the harder courses I've taken. Considering I've never never\
    really dealt with Machine Learning, there was definitely a lot to take in over the\
    Fall quarter (2020). Upon learning about many different ML techniques, the final\
    assignment for this class was to create a learner to compete in a Kaggle Competition.",

    "It's always interesting seeing how bots would perform against an actual player\
    in video games. How do people manage to get an AI to outperform humans? My intro\
    to Artificial Intelligence class helped me understand the basics of MCTS and a/b\
    pruning, which led to the creation of my own little AI that'd be able to go head to\
    head with above average players.",

    "The Web contains so much that it'd make one wonder how they'd manage to store\
    information on the websites. Better yet, it makes people wonder how it is that\
    when we search for something, a certain selection of links are chosen in a certain\
    order. My information retrieval course taught me the basics on web search engines and how\
    they work - how they rank websites and how they go about retrieving that information. In\
    the end, I was able to create a mini search engine for UCI-related links."
]]

var pictures = [["./pics/algracing1.png","./pics/algracing2.png","./pics/algracing3.png"],
                ["./pics/esports1.png","./pics/esports2.png"],
                ["./pics/qfas_1.png", "./pics/qfas_2.png", "./pics/qfas_3.png"]]

var picture_index = 0

var topBar = document.querySelector(".pp-topbar");
var currentProject = document.querySelector(".pp-display");
var directory = document.querySelector(".pp-directory");
var currentSection = "Past Projects";

var index = 0;

topBar.addEventListener("click", changeCategory, false);
function changeCategory(e) {
    if (e.target !== e.currentTarget) {
        directory.className += " close";
        directory.className = "pp-directory";
        var clicked = e.target.id;

        while (directory.children.length !== 0) {
            directory.removeChild(directory.children[0]);
        }
        console.log(directory.children)
        if (clicked === "1"){
            currentSelection = "Past Projects";
            index = 0;
        }
        else if (clicked === "2"){
            currentSection = "Past Courses";
            index = 1;
        }

        for (let i = 0; i < titles[index].length ; i++){
            var node = document.createElement("DIV");
            
            node.id = i.toString();
            node.className = "pp-item";
            node.innerHTML = titles[index][i];

            var separator = document.createElement("HR");
            separator.id = "bar";

            directory.appendChild(node);
            directory.appendChild(separator);
        }
        console.log(directory.children)
        directory.className += " show"
    }
}



directory.addEventListener("click", navigateProject, false)
function navigateProject(e){
    if (e.target !== e.currentTarget) {
        var clicked = e.target.id;
        currentProject.querySelector(".pp-display-title").innerHTML = titles[index][parseInt(clicked)];
        currentProject.querySelector(".pp-display-description").innerHTML = text[index][parseInt(clicked)];
        currentProject.querySelector("#read_more_button").className = "button_display";
        var element = currentProject.querySelector(".pp-display-picture");
        element.querySelector("#image").className = "image"
        element.querySelector("#image").src = pictures[clicked][0];
    }
}