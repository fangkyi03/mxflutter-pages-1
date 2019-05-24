import { message } from "antd";

export function CreatePrintPage(data) {
    console.log('打印机内传值', data)
    let LODOP;
    LODOP = getLodop();
    if (!LODOP) {
        message.error('打印机初始化失败')
        return
    }
    LODOP.PRINT_INIT('0');
    LODOP.SET_LICENSES('', '7287075E90A92E3F81F4D8499C5F957C', 'C94CEE276DB2187AE6B65D56B3FC2848', '');
    if (data.dayinType) {
        LODOP.SET_PRINTER_INDEX(data.dayinType)
    }
    console.log(data.print);
    console.log(1);
    LODOP.SET_PRINT_PAGESIZE(`${data.paperDir ? data.paperDir : 1}mm`,
        `${data.paperW ? data.paperW : 70}mm`,
        `${data.paperH ? data.paperH : 40}mm`,
        'LodopCustomPage');
    // LODOP.ADD_PRINT_RECT(10,55,360,220,0,1);
    console.log(data.print);
    console.log(2);
    // dataPrint = {
    //     paperW: 70,//mm
    //     paperH: 70,//mm
    //     paperDir: 0,
    //     // print:!value.radioGroup,
    //     fontTop: 7,//mm
    //     fontLeft: 28,//mm
    //     fontSize: 7,
    //     contentRight: [
    //         `名称：${data.name}`,
    //         `生产日期：${data.startDate} 上市日期：${data.endDate}`,
    //         `重量(kg)/个数：${data.weight}${data.unit}`,
    //         `储存条件：${data.StorageCondition}`,
    //         `赋码单位：${data.company}`,
    //     ],
    //     contentBottom: [
    //         `委托方：${data.entrustingParty}`,
    //         `地址：${data.adrress}`,
    //     ],
    //     QRcode: data.QRcode,
    //     QRcode2: data.QRcode2,
    //     imgTop: 10,//mm
    //     imgLeft: 7,//mm
    //     imgW: 17,//mm
    //     imgH: 17,//mm
    //     pitchNo: data.pitchNo,
    //     printGreen: data.vertifyVOS,
    // }

    // data.QRcode = data.QRcode.substring(data.QRcode.length - 7, data.QRcode.length); 
    
    LODOP.ADD_PRINT_BARCODE(`14mm`,
        '3mm',
        '20.53mm',
        '20.53mm',
        'QRCode',
        data.QRcode);
    LODOP.SET_PRINT_STYLEA(0, "QRCodeVersion", 5)
    LODOP.SET_PRINT_STYLEA(0, "QRCodeErrorLevel", "L")
    // LODOP.ADD_PRINT_IMAGE(`${data.radioDaYin ? 10 : 11}mm`,
    //   '7mm',
    //   '20mm',
    //   '20mm',
    //   `<img src = './two.png' />`);
    LODOP.SET_PRINT_STYLE('FontSize', 6);
    LODOP.ADD_PRINT_TEXT(`9.5mm`, '9mm', `22.15mm`, '7.14mm', data.pitchNo);
    // LODOP.SET_PRINT_STYLE('FontSize', data.fontSize ? data.fontSize : 8);
    // LODOP.SET_PRINT_STYLEA(0, 'TextNeatRow', true);
    // LODOP.ADD_PRINT_TEXT(0, 0, 0, 0, '');
    data.contentRight = data.contentRight.filter((e) => e).join("\n")
    data.contentBottom = data.contentBottom.filter((e) => e).join("\n")
    console.log('输出str', data.contentRight)
    console.log('输出str', data.contentBottom)
    LODOP.ADD_PRINT_TEXT(`16mm`, '26mm', '45mm', '27mm', data.contentRight)
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 7.5)
    LODOP.ADD_PRINT_TEXT(`39mm`, '1mm', '40.5mm', '15mm', data.contentBottom)
    // 3RiverCheck.png
    // LODOP.SET_PRINT_STYLEA(5, 'LineSpacing', '10mm');
    // LODOP.SET_PRINT_STYLEA(3, 'LineSpacing', '-1mm');
    // LODOP.ADD_PRINT_TEXT(`34mm`, '22mm', '39.37mm', '6.35mm', code)
    LODOP.ADD_PRINT_BARCODE(`38mm`,
        '43.5mm',
        '34.35mm',
        '6mm',
        "EAN13",
        data.QRcode2);
    
    LODOP.ADD_PRINT_HTM(`10mm`, '26mm', '47mm', '27mm',data.title)
    // let code = [0, 1, 2, 3]
    // data.printGreen
    // data.printGreen.forEach((item) => {
    //     // let htm = `<img src='../images/3RiverCheck.png' style='width:2px;height:2px;' />`
    //     let htm = `<span style='font-size:12px'>√</span>`
    //     // debugger
    //     switch(item){
    //         case 0:
    //             LODOP.ADD_PRINT_HTM(`33.5mm`, '31.6mm', '5mm', '5mm', htm)
    //             return
    //         case 1: 
    //             LODOP.ADD_PRINT_HTM(`33.5mm`, '42.6mm', '5mm', '5mm', htm)
    //             return
    //         case 2:
    //             LODOP.ADD_PRINT_HTM(`33.5mm`, '54.1mm', '5mm', '5mm', htm)
    //             return
    //         case 3:
    //             LODOP.ADD_PRINT_HTM(`33.5mm`, '65.6mm', '5mm', '5mm', htm)
    //             return
    //         default:
    //             return
    //     }
    // })
// LODOP.PREVIEW();
// LODOP.PRINT_DESIGN();
LODOP.PRINT(); 
}
