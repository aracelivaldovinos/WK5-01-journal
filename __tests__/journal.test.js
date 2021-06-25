import { TestScheduler } from 'jest-cli';
import Entry from './../src/journal.js';
describe('Entry', () => {
  test('should create a entry object with two strings', () =>{
    const entry = new Entry("Today",["Today", "was", "great"])
    expect(entry.title).toEqual("Today")
    expect(entry.body).toEqual(["Today", "was", "great"])
  })
  test('should count the number words in body', () =>{
    const entry = new Entry("Today",["Today" ,"was" ,"great"])
    expect(entry.wordCount()).toEqual(3)
  })
  test('should recognize a vowel in a word', () =>{
    const entry = new Entry("Today","hello")
    expect(entry.vowelCheck()).toEqual(true)
  })
  test('should recognize that there is not a vowel in a word', () =>{
    const entry = new Entry("Today","hll")
    expect(entry.vowelCheck()).toEqual(false)
  })
  test('should count when there is a vowel in a word', () =>{
    const entry = new Entry("Today","hello")
    expect(entry.vowelCount()).toEqual(2)
  })
  test('should count when there is a vowel in more that one word', () =>{
    const entry = new Entry("Today","hello its a beautiful day ")
    expect(entry.vowelCount()).toEqual(10)
  })
  test('should recognize a consonant', () =>{
    const entry = new Entry("Today","b")
    expect(entry.consonantCheck()).toEqual(true)
  })  
  test('should count # of consonant in a word', () =>{
    const entry = new Entry("Today","hello")
    expect(entry.consonantCount ()).toEqual(3)
  }) 
  test('should split strings into sentences', () =>{
    const entry = new Entry("Today","hello my name. is araceli!")
    expect(entry.getTeaser1 ()).toEqual(["hello my name.", "is araceli!"])
  }) 
  test('should split first sentence', () =>{
    const entry = new Entry("Today","hello my name. is araceli!")
    expect(entry.getTeaser2 ()).toEqual(["hello", "my", "name."])
  }) 
  test('should display first 8 words in a sentence', () =>{
    const entry = new Entry("Today","hello my name is araceli i like gum and candy. is araceli!")
    expect(entry.getTeaser3 ()).toEqual("hello my name is araceli i like gum")
  }) 
  test('should display first 8 words in a sentence', () =>{
    const entry = new Entry("Today","hello my name is araceli. is araceli!")
    expect(entry.getTeaser3 ()).toEqual("hello my name is araceli.")
  }) 
 
})