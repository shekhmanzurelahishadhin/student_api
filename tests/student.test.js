const request = require("supertest");
const app = require("../app");

describe("Student API Tests", () => {

    test("GET / should return welcome message", async () => {

        const res = await request(app).get("/");

        expect(res.statusCode).toBe(200);

        expect(res.body.message).toBe("Student API is running");

    });

    test("GET /students should return student list", async () => {

        const res = await request(app).get("/students");

        expect(res.statusCode).toBe(200);

        expect(Array.isArray(res.body)).toBe(true);

    });

    test("POST /students should create a new student", async () => {

        const res = await request(app)
            .post("/students")
            .send({
                name: "Hasan"
            });

        expect(res.statusCode).toBe(201);

        expect(res.body.name).toBe("Hasan");

    });

    test("GET /students/1 should return one student", async () => {

        const res = await request(app).get("/students/1");

        expect(res.statusCode).toBe(200);

        expect(res.body.id).toBe(1);

    });

    test("DELETE /students/2", async () => {

        const res = await request(app).delete("/students/2");

        expect(res.statusCode).toBe(200);

        expect(res.body.message).toBe("Student deleted");

    });

});
