import {shortenText} from '../utils/functions'
import {wordCount, attachUserName} from '../../server/utils'
import {shortText, longText, posts, users} from './__data__/testData'

test('shortenText will not alter a string under 100 characters', () => {
  expect(shortenText(shortText)).toHaveLength(29)
})

test('shortenText will cut text to 100 characters and add 3 periods at the end', () => {
  expect(shortenText(longText)).not.toHaveLength(longText.length)
  expect(shortenText(longText).slice(-3)).toBe('...')
})

test('wordCount correctly counts the number of words in a string', () => {
  expect(wordCount(posts)).toBe(233)
})

test('attachUserName checks if the first post returned has the property displayName', () => {
  const newPosts = attachUserName(users, posts)
  expect(newPosts[0]).toHaveProperty('displayName')
})

test('attachUserName removes posts with no matching user', () => {
  const newPosts = attachUserName(users, posts)
  const deletedPost = posts[5]
  expect(newPosts).not.toContainEqual(deletedPost)
})