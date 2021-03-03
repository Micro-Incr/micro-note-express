import "dotenv/config";
import app from "../server/app";
import mongoose from "mongoose";
import supertest from "supertest";

const request = supertest(app);

beforeAll(async (done) => {
    await mongoose.connect(process.env.DATABASE_URI_TEST!,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    }).then(() => {
        console.log("Connected to the database");
        done();
    });
});

afterAll((done) => {
    mongoose.disconnect(done);
});

it("Gets the invalid endpoint and return a 404 status", async (done) => {
    const response = await request.get("/test");
    expect(response.status).toBe(404);
    // expect(response.body).toMatch({ error: 'Nothing here' })
    done();

});
