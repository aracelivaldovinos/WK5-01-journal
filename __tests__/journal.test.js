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
 
})