// // example 1

// class Greetings {
//     english() { return "Hello"; }
//     spanish() { return "Hola"; }
// }

// class MoreGreetings {
//     german() { return "Hallo"; }
//     french() { return "Bonjour"; }
// }

// const greetings = new Greetings();
// const moreGreetings = new MoreGreetings();

// const allGreetings = new Proxy(moreGreetings, {
//     get: function (target, property) {
//         return target[property] || greetings[property]
//     }
// })

// console.log(allGreetings.english()); // Hello


// example 2
class Page {
    constructor() {}

    goto() {
        console.log("Going to page");
    }

    setCookie() {
        console.log("Setting cookie");
    }
}


class CustomPage {
    static build() {
        const page = new Page();
        const customPage = new CustomPage(page);
        const superPage = new Proxy(customPage, {
            get: function (target, property) {
                return target[property] || page[property]
            }
        })

        return superPage;
    }

    constructor(page) {
        this.page = page;
    }

    login() {
        this.page.goto();
        this.page.setCookie();
    }
}

const superPage = CustomPage.build();
superPage.login(); // Going to page, Setting cookie