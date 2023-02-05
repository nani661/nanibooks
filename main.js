const container = document.querySelector(".container");
const menu = document.querySelector(".menu");
const contact = document.querySelector(".my_infor");
menu.onclick = function () {
  contact.classList.toggle("show");
};

const faceApi = [
  {
    namebook: "Đừng lựa chọn an nhàn khi còn trẻ",
    src: "assecc/images/dungluachonannhankhicontre.jpg",
    price: "Giá: 229.000đ",
  },
  {
    namebook: "AQ chỉ số vượt khó",
    src: "assecc/images/aqchisovuotkho.jpg",
    price: "Giá: 229.000đ",
  },
  {
    namebook: "Khả năng cải thiện nghịch cảnh",
    src: "assecc/images/khanangcaithiennghiccanh.jpg",
    price: "Giá: 229.000đ",
  },
  {
    namebook: "Chìa khóa vũ trụ của GEORGE",
    src: "assecc/images/chiakhoavutru.jpg",
    price: "Giá: 229.000đ",
  },
  {
    namebook: "Tại sao em ít nói thế",
    src: "assecc/images/taisaoemitnoithe.jpg",
    price: "Giá: 229.000đ",
  },
  {
    namebook: "Giết con chim nhại",
    src: "assecc/images/gietconchimnhai.jpg",
    price: "Giá: 229.000đ",
  },
  {
    namebook: "Cuộc đời bị đánh cắp",
    src: "assecc/images/cuocdoibidanhcap.jpg",
    price: "Giá: 229.000đ",
  },
  {
    namebook: "Cảm xúc là kẻ thù số 1 của bản thân",
    src: "assecc/images/camxuclakethuso1cuathanhcong.jpg",
    price: "Giá: 229.000đ",
  },
  {
    namebook: "Sức mạnh của tĩnh lặng",
    src: "assecc/images/sucmanhcuatinhlang.jpg",
    price: "Giá: 229.000đ",
  },
  {
    namebook: "Hiện tại kiên trì tương lai kiên cố",
    src: "assecc/images/hientaikientrituonglaikienco.jpg",
    price: "Giá: 229.000đ",
  },
  {
    namebook: "Gọi là ổn đinh thật ra là hòa phí cuộc sống",
    src: "assecc/images/goilaondinh.jpg",
    price: "Giá: 229.000đ",
  },
  {
    namebook: "Nóng giận là bản năng tĩnh lặng là bản lĩnh",
    src: "assecc/images/nonggianlabannangtinhlanglabanlinh.jpg",
    price: "Giá: 229.000đ",
  },
  {
    namebook: "Chuyện con mèo dạy hải âu bay",
    src: "assecc/images/chuyenconmeogiayhaiaubay.jpg",
    price: "Giá: 229.000đ",
  },
  {
    namebook: "Anh không thích thế giới này Anh chỉ thích em",
    src: "assecc/images/anhkhongthichthegioinayanhchithichem.jpg",
    price: "Giá: 229.000đ",
  },
  {
    namebook: "Sống sáng suốt",
    src: "assecc/images/songsangsuot.jpg",
    price: "Giá: 229.000đ",
  },
  {
    namebook: "Khi nhìn thấy lời nói dối tôi đã yêu em thật lòng",
    src: "assecc/images/khinhinthayloinoidoi.jpg",
    price: "Giá: 229.000đ",
  },
  {
    namebook: "Người nhạy cảm món quà hay lời nguyền",
    src: "assecc/images/nguoinhaycam.jpg",
    price: "Giá: 229.000đ",
  },
  {
    namebook: "Em vốn thích cô độc, cho đến khi có anh",
    src: "assecc/images/emvonthichcodoc.jpg",
    price: "Giá: 229.000đ",
  },
  {
    namebook: "Giới hạn của bạn chỉ là xuất phát điểm của tôi",
    src: "assecc/images/gioihancuaban.jpg",
    price: "Giá: 229.000đ",
  },
  {
    namebook: "999 lá thư gửi cho chính mình (2 phần)",
    src: "assecc/images/999lathu.jpg",
    price: "Giá: 229.000đ",
  },
];
start(faceApi);
function start(value) {
  const listBook = value.map((valueBook, index) => {
    return `<div class="list_books">
                <div class="img_book">
          <img src="${valueBook.src}" alt="" />
        </div>
        <h1 class="name_book">${valueBook.namebook}</h1>
        <p class="price">${valueBook.price}</p>
        <a href="https://www.facebook.com/nguyenquangtruong661" class="buy"><button class="btnbuy">Mua</button></a>
      </div>`;
  });
  const listHtml = listBook.join("");
  container.innerHTML = listHtml;
}
