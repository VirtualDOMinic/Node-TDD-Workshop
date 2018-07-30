const test = require("tape");
const supertest = require("supertest");

test("initialise", (t) => {
    let num = 2;
    t.plan(1);
    t.equal(num, 2, "Should return 2!");
    // t.end(); // using t.plan(1) instead
});

