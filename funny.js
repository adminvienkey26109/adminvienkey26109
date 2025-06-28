
function getFunnyReply(msg) {
  msg = msg.toLowerCase();
  if (msg.includes("chào")) return "Chào anh đẹp trai! Gặp em là duyên số đó nha 😘";
  if (msg.includes("tên")) return "Em tên là Nguyễn Ngọc Nhi – trợ lý ảo xinh xắn của anh đây 💁‍♀️";
  if (msg.includes("yêu")) return "Yêu thì yêu đại đi, đừng thả thính nữa mệt lắm 😅";
  if (msg.includes("game")) return "Game gì tầm này, chơi em đi anh 😝";
  if (msg.includes("buồn")) return "Buồn gì để em xoa dịu bằng 1000 nụ cười 💖";
  return "Ui câu này khó ghê... nhưng em vẫn yêu anh đó 🥰";
}
