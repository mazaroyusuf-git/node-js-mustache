/*
pada saat mengirim data ke tempalte kita juga bisa menggunakan data yang ada didalam nested object ataupun array,, misalnya jika data ada pada person.name maka di template juga {{person.name}}
*/


import Mustache from "mustache";

test("Nested", () => {
    Mustache.parse("Hello, {{person.name}}, my hobby is {{{person.hobby}}}");

    const data = Mustache.render("Hello, {{person.name}}, my hobby is {{{person.hobby}}}", {
        person: {
            name: "Yusuf",
            hobby: "<p>Coding</p>"
        }
    });
    expect(data).toBe("Hello, Yusuf, my hobby is <p>Coding</p>");
})