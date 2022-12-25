// nạp path và lưu vào biến path
const path = require("path");

// nạp thư viên express và lưu vào biến express
const express = require("express");

// xây dựng và trả về đôi tượng app từ Express
const app = express();

const TrendingRoutes = require("./routes/movies");

//thêm haeders trước khi các tuyến đường được xác định
//add haeders before the routes are defined
app.use((req, res, next) => {
  // website methods you wish to allow
  //phương pháp trang web bạn muốn cho phép
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

  //Request methods you wish to allow
  //Yêu cầu các phương thức bạn muốn cho phép
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,OPTIONS,PUT,PATCH,DELETE"
  );

  // Request headers you wish to allow
  //Yêu cầu tiêu đề bạn muốn cho phép
  res.setHeader(
    "Access-Control-Allow-Headers",
    "x-Requested-With,content-type"
  );

  //Set to true if you need the website to include cookies in the requests sent
  //Đặt thành true nếu bạn cần trang web đưa cookie vào các yêu cầu được gửi
  res.setHeader("Access-Control-Allow-Headers", true);

  // Pass to next layer of middleware
  //Chuyển đến lớp tiếp theo của phần mềm trung gian
  next();
});

app.use(TrendingRoutes);

app.use((req, res, next) => {
  res.status(404).json({
    message: "Route not found",
  });
});

// định nghia và run website trên POST 3001
app.listen(3001);
