var supertest = require("supertest");
var should = require("should");
var server = supertest.agent("http://localhost:3000");

console.log(server);

// UNIT test begin

describe("#1 SERVER UP TEST", function () {

  // #1 should return home page

  it("#1  Home url /  Should return Hello with status 200", function (done) {

    // calling home page api
    server
      .get("/")
      .expect("Content-type", /json/)
      .expect(200) // THis is HTTP response
      .end(function (err, res) {
        // HTTP status should be 200
        res.status.should.equal(200);
        // Error key should be false.
        // console.log(res);
        console.log("Response :" + res.text);
        //res.text.should.equal('Hello, sls!');
        // res.body.error.should.equal(false);
        done();
      });
  });

});
