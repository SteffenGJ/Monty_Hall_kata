import { Listener } from "../../src/listener";
import { Publisher } from "../../src/publisher";


describe("Publisher", () => {
    it("should send out a message to its listeners", () => {
        let publisher = new Publisher();
        let listener = new Listener();
        listener.subscribe(publisher);

        publisher.doSomething();

        expect(listener.eventCalled()).toBe(true);
    })

})