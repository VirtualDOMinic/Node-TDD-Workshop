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
        t.error(err, "no error");
        t.equal(res.statusCode, 200, "Should return 200");
        t.end();
    })
});

test("home route", (t) => {
    supertest(router)
    .get('/')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err,res) => {
        t.error(err, "no error")
        t.equal(res.text, "Hello", "Response should contain 'Hello'")
        t.end()
    });
})

test("elephants returns 404 with 'unknown uri'", (t) => {
    supertest(router)
    .get('/elephants')
    .expect(404)
    .expect("Content-Type", /html/)
    .end((err, res) => {
        t.error(err, "no error if this passes")
        t.equal(res.text, "Unknown URI", "Response should state 'Unknown URI'")
        t.end()
    })
})

