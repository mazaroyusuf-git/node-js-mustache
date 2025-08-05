/*
saat membuat template kadang kita ingin membagi template menjadi beberapa bagian misal nya ada 3 template yaitu header body dan footer, kita mau membagi2 itu kedalam bagian dan menjadikan nya satu kita bisa menggunakan tags {{> namaPartial}} misal nya

{{> header}}
{{> content}}
{{> footer}}

atau liat contoh di content.mustache

untuk menambahkan partial nya kita bisa menggunakan parameter ke 3 pada render lalu buat key dan value sesuai template nya
*/

import Mustache from "mustache";
import fs from "fs/promises";
import { title } from "process";
import e from "express";

test("Partials", async () => {
    const header = await fs.readFile("./templates/header.mustache").then(data => data.toString());
    const footer = await fs.readFile("./templates/footer.mustache").then(data => data.toString());
    const content = await fs.readFile("./templates/content.mustache").then(data => data.toString());

    const data = Mustache.render(content, {
        title: "Partials",
        content: "Mazaro Yusuf Gunardiawan"
    }, {
        header: header,
        footer: footer
    });

    expect(data).toContain("Partials");
    expect(data).toContain("Mazaro Yusuf Gunardiawan");
})