module.exports={
    name: "avatar",
    code: `
$color[1;#8C51FF]
$footer[1;Swift.]
$title[1;User Avatar]

$description[
    > **Showing avatar of:** $getobjectproperty[name]
 $image[$jsonRequest[https://thumbnails.roblox.com/v1/users/avatar?userIds=$message[1]&size=720x720&format=Png&isCircular=false;data[0].imageUrl]]
 $createObject[$jsonRequest[https://users.roblox.com/v1/users/$message[1]]]
$argscheck[1;User id? :ERROR:]
$cooldown[5s;<:time:1143606728445939813> Wait %time%]
    `
}
