var titles = [[
    "Algorithm Racing!",
    "eSports Tracker",
    "Questions From a Stranger",
    "Covid-19 Simulator",
    "CS 178: Machine Learning and Data Mining",
    "CS 171: Intro to Artificial Intelligence",
    "CS 121: Information Retrieval",
    "CS 132: Computer Networks",
    "CS 163: Graph Algorithms",
    "CS 122A: ntroduction to Data Management",
    "Informatics 131: Human Computer Interaction",
    "CS 117: Computer Vision"
],[
    "CS 178: Machine Learning and Data Mining",
    "CS 171: Intro to Artificial Intelligence",
    "CS 121: Information Retrieval",
    "CS 132: Computer Networks",
    "CS 163: Graph Algorithms",
    "CS 122A: ntroduction to Data Management",
    "Informatics 131: Human Computer Interaction",
    "CS 117: Computer Vision"
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
    asking what or saying what.",

    "My friend came up to me and asked if I could teach him the basics of ReactJS, and having\
    been using the language for some time now, I thought it'd be an even better idea to just create\
    something together. Right after my finals this Winter quarter, we saw and signed up for Hack PSU\
    Spring 2021, with the only goal of having a good time, creating something that could be an introduction\
    for my friend.",

    "Probably one of the harder courses I've taken. Considering I've never never\
    really dealt with Machine Learning, there was definitely a lot to take in over the\
    Fall quarter (2020). Upon learning about many different ML techniques, the final\
    assignment for this class was to create a learner to compete in a Kaggle Competition.\
    </br></br>For me personally, I'm interested in the idea of machine learning. It's definitely\
    a wonder how one can make a machine learn to accurately predict outcomes based purely on\
    past events, but delving deeper into the topic made me feel like this was a whole new\
    realm of coding that would be quite difficult to wrap my head around.\
    </br></br>Nonetheless, I did my fair share of learning and produced a learner that would predict\
    close to 75% in this kaggle competition. Definitely not the best but a great feat for myself.",

    "It's always interesting seeing how bots would perform against an actual player\
    in video games. How do people manage to get an AI to outperform humans? My intro\
    to Artificial Intelligence class helped me understand the basics of MCTS and a/b\
    pruning, which led to the creation of my own little AI that'd be able to go head to\
    head with above average players.\
    </br></br>The game in question was no other than checkers, and my partner and I had quite\
    a big hurdle to jump over before having a competent AI. In our early stages of development,\
    we hadn't quite grasped the idea of MCTS, so we would play against other AI's with no clear\
    indication of a straight-thinking AI - randomly taking moves wasn't enough to clearly gauge\
    a functioning AI.\
    </br></br>It wasn't until midway where we realized that we needed to make a tree (who could've guessed that)\
    rather than trying to create our own methods of a monte carlo tree searcher. By the end of it all,\
    our AI was doing quite well. Passable when going against AIs of increasing intelligence.\
    </br></br>It is a very interesting topic for me, and something I'd like to touch up on again in the future.",

    "The Web contains so much that it'd make one wonder how they'd manage to store\
    information on the websites. Better yet, it makes people wonder how it is that\
    when we search for something, a certain selection of links are chosen in a certain\
    order. My information retrieval course taught me the basics on web search engines and how\
    they work - how they rank websites and how they go about retrieving that information. In\
    the end, I was able to create a mini search engine for UCI-related links."
]]

// a href=\"https://github.com/brianv212/algorithm_racing\" target=\"_blank\">Github Repository</a>"

var text_full = [[
    "</br></br>(<a onclick=\"redirect('https://www.youtube.com/watch?v=kPRA0W1kECg')\" class='link'>The YouTube video in question</a>) Volume warning!\
    </br></br>This was my first ever website created, and my first time ever using React. Looking back now, this definitely\
    could've been done in a much shorter period of time, but what mattered to me was that I took something out of\
    if, and that was a better understanding of React.\
    </br></br>As for the toughest challenge here, it was understanding how to 'animate' the bars moving on the screen. After many days\
    later and many hours spent learning how to style it, how to use Javascript Promises and async, and how to properly implement those\
    ideas into the algorithms, I was able to create this neat little website.\
    </br></br><a href=\"https://github.com/brianv212/algorithm_racing\" target=\"_blank\">Github Repository</a>",

    "</br></br>This was done in January after I had just found out about Rocket League.\
    I am by no means any good at the game, but as with any other game, it's always refreshing\
    to see professional players play the game. Much to learn and get hyped up about.\
    </br></br>As I was browsing these esport sites, I began to wonder how exactly all this information\
    could be accessed, and with that I discovered PandaScore, a website with a free API that\
    can gather quite a bit of information on upcoming events. The best part was that I'd be able to\
    make large scale websites as the ones I've seen, so I got to starting something in which I can add onto\
    time and time again. This personal project really tested my\
    ability to use APIs and enhanced my ability to read and gather data. In the end, I created a simple\
    web application that gathers information on upcoming eSporting events, Rocket League included!\
    </br></br><a onclick=\"redirect('https://github.com/brianv212/eSportsTracker')\" class='link'>Github Repository</a>",

    "</br></br>I've always wondered about this, and it wasn't until a friend came\
    up to me saying how she wanted to ask me something, but didn't really want me to\
    know all the details of something private. \"If it was purely anonymous then maybe\
    I would come to you for help.\" What if there was a way to actually do that? That's\
    when I decided to get my hands tied with databases and web service, and thankfully\
    I had firebase to help me out and make for easier learning. \
    </br></br>Perhaps the biggest problem I ran into was trying to understand the documentation\
    of Firebase, but with some determination it came by easily.\
    It's definitely not a perfect application, but given more time I would like to\
    add more features to it and make it a cleaner-looking application!\
    </br></br><a onclick=\"redirect('https://github.com/brianv212/questions_from_a_stranger')\" class='link'>Github Repository</a>",
    "</br></br>We weren't going for any of the prizes. We simply wanted to teach a good friend how to use the language.\
    It was also a plus being able to refine the skills I already have with this project. When thinking about ideas, we noticed\
    a particular category about spreading awareness about Covid-19 using any technology. We went with this idea because it was\
    simple, and broad enough of a category that we could get a little creative with.\
    </br></br>What ended up happening was implementing an idea where we simulate the spread of covid (or any disease for that matter),\
    using very simple methods. The idea was having infected and noninfected characters in a confined area, and showing how quickly\
    a disease could spread with a lack of a mask.\
    </br></br>It was a very fun process and we all definitely enjoyed working on it. Check it out!\
    </br></br><a onclick=\"redirect('https://kodykhuu.github.io/covid-sim')\" class='link'>Website</a>\
    </br><a onclick=\"redirect('https://github.com/brianv212/covid-sim-1')\" class='link'>Github Repository</a>\
    </br><a onclick=\"redirect('https://devpost.com/software/sus-simulator')\" class='link'>Dev Post</a>"],
    []
]

var pictures = [["./pics/algracing1.png","./pics/algracing2.png","./pics/algracing3.png"],
                ["./pics/esports1.png","./pics/esports2.png"],
                ["./pics/qfas_1.png", "./pics/qfas_2.png", "./pics/qfas_3.png"],
                ["./pics/covidsim1.png","./pics/covidsim2.png","./pics/covidsim3.png"],
                ["./pics/qfas_2.png"],
                ["./pics/qfas_2.png"],
                ["./pics/qfas_2.png"],
                ["./pics/qfas_2.png"],
                ["./pics/qfas_2.png"],
                ["./pics/qfas_2.png"],
                ["./pics/qfas_2.png"],
                ["./pics/qfas_2.png"]]

// var picture_index = 0;
// var picture_cycle = 0;

var topBar = document.querySelector(".pp-topbar");
var currentProject = document.querySelector(".pp-display");
var directory = document.querySelector(".pp-directory");
var redirect = document.querySelector(".changeUrl");

// var readMore = document.querySelector("#read_more_button");
// var readMoreSection = document.querySelector(".read-more");
// var readMoreTitle = document.querySelector(".read-more-title")
// var readMoreExit = document.querySelector(".read-more-exit");
// var readMoreText = document.querySelector(".read-more-description");
// var readMoreVisuals = document.querySelector(".read-more-visuals");
// var readMoreOverlay = document.querySelector(".overlay");

var index_category = 0;
// var index_category_item = 0;

topBar.addEventListener("click", changeCategory, false);
function changeCategory(e) {
    if (e.target !== e.currentTarget) {
        // Remove all items from view
        while (directory.children.length !== 0) {
            directory.removeChild(directory.children[0]);
        }

        let item = 0;
        for (let i = 0; i < Math.ceil(titles[index_category].length / 3); i++){
            // Make a new row
            // var new_row = document.createElement("DIV");
            // new_row.className = "pp-display-row";

            // for the next three items: add
            var tracker = 2;
            while (tracker !== -1){
                console.log(tracker);
                if (item >= titles[index_category].length) {
                    break;
                }
                else {
                    var node = document.createElement("DIV");
                    node.className = "pp-display-picture";

                    var pic = document.createElement("IMG");
                    pic.className = "image";
                    pic.id = item.toString();
                    pic.src = pictures[item][0];
        
                    node.appendChild(pic);  
                    directory.appendChild(node);
                }
                tracker -= 1;
                item += 1;
            }
        }

        console.log(directory.children)
        directory.className += " show"

        var clicked = 0;
        currentProject.querySelector(".pp-display-title").innerHTML = titles[index_category][parseInt(clicked)];
        currentProject.querySelector(".pp-display-description").innerHTML = text[index_category][parseInt(clicked)] + text_full[index_category][parseInt(clicked)];
        // index_category_item = parseInt(clicked);

        currentProject.className += " show"
    }
}



directory.addEventListener("click", navigateProject, false)
function navigateProject(e){
    if (e.target !== e.currentTarget) {
        var clicked = e.target.id;  
        console.log(clicked)
        currentProject.querySelector(".pp-display-title").innerHTML = titles[index_category][parseInt(clicked)];
        currentProject.querySelector(".pp-display-description").innerHTML = text[index_category][parseInt(clicked)] + text_full[index_category][parseInt(clicked)];
        // index_category_item = parseInt(clicked);

        // var element = currentProject.querySelector(".pp-display-pictures");
        // if (index_category == 0){
        //     element.querySelector("#image").className = "image";
        //     element.querySelector("#image").src = pictures[clicked][0];
        // }
        // else {
        //     element.querySelector("#image").className = "image_empty";
        // }
    }
}

// readMore.addEventListener("click", openReadMore, false)
// function openReadMore(e){
//     readMoreTitle.innerHTML = titles[index_category][index_category_item];

//     readMoreText.innerHTML = text[index_category][index_category_item] + text_full[index_category][index_category_item];

//     readMoreVisuals.querySelector("#rmimage").src = pictures[index_category_item][0]
//     readMoreSection.classList.add("read-more-active");
//     readMoreOverlay.classList.add("overlay-active");
// }

// readMoreExit.addEventListener("click", closeReadMore, false)
// function closeReadMore(e){
//     readMoreText.innerHTML = "";
//     readMoreSection.classList.remove("read-more-active");
//     readMoreOverlay.classList.remove("overlay-active");
// }

// readMoreVisuals.addEventListener("click", cycleImages, false)
// function cycleImages(e){
//     picture_cycle += 1;
//     if (picture_cycle == pictures[index_category_item].length){ picture_cycle = 0; }
//     readMoreVisuals.querySelector("#rmimage").src = pictures[index_category_item][picture_cycle];
// }

redirect.addEventListener("click", changeUrl, false)
function changeUrl(e){
    console.log("Texting");
    history.pushState({}, 'Title', '/Url/Test');
    document.load('/url html');
}