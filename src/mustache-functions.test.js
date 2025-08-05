/*
selain data kita juga bisa mengakses function, kita cukup membuat fucntion dengan parameter test dan render, 
*/

import Mustache from "mustache";
import fs from "fs/promises";

test("Functions", () => {
    const parameter = {
        name: "Yusuf", //name akan dimasukkan ke parameter text
        upper: () => { //kita bisa kirim function ini ke template
            return (text, render) => {
                return render(text).toUpperCase();
            }
        }
    }

    //nanti name didalam function upper akan di manipulasi
    const data = Mustache.render("Hello {{#upper}}{{name}}{{/upper}}", parameter);
    expect(data).toBe("Hello YUSUF")
})