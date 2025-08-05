/*
Mustache : https://mustache.github.io/ 
Mustache Standarization : https://mustache.github.io/mustache.5.html 
Mustache Node Js : https://github.com/janl/mustache.js/ / https://www.npmjs.com/package/mustache 

Mustache adalah package library yang digunakan untuk membuat template engine, misal nya kita mau buat html namun data nya mau kita buat dinamis, kita bisa melakukan ini dengan mustache dengan membuat template lalu membuat variable pada tempalte untuk nanti data nya dikirim ke tempalte tersebut

untuk menggunakan mustache kita perlu membuat template dan dan dimana data nya dikirim, kita bisa menggunakan function render(nama template, data), untuk data nya akan ditampilkan dimana kita bisa menggunakan {{ data }} lalu untuk menentukan data nya kita bisa menggunakan js object data: value
*/

import Mustache from "mustache";

test("Mustache", () => {
    const data  = Mustache.render("Hello, {{name}}", {name: "Yusuf"});
    expect(data).toBe("Hello, Yusuf");
})

/*
di template mustache kita bisa menambhakan comment dengan menggunakan {{! comment}}
*/