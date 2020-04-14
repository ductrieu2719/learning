var library = [
  {
    bookshelf: [1, 2, 3],
    book: [1, 2, 3, 4, 5, 6],
    user: [1,2],
    history: [],
  },
];
var book = [
  { id: 1, name: "Đừng ích kỷ", price: 20000, time: 10 },
  { id: 2, name: "Long trảo thủ", price: 30000, time: 5 },
  { id: 3, name: "Tuyển tập truyện cười", price: 25000, time: 7 },
  { id: 4, name: "Ba chàng ngự lâm", price: 40000, time: 9 },
  { id: 5, name: "Dế mèn phưu lưu ký", price: 50000, time: 3 },
  { id: 6, name: "Đời", price: 27000, time: 6 },
];
console.log(JSON.stringify(book));
var bookshelf = [
  { id: 1, contain: [0, 2, 4, 6] },
  { id: 2, contain: [1, 2, 3, 4] },
  { id: 3, contain: [0, 3, 5, 6] },
];
var user = [
  { id: 1, username: "admin", password: "tvhhgvgtg" },
  { id: 2, username: "diem", password: "123456" },
];
var history = [
  {
    id: 1,
    status: "pending",
    user: 1,
    rentdate: "2020/03/19",
    rentdetail: [
      {
        id: 1,
        book: 2,
        bookshelf: 2,
        returndate: "2020/03/24",
        returned: false,
      },
      {
        id: 2,
        book: 4,
        bookshelf: 1,
        returndate: "2020/03/28",
        returned: false,
      },
    ],
    overdate: 8,
  },
];
