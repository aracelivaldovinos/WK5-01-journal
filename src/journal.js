export default function Entry (title,body) {
  this.title = title
  this.body = body
}

Entry.prototype.wordCount = function (){
  let wordCount = this.body.length
  return wordCount
}


Entry.prototype.vowelCheck = function () {
  const vowels = ["a","e","i","o","u"]
  let string = this.body.split(" ")
  let count = 0
  for (let i=0; i<vowels.length;i++){
    for (let j=0; j < string.length; j++ ) {
      if (string[j].includes(vowels[i]))  {
       return true        
    }
    
    
    }
  } 
  return false
}

Entry.prototype.vowelCount = function () {
  const vowels = ["a","e","i","o","u"]
  let string = this.body.split("")
  let count = 0
  for (let i=0; i<vowels.length;i++){
    for (let j=0; j < string.length; j++ ) {
      if (string[j].includes(vowels[i]))  {
        count++
        
    }
    
    
    }
  } 
  return count
}

Entry.prototype.consonantCheck = function () {
  const consonats = ["b","c","d","f","g","h","i","j","k","l","m","n","","p","q","r","s","t","v","w","z"]
  let string = this.body.split(" ")
  let count = 0
  for (let i=0; i<consonats.length;i++){
    for (let j=0; j < string.length; j++ ) {
      if (string[j].includes(consonats[i]))  {
       return true        
    }
    
    
    }
  } 
  return false
}

Entry.prototype.consonantCount = function () {
  const consonants = ["b","c","d","f","g","h","i","j","k","l","m","n","p","q","r","s","t","v","w","z"]
  let string = this.body.split("")
  let count = 0
  for (let i=0; i<consonants.length;i++){
    for (let j=0; j < string.length; j++ ) {
      if (string[j].includes(consonants[i]))  {
        count++
        
    }
    
    
    }
  } 
  return count
}

Entry.prototype.getTeaser1 = function () {
  let sentence = this.body.replace(/(\.+|\:|\!|\?)(\"*|\'*|\)*|}*|]*)(\s|\n|\r|\r\n)/gm, "$1$2|").split("|")
  return sentence
}

Entry.prototype.getTeaser2 = function () {
  let sentence = this.body.replace(/(\.+|\:|\!|\?)(\"*|\'*|\)*|}*|]*)(\s|\n|\r|\r\n)/gm, "$1$2|").split("|")
 let words = sentence[0].split(" ")
 return words
}

Entry.prototype.getTeaser3 = function () {
let sentence = this.body.replace(/(\.+|\:|\!|\?)(\"*|\'*|\)*|}*|]*)(\s|\n|\r|\r\n)/gm, "$1$2|").split("|")
let words = sentence[0].split(" ")

 if (words.length >= 8) {
   let newSentence = (words[0]+ " "+words[1]+ " "+words[2]+ " "+words[3] +" "+words[4]+" "+ words[5] +" "+ words[6] +" "+ words[7])
   return newSentence
 }else {
   return sentence[0]
 }
}
 