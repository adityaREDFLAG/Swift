module.exports = {
    name: "groupinfo",
    code: `
    $title[1;Group Info] 
    $description[> **Group ID:** $getobjectproperty[;id]
    > **Group Name:** $getobjectproperty[;name]
    > **Group Description:** $getobjectproperty[;description] $if[$getobjectproperty[;description]==;undefined;]
    > **Group Owner:** $getobjectproperty[;owner.username]
    > **Group Latest Shout:** $getobjectproperty[;shout.body] $if[$getobjectproperty[;shout.body]==;undefined;]]
    $color[1;#8C51FF]
    $footer[1;Swift.]
    $createObject[;$jsonRequest[https://groups.roblox.com/v1/groups/$message[1]]
    $argscheck[1;Group id? <:ERROR:1124246758080389190>]
    $thumbnail[$jsonRequest[https://thumbnails.roblox.com/v1/groups/icons?groupIds=$message&size=150x150&format=Png&isCircular=false;data[0].imageUrl]]
$cooldown[5s;<:time:1143606728445939813> Wait %time%]
    `
}