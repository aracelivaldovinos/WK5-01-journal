export default function Entry (title,body) {
  this.title = title
  this.body = body
}

Entry.prototype.wordCount = function (){
  let wordCount = this.body.length
  return wordCount
}

Entry.prototype.vowelCount = function () {
  const vowels = ["a","e","i","o","u"]
  let vowelCount = 0
  for (let i=0; i<=vowels.length;i++){
    if (this.body[i].includes(vowels[i]))  {
      return 1
    }
  } 
  
}