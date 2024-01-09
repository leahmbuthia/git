// app.ts

class Greeting {
    private message: string;

    constructor(message: string) {
        this.message = message;
    }

    greet() {
        console.log(this.message);
    }
}

const greetingInstance = new Greeting("Hello, TypeScript!");
greetingInstance.greet();
