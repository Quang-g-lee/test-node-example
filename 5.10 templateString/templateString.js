const fs = require('fs');  //lưu thư viện fs để đọc và ghi file

function templateString(templateFile, params, outputFile) {

    const content = fs.readFileSync(templateFile, "utf-8");  //đọc file template.txt

    const newContent = content.replace(/{{\s*(\w+)\s*}}/g, (match, key) => {  //dùng regex
        if(key in params) {
            return params[key];  //nếu key có trong params thì thay bằng giá trị tương ứng
        }
        return match;  //nếu không có thì giữ nguyên
    });

    fs.writeFileSync(outputFile, newContent, "utf-8");  //ghi nội dung mới vào file output.txt

    return outputFile;  //trả về tên file output.txt

}
    
module.exports = templateString;