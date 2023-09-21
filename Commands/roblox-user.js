module.exports = {
    name: "userinfo",
    code: `

$color[1;#8C51FF]
$footer[1;Swift.]
$title[1;User Info]
$description[> **User ID:** $getobjectproperty[id]
    > **User Name:** $getobjectproperty[name]
    > **User Display Name:** $getobjectproperty[displayName]
    > **User Description:** $getobjectproperty[description] $if[$getobjectproperty[description]==;undefined;]
    > **Account Created:** $getobjectproperty[created]]
$image[$jsonRequest[https://thumbnails.roblox.com/v1/users/avatar?userIds=$message&size=720x720&format=Png&isCircular=false;data[0].imageUrl]]
$createObject[$jsonRequest[https://users.roblox.com/v1/users/$message[1]]]
$argscheck[1;User id? <:ERROR:1124246758080389190>]
    `
}