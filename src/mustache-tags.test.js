/*
variable pada template yaitu {{ data }} itu dinamakan tags jika ingin menampilkan HTML bisa gunakan {{{kode html}}}
*/

import Mustache from "mustache";

test("Compile ahead", () => {
    Mustache.parse("Hello, {{name}}, my hobby is {{{hobby}}}");

    const data = Mustache.render("Hello, {{name}}, my hobby is {{{hobby}}}", {
        name: "Yusuf",
        hobby: "<p>Coding</p>"
    });
    expect(data).toBe("Hello, Yusuf, my hobby is <p>Coding</p>");
})