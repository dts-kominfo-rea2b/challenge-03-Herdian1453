// ! JANGAN DIMOFIDIKASI
const dataBelanjaan = [
  {
    id: "D-10001",
    nama: "Minyak Goreng Delima",
    harga: 25000,
    kuantitas: 2,
  },
  {
    id: "D-10020",
    nama: "Beras Mamos",
    harga: 48000,
    kuantitas: 1,
  },
  {
    id: "F-00010",
    nama: "Larutan Cap Kaki Empat",
    harga: 7500,
    kuantitas: 8,
  },
];

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
const listBelanjaan = (dataList) => {
  return dataList.map((dataBelanjaan) => {
    return `- ${dataBelanjaan.nama} x ${dataBelanjaan.kuantitas}`;
  });
}
console.log(dataBelanjaan);

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
const totalBelanjaan = (dataTotal) => {
  let total = 0;
  dataTotal.forEach((dataBelanjaan) => {
    total += dataBelanjaan.harga * dataBelanjaan.kuantitas;
  });
  return total;
}

// ! JANGAN DIMODIFIKASI
const main = () => {
  console.log("Selamat datang customer \n");
  console.log("Belanjaan Anda adalah:");
  console.log(listBelanjaan?.(dataBelanjaan)?.join("\n"));
  console.log(
    "\nTotal Belanjaan Anda adalah Rp. " + totalBelanjaan?.(dataBelanjaan)
  );
};

main();

module.exports = {
  dataBelanjaan,
  listBelanjaan,
  totalBelanjaan,
};