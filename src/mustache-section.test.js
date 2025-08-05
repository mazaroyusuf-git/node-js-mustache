/*
ketika kita ingin menambahkan logic di mustache kita bisa menggunakan if else, ini dinamakan sections. untuk membuat sections kita bisa membuat, untuk pembuka {{#nama}} dan ditutup dengan {{/nama}}, lihat person.mustache sebagai contoh. apapun yang didalam atau diantara section tidak akan ditampilkan jika variable nya bernilai nullish

ini seperti if jika data ada makan akan ditampilkan jika tidak maka tidak ditampilkan

kadang ketika kita menggunakan sections lalu data nya tidak ada maka tidak akan ditampilkan, misal kita mau jika data nya tidak ada kita ingin menampilkan data yang lain atau seperti else nya, ini dinamakan inverted sections, untuk membuat nya kita bisa gunakan {{^name}} dan ditutup dengan {{/name}}
*/

import Mustache from "mustache";
import fs from "fs/promises";

test("Sections Not Showing", async () => {
    const personTemplate = await fs.readFile("./templates/person.mustache")
        .then(data => data.toString());

    //data kosong maka blok section tidak akan ditampilkan
    const data  = Mustache.render(personTemplate, {});
    expect(data).not.toContain("Hello Person");
    expect(data).toContain("Hello Guest");
});

/*
kita juga bisa mengirim data ke sections, misal nya di dalam sections person ada variable name, kita bisa memberi data name tersebut dengan cara menggunakan object person lalu didalam nya ada object name
*/

test("Sections Data", async () => {
    const personTemplate = await fs.readFile("./templates/person.mustache")
        .then(data => data.toString());

    //data kosong maka blok section tidak akan ditampilkan
    const data  = Mustache.render(personTemplate, {
        person: {
            name: "Yusuf"
        }
    });

    expect(data).toContain("Hello Person Yusuf");
});

/*
kita juga bisa menampilkan data list dengan sections untuk setiap data nya di dalam sections kita bisa menggunakan titik sebagai penanda nya, jika tidak ada list yang dikirm maka tidka akan di tampilkan. contoh sections nya bisa lihat di hobbies.mustache. lalu kita kirim data nya dalam bentuk array
*/

test("List", async () => {
    const hobbyTemplate = await fs.readFile("./templates/hobby.mustache")
        .then(data => data.toString());

    const data = Mustache.render(hobbyTemplate, {
        hobbies: ["Coding", "Gaming", "Praying"]
    });

    expect(data).toContain("Praying");
});

/*
kita bisa juga mengirim data array yang berisi object asalkan object nya mempunyai key yang sama seperti di template lihat di students.mustache
*/

test("Object Array", async () => {
    const hobbyTemplate = await fs.readFile("./templates/students.mustache")
        .then(data => data.toString());

    const data = Mustache.render(hobbyTemplate, {
        students: [
            {name: "Yusuf", value: 90},
            {name: "Mazaro", value: 100}
        ]
    });

    expect(data).toContain("Yusuf");
});