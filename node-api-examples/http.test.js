const server = require("./http");
const request = require("supertest");

describe("Testing the server", () => {

    describe("Testing the root route", () => {
        it("/ should get back a 200", (done) => {
            request(server).get("/").expect(200).end((error) => {
                if(error){
                    throw error;
                } else {
                    done();
                }
            });
    
        });
    });
    
    describe("Testing the /data route", () => {
        it("/data should get back a 200", (done) => {
            done();
        })
        it("/data should display my name", (done) => {
            done()
        });
    });

    it("/data should display my name", (done) => {
        request(server).get("/data").expect(200).end((error, reponse) => {
            if(error) {
                throw error;
            } else {
                console.log(reponse.body.data.name);
                expect(response.body.data.name).toBe("Kwame")
                done();
            }
        });
    });
});

