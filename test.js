const test = require("tape");
const supertest = require("supertest");
const router = require("./router");

test("initialise", (t) => {
    let num = 2;
    t.plan(1);
    t.equal(num, 2, "Should return 2!");
    // t.end(); // using t.plan(1) instead
});

test("home route returns a status code of 200", (t) => {
    supertest(router)
    .get("/")
    .expect(200)
    .expect("content-type", /html/)
    .end((err, res) => {
        t.error(err);
        t.equal(res.statusCode, 200, "Should return 200");
        t.end();
    })
});

