// Source: https://www.vib.com.vn/vn/the-tin-dung/vib-one-card
export const highlights = [
  { label: "Hoàn tiền", value: "Đến 9%", note: "Đồng thời 3 danh mục, tối đa 18 triệu đồng mỗi năm" },
  { label: "Phí ngoại tệ", value: "0%", note: "Trong 3 kỳ sao kê đầu tiên" },
  { label: "Phòng chờ", value: "4 lượt", note: "Miễn phí, cộng thêm 1 lượt mỗi 30 triệu chi tiêu nước ngoài" },
];

export const tiers = [
  { name: "Gold", limit: "Hạn mức đến 50 triệu", rate: "3%", cap: "500.000 VNĐ", cats: "1/5", lounge: "—", fx: "3.5%", installment: "Có", fee: "999.000 VNĐ" },
  { name: "Platinum", limit: "Trên 50 – 100 triệu", rate: "6%", cap: "1.000.000 VNĐ", cats: "2/5", lounge: "—", fx: "3.0%", installment: "Có", fee: "1.999.000 VNĐ" },
  { name: "Signature", limit: "Trên 100 triệu", rate: "9%", cap: "1.500.000 VNĐ", cats: "3/5", lounge: "4 lượt", fx: "0%", installment: "0%", fee: "2.999.000 VNĐ", featured: true },
] as const;

export const tierRows: { key: keyof (typeof tiers)[number]; label: string }[] = [
  { key: "rate", label: "Tỉ lệ hoàn" },
  { key: "cap", label: "Hoàn tối đa/kỳ" },
  { key: "cats", label: "Danh mục được chọn" },
  { key: "lounge", label: "Phòng chờ miễn phí" },
  { key: "fx", label: "Phí giao dịch ngoại tệ" },
  { key: "installment", label: "Trả góp" },
  { key: "fee", label: "Phí thường niên" },
];

export const promos = [
  { title: "Trả góp 0%", note: "Lãi suất 0% tại hơn 200 đối tác" },
  { title: "Giảm đến 40%", note: "Chi tiêu tại hơn 100 đối tác" },
  { title: "Siêu cá nhân hóa", note: "Đổi danh mục chi tiêu, ngày sao kê, thanh toán tối thiểu" },
  { title: "Super Pay", note: "Cài đặt nguồn tiền, đăng ký trả góp, giao dịch an toàn qua PayFlex" },
  { title: "Apple Pay", note: "Thanh toán di động nhanh chóng và bảo mật" },
  { title: "Phí phát hành", note: "Miễn phí cho cả 3 hạng thẻ, rút tiền mặt tại quầy không phí" },
];
