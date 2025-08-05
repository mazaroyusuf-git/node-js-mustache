/*
saat melakukan render dengan mustache data template akan di cache di memory agar data yang sama bisa di render lebih cepat tanpa harus mengkompilasi ulang data nya, kita bisa melakukan kompilasi semua data template terlebih dahulu dengan cara menggunakan function parse(template) harus sebelum memtoh render
*/

import Mustache from "mustache";

test("Compile ahead", () => {
    Mustache.parse("Hello, {{name}}");

    const data = Mustache.render("Hello, {{name}}", {name: "Yusuf"});
    expect(data).toBe("Hello, Yusuf");
})