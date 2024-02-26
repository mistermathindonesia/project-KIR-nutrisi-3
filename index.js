const protein = document.getElementById("protein");
const result = document.getElementById("result");

let needProtein;

// document.innertext

const hitungNutrisi = () => {
  //   let umur = document.getElementById("umur").value;
  let gelas = document.getElementById("gelas").value;
  let berat = parseInt(document.getElementById("berat").value);
  let needProtein = (berat * 8) / 10;
  //   if (umur >= 0 && umur <= 17) {
  //     needProtein = 100;
  //   } else if (umur > 17 && umur <= 50) {
  //     needProtein = 200;
  //   } else {
  //     needProtein = 300;
  //   }

  //   protein.innerHTML = `Umur Anda adalah ${umur} tahun, sehingga kebutuhan nutrisi yang harus dipenuhi dalam satu hari adalah ${needProtein} mg  per hari.`;
  protein.innerHTML = `Berat badan Anda adalah ${berat} kg, sehingga kebutuhan protein yang harus dipenuhi dalam satu hari adalah ${needProtein} gram  per hari.`;

  let selisih = needProtein - (gelas * 1363) / 100;
  if (selisih <= 0) {
    selisih = 0;
    result.innerHTML = `Hari ini Anda meminum ${gelas} gelas maka anda mendapatkan ${
      (gelas * 1363) / 100
    } gram protein, sehingga kebutuhan protein Anda sudah mencukupi.`;
  } else {
    selisih = needProtein - (gelas * 1363) / 100;
    result.innerHTML = `Hari ini Anda meminum ${gelas} gelas maka anda mendapatkan ${
      (gelas * 1363) / 100
    } gram protein, sehingga sisa kebutuhan protein yang harus dipenuhi adalah  ${selisih} gram protein.`;
  }
};

// console.log(drink);
