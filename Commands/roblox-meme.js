module.exports = ({
    name: "meme",
      code: `
    $image[$getObjectProperty[url]]
    $title[**$getObjectProperty[title]**]
    $description[<:member:1124246687616073768> Author: $getobjectproperty[author]]
    $createObject[$httpRequest[https://meme-api.com/gimme/ROBLOXmemes]
    $color[8C51FF]
    `
    })