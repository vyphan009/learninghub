
var tip = false;
const tips_visibility = ["tips_hidden", "tips_visible"];
const tips_value = ["off", "on"];
const tips_value_id = ["tips_off", "tips_on"];
const mainmenuURL = "./menu.html";
const questLaunchURL = "./questlaunch.html";
const urlOpenOption = "_self";

function toggleTip()
{
    let elements = tip === true ? document.getElementsByClassName("tips_visible") : document.getElementsByClassName("tips_hidden");
    tip = !tip;
    let index = tip ? 1 : 0;
    for (let i = elements.length - 1; i >= 0; --i)
    {
        elements[i].className = tips_visibility[index];
    }
    let div = document.getElementById(tips_value_id[(index + 1) % 2]);
    if (div.lastChild.nodeValue !== null)
    {
        div.lastChild.nodeValue = tips_value[index];
        div.setAttribute("id", tips_value_id[index]);
    }
}

function mainMenuClick()
{
    window.open(mainmenuURL, urlOpenOption);
}

function updateImage(source)
{
    let image = document.getElementById("current_image");
    image.src = source;
}

testObj = {
    "subjects":[
    {
        "subject":"Arts",
        "quests": [
        { "title":"art1", "image":"images/alien_landscape_by_moon_manunit_42_d4wwmvy-pre.jpg", "solved":"true", "Feedback":"true" },
        { "title":"art2", "image":"images/alien_landscape_by_moon_manunit_42_d4wwmvy-pre.jpg", "solved":"true", "Feedback":"true" },
        { "title":"art3", "image":"images/alien_landscape_by_moon_manunit_42_d4wwmvy-pre.jpg", "solved":"false", "Feedback":"true" },
        { "title":"art4", "image":"images/alien_landscape_by_moon_manunit_42_d4wwmvy-pre.jpg", "solved":"true", "Feedback":"true" },
        { "title":"art5", "image":"images/alien_landscape_by_moon_manunit_42_d4wwmvy-pre.jpg", "solved":"false", "Feedback":"false" },
    ]}
    ,{
        "subject":"Math",
        "quests": [
        { "title":"math1", "image":"images/alien_landscape_by_moon_manunit_42_d4wwmvy-pre.jpg", "solved":"true", "Feedback":"true" },
        { "title":"math2", "image":"images/alien_landscape_by_moon_manunit_42_d4wwmvy-pre.jpg", "solved":"true", "Feedback":"false" },
    ]}
    ,{
        "subject":"Sciences",
        "quests": [
        { "title":"Sciences1", "image":"images/alien_landscape_by_moon_manunit_42_d4wwmvy-pre.jpg", "solved":"true", "Feedback":"true" },
        { "title":"Sciences2", "image":"images/alien_landscape_by_moon_manunit_42_d4wwmvy-pre.jpg", "solved":"true", "Feedback":"false" },
        { "title":"Sciences3", "image":"images/alien_landscape_by_moon_manunit_42_d4wwmvy-pre.jpg", "solved":"false", "Feedback":"true" },
    ]}
    ]
}

testString = JSON.stringify(testObj);
updateQuestList(testString);
var quests;
function updateQuestList(questList)
{
    quests = JSON.parse(questList);
    drawQuestList();
}

function drawQuestList()
{
    const itemWidth = 230;
    const itemHeight = 70;

    let width = window.innerWidth;
    let questListTable = document.getElementById("quest_list_table");

    while (questListTable.hasChildNodes())
    {
        questListTable.removeChild(questListTable.lastChild);
    }

    let colCount = Math.floor(width / itemWidth);
    if (colCount <= 0)
    {
        colCount = 1;
    }

    for (let i = 0; i < quests.subjects.length; ++i)
    {
        // subject
        let TR = document.createElement("TR");
        questListTable.appendChild(TR);
        let subject = document.createElement("TD");
        subject.setAttribute("id", "quest_subject");
        let subjectText = document.createTextNode(quests.subjects[i].subject);
        subject.appendChild(subjectText);
        TR.appendChild(subject);

        // quests
        for (let j = 0; j < quests.subjects[i].quests.length;++j)
        {
            if (j % colCount == 0)
            {
                TR = document.createElement("TR");
                questListTable.appendChild(TR);    
            }

            let quest = document.createElement("TD");
            quest.setAttribute("id", "quest");
            TR.appendChild(quest);

            let questTitle = document.createElement("DIV");
            questTitle.setAttribute("id", "current_quest_title_font");
            questTitle.appendChild(document.createTextNode(quests.subjects[i].quests[j].title));
            quest.appendChild(questTitle);

            let questButton = document.createElement("BUTTON");
            questButton.dataset.i = i;
            questButton.dataset.j = j;
            questButton.setAttribute("id", "rounded_list_button");
            questButton.onclick = function() {
                questClick(this);
            };
            quest.appendChild(questButton);
            
            let questImage = document.createElement("IMG");
            questImage.setAttribute("src", quests.subjects[i].quests[j].image);
            questImage.setAttribute("id", "quest_image");
            questImage.setAttribute("align", "left");
            questButton.appendChild(questImage);

            let solved = document.createTextNode("Solved");
            quest.appendChild(solved);
            quest.appendChild(document.createElement("BR"));
            let feedback = document.createTextNode("Feedback");
            quest.appendChild(feedback);
        }
    }
}

function questClick(button)
{
    window.open(questLaunchURL, urlOpenOption);
}

function currentQuestClick()
{
    window.open(questLaunchURL, urlOpenOption);
}

window.onresize = drawQuestList;