function render(students){
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>ข้อมูลนักศึกษา</title>
    </head>
    <body bgcolor="#FFCC33">
     <table>
        <h1>ประวัติ นักศึกษา</h1>
        <div class = "a1">
                <ul>
                    <li>Name-Username : นาย ธนดล จงรักษ์</li>
                    <li>Student ID    : 6302833</li>
                    <li>Gmail         : thanadon.j63@rsu.ac.th</li>
                </ul>
            </div>
        <h2>หนังที่ชื่นชอบ</h2>
        <th>ลำดับ</th>
        <th>ชื่อ-นามสกุล</th>
        <th>เกรดเฉลี่ย</th>
        <tbody>
            ${students
            .map((student)=> `<tr>
                <td>${student.id}</td>
                <td>${student.title}</td>
                <td>${student.grade}</td>
                <td> <a href ="/student/delete/${student.id}">delete</a></td>
            <tr>`)
         .join('')}
        </tbody>
      </table>
    </body>
    </html>
    `};
    
    module.exports = render;
    