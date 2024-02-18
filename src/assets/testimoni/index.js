import org1 from "./org1.svg"
import org2 from "./org2.svg"
import org3 from "./org3.svg"
import org4 from "./org4.svg"
import org5 from "./org5.svg"
import org6 from "./org6.svg"
import org7 from "./org7.svg"
import org8 from "./org8.svg"
import org9 from "./org9.svg"
import org10 from "./org10.svg"

const picts = [org1, org2, org3, org4, org5, org6, org7, org8, org9, org10]
const names = [
    "Putra", "Dewi", "Budi", "Sari", "Adi", "Lina", "Joko", "Rini", "Rudi", "Rina", "Agus", "Nina", "Hadi", "Siska", "Rian", "Linda", "Ari", "Ratna", "Dito", "Dina", "Doni", "Lia", "Eko", "Fitri", "Aldi", "Tiara", "Yoga", "Sinta", "Andi", "Maya", "Rizki", "Rina", "Arief", "Ani", "Wawan", "Wati", "Yudi", "Tika", "Firman", "Rika", "Bayu", "Putri", "Eka", "Dewa", "Citra", "Galang", "Caca", "Irfan", "Laras", "Arif", "Ratih", "Aris", "Dian", "Galih", "Suci", "Rifki", "Nadia", "Ilham", "Dini", "Fajar", "Rika", "Aji", "Ayu", "Rio", "Nisa", "Taufan", "Eva", "Rizal", "Ria", "Indra", "Tina", "Diki", "Anita", "Firman", "Vina", "Lanang", "Jihan", "Iqbal", "Santi", "Arya", "Evi", "Rendra", "Wulan", "Dadan", "Yuli", "Fandi", "Desi", "Firman", "Rini", "Dedi"
] // prettier-ignore

let randomTesti = [
  "Abis pake jasa merakit PC custom nih, hasilnya keren banget! Spesifikasi sesuai pesanan, performa mantap, harga juga ramah di kantong. Makasih, mantap pokoknya!",
  "Bro, gue baru aja rakit PC custom pake jasa ini. Serius deh, pelayanannya ramah, proses cepet, dan hasilnya nyampe ekspektasi banget. Gue puas banget!",
  "Wuih, jasa merakit PC custom mereka keren abis! Gue bisa dapetin PC sesuai kebutuhan dengan harga yang gak bikin kantong bolong. Recomended buat yang lagi cari jasa kaya gini!",
  "Baru aja nerima PC hasil rakitan mereka, dan gue bener-bener seneng banget! Gak nyangka bisa dapet PC sekeren ini dengan harga yang bersahabat. Keren!",
  "Bro, gue seneng banget sama jasa merakit PC custom mereka. Prosesnya cepet, pilihannya banyak, dan paling penting, hasilnya bikin puas banget. Gak nyesel deh!",
  "Makasih banget buat jasa merakit PC custom-nya! Gue dapet PC yang bener-bener sesuai sama keinginan, performa oke, harga juga pas di hati. Sukses terus buat mereka!",
  "Gue udah nyobain beberapa jasa merakit PC, tapi yang ini juara banget! Pelayanannya ramah, harga bersaing, dan yang paling penting, PC-nya juara. Gak nyesel deh!",
  "Dari awal tanya-tanya sampai proses pengiriman, semuanya lancar jaya. Gue puas banget sama hasil PC custom-nya, sesuai ekspektasi banget. Mantap!",
  "Jasa merakit PC custom ini emang bener-bener ngejamin kepuasan pelanggan. Gue puas banget sama hasilnya, harga bersahabat, dan pelayanannya ramah. Recommended!",
  "Gue beli PC custom disini dan hasilnya bikin speechless. Performanya kenceng banget, pilihan komponen lengkap, dan pelayanan yang friendly. Pokoknya top deh!",
]

let finalTesti = []

for (let i = 0; i < 6; i++) {
  let temp = {
    nama:
      names[Math.round(Math.random() * (names.length - 1))] +
      " " +
      names[Math.round(Math.random() * (names.length - 1))],
    src: picts[Math.round(Math.random() * (picts.length - 1))],
    testi: randomTesti[Math.round(Math.random() * (randomTesti.length - 1))],
  }

  finalTesti.push(temp)
}

export default finalTesti
