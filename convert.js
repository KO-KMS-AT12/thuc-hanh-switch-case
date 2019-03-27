function bai1() {
    var browser = prompt("Nhap ten trinh duyet ban dang su dung");
    switch (browser) {
        case "Edge":
            document.write("You've got the Edge");
            break;
        case "Chrome":
        case "Firefox":
        case "Safari":
        case "Opera":
            document.write("Okay we support these too");
            break;
        default:
            document.write("We hope that this page looks ok!");
            break;
    }
}

bai1();
document.write("<br>")

function bai2() {
    var a = prompt("a?", "");
    switch (a) {
        case '0':
            document.write(0);
            break;
        case '1':
            document.write(1);
            break;
        case '2':
        case '3':
            document.write('2,3');
            break;
    }
}

bai2();
document.write("<br>")

function bai3() {
    var a = parseInt(prompt("Nhap vao 1 so bat ki"));
    if (a > 0) {
        document.write(1)
    } else if (a < 0) {
        document.write(-1);
    } else {
        document.write(0)
    }
}
bai3();