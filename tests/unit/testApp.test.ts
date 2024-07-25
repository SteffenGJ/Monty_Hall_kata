/**
 * @jest-environment jsdom
 */

import { Publisher } from "../../src/publisher";
import { TestApp } from "../resources/temporary";

describe("TestApp", () => {
    it("should set up a model of the whole application for testing", () => {
        let app = new TestApp();
        let eventPublisher = new Publisher();
        app.start(eventPublisher);
        let currentBody = document.body.innerHTML;
        expect(currentBody).toContain("<h1>Home</h1>");
    })
})