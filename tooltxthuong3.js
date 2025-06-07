
let lichSu = [];

function tinhKetQua(hot, ngau1, ma_phien) {
  let tong = hot + ngau1;

  if (ma_phien) {
    const soCuoi = parseInt(ma_phien.slice(-2));
    if (!isNaN(soCuoi)) {
      tong += soCuoi % 6;
    }
  }

  if (tong >= 18) tong -= 18;
  else if (tong >= 12) tong -= 12;
  else if (tong >= 6) tong -= 6;

  if ([1, 3, 5, 7].includes(tong)) return "XỈU";
  if ([0, 2, 4, 6].includes(tong)) return "TÀI";
  return "Không xác định";
}

function duDoan() {
  const ten_game = document.getElementById("ten_game").value;
  const ma_phien = document.getElementById("ma_phien").value;
  const hot = parseInt(document.getElementById("hot").value);
  const ngau1 = parseInt(document.getElementById("ngau1").value);

  if (isNaN(hot) || isNaN(ngau1)) {
    alert("Vui lòng nhập đầy đủ số điểm!");
    return;
  }

  const ketQua = tinhKetQua(hot, ngau1, ma_phien);
  document.getElementById("result").innerText = `Kết quả dự đoán: ${ketQua}`;

  const item = {
    ten_game,
    ma_phien,
    hot,
    ngau1,
    ketQua
  };
  lichSu.unshift(item);
  capNhatLichSu();
}

function capNhatLichSu() {
  const ul = document.getElementById("lich_su");
  ul.innerHTML = "";

  lichSu.slice(0, 10).forEach(item => {
    const li = document.createElement("li");
    li.innerText = `${item.ten_game} - Phiên ${item.ma_phien || "N/A"} | hot=${item.hot}, ngau1=${item.ngau1} → ${item.ketQua}`;
    ul.appendChild(li);
  });
}
