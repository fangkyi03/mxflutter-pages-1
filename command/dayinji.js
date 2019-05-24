import { message } from "antd";

export function CreatePrintPage(data) {
  console.log('打印机内传值',data)
  let LODOP;
  LODOP = getLodop();
  if (!LODOP){
    var strCLodopInstall_1 = "<br><font color='#FF00FF'>Web打印服务CLodop未安装启动，点击这里<a href='CLodop_Setup_for_Win32NT.exe' target='_self'>下载执行安装</a>";
    var strCLodopInstall_2 = "<br>（若此前已安装过，可<a href='CLodop.protocol:setup' target='_self'>点这里直接再次启动</a>）";
    var strCLodopInstall_3 = "，成功后请刷新本页面。</font>";
    message.warning('请安装打印驱动')
    document.body.innerHTML = strCLodopInstall_1 + strCLodopInstall_2 + strCLodopInstall_3 + document.body.innerHTML;
    return
  }
  if (!LODOP) {
    message.error('打印机初始化失败')
    return 
  }
  LODOP.PRINT_INIT('0');
  LODOP.SET_LICENSES('', '7287075E90A92E3F81F4D8499C5F957C', 'C94CEE276DB2187AE6B65D56B3FC2848', '');
  LODOP.SET_PRINTER_INDEX(data.dayinjiType)
    console.log(data.print);
    console.log(1);
    LODOP.SET_PRINT_PAGESIZE(`${data.paperDir ? data.paperDir : 1}mm`,
      `${data.paperW ? data.paperW : 70}mm`,
      `${data.paperH ? data.paperH : 40}mm`,
      'LodopCustomPage');
    // LODOP.ADD_PRINT_RECT(10,55,360,220,0,1);
    console.log(data.print);
    console.log(2);
  if(!data.isWeight){
    LODOP.ADD_PRINT_BARCODE(`${data.radioDaYin ? 8 : 11}mm`,
      '1mm',
      '25mm',
      '25mm',
      'QRCode',
      data.imgSrc);
    LODOP.SET_PRINT_STYLE('FontSize', data.fontSize ? data.fontSize : 8);
    LODOP.SET_PRINT_STYLEA(0, 'TextNeatRow', true);
    LODOP.ADD_PRINT_TEXT(0, 0, 0, 0, '');
    LODOP.ADD_PRINT_TEXT(`${data.radioDaYin ? 8 : 9}mm`, '54mm', `${data.pitchNo.length * 3.5}mm`, '7px', data.pitchNo);
    // let code = ''
    // data.printGreen.forEach((item, index) => {
    //   const type = ['无公害', '绿色', '有机', '地理标识']
    //   if (index) {
    //     code += '、'
    //   }
    //   code += type[item]
    // })
    // if (code) {
    //   data.content.push("三品一标:" + code)
    // }
    const str = data.content.filter((e) => e).join("\n")
    console.log('输出str', str)
    LODOP.ADD_PRINT_TEXT(`${data.radioDaYin ? 11 : 12}mm`, '23mm', '40mm', '27mm', str)
    // LODOP.SET_PRINT_STYLEA(0, 'LineSpacing', '0.2mm');
    // LODOP.SET_PRINT_STYLEA(4, 'LineSpacing', '-0.5mm');
    // LODOP.SET_PRINT_STYLEA(2, 'FontSize', 1);
  }else{
    LODOP.ADD_PRINT_BARCODE(
      // `${data.radioDaYin ? 8 : 10}mm`,
      // '5mm',
      // '20.53mm',
      // '20.53mm', 
      `${data.radioDaYin ? 6.49 : 8.49}mm`,
      '5mm',
      '24.21mm',
      '20.51mm', 
      'QRCode',
      data.imgSrc);
    LODOP.SET_PRINT_STYLEA(0, "QRCodeVersion", 5)
    LODOP.SET_PRINT_STYLEA(0, "QRCodeErrorLevel", "L")
    // LODOP.ADD_PRINT_IMAGE(`${data.radioDaYin ? 10 : 11}mm`,
    //   '7mm',
    //   '20mm',
    //   '20mm',
    //   `<img src = './two.png' />`);
    // LODOP.SET_PRINT_STYLE('FontSize', data.fontSize ? data.fontSize : 8);
    LODOP.SET_PRINT_STYLE('FontSize', 7);
    LODOP.SET_PRINT_STYLEA(0, 'TextNeatRow', true);
    LODOP.ADD_PRINT_TEXT(0, 0, 0, 0, '');
    LODOP.ADD_PRINT_TEXT(`${data.radioDaYin ? 7 : 8}mm`, '54mm', `${data.pitchNo.length * 3.5}mm`, '7px', data.pitchNo);
    const str = data.content.filter((e) => e).join("\n")
    const str2 = data.content2.filter((e) => e).join("\n")
    console.log('输出str', str)
    LODOP.ADD_PRINT_TEXT(`${data.radioDaYin ? data.textRightHeight : data.textRightHeight}mm`, '29mm', '40mm', '27mm', str)
    LODOP.ADD_PRINT_TEXT(`${data.radioDaYin ? 27 : 28.5}mm`, '2mm', '69mm', '27mm', str2)
    LODOP.SET_PRINT_STYLEA(4, 'LineSpacing', '-0.5mm');
    LODOP.SET_PRINT_STYLEA(5, 'LineSpacing' , '-1mm');
    LODOP.SET_PRINT_STYLEA(2, 'FontSize', 1);
  }
  // LODOP.PREVIEW();
  // LODOP.PRINT_DESIGN();
  LODOP.PRINT();
}
