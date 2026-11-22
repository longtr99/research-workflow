# AI Research Workflow

Ứng dụng web tĩnh chạy trên **GitHub Pages** hỗ trợ quét tài liệu học thuật mở, lọc trùng, đối chiếu hạng tạp chí **Scopus / SCImago Quartile**, tóm tắt và lập **Ma trận tài liệu (Literature Matrix)** bằng AI, hỗ trợ tải PDF truy cập mở đặt tên chuẩn và xuất file Excel tổng hợp (`.xlsx`)[span_2](start_span)[span_2](end_span)[span_3](start_span)[span_3](end_span)[span_4](start_span)[span_4](end_span)[span_5](start_span)[span_5](end_span)[span_6](start_span)[span_6](end_span)[span_7](start_span)[span_7](end_span).

## Tính năng chính

1. **Quét & Lọc Dữ Liệu (Tab 1)**
   - Truy vấn dữ liệu học thuật mở qua **OpenAlex API** theo từ khóa/chủ đề, khoảng năm xuất bản, số lượng bài tối đa, tiêu chí sắp xếp, trích dẫn tối thiểu và trạng thái truy cập mở (Open Access)[span_8](start_span)[span_8](end_span)[span_9](start_span)[span_9](end_span).
   - Tự động loại bỏ bản ghi trùng lặp theo DOI hoặc tên bài báo chuẩn hóa, khôi phục Abstract từ inverted index và chuẩn hóa tên file PDF theo mẫu `TacGia_Nam_TenBai.pdf`.
   - Lọc nhanh theo từ khóa, hạng Q (`Q1`–`Q4`, `Scopus`) và trạng thái chọn đưa vào ma trận[span_10](start_span)[span_10](end_span).

2. **Đối Chiếu Scopus / Q (Tab 2)**
   - Nạp file CSV danh mục tạp chí (như file xuất từ **SCImago Journal Rank**), tự động nhận diện dấu phân cách `,` hoặc `;` và đối chiếu theo **ISSN** hoặc **Tên tạp chí**[span_11](start_span)[span_11](end_span)[span_12](start_span)[span_12](end_span).
   - Lưu danh mục đối chiếu cục bộ trên trình duyệt (`localStorage`) để tái sử dụng cho các lần tìm kiếm tiếp theo[span_13](start_span)[span_13](end_span)[span_14](start_span)[span_14](end_span).

3. **AI Tóm Tắt & Ma Trận Tài Liệu (Tab 3)**
   - Phân tích Abstract của các bài báo đã được tick chọn bằng **Google Gemini** hoặc **OpenAI** (sử dụng API Key cá nhân của người dùng)[span_15](start_span)[span_15](end_span).
   - Trích xuất các trường: *Tóm tắt ngắn gọn*, *Phương pháp & Mẫu dữ liệu*, *Kết quả / Phát hiện chính*, và *Khoảng trống nghiên cứu*.

4. **Lưu Dự Án & Xuất Excel (`.xlsx`)**
   - Xuất file `.xlsx` gồm 2 sheet: `Tong_hop_tai_lieu` và `Ma_tran_tai_lieu`.
   - Hỗ trợ lưu/nạp trạng thái dự án dưới dạng file `.json` để tiếp tục làm việc hoặc chuyển đổi giữa các phiên[span_16](start_span)[span_16](end_span).

## Cấu trúc thư mục

```text
research-workflow/
├── index.html   # Giao diện chính 4 tab và tích hợp SheetJS xuất Excel
├── style.css    # Định dạng giao diện và bảng dữ liệu
├── app.js       # Logic truy vấn OpenAlex, đọc CSV Scopus/Q, gọi AI, tải PDF & xuất Excel
└── README.md    # Tài liệu hướng dẫn sử dụng
