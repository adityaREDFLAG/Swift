module.exports = {
    name: "userinfo",
    code: `

$color[1;#8C51FF]
$footer[1;Swift.]
$title[1;User Info]
$description[> **User ID:** $getobjectproperty[id]\n 
> **User Name:** $getobjectproperty[name] $if[$jsonRequest[https://premiumfeatures.roblox.com/v1/users/$message/validate-membership]==true;<:pre:1150311081835761716>;][$if[$getobjectproperty[hasVerifiedBadge]==true;<:rv:1147435186829660202>;]\n
> **User Display Name:** $getobjectproperty[displayName]\n
> **User Description:** $getobjectproperty[description]
$if[$getobjectproperty[description]==;undefined;]
> **Account Created:** $getobjectproperty[created]\n
> **Account Banned:** $getobjectproperty[isBanned]]
$thumbnail[$jsonRequest[https://thumbnails.roblox.com/v1/users/avatar?userIds=$message&size=720x720&format=Png&isCircular=false;data[0].imageUrl]]
$createObject[$jsonRequest[https://users.roblox.com/v1/users/$message[1]]]
$argscheck[1;User id? <:ERROR:1124246758080389190>]
$cooldown[5s;<:time:1143606728445939813> Wait %time%]
`}