/*
Mustache JS juga tidak punya kemampuan untuk membaca template dari file, kita perlu melakukan nya secar manual, biasanya Mustache menggunakan nama file dengan ekstensi .mustache, kita bisa menggunakan standard library fs atau filesystem
*/

import Mustache from "mustache";
import fs from "fs/promises";

test("Mustache file", async () => {
    const helloTemplate = await fs.readFile("./templates/hello.mustache")
        .then(data => data.toString());

    const data = Mustache.render(helloTemplate, {title: "Yusuf"});

    console.log(data);
    expect(data).toContain("Yusuf");
})