export default function Entry (title,body) {
  this.title = title
  this.body = body
}

Entry.prototype.wordCount = function (){
  let wordCount = this.body.length
  return wordCount
}