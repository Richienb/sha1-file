const test = require("ava")
const sha1File = require(".")

const hashFile = "fixtures/test.txt"
const hashResult = "a0b65939670bc2c010f4d5d6a0b3e4e4590fb92b"

test("main", async t => {
	t.is(await sha1File(hashFile), hashResult)
})

test("synchronous usage", t => {
	t.is(sha1File.sync(hashFile), hashResult)
})
