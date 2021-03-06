assert = require('assert'), buffertools = require('buffertools'), Buffer = require('buffer').Buffer;

// these trigger the code paths for UnaryAction and BinaryAction
assert.throws(function() { buffertools.clear({}); });
assert.throws(function() { buffertools.equals({}, {}); });

a = new Buffer('abcd'), b = new Buffer('abcd'),  c = new Buffer('efgh');
assert.ok(buffertools.equals(a, b));
assert.ok(!buffertools.equals(a, c));

assert.ok(buffertools.compare(a, b) == 0);
assert.ok(buffertools.compare(a, c) < 0);
assert.ok(buffertools.compare(c, a) > 0);

b = new Buffer('****');
assert.equal(b, buffertools.clear(b));
assert.equal(b.inspect(), '<Buffer 00 00 00 00>');	// FIXME brittle test

b = new Buffer(4);
assert.equal(b, buffertools.fill(b, 42));
assert.equal(b.inspect(), '<Buffer 2a 2a 2a 2a>');

b = new Buffer(4);
assert.equal(b, buffertools.fill(b, '*'));
assert.equal(b.inspect(), '<Buffer 2a 2a 2a 2a>');

b = new Buffer(4);
assert.equal(b, buffertools.fill(b, 'ab'));
assert.equal(b.inspect(), '<Buffer 61 62 61 62>');

b = new Buffer(4);
assert.equal(b, buffertools.fill(b, 'abcd1234'));
assert.equal(b.inspect(), '<Buffer 61 62 63 64>');
