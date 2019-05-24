
      
    
     function MblCompanyController_TRACEH5 (target) {
       
      /**
      * 追溯码查询主体基地信息
      */
      function getBaseAndMassifUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/companySource/getBaseAndMassif',params:{...paramsData},...info}
          }
      }
      /**
      * 追溯码查询主体H5
      */
      function getCompanyUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/companySource/getCompany',params:{...paramsData},...info}
          }
      }
      /**
      * 追溯码查询主体Brand
      */
      function getCompanyBrandUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/companySource/getCompanyBrand',params:{...paramsData},...info}
          }
      }
      /**
      * 追溯码查询主体Brand
      */
      function getCompanyBrandPCUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/companySource/getCompanyBrandPC',params:{...paramsData},...info}
          }
      }
      /**
      * 追溯码查询主体信息
      */
      function getCompanyByH5UsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/companySource/getCompanyByH5',params:{...paramsData},...info}
          }
      }
      /**
      * 通过二维码获取主体信息
      */
      function getCompanyByQRCodeUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/companySource/getCompanyByQRCode',params:{...paramsData},...info}
          }
      }
      /**
      * 获取新模板H5基本信息页面
      */
      function getCompanyNewUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/companySource/getCompanyNew',params:{...paramsData},...info}
          }
      }
      /**
      * 追溯码查询主体PC
      */
      function getCompanyPCUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/companySource/getCompanyPC',params:{...paramsData},...info}
          }
      }
      /**
      * 农事信息
      */
      function getFarmingUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/companySource/getFarming',params:{...paramsData},...info}
          }
      }
      /**
      * 通过二维码获取基地信息
      */
      function getFarmlandByQRCodeUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/companySource/getFarmlandByQRCode',params:{...paramsData},...info}
          }
      }
      /**
      * 追溯码查询主体H5 主体内的产品分页
      */
      function productPageByCompanyUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/companySource/productPageByCompany',params:{...paramsData},...info}
          }
      }
      /**
      * 追溯码查询主体H5 主体内的产品分页
      */
      function productPageByCompanyPCUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/companySource/productPageByCompanyPC',params:{...paramsData},...info}
          }
      }
       return {getBaseAndMassifUsingPOST,getCompanyUsingPOST,getCompanyBrandUsingPOST,getCompanyBrandPCUsingPOST,getCompanyByH5UsingPOST,getCompanyByQRCodeUsingPOST,getCompanyNewUsingPOST,getCompanyPCUsingPOST,getFarmingUsingPOST,getFarmlandByQRCodeUsingPOST,productPageByCompanyUsingPOST,productPageByCompanyPCUsingPOST}
     }
  
     function TraceH5Controller_TRACEH5 (target) {
       
      /**
      * 获取h5数据
      */
      function findH5DataUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/dateH5/findH5Data',params:{...paramsData},...info}
          }
      }
       return {findH5DataUsingPOST}
     }
  
     function FarmlandController_TRACEH5 (target) {
       
      /**
      * 地块详情
      */
      function blockDetailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/farmland/blockDetail',params:{...paramsData},...info}
          }
      }
      /**
      * 基地详情
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/farmland/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 产品分页
      */
      function pageProUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/farmland/pagePro',params:{...paramsData},...info}
          }
      }
       return {blockDetailUsingPOST,detailUsingPOST,pageProUsingPOST}
     }
  
     function InfController_TRACEH5 (target) {
       
      /**
      * 根据id查询详情
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/information/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 新闻资讯分页查询
      */
      function infoUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/information/page',params:{...paramsData},...info}
          }
      }
       return {detailUsingPOST,infoUsingPOST}
     }
  
     function MainPageController_TRACEH5 (target) {
       
      /**
      * 基地查询
      */
      function farmlandUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/main/farmland',params:{...paramsData},...info}
          }
      }
      /**
      * 市场行情
      */
      function marketUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/main/marketNotice',params:{...paramsData},...info}
          }
      }
      /**
      * 通知公告
      */
      function noticeUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/main/notice',params:{...paramsData},...info}
          }
      }
      /**
      * 通知公告详情
      */
      function noticeUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/main/notice/{id}',params:{...paramsData},...info}
          }
      }
      /**
      * 检查追溯码是否存在
      */
      function traceUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/main/trace',params:{...paramsData},...info}
          }
      }
      /**
      * 生成图片
      */
      function saveStoreUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/main/weixinPic',params:{...paramsData},...info}
          }
      }
       return {farmlandUsingPOST,marketUsingPOST,noticeUsingPOST,noticeUsingPOST,traceUsingPOST,saveStoreUsingPOST}
     }
  
     function PlyProductController_TRACEH5 (target) {
       
      /**
      * H5获取产品信息接口
      */
      function getProductUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/plySource/getProduct',params:{...paramsData},...info}
          }
      }
      /**
      * 获取第三方检测的图片
      */
      function getProductInspectionUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/plySource/getProductInspection',params:{...paramsData},...info}
          }
      }
      /**
      * H5获取主体产品信息接口
      */
      function getProductListByMcidUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/plySource/getProductList',params:{...paramsData},...info}
          }
      }
      /**
      * H5获取产品信息接口
      */
      function getProductPCUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/plySource/getProductPC',params:{...paramsData},...info}
          }
      }
      /**
      * 获取快速检测列表
      */
      function getQuickInspectionUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/plySource/getQuickInspection',params:{...paramsData},...info}
          }
      }
       return {getProductUsingPOST,getProductInspectionUsingPOST,getProductListByMcidUsingPOST,getProductPCUsingPOST,getQuickInspectionUsingPOST}
     }
  
     function ProcessController_TRACEH5 (target) {
       
      /**
      * 包装
      */
      function packUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/process/package',params:{...paramsData},...info}
          }
      }
      /**
      * 采摘
      */
      function pickUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/process/pick',params:{...paramsData},...info}
          }
      }
      /**
      * 分拣
      */
      function sortUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/process/sort',params:{...paramsData},...info}
          }
      }
       return {packUsingPOST,pickUsingPOST,sortUsingPOST}
     }
  
     function FarmRecordController_TRACEH5 (target) {
       
      /**
      * 根据短码查询长码
      */
      function selectCodeUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/record/selectCode',params:{...paramsData},...info}
          }
      }
      /**
      * 检测追溯
      */
      function selectInspectionUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/record/selectInspection',params:{...paramsData},...info}
          }
      }
      /**
      * 检测追溯
      */
      function selectInspectionPCUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/record/selectInspectionPC',params:{...paramsData},...info}
          }
      }
      /**
      * 查询农事生产过程H5接口
      */
      function selectRecordUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/record/selectRecord',params:{...paramsData},...info}
          }
      }
      /**
      * 查询农事生产过程H5接口
      */
      function selectRecordPCUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/record/selectRecordPC',params:{...paramsData},...info}
          }
      }
      /**
      * 查询农事生产过程H5接口 分页
      */
      function selectRecordPageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/record/selectRecordPage',params:{...paramsData},...info}
          }
      }
       return {selectCodeUsingPOST,selectInspectionUsingPOST,selectInspectionPCUsingPOST,selectRecordUsingPOST,selectRecordPCUsingPOST,selectRecordPageUsingPOST}
     }
  
     function SysCategoryController_H5_TRACEH5 (target) {
       
      /**
      * 地图json
      */
      function getAliJsonUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/sysCategory/getAliJson',params:{...paramsData},...info}
          }
      }
      /**
      * 某个category list列表不分页
      */
      function selectCategoryUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/sysCategory/selectCategory',params:{...paramsData},...info}
          }
      }
       return {getAliJsonUsingPOST,selectCategoryUsingPOST}
     }
  
     function UpyunUploadController_TRACEH5 (target) {
       
      /**
      * 上传文件
      */
      function uploadFileAndImgUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/upyun/uploadFileAndImg',params:{...paramsData},...info}
          }
      }
      /**
      * 上传图片
      */
      function uploadImgUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/upyun/uploadImg',params:{...paramsData},...info}
          }
      }
      /**
      * 批量上传图片
      */
      function uploadListFileAndImgUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/upyun/uploadListFileAndImg',params:{...paramsData},...info}
          }
      }
       return {uploadFileAndImgUsingPOST,uploadImgUsingPOST,uploadListFileAndImgUsingPOST}
     }
  
     function UserController_TRACEH5 (target) {
       
      /**
      * 企业注册组织机构代码校验
      */
      function creditCodeCheckUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/user/creditCodeCheck',params:{...paramsData},...info}
          }
      }
      /**
      * 显示农业主体类别
      */
      function getCategoryUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/user/getCategory',params:{...paramsData},...info}
          }
      }
      /**
      * 企业注册手机号校验
      */
      function mobileCheckUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/user/mobileCheck',params:{...paramsData},...info}
          }
      }
      /**
      * 注册
      */
      function selectRecordUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/user/signup',params:{...paramsData},...info}
          }
      }
       return {creditCodeCheckUsingPOST,getCategoryUsingPOST,mobileCheckUsingPOST,selectRecordUsingPOST}
     }
  
     function MblCompanyController_H5_TRACEH5 (target) {
       
      /**
      * 追溯码查询主体基本信息
      */
      function getCompanyBriefUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/web/company/brief',params:{...paramsData},...info}
          }
      }
      /**
      * 主体证书
      */
      function getCertUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/web/company/cert',params:{...paramsData},...info}
          }
      }
      /**
      * 主体查询行业、市区
      */
      function getConfigUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/web/company/config',params:{...paramsData},...info}
          }
      }
      /**
      * mcid查询主体信息
      */
      function getCompanyDetailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/web/company/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 显示农业主体类别
      */
      function getCategoryUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/web/company/getCategory',params:{...paramsData},...info}
          }
      }
      /**
      * 根据主体名称模糊查询
      */
      function getComListByNameUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/web/company/getComListByName',params:{...paramsData},...info}
          }
      }
      /**
      * 获取所有类别集合
      */
      function getTypeListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/web/company/getTypeList',params:{...paramsData},...info}
          }
      }
      /**
      * 信息服务主体分页查询
      */
      function companyUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/web/company/infoPage',params:{...paramsData},...info}
          }
      }
      /**
      * 主体分页查询
      */
      function getCompanyUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/web/company/page',params:{...paramsData},...info}
          }
      }
      /**
      * 信息服务红黑榜查询
      */
      function redBlackUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/web/company/redBlcak',params:{...paramsData},...info}
          }
      }
       return {getCompanyBriefUsingPOST,getCertUsingPOST,getConfigUsingPOST,getCompanyDetailUsingPOST,getCategoryUsingPOST,getComListByNameUsingPOST,getTypeListUsingPOST,companyUsingPOST,getCompanyUsingPOST,redBlackUsingPOST}
     }
  
     function PlyProductWebController_TRACEH5 (target) {
       
      /**
      * 追溯码查询产品信息
      */
      function getProductUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/web/product/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 追溯码分页查询农事信息
      */
      function getFarmingUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/web/product/farming',params:{...paramsData},...info}
          }
      }
      /**
      * 包装信息
      */
      function packagingUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/web/product/package',params:{...paramsData},...info}
          }
      }
      /**
      * 采摘信息
      */
      function pickUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/web/product/pick',params:{...paramsData},...info}
          }
      }
      /**
      * 信息服务主体产品列表
      */
      function infolistUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/web/product/productList',params:{...paramsData},...info}
          }
      }
      /**
      * 查询产品追溯码分页
      */
      function pageFeignsUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/web/product/productTrace',params:{...paramsData},...info}
          }
      }
      /**
      * 分拣信息
      */
      function sortUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/web/product/sort',params:{...paramsData},...info}
          }
      }
       return {getProductUsingPOST,getFarmingUsingPOST,packagingUsingPOST,pickUsingPOST,infolistUsingPOST,pageFeignsUsingPOST,sortUsingPOST}
     }
  
     function YellowPageController_TRACEH5 (target) {
       
      /**
      * 企业黄页刷新缓存
      */
      function refreshUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/yellowPage/refresh',params:{...paramsData},...info}
          }
      }
      /**
      * 企业黄页
      */
      function indexUsingGET(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/{id}',params:{...paramsData},...info}
          }
      }
       return {refreshUsingPOST,indexUsingGET}
     }
  
  
    
     function LtlInputController_SUPELTL (target) {
       
      /**
      * 新增投入品接口
      */
      function addInputUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/depot/addInput',params:{...paramsData},...info}
          }
      }
      /**
      * 删除投入品接口，批量单条通用
      */
      function delInputUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/depot/delInput',params:{...paramsData},...info}
          }
      }
      /**
      * 获取产地下拉列表
      */
      function getCdUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/depot/getCd',params:{...paramsData},...info}
          }
      }
      /**
      * 获取投入品毒性下拉列表
      */
      function getDxUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/depot/getDx',params:{...paramsData},...info}
          }
      }
      /**
      * 详情接口
      */
      function getInputByIdUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/depot/getInputById',params:{...paramsData},...info}
          }
      }
      /**
      * 获取投入品剂型下拉列表
      */
      function getJxUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/depot/getJx',params:{...paramsData},...info}
          }
      }
      /**
      * 投入品库分页列表接口
      */
      function inputListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/depot/inputList',params:{...paramsData},...info}
          }
      }
      /**
      * 投入品更新接口
      */
      function updateInputUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/depot/updateInput',params:{...paramsData},...info}
          }
      }
       return {addInputUsingPOST,delInputUsingPOST,getCdUsingPOST,getDxUsingPOST,getInputByIdUsingPOST,getJxUsingPOST,inputListUsingPOST,updateInputUsingPOST}
     }
  
     function TgyTestingEquipmentTypeController_SUPELTL (target) {
       
      /**
      * 新增检测设备类型
      */
      function addTypeUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/equipmentType/addType',params:{...paramsData},...info}
          }
      }
      /**
      * 删除单个类型接口
      */
      function delTypeUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/equipmentType/delEquipmentType',params:{...paramsData},...info}
          }
      }
      /**
      * 批量删除类型接口
      */
      function delTypeBatchUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/equipmentType/delEquipmentTypeBatch',params:{...paramsData},...info}
          }
      }
      /**
      * 获取详情接口
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/equipmentType/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 获取类型树形结构
      */
      function typeTreeUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/equipmentType/typeTree',params:{...paramsData},...info}
          }
      }
      /**
      * 更新类型接口
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/equipmentType/update',params:{...paramsData},...info}
          }
      }
       return {addTypeUsingPOST,delTypeUsingPOST,delTypeBatchUsingPOST,detailUsingPOST,typeTreeUsingPOST,updateUsingPOST}
     }
  
     function LtlInputFirmController_SUPELTL (target) {
       
      /**
      * 新增投入品厂商
      */
      function addFirmUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/input/addFirm',params:{...paramsData},...info}
          }
      }
      /**
      * 新增投入品厂商商标
      */
      function addFirmBrandUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/input/addFirmBrand',params:{...paramsData},...info}
          }
      }
      /**
      * 批量删除
      */
      function deleteBatchFirmUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/input/deleteBatchFirm',params:{...paramsData},...info}
          }
      }
      /**
      * 批量删除
      */
      function deleteBatchFirmBrandUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/input/deleteBatchFirmBrand',params:{...paramsData},...info}
          }
      }
      /**
      * 厂商删除
      */
      function deleteFirmUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/input/deleteFirm',params:{...paramsData},...info}
          }
      }
      /**
      * 厂商删除
      */
      function deleteFirmBrandUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/input/deleteFirmBrand',params:{...paramsData},...info}
          }
      }
      /**
      * 投入品厂商详情
      */
      function detailFirmUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/input/detailFirm',params:{...paramsData},...info}
          }
      }
      /**
      * 投入品厂商商标详情
      */
      function detailFirmBrandUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/input/detailFirmBrand',params:{...paramsData},...info}
          }
      }
      /**
      * 投入品厂商列表
      */
      function firmAllUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/input/firmAll',params:{...paramsData},...info}
          }
      }
      /**
      * 投入品厂商品牌列表
      */
      function firmListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/input/firmList',params:{...paramsData},...info}
          }
      }
      /**
      * 下拉投入品厂商品牌列表
      */
      function getFirmListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/input/getFirmList',params:{...paramsData},...info}
          }
      }
       return {addFirmUsingPOST,addFirmBrandUsingPOST,deleteBatchFirmUsingPOST,deleteBatchFirmBrandUsingPOST,deleteFirmUsingPOST,deleteFirmBrandUsingPOST,detailFirmUsingPOST,detailFirmBrandUsingPOST,firmAllUsingPOST,firmListUsingPOST,getFirmListUsingPOST}
     }
  
     function LtlProductSalesController_SUPELTL (target) {
       
      /**
      * 投入品销售新增更新
      */
      function addProductSalesUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/input/addProductSales',params:{...paramsData},...info}
          }
      }
      /**
      * 批量删除
      */
      function deleteBatchUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/input/deleteBatchProductSales',params:{...paramsData},...info}
          }
      }
      /**
      * 投入品删除
      */
      function deleteUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/input/deleteProductSales',params:{...paramsData},...info}
          }
      }
      /**
      * 投入品详情
      */
      function getProductSalesUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/input/getProductSales',params:{...paramsData},...info}
          }
      }
      /**
      * 投入品销售列表
      */
      function productSalesListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/input/productSalesList',params:{...paramsData},...info}
          }
      }
       return {addProductSalesUsingPOST,deleteBatchUsingPOST,deleteUsingPOST,getProductSalesUsingPOST,productSalesListUsingPOST}
     }
  
     function SlyReddishBlackController_SUPELTL (target) {
       
      /**
      * 新增更新红黑榜
      */
      function addSlyReddishBlackUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/input/addSlyReddishBlack',params:{...paramsData},...info}
          }
      }
      /**
      * 批量删除红黑榜
      */
      function deleteBatchUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/input/deleteBatchSlyReddishBlack',params:{...paramsData},...info}
          }
      }
      /**
      * 删除红黑榜
      */
      function deleteUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/input/deleteSlyReddishBlack',params:{...paramsData},...info}
          }
      }
      /**
      * 红黑榜详情
      */
      function getSlyReddishBlackUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/input/getSlyReddishBlack',params:{...paramsData},...info}
          }
      }
      /**
      * 红黑榜列表
      */
      function slyReddishBlackListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/input/slyReddishBlackList',params:{...paramsData},...info}
          }
      }
      /**
      * 红黑榜趋势
      */
      function getChartUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/rbChart/getChart',params:{...paramsData},...info}
          }
      }
      /**
      * 区域排名
      */
      function getRankUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/rbChart/getRank',params:{...paramsData},...info}
          }
      }
      /**
      * 红榜各区域占比
      */
      function getRateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/rbChart/getRate',params:{...paramsData},...info}
          }
      }
       return {addSlyReddishBlackUsingPOST,deleteBatchUsingPOST,deleteUsingPOST,getSlyReddishBlackUsingPOST,slyReddishBlackListUsingPOST,getChartUsingPOST,getRankUsingPOST,getRateUsingPOST}
     }
  
     function LtlSupplierController_SUPELTL (target) {
       
      /**
      * 供应商add update
      */
      function addSupplierUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/input/addSupplier',params:{...paramsData},...info}
          }
      }
      /**
      * 批量删除
      */
      function deleteBatchUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/input/deleteBatchSupplier',params:{...paramsData},...info}
          }
      }
      /**
      * 供应商 delete
      */
      function deleteUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/input/deleteSupplier',params:{...paramsData},...info}
          }
      }
      /**
      * 供应商 detail
      */
      function getShopUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/input/getSupplier',params:{...paramsData},...info}
          }
      }
      /**
      * 供应商列表
      */
      function supplierListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/input/supplierList',params:{...paramsData},...info}
          }
      }
       return {addSupplierUsingPOST,deleteBatchUsingPOST,deleteUsingPOST,getShopUsingPOST,supplierListUsingPOST}
     }
  
     function LtlBusinessTypeController_SUPELTL (target) {
       
      /**
      * 售店/批发企业
      */
      function businessTypeListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/input/businessTypeList',params:{...paramsData},...info}
          }
      }
       return {businessTypeListUsingPOST}
     }
  
     function PlaceEvaluationController_SUPELTL (target) {
       
      /**
      * 新增评价
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/placeEvaluation/add',params:{...paramsData},...info}
          }
      }
      /**
      * 审核
      */
      function auditStateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/placeEvaluation/auditState',params:{...paramsData},...info}
          }
      }
      /**
      * 删除评价
      */
      function deleteUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/placeEvaluation/delete',params:{...paramsData},...info}
          }
      }
      /**
      * 评价详情
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/placeEvaluation/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 评价分页
      */
      function pageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/placeEvaluation/page',params:{...paramsData},...info}
          }
      }
      /**
      * 更新评价
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/placeEvaluation/update',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,auditStateUsingPOST,deleteUsingPOST,detailUsingPOST,pageUsingPOST,updateUsingPOST}
     }
  
     function PlaceFarmlandRecordController_SUPELTL (target) {
       
      /**
      * 新增生产主体
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/placeFarmlandRecord/add',params:{...paramsData},...info}
          }
      }
      /**
      * 删除生产主体
      */
      function delPlaceFarmlandRecordUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/placeFarmlandRecord/delete',params:{...paramsData},...info}
          }
      }
      /**
      * 所有生产主体分页
      */
      function farmlandListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/placeFarmlandRecord/farmlandList',params:{...paramsData},...info}
          }
      }
      /**
      * 已关联生产主体分页
      */
      function ownFarmlandListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/placeFarmlandRecord/ownFarmlandList',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,delPlaceFarmlandRecordUsingPOST,farmlandListUsingPOST,ownFarmlandListUsingPOST}
     }
  
     function PlaceInspectionController_SUPELTL (target) {
       
      /**
      * 添加产地环境检测
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/placeInspection/add',params:{...paramsData},...info}
          }
      }
      /**
      * 审核
      */
      function auditStateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/placeInspection/auditState',params:{...paramsData},...info}
          }
      }
      /**
      * 删除产地环境检测(可批量删)
      */
      function deleteUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/placeInspection/delete',params:{...paramsData},...info}
          }
      }
      /**
      * 产地环境检测详情
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/placeInspection/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 查询产地环境检测
      */
      function pageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/placeInspection/page',params:{...paramsData},...info}
          }
      }
      /**
      * 修改产地环境检测
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/placeInspection/update',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,auditStateUsingPOST,deleteUsingPOST,detailUsingPOST,pageUsingPOST,updateUsingPOST}
     }
  
     function PlaceRecordController_SUPELTL (target) {
       
      /**
      * 新增档案
      */
      function addPalceRecordUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/placeRecord/addPalceRecord',params:{...paramsData},...info}
          }
      }
      /**
      * 删除档案
      */
      function delPalceRecordUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/placeRecord/delPalceRecord',params:{...paramsData},...info}
          }
      }
      /**
      * 获取区域下拉接口
      */
      function getAreaUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/placeRecord/getArea',params:{...paramsData},...info}
          }
      }
      /**
      * 监管一张图获取主体详情
      */
      function getCompanyDetailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/placeRecord/getCompanyDetail',params:{...paramsData},...info}
          }
      }
      /**
      * 产地档案详细
      */
      function getPlaceRecordUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/placeRecord/getPlaceRecord',params:{...paramsData},...info}
          }
      }
      /**
      * 产地档案分页
      */
      function palceRecordListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/placeRecord/palceRecordList',params:{...paramsData},...info}
          }
      }
      /**
      * 档案 监管一张图
      */
      function supePlaceRecordUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/placeRecord/supePlaceRecord',params:{...paramsData},...info}
          }
      }
      /**
      * 修改档案
      */
      function updatePalceRecordUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/placeRecord/updatePalceRecord',params:{...paramsData},...info}
          }
      }
       return {addPalceRecordUsingPOST,delPalceRecordUsingPOST,getAreaUsingPOST,getCompanyDetailUsingPOST,getPlaceRecordUsingPOST,palceRecordListUsingPOST,supePlaceRecordUsingPOST,updatePalceRecordUsingPOST}
     }
  
     function LtlFarmShopController_SUPELTL (target) {
       
      /**
      * 新增农资店信息
      */
      function addShopUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/shop/addShop',params:{...paramsData},...info}
          }
      }
      /**
      * 删除农资店，可批量
      */
      function deleteShopByIdUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/shop/deleteShop',params:{...paramsData},...info}
          }
      }
      /**
      * 获取Business类型接口
      */
      function getBusinessTypeUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/shop/getBusinessType',params:{...paramsData},...info}
          }
      }
      /**
      * 农资店详情信息
      */
      function getShopUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/shop/getShop',params:{...paramsData},...info}
          }
      }
      /**
      * 获取农资店列表
      */
      function getShopListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/shop/getShopList',params:{...paramsData},...info}
          }
      }
      /**
      * 更新农资店
      */
      function updateShopUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/shop/updateShop',params:{...paramsData},...info}
          }
      }
       return {addShopUsingPOST,deleteShopByIdUsingPOST,getBusinessTypeUsingPOST,getShopUsingPOST,getShopListUsingPOST,updateShopUsingPOST}
     }
  
     function TgyTestingStandardController_SUPELTL (target) {
       
      /**
      * 新增检测标准接口
      */
      function addStandardUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/standard/addStandard',params:{...paramsData},...info}
          }
      }
      /**
      * 删除单个标准接口
      */
      function delStandardUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/standard/delStandard',params:{...paramsData},...info}
          }
      }
      /**
      * 批量删除标准接口
      */
      function delStandardMoreUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/standard/delStandardMore',params:{...paramsData},...info}
          }
      }
      /**
      * 获取详情
      */
      function getStandardUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/standard/getStandard',params:{...paramsData},...info}
          }
      }
      /**
      * 获取检测标准分页列表
      */
      function getStandardPageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/standard/getStandardPage',params:{...paramsData},...info}
          }
      }
      /**
      * 更新检测标准
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/standard/update',params:{...paramsData},...info}
          }
      }
       return {addStandardUsingPOST,delStandardUsingPOST,delStandardMoreUsingPOST,getStandardUsingPOST,getStandardPageUsingPOST,updateUsingPOST}
     }
  
     function TgyTestingEquipmentCsController_SUPELTL (target) {
       
      /**
      * 新增检测设备厂商
      */
      function addEquipmentCsUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/tgyTestingEquipmentCs/addEquipmentCs',params:{...paramsData},...info}
          }
      }
      /**
      * 新增检测设备厂商商标
      */
      function addEquipmentCsppUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/tgyTestingEquipmentCs/addEquipmentCspp',params:{...paramsData},...info}
          }
      }
      /**
      * 新增检测设备厂商商标
      */
      function addEquipmentCsppxhUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/tgyTestingEquipmentCs/addEquipmentCsppxh',params:{...paramsData},...info}
          }
      }
      /**
      * 批量删除
      */
      function deleteBatchEquipmentCsUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/tgyTestingEquipmentCs/deleteBatchEquipmentCs',params:{...paramsData},...info}
          }
      }
      /**
      * 批量删除
      */
      function deleteBatchEquipmentCsppUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/tgyTestingEquipmentCs/deleteBatchEquipmentCspp',params:{...paramsData},...info}
          }
      }
      /**
      * 批量删除
      */
      function deleteBatchEquipmentCsppxhUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/tgyTestingEquipmentCs/deleteBatchEquipmentCsppxh',params:{...paramsData},...info}
          }
      }
      /**
      * 检测设备厂商详情
      */
      function detailFirmUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/tgyTestingEquipmentCs/detailEquipmentCs',params:{...paramsData},...info}
          }
      }
      /**
      * 检测设备厂商商标详情
      */
      function detailEquipmentCsppUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/tgyTestingEquipmentCs/detailEquipmentCspp',params:{...paramsData},...info}
          }
      }
      /**
      * 检测设备厂商商标详情
      */
      function detailEquipmentCsppxhUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/tgyTestingEquipmentCs/detailEquipmentCsppxh',params:{...paramsData},...info}
          }
      }
      /**
      * 厂商列表
      */
      function equipmentCsAllUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/tgyTestingEquipmentCs/equipmentCsAll',params:{...paramsData},...info}
          }
      }
      /**
      * 检测设备厂商品牌列表
      */
      function equipmentCsListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/tgyTestingEquipmentCs/equipmentCsList',params:{...paramsData},...info}
          }
      }
      /**
      * 厂商列表
      */
      function equipmentCsppAllUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/tgyTestingEquipmentCs/equipmentCsppAll',params:{...paramsData},...info}
          }
      }
      /**
      * 下拉厂商品牌列表
      */
      function equipmentCsppxhAllUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/tgyTestingEquipmentCs/equipmentCsppxhAll',params:{...paramsData},...info}
          }
      }
      /**
      * 检测设备厂商品牌列表
      */
      function equipmentCsppxhListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/tgyTestingEquipmentCs/equipmentCsppxhList',params:{...paramsData},...info}
          }
      }
       return {addEquipmentCsUsingPOST,addEquipmentCsppUsingPOST,addEquipmentCsppxhUsingPOST,deleteBatchEquipmentCsUsingPOST,deleteBatchEquipmentCsppUsingPOST,deleteBatchEquipmentCsppxhUsingPOST,detailFirmUsingPOST,detailEquipmentCsppUsingPOST,detailEquipmentCsppxhUsingPOST,equipmentCsAllUsingPOST,equipmentCsListUsingPOST,equipmentCsppAllUsingPOST,equipmentCsppxhAllUsingPOST,equipmentCsppxhListUsingPOST}
     }
  
     function TgyTestingInspectionLinkController_SUPELTL (target) {
       
      /**
      * 获取下拉详情
      */
      function getListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/tgyTestingInspectionLink/getList',params:{...paramsData},...info}
          }
      }
       return {getListUsingPOST}
     }
  
     function TgyTestingSampleController_SUPELTL (target) {
       
      /**
      * 删除检测样品
      */
      function deleteUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/tgyTestingSample/delete',params:{...paramsData},...info}
          }
      }
      /**
      * 批量删除检测样品
      */
      function deleteBatchUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/tgyTestingSample/deleteBatch',params:{...paramsData},...info}
          }
      }
      /**
      * 检测样品列表
      */
      function getListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/tgyTestingSample/list',params:{...paramsData},...info}
          }
      }
       return {deleteUsingPOST,deleteBatchUsingPOST,getListUsingPOST}
     }
  
     function TgyTestingSampleGradeController_SUPELTL (target) {
       
      /**
      * 获取下拉详情
      */
      function getListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/tgyTestingSampleGrade/getList',params:{...paramsData},...info}
          }
      }
       return {getListUsingPOST}
     }
  
     function TgyTestingSamplePackingController_SUPELTL (target) {
       
      /**
      * 获取下拉详情
      */
      function getListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/tgyTestingSamplePacking/getList',params:{...paramsData},...info}
          }
      }
       return {getListUsingPOST}
     }
  
     function TgyTestingSamplingModeController_SUPELTL (target) {
       
      /**
      * 获取下拉详情
      */
      function getListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/tgyTestingSamplingMode/getList',params:{...paramsData},...info}
          }
      }
       return {getListUsingPOST}
     }
  
     function TgyTestingSubjectTypeController_SUPELTL (target) {
       
      /**
      * 获取下拉详情
      */
      function getListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/tgyTestingSubjectType/getList',params:{...paramsData},...info}
          }
      }
       return {getListUsingPOST}
     }
  
     function TgyTestingTaskController_SUPELTL (target) {
       
      /**
      * 获取下拉详情
      */
      function getListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/tgyTestingTask/getList',params:{...paramsData},...info}
          }
      }
       return {getListUsingPOST}
     }
  
     function LtlTypeController_SUPELTL (target) {
       
      /**
      * 新增投入品类型
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/type/add',params:{...paramsData},...info}
          }
      }
      /**
      * 批量删除类型信息
      */
      function delTypeUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/type/delType',params:{...paramsData},...info}
          }
      }
      /**
      * 获取类型详细
      */
      function getTypeUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/type/getType',params:{...paramsData},...info}
          }
      }
      /**
      * 获取类型列表
      */
      function getTypeListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/type/getTypeList',params:{...paramsData},...info}
          }
      }
      /**
      * 投入品类型下拉列表
      */
      function getTypeUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/type/getTypeToList',params:{...paramsData},...info}
          }
      }
      /**
      * 重复名称/重复CODE校验
      */
      function repeatCheckUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/type/repeatCheck',params:{...paramsData},...info}
          }
      }
      /**
      * 投入品类型列表
      */
      function typeListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/type/typeList',params:{...paramsData},...info}
          }
      }
      /**
      * 更新类型接口
      */
      function updateTypeUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/type/updateType',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,delTypeUsingPOST,getTypeUsingPOST,getTypeListUsingPOST,getTypeUsingPOST,repeatCheckUsingPOST,typeListUsingPOST,updateTypeUsingPOST}
     }
  
     function UpyunUploadController_SUPELTL (target) {
       
      /**
      * 上传图片
      */
      function uploadImgUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/upyun/uploadImg',params:{...paramsData},...info}
          }
      }
      /**
      * 上传图片
      */
      function uploadImgForApqssUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/upyun/uploadImgForApqss',params:{...paramsData},...info}
          }
      }
      /**
      * 上传图片
      */
      function uploadImgForCompanyUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/supe/ltl/upyun/uploadImgForCompany',params:{...paramsData},...info}
          }
      }
       return {uploadImgUsingPOST,uploadImgForApqssUsingPOST,uploadImgForCompanyUsingPOST}
     }
  
  
    
     function InputsUsageController_TRACEPRO (target) {
       
      /**
      * 列表
      */
      function getListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/pro/inputsUsage/getList',params:{...paramsData},...info}
          }
      }
       return {getListUsingPOST}
     }
  
     function LtlInputController_TRACEPRO (target) {
       
      /**
      * 列表
      */
      function getDetailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/pro/ltlInput/getDetail',params:{...paramsData},...info}
          }
      }
      /**
      * 列表
      */
      function getListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/pro/ltlInput/getList',params:{...paramsData},...info}
          }
      }
       return {getDetailUsingPOST,getListUsingPOST}
     }
  
     function LtlInputCdController_TRACEPRO (target) {
       
      /**
      * 列表
      */
      function getListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/pro/ltlInputCd/getList',params:{...paramsData},...info}
          }
      }
       return {getListUsingPOST}
     }
  
     function LtlInputOutEnterController_TRACEPRO (target) {
       
      /**
      * 列表
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/pro/ltlInputOutEnter/add',params:{...paramsData},...info}
          }
      }
      /**
      * 详情
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/pro/ltlInputOutEnter/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 列表
      */
      function listUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/pro/ltlInputOutEnter/list',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,detailUsingPOST,listUsingPOST}
     }
  
     function LtlInputStockController_TRACEPRO (target) {
       
      /**
      * 列表
      */
      function listUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/pro/ltlInputStock/list',params:{...paramsData},...info}
          }
      }
       return {listUsingPOST}
     }
  
     function LtlInputTypeController_TRACEPRO (target) {
       
      /**
      * 投入品类型下拉列表
      */
      function getTypeUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/pro/ltlInputType/getTypeToList',params:{...paramsData},...info}
          }
      }
       return {getTypeUsingPOST}
     }
  
  
    
     function InspectionEquipmentController_INSPECTIONBASIC (target) {
       
      /**
      * 新增设备接口
      */
      function addEquipmentUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/equipment/addEquipment',params:{...paramsData},...info}
          }
      }
      /**
      * 单条删除设备接口
      */
      function delEquipmentUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/equipment/delEquipment',params:{...paramsData},...info}
          }
      }
      /**
      * 批量删除设备接口
      */
      function delEquipmentBatchUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/equipment/delEquipmentBatch',params:{...paramsData},...info}
          }
      }
      /**
      * 获取详情接口
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/equipment/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 设备管理分页列表接口
      */
      function pageEquipmentUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/equipment/pageEquipment',params:{...paramsData},...info}
          }
      }
      /**
      * 更新设备接口
      */
      function updateEquipmentUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/equipment/updateEquipment',params:{...paramsData},...info}
          }
      }
       return {addEquipmentUsingPOST,delEquipmentUsingPOST,delEquipmentBatchUsingPOST,detailUsingPOST,pageEquipmentUsingPOST,updateEquipmentUsingPOST}
     }
  
     function TgyTestingEquipmentTypeController_INSPECTIONBASIC (target) {
       
      /**
      * 新增检测设备类型
      */
      function addTypeUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/equipmentType/addType',params:{...paramsData},...info}
          }
      }
      /**
      * 删除单个类型接口
      */
      function delTypeUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/equipmentType/delEquipmentType',params:{...paramsData},...info}
          }
      }
      /**
      * 批量删除类型接口
      */
      function delTypeBatchUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/equipmentType/delEquipmentTypeBatch',params:{...paramsData},...info}
          }
      }
      /**
      * 获取详情接口
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/equipmentType/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 获取类型树形结构
      */
      function typeTreeUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/equipmentType/typeTree',params:{...paramsData},...info}
          }
      }
      /**
      * 更新类型接口
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/equipmentType/update',params:{...paramsData},...info}
          }
      }
       return {addTypeUsingPOST,delTypeUsingPOST,delTypeBatchUsingPOST,detailUsingPOST,typeTreeUsingPOST,updateUsingPOST}
     }
  
     function InspectionReportController_INSPECTIONBASIC (target) {
       
      /**
      * 监管检测报告新增接口
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/insReport/add',params:{...paramsData},...info}
          }
      }
      /**
      * 更改监管检测报告审核状态
      */
      function auditUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/insReport/audit',params:{...paramsData},...info}
          }
      }
      /**
      * 监管检测报告删除接口
      */
      function deleteUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/insReport/del',params:{...paramsData},...info}
          }
      }
      /**
      * 删除自检报告 
      */
      function deleteSelfReportUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/insReport/deleteSelfReport',params:{...paramsData},...info}
          }
      }
      /**
      * 监管检测报告详情接口
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/insReport/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 监管检测报告详情接口
      */
      function detailReportUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/insReport/detailReport',params:{...paramsData},...info}
          }
      }
      /**
      * 监管检测报告检测项下拉接口
      */
      function itemListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/insReport/itemList',params:{...paramsData},...info}
          }
      }
      /**
      * 监管检测报告下拉接口
      */
      function listUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/insReport/list',params:{...paramsData},...info}
          }
      }
      /**
      * 监管检测报告分页接口
      */
      function pageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/insReport/page',params:{...paramsData},...info}
          }
      }
      /**
      * 获取自检报告列表 result  0合格1不合格
      */
      function selectSelfInspectionReportsUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/insReport/selectSelfInspectionReports',params:{...paramsData},...info}
          }
      }
      /**
      * 自检报告检测项
      */
      function selfItemListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/insReport/selfItemList',params:{...paramsData},...info}
          }
      }
      /**
      * 获取自检报告详情 
      */
      function selfReportDetailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/insReport/selfReportDetail',params:{...paramsData},...info}
          }
      }
      /**
      * 监管检测报告更新接口
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/insReport/update',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,auditUsingPOST,deleteUsingPOST,deleteSelfReportUsingPOST,detailUsingPOST,detailReportUsingPOST,itemListUsingPOST,listUsingPOST,pageUsingPOST,selectSelfInspectionReportsUsingPOST,selfItemListUsingPOST,selfReportDetailUsingPOST,updateUsingPOST}
     }
  
     function InspectionDataController_INSPECTIONBASIC (target) {
       
      /**
      * 区域任务完成度
      */
      function getAreaUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/inspectionChart/getArea',params:{...paramsData},...info}
          }
      }
      /**
      * 区域检测合格率
      */
      function getAreaListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/inspectionChart/getAreaList',params:{...paramsData},...info}
          }
      }
      /**
      * 比率
      */
      function getRateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/inspectionChart/getRate',params:{...paramsData},...info}
          }
      }
      /**
      * 检测合格率
      */
      function getReportResultUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/inspectionChart/getReportResult',params:{...paramsData},...info}
          }
      }
      /**
      * 任务完成情况
      */
      function getTaskCompletedUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/inspectionChart/getTaskCompleted',params:{...paramsData},...info}
          }
      }
      /**
      * 获取本周完成任务数
      */
      function getWeekTaskInfoUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/inspectionChart/getWeekTaskInfo',params:{...paramsData},...info}
          }
      }
       return {getAreaUsingPOST,getAreaListUsingPOST,getRateUsingPOST,getReportResultUsingPOST,getTaskCompletedUsingPOST,getWeekTaskInfoUsingPOST}
     }
  
     function InspectionDataItemsController_INSPECTIONBASIC (target) {
       
      /**
      * 检测项更新接口
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/inspectionDataItems/update',params:{...paramsData},...info}
          }
      }
       return {updateUsingPOST}
     }
  
     function InspectionSelfController_INSPECTIONBASIC (target) {
       
      /**
      * 产品批次
      */
      function batchListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/inspectionSelf/batchList',params:{...paramsData},...info}
          }
      }
      /**
      * 删除检测任务
      */
      function deleteTaskUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/inspectionSelf/deleteTask',params:{...paramsData},...info}
          }
      }
      /**
      * 新增
      */
      function insertUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/inspectionSelf/insert',params:{...paramsData},...info}
          }
      }
      /**
      * 作废
      */
      function nullifyUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/inspectionSelf/nullify',params:{...paramsData},...info}
          }
      }
      /**
      * 检测任务列表
      */
      function taskListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/inspectionSelf/taskList',params:{...paramsData},...info}
          }
      }
       return {batchListUsingPOST,deleteTaskUsingPOST,insertUsingPOST,nullifyUsingPOST,taskListUsingPOST}
     }
  
     function InspectionItemsController_INSPECTIONBASIC (target) {
       
      /**
      * 检测项新增接口
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/item/add',params:{...paramsData},...info}
          }
      }
      /**
      * 检测项删除接口
      */
      function deleteUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/item/del',params:{...paramsData},...info}
          }
      }
      /**
      * 检测项详情接口
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/item/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 检测项下拉接口
      */
      function listUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/item/list',params:{...paramsData},...info}
          }
      }
      /**
      * 检测项分页接口
      */
      function pageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/item/page',params:{...paramsData},...info}
          }
      }
      /**
      * 检测项更新接口
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/item/update',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,deleteUsingPOST,detailUsingPOST,listUsingPOST,pageUsingPOST,updateUsingPOST}
     }
  
     function MonitorSelfTaskController_INSPECTIONBASIC (target) {
       
      /**
      * 新增
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/monitorSelf/add',params:{...paramsData},...info}
          }
      }
      /**
      * 关联产品 
      */
      function associatedProductsUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/monitorSelf/associatedProducts',params:{...paramsData},...info}
          }
      }
      /**
      * 新增自检任务
      */
      function createSelfInspectTaskUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/monitorSelf/createSelfInspectTask',params:{...paramsData},...info}
          }
      }
      /**
      * 删除
      */
      function delUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/monitorSelf/del',params:{...paramsData},...info}
          }
      }
      /**
      * 删除自检任务 
      */
      function deleteSelfTaskUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/monitorSelf/deleteSelfTask',params:{...paramsData},...info}
          }
      }
      /**
      * 删除未处理检测结果 
      */
      function deleteUndealResultUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/monitorSelf/deleteUndealResult',params:{...paramsData},...info}
          }
      }
      /**
      * 详情
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/monitorSelf/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 下拉列表
      */
      function listUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/monitorSelf/list',params:{...paramsData},...info}
          }
      }
      /**
      * 删除
      */
      function pageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/monitorSelf/page',params:{...paramsData},...info}
          }
      }
      /**
      * 获取自检任务列表 
      */
      function selectSelfInspectionTasksUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/monitorSelf/selectSelfInspectionTasks',params:{...paramsData},...info}
          }
      }
      /**
      * 提交未处理检测结果 
      */
      function submitUndealResultUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/monitorSelf/submitUndealResult',params:{...paramsData},...info}
          }
      }
      /**
      * 自检任务未处理检测结果列表 
      */
      function unDealResultListsUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/monitorSelf/unDealResultLists',params:{...paramsData},...info}
          }
      }
      /**
      * 修改
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/monitorSelf/update',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,associatedProductsUsingPOST,createSelfInspectTaskUsingPOST,delUsingPOST,deleteSelfTaskUsingPOST,deleteUndealResultUsingPOST,detailUsingPOST,listUsingPOST,pageUsingPOST,selectSelfInspectionTasksUsingPOST,submitUndealResultUsingPOST,unDealResultListsUsingPOST,updateUsingPOST}
     }
  
     function MsgWorkController_INSPECTIONBASIC (target) {
       
      /**
      * 消息详情
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/msgWork/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 消息详情
      */
      function detailNewUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/msgWork/detailNew',params:{...paramsData},...info}
          }
      }
      /**
      * 新增消息
      */
      function insertUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/msgWork/insert',params:{...paramsData},...info}
          }
      }
      /**
      * 工作台消息分页
      */
      function pageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/msgWork/page',params:{...paramsData},...info}
          }
      }
       return {detailUsingPOST,detailNewUsingPOST,insertUsingPOST,pageUsingPOST}
     }
  
     function NoticeController_INSPECTIONBASIC (target) {
       
      /**
      * 删除
      */
      function deleteUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/notice/delete',params:{...paramsData},...info}
          }
      }
      /**
      * 详情
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/notice/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 新增
      */
      function insertUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/notice/insert',params:{...paramsData},...info}
          }
      }
      /**
      * 通知栏
      */
      function listUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/notice/list',params:{...paramsData},...info}
          }
      }
      /**
      * 分页
      */
      function pageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/notice/page',params:{...paramsData},...info}
          }
      }
       return {deleteUsingPOST,detailUsingPOST,insertUsingPOST,listUsingPOST,pageUsingPOST}
     }
  
     function NoticeFileController_INSPECTIONBASIC (target) {
       
      /**
      * 上传附件
      */
      function addSensorUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/noticeFile/addAttachment',params:{...paramsData},...info}
          }
      }
      /**
      * 获取附件列表
      */
      function getAttachmentListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/noticeFile/getAttachmentList',params:{...paramsData},...info}
          }
      }
       return {addSensorUsingPOST,getAttachmentListUsingPOST}
     }
  
     function InspectionProgramController_INSPECTIONBASIC (target) {
       
      /**
      * 新增
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/project/add',params:{...paramsData},...info}
          }
      }
      /**
      * 删除检测项目
      */
      function delUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/project/del',params:{...paramsData},...info}
          }
      }
      /**
      * 检测项目详情
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/project/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 检测项目下拉列表
      */
      function listUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/project/list',params:{...paramsData},...info}
          }
      }
      /**
      * 检测项目分页
      */
      function pageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/project/page',params:{...paramsData},...info}
          }
      }
      /**
      * 更新
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/project/update',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,delUsingPOST,detailUsingPOST,listUsingPOST,pageUsingPOST,updateUsingPOST}
     }
  
     function InspectionProgramItemsController_INSPECTIONBASIC (target) {
       
      /**
      * 新增
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/project/item/add',params:{...paramsData},...info}
          }
      }
      /**
      * 验证名字是否重复
      */
      function checkNameUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/project/item/checkName',params:{...paramsData},...info}
          }
      }
      /**
      * 删除检测项目
      */
      function delUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/project/item/del',params:{...paramsData},...info}
          }
      }
      /**
      * 检测项目项详情
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/project/item/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 检测项目分页
      */
      function pageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/project/item/page',params:{...paramsData},...info}
          }
      }
      /**
      * 更新
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/project/item/update',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,checkNameUsingPOST,delUsingPOST,detailUsingPOST,pageUsingPOST,updateUsingPOST}
     }
  
     function QuickInspectionEquipmentController_INSPECTIONBASIC (target) {
       
      /**
      * 设备下拉不分页
      */
      function equipmentListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/quickInspectionEquipment/equipmentList',params:{...paramsData},...info}
          }
      }
       return {equipmentListUsingPOST}
     }
  
     function QuickInspectionHandleController_INSPECTIONBASIC (target) {
       
      /**
      * 处理方式下拉不分页
      */
      function handleListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/quickInspectionHandle/handleList',params:{...paramsData},...info}
          }
      }
       return {handleListUsingPOST}
     }
  
     function QuickInspectionKindController_INSPECTIONBASIC (target) {
       
      /**
      * 样品类别下拉不分页
      */
      function kindListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/quickInspectionKind/kindList',params:{...paramsData},...info}
          }
      }
       return {kindListUsingPOST}
     }
  
     function QuickInspectionOrgController_INSPECTIONBASIC (target) {
       
      /**
      * 检测机构下拉不分页
      */
      function itemListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/quickInspectionOrg/orgList',params:{...paramsData},...info}
          }
      }
      /**
      * 街道下拉不分页
      */
      function xsListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/quickInspectionOrg/xsList',params:{...paramsData},...info}
          }
      }
      /**
      * 用户的区
      */
      function ysListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/quickInspectionOrg/ysList',params:{...paramsData},...info}
          }
      }
       return {itemListUsingPOST,xsListUsingPOST,ysListUsingPOST}
     }
  
     function QuickInspectionProductController_INSPECTIONBASIC (target) {
       
      /**
      * 产品名称下拉不分页
      */
      function productListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/quickInspectionProduct/productList',params:{...paramsData},...info}
          }
      }
       return {productListUsingPOST}
     }
  
     function QuickInspectionProvinceController_INSPECTIONBASIC (target) {
       
      /**
      * 产品产地下拉不分页
      */
      function itemProvinceUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/quickInspectionProvince/itemProvince',params:{...paramsData},...info}
          }
      }
       return {itemProvinceUsingPOST}
     }
  
     function QuickInspectionSpecialsController_INSPECTIONBASIC (target) {
       
      /**
      * 样品品种下拉不分页
      */
      function specialsListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/quickInspectionSpecials/specialsList',params:{...paramsData},...info}
          }
      }
       return {specialsListUsingPOST}
     }
  
     function QuickInspectionTaskController_INSPECTIONBASIC (target) {
       
      /**
      * 添加
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/quickInspectionTask/add',params:{...paramsData},...info}
          }
      }
      /**
      * 详情
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/quickInspectionTask/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 检测数据详情列表
      */
      function getDataUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/quickInspectionTask/getData',params:{...paramsData},...info}
          }
      }
      /**
      * 分页
      */
      function newPageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/quickInspectionTask/newPage',params:{...paramsData},...info}
          }
      }
      /**
      * 分页
      */
      function pageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/quickInspectionTask/page',params:{...paramsData},...info}
          }
      }
      /**
      * 更新
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/quickInspectionTask/update',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,detailUsingPOST,getDataUsingPOST,newPageUsingPOST,pageUsingPOST,updateUsingPOST}
     }
  
     function QuickInspectionTextItemController_INSPECTIONBASIC (target) {
       
      /**
      * 检测项目下拉不分页
      */
      function itemListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/quickInspectionTextItem/itemList',params:{...paramsData},...info}
          }
      }
       return {itemListUsingPOST}
     }
  
     function InspectionSampleController_INSPECTIONBASIC (target) {
       
      /**
      * 检测样本新增接口
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/sample/add',params:{...paramsData},...info}
          }
      }
      /**
      * 检测样本删除接口
      */
      function deleteUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/sample/del',params:{...paramsData},...info}
          }
      }
      /**
      * 检测样本详情接口
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/sample/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 检测样本下拉接口
      */
      function listUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/sample/list',params:{...paramsData},...info}
          }
      }
      /**
      * 检测样本分页接口
      */
      function pageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/sample/page',params:{...paramsData},...info}
          }
      }
      /**
      * 根据token查询检测样本详情接口
      */
      function selectSampleByTokenUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/sample/selectSampleByToken',params:{...paramsData},...info}
          }
      }
      /**
      * 检测样本更新接口
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/sample/update',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,deleteUsingPOST,detailUsingPOST,listUsingPOST,pageUsingPOST,selectSampleByTokenUsingPOST,updateUsingPOST}
     }
  
     function InspectionReportSelfController_INSPECTIONBASIC (target) {
       
      /**
      * 新增
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/selfReport/add',params:{...paramsData},...info}
          }
      }
      /**
      * 删除
      */
      function delUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/selfReport/del',params:{...paramsData},...info}
          }
      }
      /**
      * 详情
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/selfReport/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 分页
      */
      function pageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/selfReport/page',params:{...paramsData},...info}
          }
      }
      /**
      * 更新
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/selfReport/update',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,delUsingPOST,detailUsingPOST,pageUsingPOST,updateUsingPOST}
     }
  
     function SoilInspectionController_INSPECTIONBASIC (target) {
       
      /**
      * 添加
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/soilInspection/add',params:{...paramsData},...info}
          }
      }
      /**
      * 删除
      */
      function delUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/soilInspection/del',params:{...paramsData},...info}
          }
      }
      /**
      * 批量删除删除
      */
      function delBatchUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/soilInspection/delBatch',params:{...paramsData},...info}
          }
      }
      /**
      * 详情
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/soilInspection/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 获取采样单号
      */
      function getOrderNoUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/soilInspection/getOrderNo',params:{...paramsData},...info}
          }
      }
      /**
      * 分页
      */
      function pageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/soilInspection/page',params:{...paramsData},...info}
          }
      }
      /**
      * 更新
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/soilInspection/update',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,delUsingPOST,delBatchUsingPOST,detailUsingPOST,getOrderNoUsingPOST,pageUsingPOST,updateUsingPOST}
     }
  
     function SoilInspectionItemController_INSPECTIONBASIC (target) {
       
      /**
      * 删除
      */
      function delUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/soilInspectionItem/del',params:{...paramsData},...info}
          }
      }
      /**
      * 批量删除删除
      */
      function delBatchUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/soilInspectionItem/delBatch',params:{...paramsData},...info}
          }
      }
      /**
      * 详情
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/soilInspectionItem/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 采样单详情的检测记录
      */
      function listByNoUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/soilInspectionItem/listByNo',params:{...paramsData},...info}
          }
      }
      /**
      * 监管分页
      */
      function pageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/soilInspectionItem/page',params:{...paramsData},...info}
          }
      }
      /**
      * 农业主体分页
      */
      function pageByOwnerUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/soilInspectionItem/pageByOwner',params:{...paramsData},...info}
          }
      }
       return {delUsingPOST,delBatchUsingPOST,detailUsingPOST,listByNoUsingPOST,pageUsingPOST,pageByOwnerUsingPOST}
     }
  
     function InspectionSpecificationController_INSPECTIONBASIC (target) {
       
      /**
      * 检测标准新增
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/standard/add',params:{...paramsData},...info}
          }
      }
      /**
      * 删除接口
      */
      function deleteUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/standard/del',params:{...paramsData},...info}
          }
      }
      /**
      * 检测标准详情
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/standard/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 检测标准下拉列表
      */
      function selectSpecificationListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/standard/list',params:{...paramsData},...info}
          }
      }
      /**
      * 检测标准分页接口
      */
      function pageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/standard/page',params:{...paramsData},...info}
          }
      }
      /**
      * 检测标准更新
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/standard/update',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,deleteUsingPOST,detailUsingPOST,selectSpecificationListUsingPOST,pageUsingPOST,updateUsingPOST}
     }
  
     function InspectionSpecificationItemsController_INSPECTIONBASIC (target) {
       
      /**
      * 新增
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/standard/item/add',params:{...paramsData},...info}
          }
      }
      /**
      * 删除检测项目
      */
      function deleteUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/standard/item/del',params:{...paramsData},...info}
          }
      }
      /**
      * 检测标准项详情
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/standard/item/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 检测项目分页
      */
      function pageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/standard/item/page',params:{...paramsData},...info}
          }
      }
      /**
      * 更新
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/standard/item/update',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,deleteUsingPOST,detailUsingPOST,pageUsingPOST,updateUsingPOST}
     }
  
     function MonitorTaskController_INSPECTIONBASIC (target) {
       
      /**
      * 监测任务新增接口
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/task/add',params:{...paramsData},...info}
          }
      }
      /**
      * 监测任务完成接口
      */
      function completeUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/task/complete',params:{...paramsData},...info}
          }
      }
      /**
      * 监测任务取消接口
      */
      function deleteUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/task/del',params:{...paramsData},...info}
          }
      }
      /**
      * 监测任务详情接口
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/task/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 监测任务详情接口
      */
      function detailBatchUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/task/detailBatch',params:{...paramsData},...info}
          }
      }
      /**
      * 监测任务下拉接口
      */
      function listUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/task/list',params:{...paramsData},...info}
          }
      }
      /**
      * 监测任务分页接口
      */
      function pageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/task/page',params:{...paramsData},...info}
          }
      }
      /**
      * 根据任务id查询task的相关信息
      */
      function selectTaskByTokenUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/task/selectTaskByToken',params:{...paramsData},...info}
          }
      }
      /**
      * 监测任务更新接口
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/task/update',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,completeUsingPOST,deleteUsingPOST,detailUsingPOST,detailBatchUsingPOST,listUsingPOST,pageUsingPOST,selectTaskByTokenUsingPOST,updateUsingPOST}
     }
  
     function MonotorTaskBatchController_INSPECTIONBASIC (target) {
       
      /**
      * 监测任务批次新增接口
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/taskBatch/add',params:{...paramsData},...info}
          }
      }
      /**
      * 选择组织机构
      */
      function addOrgUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/taskBatch/addOrg',params:{...paramsData},...info}
          }
      }
      /**
      * 样品采样完成
      */
      function addSampleUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/taskBatch/addSample',params:{...paramsData},...info}
          }
      }
      /**
      * 审核通过
      */
      function auditUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/taskBatch/audit',params:{...paramsData},...info}
          }
      }
      /**
      * 审核不通过
      */
      function auditNotUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/taskBatch/auditNot',params:{...paramsData},...info}
          }
      }
      /**
      * 监测任务批次取消接口
      */
      function deleteUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/taskBatch/del',params:{...paramsData},...info}
          }
      }
      /**
      * 监测任务批次真删除接口
      */
      function deleteBatchUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/taskBatch/delete',params:{...paramsData},...info}
          }
      }
      /**
      * 监测任务批次详情接口
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/taskBatch/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 监测任务批次详情接口
      */
      function detailBatchUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/taskBatch/detailBatch',params:{...paramsData},...info}
          }
      }
      /**
      * 根据监管任务id查询监测任务批次下拉接口
      */
      function listUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/taskBatch/list',params:{...paramsData},...info}
          }
      }
      /**
      * 监测任务批次分页接口
      */
      function pageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/taskBatch/page',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,addOrgUsingPOST,addSampleUsingPOST,auditUsingPOST,auditNotUsingPOST,deleteUsingPOST,deleteBatchUsingPOST,detailUsingPOST,detailBatchUsingPOST,listUsingPOST,pageUsingPOST}
     }
  
     function InspectionEquipmentProductorController_INSPECTIONBASIC (target) {
       
      /**
      * 新增检测设备厂商
      */
      function addEquipmentCsUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/tgyTestingEquipmentCs/addEquipmentCs',params:{...paramsData},...info}
          }
      }
      /**
      * 新增检测设备厂商商标
      */
      function addEquipmentCsppUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/tgyTestingEquipmentCs/addEquipmentCspp',params:{...paramsData},...info}
          }
      }
      /**
      * 新增检测设备厂商商标
      */
      function addEquipmentCsppxhUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/tgyTestingEquipmentCs/addEquipmentCsppxh',params:{...paramsData},...info}
          }
      }
      /**
      * 批量删除
      */
      function deleteBatchEquipmentCsUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/tgyTestingEquipmentCs/deleteBatchEquipmentCs',params:{...paramsData},...info}
          }
      }
      /**
      * 批量删除
      */
      function deleteBatchEquipmentCsppUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/tgyTestingEquipmentCs/deleteBatchEquipmentCspp',params:{...paramsData},...info}
          }
      }
      /**
      * 批量删除
      */
      function deleteBatchEquipmentCsppxhUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/tgyTestingEquipmentCs/deleteBatchEquipmentCsppxh',params:{...paramsData},...info}
          }
      }
      /**
      * 检测设备厂商详情
      */
      function detailFirmUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/tgyTestingEquipmentCs/detailEquipmentCs',params:{...paramsData},...info}
          }
      }
      /**
      * 检测设备厂商商标详情
      */
      function detailEquipmentCsppUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/tgyTestingEquipmentCs/detailEquipmentCspp',params:{...paramsData},...info}
          }
      }
      /**
      * 检测设备厂商商标详情
      */
      function detailEquipmentCsppxhUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/tgyTestingEquipmentCs/detailEquipmentCsppxh',params:{...paramsData},...info}
          }
      }
      /**
      * 厂商列表
      */
      function equipmentCsAllUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/tgyTestingEquipmentCs/equipmentCsAll',params:{...paramsData},...info}
          }
      }
      /**
      * 检测设备厂商品牌列表
      */
      function equipmentCsListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/tgyTestingEquipmentCs/equipmentCsList',params:{...paramsData},...info}
          }
      }
      /**
      * 厂商列表
      */
      function equipmentCsppAllUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/tgyTestingEquipmentCs/equipmentCsppAll',params:{...paramsData},...info}
          }
      }
      /**
      * 下拉厂商品牌列表
      */
      function equipmentCsppxhAllUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/tgyTestingEquipmentCs/equipmentCsppxhAll',params:{...paramsData},...info}
          }
      }
      /**
      * 检测设备厂商品牌列表
      */
      function equipmentCsppxhListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/inspection/basic/tgyTestingEquipmentCs/equipmentCsppxhList',params:{...paramsData},...info}
          }
      }
       return {addEquipmentCsUsingPOST,addEquipmentCsppUsingPOST,addEquipmentCsppxhUsingPOST,deleteBatchEquipmentCsUsingPOST,deleteBatchEquipmentCsppUsingPOST,deleteBatchEquipmentCsppxhUsingPOST,detailFirmUsingPOST,detailEquipmentCsppUsingPOST,detailEquipmentCsppxhUsingPOST,equipmentCsAllUsingPOST,equipmentCsListUsingPOST,equipmentCsppAllUsingPOST,equipmentCsppxhAllUsingPOST,equipmentCsppxhListUsingPOST}
     }
  
  
    
     function FarmlandController_TRACECOMPANY (target) {
       
      /**
      * 添加基地对象
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/base/addBase',params:{...paramsData},...info}
          }
      }
      /**
      * 删除基地信息
      */
      function deleteUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/base/delete',params:{...paramsData},...info}
          }
      }
      /**
      * 基地详细信息
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/base/detail',params:{...paramsData},...info}
          }
      }
      /**
      * excel导出
      */
      function excelWriterUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/base/excelWriter',params:{...paramsData},...info}
          }
      }
      /**
      * 获取基地地块级联
      */
      function getBaseAndMassifUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/base/getBaseAndMassif',params:{...paramsData},...info}
          }
      }
      /**
      * 获取基地下拉
      */
      function getBaseListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/base/getBaseList',params:{...paramsData},...info}
          }
      }
      /**
      * 查询主体地址
      */
      function getCompanyAddressUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/base/getCompanyAddress',params:{...paramsData},...info}
          }
      }
      /**
      * 获取本企业最新的基地
      */
      function getLastestBaseUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/base/getLastestBase',params:{...paramsData},...info}
          }
      }
      /**
      * 获取基地列表
      */
      function pageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/base/list',params:{...paramsData},...info}
          }
      }
      /**
      * 监管获取基地列表
      */
      function page2UsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/base/list2',params:{...paramsData},...info}
          }
      }
      /**
      * 查询地块名称
      */
      function selectBatchNumUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/base/selectBlockNum',params:{...paramsData},...info}
          }
      }
      /**
      * 更新基地信息
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/base/updateBase',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,deleteUsingPOST,detailUsingPOST,excelWriterUsingPOST,getBaseAndMassifUsingPOST,getBaseListUsingPOST,getCompanyAddressUsingPOST,getLastestBaseUsingPOST,pageUsingPOST,page2UsingPOST,selectBatchNumUsingPOST,updateUsingPOST}
     }
  
     function TraceBatchController_TRACECOMPANY (target) {
       
      /**
      * 新增对象
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/batch/add',params:{...paramsData},...info}
          }
      }
      /**
      * 批次下拉不分页
      */
      function batchListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/batch/batchList',params:{...paramsData},...info}
          }
      }
      /**
      * 获取包含农事的产品批次
      */
      function batchListByFarmingUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/batch/batchListByFarming',params:{...paramsData},...info}
          }
      }
      /**
      * 关闭
      */
      function closedUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/batch/closed',params:{...paramsData},...info}
          }
      }
      /**
      * 删除
      */
      function delUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/batch/del',params:{...paramsData},...info}
          }
      }
      /**
      * 批量删除
      */
      function delMoreUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/batch/delMore',params:{...paramsData},...info}
          }
      }
      /**
      * 明细对象
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/batch/get',params:{...paramsData},...info}
          }
      }
      /**
      * 根据主体，分页集合
      */
      function listMcidUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/batch/list',params:{...paramsData},...info}
          }
      }
      /**
      * 批次农事记录
      */
      function listFarmingUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/batch/listFarming',params:{...paramsData},...info}
          }
      }
      /**
      * 批次自检报告
      */
      function listReportUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/batch/listReport',params:{...paramsData},...info}
          }
      }
      /**
      * 根据产品id查询批次list
      */
      function selectBatchListByProductUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/batch/selectBatchListByProduct',params:{...paramsData},...info}
          }
      }
      /**
      * 查询批次数
      */
      function selectBatchNumUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/batch/selectBatchNum',params:{...paramsData},...info}
          }
      }
      /**
      * 修改对象
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/batch/update',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,batchListUsingPOST,batchListByFarmingUsingPOST,closedUsingPOST,delUsingPOST,delMoreUsingPOST,detailUsingPOST,listMcidUsingPOST,listFarmingUsingPOST,listReportUsingPOST,selectBatchListByProductUsingPOST,selectBatchNumUsingPOST,updateUsingPOST}
     }
  
     function CategoryController_TRACECOMPANY (target) {
       
      /**
      * 新增我的类别
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/category/add',params:{...paramsData},...info}
          }
      }
      /**
      * categoryList列表
      */
      function categoryListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/category/categoryList',params:{...paramsData},...info}
          }
      }
      /**
      * 检查类别code是否重复
      */
      function checkUsingGET(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/category/check',params:{...paramsData},...info}
          }
      }
      /**
      * 检查all_name是否重复
      */
      function checkAllNameUsingGET(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/category/checkAllName',params:{...paramsData},...info}
          }
      }
      /**
      * 删除我的类别数据
      */
      function deleteUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/category/delete',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,categoryListUsingPOST,checkUsingGET,checkAllNameUsingGET,deleteUsingPOST}
     }
  
     function TraceCodeChartController_TRACECOMPANY (target) {
       
      /**
      * 获取总追溯码数量
      */
      function getSumCodeUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/codeChart/getSumCode',params:{...paramsData},...info}
          }
      }
       return {getSumCodeUsingPOST}
     }
  
     function FarmOtherInspectionController_TRACECOMPANY (target) {
       
      /**
      * 详情
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmOtherInspection/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 第三方检测报告同步
      */
      function downloadUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmOtherInspection/download',params:{...paramsData},...info}
          }
      }
      /**
      * 新增
      */
      function insertUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmOtherInspection/insert',params:{...paramsData},...info}
          }
      }
      /**
      * 模糊检测名称查询下拉
      */
      function listUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmOtherInspection/list',params:{...paramsData},...info}
          }
      }
      /**
      * 第三方检测列表
      */
      function pageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmOtherInspection/page',params:{...paramsData},...info}
          }
      }
      /**
      * 更新
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmOtherInspection/update',params:{...paramsData},...info}
          }
      }
       return {detailUsingPOST,downloadUsingPOST,insertUsingPOST,listUsingPOST,pageUsingPOST,updateUsingPOST}
     }
  
     function FarmPackingController_TRACECOMPANY (target) {
       
      /**
      * 新增
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmPacking/add',params:{...paramsData},...info}
          }
      }
      /**
      * 删除
      */
      function delUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmPacking/del',params:{...paramsData},...info}
          }
      }
      /**
      * 查看
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmPacking/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 查询
      */
      function pageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmPacking/page',params:{...paramsData},...info}
          }
      }
      /**
      * 根据包装产品id查询批次列表
      */
      function selectBatchListByProductIdPackUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmPacking/selectBatchListByProductIdPack',params:{...paramsData},...info}
          }
      }
      /**
      * 修改
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmPacking/update',params:{...paramsData},...info}
          }
      }
      /**
      * 修改追溯状态
      */
      function updateTraceUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmPacking/updateTrace',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,delUsingPOST,detailUsingPOST,pageUsingPOST,selectBatchListByProductIdPackUsingPOST,updateUsingPOST,updateTraceUsingPOST}
     }
  
     function FarmPickController_TRACECOMPANY (target) {
       
      /**
      * 新增
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmPick/add',params:{...paramsData},...info}
          }
      }
      /**
      * 删除
      */
      function delUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmPick/del',params:{...paramsData},...info}
          }
      }
      /**
      * 查看
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmPick/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 地块列表
      */
      function dkListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmPick/dkList',params:{...paramsData},...info}
          }
      }
      /**
      * 查询
      */
      function pageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmPick/page',params:{...paramsData},...info}
          }
      }
      /**
      * 根据产品id查询地块和产品
      */
      function selectBatchListByProductIdUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmPick/selectBatchListByProductId',params:{...paramsData},...info}
          }
      }
      /**
      * 修改
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmPick/update',params:{...paramsData},...info}
          }
      }
      /**
      * 修改追溯状态
      */
      function updateTraceUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmPick/updateTrace',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,delUsingPOST,detailUsingPOST,dkListUsingPOST,pageUsingPOST,selectBatchListByProductIdUsingPOST,updateUsingPOST,updateTraceUsingPOST}
     }
  
     function FarmSalesRecordController_TRACECOMPANY (target) {
       
      /**
      * 新增
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmSalesRecord/add',params:{...paramsData},...info}
          }
      }
      /**
      * 删除
      */
      function delUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmSalesRecord/del',params:{...paramsData},...info}
          }
      }
      /**
      * 查看
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmSalesRecord/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 查询
      */
      function pageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmSalesRecord/page',params:{...paramsData},...info}
          }
      }
      /**
      * 根据销售产品id查询批次列表
      */
      function selectBatchListByProductIdSalesUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmSalesRecord/selectBatchListByProductIdSales',params:{...paramsData},...info}
          }
      }
      /**
      * 交易方式列表
      */
      function selectTransactionModeUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmSalesRecord/selectTransactionMode',params:{...paramsData},...info}
          }
      }
      /**
      * 查询购买单位
      */
      function selectUnitUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmSalesRecord/selectUnit',params:{...paramsData},...info}
          }
      }
      /**
      * 修改
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmSalesRecord/update',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,delUsingPOST,detailUsingPOST,pageUsingPOST,selectBatchListByProductIdSalesUsingPOST,selectTransactionModeUsingPOST,selectUnitUsingPOST,updateUsingPOST}
     }
  
     function FarmSortingController_TRACECOMPANY (target) {
       
      /**
      * 新增
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmSorting/add',params:{...paramsData},...info}
          }
      }
      /**
      * 删除
      */
      function delUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmSorting/del',params:{...paramsData},...info}
          }
      }
      /**
      * 查看
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmSorting/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 查询
      */
      function pageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmSorting/page',params:{...paramsData},...info}
          }
      }
      /**
      * 根据分拣产品id查询批次列表
      */
      function selectBatchListByProductIdSortUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmSorting/selectBatchListByProductIdSort',params:{...paramsData},...info}
          }
      }
      /**
      * 修改
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmSorting/update',params:{...paramsData},...info}
          }
      }
      /**
      * 修改追溯状态
      */
      function updateTraceUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmSorting/updateTrace',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,delUsingPOST,detailUsingPOST,pageUsingPOST,selectBatchListByProductIdSortUsingPOST,updateUsingPOST,updateTraceUsingPOST}
     }
  
     function FarmingController_TRACECOMPANY (target) {
       
      /**
      * 农事新增
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farming/add',params:{...paramsData},...info}
          }
      }
      /**
      * 农事列表
      */
      function codeListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farming/codeList',params:{...paramsData},...info}
          }
      }
      /**
      * 批量删除
      */
      function deleteBatchUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farming/deleteBatch',params:{...paramsData},...info}
          }
      }
      /**
      * 农事类型详情
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farming/detail',params:{...paramsData},...info}
          }
      }
      /**
      * excel导出
      */
      function excelWriterUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farming/excelWriter',params:{...paramsData},...info}
          }
      }
      /**
      * 获取农事操作类型-全部
      */
      function farmingTypeUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farming/farmingTypeAll',params:{...paramsData},...info}
          }
      }
      /**
      * 获取投入品
      */
      function findInputsUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farming/findInputs',params:{...paramsData},...info}
          }
      }
      /**
      * 获取投入品
      */
      function findInputsNewUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farming/findInputsNew',params:{...paramsData},...info}
          }
      }
      /**
      * 投入品单位
      */
      function findUnitUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farming/findUnit',params:{...paramsData},...info}
          }
      }
      /**
      * 新增  新
      */
      function insertNewUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farming/insertNew',params:{...paramsData},...info}
          }
      }
      /**
      * 农事列表
      */
      function listUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farming/list',params:{...paramsData},...info}
          }
      }
      /**
      * 农事列表
      */
      function listListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farming/listList',params:{...paramsData},...info}
          }
      }
      /**
      * 更新
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farming/update',params:{...paramsData},...info}
          }
      }
      /**
      * 修改追溯状态
      */
      function updateTraceUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farming/updateTrace',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,codeListUsingPOST,deleteBatchUsingPOST,detailUsingPOST,excelWriterUsingPOST,farmingTypeUsingPOST,findInputsUsingPOST,findInputsNewUsingPOST,findUnitUsingPOST,insertNewUsingPOST,listUsingPOST,listListUsingPOST,updateUsingPOST,updateTraceUsingPOST}
     }
  
     function FarmingLogController_TRACECOMPANY (target) {
       
      /**
      * 农事日志新增接口
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmingLog/add',params:{...paramsData},...info}
          }
      }
      /**
      * 农事日志删除接口
      */
      function deleteUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmingLog/del',params:{...paramsData},...info}
          }
      }
      /**
      * 农事日志详情接口
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmingLog/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 农事日志下拉接口
      */
      function listUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmingLog/list',params:{...paramsData},...info}
          }
      }
      /**
      * 农事日志分页接口
      */
      function pageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmingLog/page',params:{...paramsData},...info}
          }
      }
      /**
      * 农事日志更新接口
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmingLog/update',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,deleteUsingPOST,detailUsingPOST,listUsingPOST,pageUsingPOST,updateUsingPOST}
     }
  
     function FarmingTypeController_TRACECOMPANY (target) {
       
      /**
      * 农事类型新增
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmingType/add',params:{...paramsData},...info}
          }
      }
      /**
      * 批量删除
      */
      function deleteBatchUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmingType/deleteBatch',params:{...paramsData},...info}
          }
      }
      /**
      * 启用禁用
      */
      function disableBatchUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmingType/disableBatch',params:{...paramsData},...info}
          }
      }
      /**
      * 农事类型下拉不分页
      */
      function listUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmingType/farmingTypeList',params:{...paramsData},...info}
          }
      }
      /**
      * 农事类型列表
      */
      function listUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmingType/list',params:{...paramsData},...info}
          }
      }
      /**
      * 排序
      */
      function sortUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmingType/sort',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,deleteBatchUsingPOST,disableBatchUsingPOST,listUsingPOST,listUsingPOST,sortUsingPOST}
     }
  
     function FarmlandBlockController_TRACECOMPANY (target) {
       
      /**
      * 新增地块
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmlandBlock/addMassif',params:{...paramsData},...info}
          }
      }
      /**
      * 逻辑删除地块信息
      */
      function deleteUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmlandBlock/deleteByBbmid',params:{...paramsData},...info}
          }
      }
      /**
      * 根据批次id获取地块信息
      */
      function listBlockByBatchIdUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmlandBlock/listBlockByBatchId',params:{...paramsData},...info}
          }
      }
      /**
      * 地块详细信息
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmlandBlock/massifDetail',params:{...paramsData},...info}
          }
      }
      /**
      * 地块分页 根据基地ID
      */
      function pageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmlandBlock/page',params:{...paramsData},...info}
          }
      }
      /**
      * 根据产品id查询基地id name
      */
      function selectFarmlandByProductUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmlandBlock/selectFarmlandByProduct',params:{...paramsData},...info}
          }
      }
      /**
      * 更新地块信息
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmlandBlock/updateMassif',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,deleteUsingPOST,listBlockByBatchIdUsingPOST,detailUsingPOST,pageUsingPOST,selectFarmlandByProductUsingPOST,updateUsingPOST}
     }
  
     function PatrolTemplateItemController_TRACECOMPANY (target) {
       
      /**
      * 停用启用目录
      */
      function patrolTemplateItemableUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/firm/checkitem/able',params:{...paramsData},...info}
          }
      }
      /**
      * 新增检查表检查项
      */
      function patrolTemplateItemaddUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/firm/checkitem/add',params:{...paramsData},...info}
          }
      }
      /**
      * 删除检查表检查项
      */
      function patrolTemplateItemdelUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/firm/checkitem/del',params:{...paramsData},...info}
          }
      }
      /**
      * 检查表检查项详情
      */
      function patrolTemplateItemdetailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/firm/checkitem/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 检查表检查项list树形结构只有启用选项
      */
      function patrolTemplateItemlisttreeUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/firm/checkitem/listtree',params:{...paramsData},...info}
          }
      }
      /**
      * 检查表检查项list树形结构拥有禁用选项
      */
      function patrolTemplateItemlisttree1UsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/firm/checkitem/listtreedisable',params:{...paramsData},...info}
          }
      }
      /**
      * 排序更改
      */
      function patrolTemplateItemsortUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/firm/checkitem/sort',params:{...paramsData},...info}
          }
      }
      /**
      * 修改检查表检查项
      */
      function patrolTemplateItemupdateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/firm/checkitem/update',params:{...paramsData},...info}
          }
      }
       return {patrolTemplateItemableUsingPOST,patrolTemplateItemaddUsingPOST,patrolTemplateItemdelUsingPOST,patrolTemplateItemdetailUsingPOST,patrolTemplateItemlisttreeUsingPOST,patrolTemplateItemlisttree1UsingPOST,patrolTemplateItemsortUsingPOST,patrolTemplateItemupdateUsingPOST}
     }
  
     function PatrolTemplateController_TRACECOMPANY (target) {
       
      /**
      * 新增检查表
      */
      function addPatrolTemplateActionUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/firm/checklist/add',params:{...paramsData},...info}
          }
      }
      /**
      * 删除检查表
      */
      function deletePatrolTemplateActionUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/firm/checklist/del',params:{...paramsData},...info}
          }
      }
      /**
      * 检查表详情
      */
      function detailPatrolTemplateActionUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/firm/checklist/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 启用禁用
      */
      function enablePatrolTemplateActionUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/firm/checklist/enable',params:{...paramsData},...info}
          }
      }
      /**
      * 检查表list
      */
      function listPatrolTemplateActionUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/firm/checklist/list',params:{...paramsData},...info}
          }
      }
      /**
      * 检查表分页
      */
      function pagePatrolTemplateActionUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/firm/checklist/page',params:{...paramsData},...info}
          }
      }
      /**
      * 查看检查表
      */
      function selectChecklistUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/firm/checklist/selectChecklist',params:{...paramsData},...info}
          }
      }
      /**
      * 修改检查表
      */
      function updatePatrolTemplateActionUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/firm/checklist/update',params:{...paramsData},...info}
          }
      }
       return {addPatrolTemplateActionUsingPOST,deletePatrolTemplateActionUsingPOST,detailPatrolTemplateActionUsingPOST,enablePatrolTemplateActionUsingPOST,listPatrolTemplateActionUsingPOST,pagePatrolTemplateActionUsingPOST,selectChecklistUsingPOST,updatePatrolTemplateActionUsingPOST}
     }
  
     function PatrolController_TRACECOMPANY (target) {
       
      /**
      * 巡更记录增加
      */
      function addPatrolUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/firm/patrol/add',params:{...paramsData},...info}
          }
      }
      /**
      * 查看报告
      */
      function selectChecklistUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/firm/patrol/checkReport',params:{...paramsData},...info}
          }
      }
      /**
      * 根据单位权限查询区域
      */
      function getRegionListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/firm/patrol/getRegionList',params:{...paramsData},...info}
          }
      }
      /**
      * 巡更记录表分页
      */
      function pagePatrolUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/firm/patrol/page',params:{...paramsData},...info}
          }
      }
      /**
      * 巡更记录表分页
      */
      function pagePatrolNewUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/firm/patrol/pagePatrolNew',params:{...paramsData},...info}
          }
      }
       return {addPatrolUsingPOST,selectChecklistUsingPOST,getRegionListUsingPOST,pagePatrolUsingPOST,pagePatrolNewUsingPOST}
     }
  
     function PatrolTaskController_TRACECOMPANY (target) {
       
      /**
      * 新增巡更任务
      */
      function addPatrolTaskActionUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/firm/patrolTask/add',params:{...paramsData},...info}
          }
      }
      /**
      * 巡更完成
      */
      function patrolTaskCompleteUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/firm/patrolTask/complete',params:{...paramsData},...info}
          }
      }
      /**
      * 作废巡更任务
      */
      function delPatrolTaskActionUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/firm/patrolTask/del',params:{...paramsData},...info}
          }
      }
      /**
      * 删除作废的巡更任务
      */
      function deleteUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/firm/patrolTask/delete',params:{...paramsData},...info}
          }
      }
      /**
      * 检查表详情
      */
      function detailPatrolTemplateActionUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/firm/patrolTask/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 巡更表分页
      */
      function pagePatrolTaskUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/firm/patrolTask/page',params:{...paramsData},...info}
          }
      }
      /**
      * 撤回巡更任务
      */
      function recallUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/firm/patrolTask/recall',params:{...paramsData},...info}
          }
      }
      /**
      * 任务下拉
      */
      function taskListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/firm/patrolTask/taskList',params:{...paramsData},...info}
          }
      }
      /**
      * 修改巡更任务
      */
      function updatePatrolTaskActionUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/firm/patrolTask/update',params:{...paramsData},...info}
          }
      }
       return {addPatrolTaskActionUsingPOST,patrolTaskCompleteUsingPOST,delPatrolTaskActionUsingPOST,deleteUsingPOST,detailPatrolTemplateActionUsingPOST,pagePatrolTaskUsingPOST,recallUsingPOST,taskListUsingPOST,updatePatrolTaskActionUsingPOST}
     }
  
     function InputsStockController_TRACECOMPANY (target) {
       
      /**
      * 投入品库存分页接口
      */
      function pageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/inputsStock/page',params:{...paramsData},...info}
          }
      }
       return {pageUsingPOST}
     }
  
     function InputsStockHistoryController_TRACECOMPANY (target) {
       
      /**
      * 投入品库存新增接口
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/inputsStockHistory/add',params:{...paramsData},...info}
          }
      }
      /**
      * 投入品库存详情接口
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/inputsStockHistory/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 投入品库存分页接口
      */
      function pageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/inputsStockHistory/page',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,detailUsingPOST,pageUsingPOST}
     }
  
     function FarmProductInspectionController_TRACECOMPANY (target) {
       
      /**
      * 第三方检测新增
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/inspection/add',params:{...paramsData},...info}
          }
      }
      /**
      * 第三方检测删除
      */
      function deleteUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/inspection/delete',params:{...paramsData},...info}
          }
      }
      /**
      * 第三方检测详情
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/inspection/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 列表
      */
      function listUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/inspection/page',params:{...paramsData},...info}
          }
      }
      /**
      * 第三方检测更新
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/inspection/update',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,deleteUsingPOST,detailUsingPOST,listUsingPOST,updateUsingPOST}
     }
  
     function PatrolChartController_TRACECOMPANY (target) {
       
      /**
      * 异常项解析
      */
      function getAnomUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/patrolChart/getAnom',params:{...paramsData},...info}
          }
      }
      /**
      * 异常项解析
      */
      function getAnomDayUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/patrolChart/getAnomDay',params:{...paramsData},...info}
          }
      }
      /**
      * 本月异常项解析
      */
      function getAnomDaySumUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/patrolChart/getAnomDaySum',params:{...paramsData},...info}
          }
      }
      /**
      * 异常项分页
      */
      function getAnomPageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/patrolChart/getAnomPage',params:{...paramsData},...info}
          }
      }
      /**
      * 本月异常项解析
      */
      function getAnomSumUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/patrolChart/getAnomSum',params:{...paramsData},...info}
          }
      }
      /**
      * 获取最上面的四个小卡片
      */
      function getChartUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/patrolChart/getChart',params:{...paramsData},...info}
          }
      }
      /**
      * 巡更次数趋势
      */
      function getPatrolCountUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/patrolChart/getPatrolCount',params:{...paramsData},...info}
          }
      }
      /**
      * 个人巡更次数排名
      */
      function getPatrolPersonUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/patrolChart/getPatrolPerson',params:{...paramsData},...info}
          }
      }
      /**
      * 
巡更主体占比
      */
      function getRateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/patrolChart/getRate',params:{...paramsData},...info}
          }
      }
       return {getAnomUsingPOST,getAnomDayUsingPOST,getAnomDaySumUsingPOST,getAnomPageUsingPOST,getAnomSumUsingPOST,getChartUsingPOST,getPatrolCountUsingPOST,getPatrolPersonUsingPOST,getRateUsingPOST}
     }
  
     function ProductController_TRACECOMPANY (target) {
       
      /**
      * 农产品新增
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/product/add',params:{...paramsData},...info}
          }
      }
      /**
      * 验证农产品名是否重复
      */
      function checkProductUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/product/checkProduct',params:{...paramsData},...info}
          }
      }
      /**
      * 批量删除
      */
      function deleteBatchUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/product/deleteBatch',params:{...paramsData},...info}
          }
      }
      /**
      * 农产品详情
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/product/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 证书列表
      */
      function getCertifyListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/product/getCertifyList',params:{...paramsData},...info}
          }
      }
      /**
      * 产品上架获取农产品详情
      */
      function getProDetailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/product/getProDetail',params:{...paramsData},...info}
          }
      }
      /**
      * 三品一标详情的产品列表
      */
      function getProListByVertifyUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/product/getProListByVertify',params:{...paramsData},...info}
          }
      }
      /**
      * 证书列表
      */
      function getSupeCertifyListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/product/getSupeCertifyList',params:{...paramsData},...info}
          }
      }
      /**
      * 农产品首页列表
      */
      function homeListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/product/homeList',params:{...paramsData},...info}
          }
      }
      /**
      * 信息服务主体列表
      */
      function infolistUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/product/infolist',params:{...paramsData},...info}
          }
      }
      /**
      * 农产品列表
      */
      function listUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/product/list',params:{...paramsData},...info}
          }
      }
      /**
      * 监管农产品列表
      */
      function list2UsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/product/list2',params:{...paramsData},...info}
          }
      }
      /**
      * 农产品下拉不分页
      */
      function productListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/product/productList',params:{...paramsData},...info}
          }
      }
      /**
      * 查询产品追溯码分页
      */
      function pageFeignsUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/product/productTrace',params:{...paramsData},...info}
          }
      }
      /**
      * 查询地块数
      */
      function selectBatchNumUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/product/selectDetailById',params:{...paramsData},...info}
          }
      }
      /**
      * 更新产品的三品一标
      */
      function updateCertifyListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/product/updateCertifyList',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,checkProductUsingPOST,deleteBatchUsingPOST,detailUsingPOST,getCertifyListUsingPOST,getProDetailUsingPOST,getProListByVertifyUsingPOST,getSupeCertifyListUsingPOST,homeListUsingPOST,infolistUsingPOST,listUsingPOST,list2UsingPOST,productListUsingPOST,pageFeignsUsingPOST,selectBatchNumUsingPOST,updateCertifyListUsingPOST}
     }
  
     function ProductCategoryController_TRACECOMPANY (target) {
       
      /**
      * 模糊搜索类型
      */
      function findProductClassifyUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/product/findProductClassify',params:{...paramsData},...info}
          }
      }
      /**
      * 级联一次性查出所有
      */
      function getPlyProductClassifyListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/product/getPlyProductClassifyList',params:{...paramsData},...info}
          }
      }
       return {findProductClassifyUsingPOST,getPlyProductClassifyListUsingPOST}
     }
  
     function DataStatisticsController_TRACECOMPANY (target) {
       
      /**
      * 主体统计图饼图统计信息
      */
      function companyChartUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/statistics/companyChart',params:{...paramsData},...info}
          }
      }
      /**
      * 主体统计图头部统计信息
      */
      function companyHeaderUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/statistics/companyHeader',params:{...paramsData},...info}
          }
      }
      /**
      * 主体统计图地区划分统计信息
      */
      function companyRegionUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/statistics/companyRegion',params:{...paramsData},...info}
          }
      }
      /**
      * 主体统计图底部分类统计信息
      */
      function companyTypeUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/statistics/companyType',params:{...paramsData},...info}
          }
      }
      /**
      * 近3年连续企业
      */
      function getCreditListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/statistics/getCreditList',params:{...paramsData},...info}
          }
      }
      /**
      * 近3年连续企业
      */
      function getCreditPageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/statistics/getCreditPage',params:{...paramsData},...info}
          }
      }
      /**
      * 企业等级分布情况
      */
      function getCreditRankUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/statistics/getCreditRank',params:{...paramsData},...info}
          }
      }
      /**
      * 信用企业分析上面7个小版块
      */
      function getCreditRateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/statistics/getCreditRate',params:{...paramsData},...info}
          }
      }
       return {companyChartUsingPOST,companyHeaderUsingPOST,companyRegionUsingPOST,companyTypeUsingPOST,getCreditListUsingPOST,getCreditPageUsingPOST,getCreditRankUsingPOST,getCreditRateUsingPOST}
     }
  
     function TraceApplyController_TRACECOMPANY (target) {
       
      /**
      * 追溯码申请
      */
      function applyNewUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/traceApply/apply',params:{...paramsData},...info}
          }
      }
      /**
      * 追溯码审核
      */
      function auditUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/traceApply/audit',params:{...paramsData},...info}
          }
      }
      /**
      * 审核详情页
      */
      function auditDetailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/traceApply/auditDetail',params:{...paramsData},...info}
          }
      }
      /**
      * 追溯码审核列表
      */
      function auditUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/traceApply/auditList',params:{...paramsData},...info}
          }
      }
      /**
      * 批量删除
      */
      function deleteBatchUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/traceApply/deleteBatch',params:{...paramsData},...info}
          }
      }
      /**
      * 申请详情页
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/traceApply/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 追溯码首页列表
      */
      function homeListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/traceApply/homeList',params:{...paramsData},...info}
          }
      }
      /**
      * 追溯码申请列表
      */
      function listUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/traceApply/list',params:{...paramsData},...info}
          }
      }
      /**
      * 追溯码保存
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/traceApply/update',params:{...paramsData},...info}
          }
      }
       return {applyNewUsingPOST,auditUsingPOST,auditDetailUsingPOST,auditUsingPOST,deleteBatchUsingPOST,detailUsingPOST,homeListUsingPOST,listUsingPOST,updateUsingPOST}
     }
  
     function TraceCodeController_TRACECOMPANY (target) {
       
      /**
      * 生成追溯码，打印数量，返回追溯码集合
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/traceCode/add',params:{...paramsData},...info}
          }
      }
      /**
      * 所有主体的追溯码管理列表
      */
      function allListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/traceCode/allList',params:{...paramsData},...info}
          }
      }
      /**
      * 追溯码详情
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/traceCode/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 该主体下追溯码管理列表
      */
      function listUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/traceCode/list',params:{...paramsData},...info}
          }
      }
      /**
      * 追溯码打印
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/traceCode/print',params:{...paramsData},...info}
          }
      }
      /**
      * yinfeng 农业追溯接口上传数据
      */
      function traceUploadUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/traceCode/traceUpload',params:{...paramsData},...info}
          }
      }
      /**
      * 溯源上报列表 
      */
      function webserviceTraceListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/traceCode/webserviceTraceList',params:{...paramsData},...info}
          }
      }
      /**
      * yinfeng 详细内容xml文件
      */
      function webserviceXmlUsingGET(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/traceCode/xml/{code}',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,allListUsingPOST,detailUsingPOST,listUsingPOST,updateUsingPOST,traceUploadUsingPOST,webserviceTraceListUsingPOST,webserviceXmlUsingGET}
     }
  
     function TraceFarmBatchController_TRACECOMPANY (target) {
       
      /**
      * 新增对象
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/traceFarmBatch/add',params:{...paramsData},...info}
          }
      }
      /**
      * 关闭
      */
      function closedUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/traceFarmBatch/closed',params:{...paramsData},...info}
          }
      }
      /**
      * 删除
      */
      function delUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/traceFarmBatch/del',params:{...paramsData},...info}
          }
      }
      /**
      * 删除
      */
      function delMoreUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/traceFarmBatch/delMore',params:{...paramsData},...info}
          }
      }
      /**
      * 明细对象
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/traceFarmBatch/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 根据主体，分页集合
      */
      function pageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/traceFarmBatch/page',params:{...paramsData},...info}
          }
      }
      /**
      * 根据产品id查询批次list
      */
      function selectBatchListByProductUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/traceFarmBatch/selectBatchListByProduct',params:{...paramsData},...info}
          }
      }
      /**
      * 查询批次数
      */
      function selectBatchNumUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/traceFarmBatch/selectBatchNum',params:{...paramsData},...info}
          }
      }
      /**
      * 修改对象
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/traceFarmBatch/update',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,closedUsingPOST,delUsingPOST,delMoreUsingPOST,detailUsingPOST,pageUsingPOST,selectBatchListByProductUsingPOST,selectBatchNumUsingPOST,updateUsingPOST}
     }
  
     function TraceFarmingController_TRACECOMPANY (target) {
       
      /**
      * 删除接口
      */
      function delUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/traceFarming/del',params:{...paramsData},...info}
          }
      }
      /**
      * 批量删除农事
      */
      function delMoreUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/traceFarming/delMore',params:{...paramsData},...info}
          }
      }
      /**
      * 详情接口
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/traceFarming/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 新增  新
      */
      function insertNewUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/traceFarming/insertNew',params:{...paramsData},...info}
          }
      }
      /**
      * 分页接口
      */
      function pageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/traceFarming/page',params:{...paramsData},...info}
          }
      }
      /**
      * 更新接口
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/traceFarming/update',params:{...paramsData},...info}
          }
      }
      /**
      * 更新是否溯源
      */
      function updateTraceUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/traceFarming/updateTrace',params:{...paramsData},...info}
          }
      }
       return {delUsingPOST,delMoreUsingPOST,detailUsingPOST,insertNewUsingPOST,pageUsingPOST,updateUsingPOST,updateTraceUsingPOST}
     }
  
     function TracePickController_TRACECOMPANY (target) {
       
      /**
      * 根据id获取采收信息
      */
      function findPickByIdUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/tracePick/findPickById',params:{...paramsData},...info}
          }
      }
      /**
      * 采收列表(帮助框)
      */
      function listPickForHelpUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/tracePick/listForHelp',params:{...paramsData},...info}
          }
      }
      /**
      * 采收列表
      */
      function listPickUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/tracePick/page',params:{...paramsData},...info}
          }
      }
      /**
      * 保存采收
      */
      function saveUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/tracePick/save',params:{...paramsData},...info}
          }
      }
      /**
      * 更新状态
      */
      function updateStateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/tracePick/updateState',params:{...paramsData},...info}
          }
      }
       return {findPickByIdUsingPOST,listPickForHelpUsingPOST,listPickUsingPOST,saveUsingPOST,updateStateUsingPOST}
     }
  
     function TracePickingController_TRACECOMPANY (target) {
       
      /**
      * 获取包装批次规格信息
      */
      function findCountByIdUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/tracePicking/findCountById',params:{...paramsData},...info}
          }
      }
      /**
      * 根据id获取包装信息
      */
      function findPickByIdUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/tracePicking/findPickingById',params:{...paramsData},...info}
          }
      }
      /**
      * 获取包装批次下拉信息
      */
      function listPickingForHelpUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/tracePicking/listPickingForHelp',params:{...paramsData},...info}
          }
      }
      /**
      * 获取包装批次列表信息
      */
      function listPickingStatisticUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/tracePicking/listPickingStatistic',params:{...paramsData},...info}
          }
      }
      /**
      * 包装列表
      */
      function listPickUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/tracePicking/page',params:{...paramsData},...info}
          }
      }
      /**
      * 保存包装
      */
      function saveUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/tracePicking/save',params:{...paramsData},...info}
          }
      }
      /**
      * 更新状态
      */
      function updateStateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/tracePicking/updateState',params:{...paramsData},...info}
          }
      }
      /**
      * 更新打印状态
      */
      function updateTraceUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/tracePicking/updateTrace',params:{...paramsData},...info}
          }
      }
       return {findCountByIdUsingPOST,findPickByIdUsingPOST,listPickingForHelpUsingPOST,listPickingStatisticUsingPOST,listPickUsingPOST,saveUsingPOST,updateStateUsingPOST,updateTraceUsingPOST}
     }
  
     function TraceTemplateController_TRACECOMPANY (target) {
       
      /**
      * 新增模板
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/traceTemplate/add',params:{...paramsData},...info}
          }
      }
      /**
      * 批量删除
      */
      function deleteBatchUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/traceTemplate/deleteBatch',params:{...paramsData},...info}
          }
      }
      /**
      * 追溯码详情
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/traceTemplate/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 该主体下追溯码管理列表
      */
      function listUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/traceTemplate/list',params:{...paramsData},...info}
          }
      }
      /**
      * 二维码列表
      */
      function templateListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/traceTemplate/templateList',params:{...paramsData},...info}
          }
      }
      /**
      * 新增模板
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/traceTemplate/update',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,deleteBatchUsingPOST,detailUsingPOST,listUsingPOST,templateListUsingPOST,updateUsingPOST}
     }
  
     function UpmsCategoryController_TRACECOMPANY (target) {
       
      /**
      * 根据产品类别展示产品单位
      */
      function selectCategoryUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/upmsCategory/selectCategory',params:{...paramsData},...info}
          }
      }
       return {selectCategoryUsingPOST}
     }
  
     function WebServiceQuickController_TRACECOMPANY (target) {
       
      /**
      * 检测数据查询接口
      */
      function selectQuickListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/webservicequick/selectQuickList',params:{...paramsData},...info}
          }
      }
      /**
      * 批量上报
      */
      function uploadManyUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/webservicequick/uploadMany',params:{...paramsData},...info}
          }
      }
       return {selectQuickListUsingPOST,uploadManyUsingPOST}
     }
  
     function WorkBenchController_TRACECOMPANY (target) {
       
      /**
      * 中间各个区的group by
      */
      function getMapCompanyUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/workBench/getMapCompany',params:{...paramsData},...info}
          }
      }
      /**
      * 追溯码地图
      */
      function getMapTraceCodeUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/workBench/getMapTraceCode',params:{...paramsData},...info}
          }
      }
      /**
      * 三品一标地图
      */
      function getMapVertifyUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/workBench/getMapVertify',params:{...paramsData},...info}
          }
      }
      /**
      * 巡更巡查统计数据
      */
      function getPatrolDataUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/workBench/getPatrolData',params:{...paramsData},...info}
          }
      }
      /**
      * 巡更巡查地图
      */
      function getPatrolMapUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/workBench/getPatrolMap',params:{...paramsData},...info}
          }
      }
      /**
      * 右边3个
      */
      function rightChartUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/workBench/getRightCompany',params:{...paramsData},...info}
          }
      }
      /**
      * 追溯码右边3个
      */
      function getRightTraceCodeUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/workBench/getRightTraceCode',params:{...paramsData},...info}
          }
      }
      /**
      * 三品一标右边
      */
      function getRightVertifyUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/workBench/getRightVertify',params:{...paramsData},...info}
          }
      }
       return {getMapCompanyUsingPOST,getMapTraceCodeUsingPOST,getMapVertifyUsingPOST,getPatrolDataUsingPOST,getPatrolMapUsingPOST,rightChartUsingPOST,getRightTraceCodeUsingPOST,getRightVertifyUsingPOST}
     }
  
     function YellowPageController_TRACECOMPANY (target) {
       
      /**
      * 验证该企业是否开通黄页
      */
      function checkUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/yellowPage/check',params:{...paramsData},...info}
          }
      }
      /**
      * 验证域名
      */
      function checkDomainUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/yellowPage/checkDomain',params:{...paramsData},...info}
          }
      }
      /**
      * 黄页详情
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/yellowPage/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 注册 申请域名
      */
      function checkDomainUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/yellowPage/register',params:{...paramsData},...info}
          }
      }
      /**
      * 黄页更新
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/yellowPage/update',params:{...paramsData},...info}
          }
      }
      /**
      * 黄页更新updateCompanyVO
      */
      function updateCompanyVOUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/yellowPage/updateCompanyVO',params:{...paramsData},...info}
          }
      }
       return {checkUsingPOST,checkDomainUsingPOST,detailUsingPOST,checkDomainUsingPOST,updateUsingPOST,updateCompanyVOUsingPOST}
     }
  
     function YellowPageBannerController_TRACECOMPANY (target) {
       
      /**
      * banner delete
      */
      function deleteUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/yellowPageBanner/delete',params:{...paramsData},...info}
          }
      }
      /**
      * banner insert
      */
      function insertUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/yellowPageBanner/insert',params:{...paramsData},...info}
          }
      }
      /**
      * banner update
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/yellowPageBanner/update',params:{...paramsData},...info}
          }
      }
       return {deleteUsingPOST,insertUsingPOST,updateUsingPOST}
     }
  
     function YellowPageDevController_TRACECOMPANY (target) {
       
      /**
      * delete
      */
      function deleteUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/yellowPageDev/delete',params:{...paramsData},...info}
          }
      }
      /**
      * insert
      */
      function insertUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/yellowPageDev/insert',params:{...paramsData},...info}
          }
      }
      /**
      * update
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/yellowPageDev/update',params:{...paramsData},...info}
          }
      }
       return {deleteUsingPOST,insertUsingPOST,updateUsingPOST}
     }
  
     function YellowPageFarmlandController_TRACECOMPANY (target) {
       
      /**
      * delete
      */
      function deleteUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/yellowPageFarmland/delete',params:{...paramsData},...info}
          }
      }
      /**
      * insert
      */
      function insertUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/yellowPageFarmland/insert',params:{...paramsData},...info}
          }
      }
      /**
      * update
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/yellowPageFarmland/update',params:{...paramsData},...info}
          }
      }
       return {deleteUsingPOST,insertUsingPOST,updateUsingPOST}
     }
  
     function YellowPageHonorController_TRACECOMPANY (target) {
       
      /**
      * delete
      */
      function deleteUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/yellowPageHonor/delete',params:{...paramsData},...info}
          }
      }
      /**
      * insert
      */
      function insertUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/yellowPageHonor/insert',params:{...paramsData},...info}
          }
      }
      /**
      * update
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/yellowPageHonor/update',params:{...paramsData},...info}
          }
      }
       return {deleteUsingPOST,insertUsingPOST,updateUsingPOST}
     }
  
  
    
     function AnimalCompanyController_UPMSCOMPANY (target) {
       
      /**
      * 畜牧主体详情
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/animalCompany/detail',params:{...paramsData},...info}
          }
      }
       return {detailUsingPOST}
     }
  
     function AnimalOtherCompanyController_UPMSCOMPANY (target) {
       
      /**
      * 畜牧非主体详情
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/animalOtherCompany/detail',params:{...paramsData},...info}
          }
      }
       return {detailUsingPOST}
     }
  
     function MblCompanyAuditController_UPMSCOMPANY (target) {
       
      /**
      * 审核主体
      */
      function doAuditUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/audit/doAudit',params:{...paramsData},...info}
          }
      }
      /**
      * 审核主体
      */
      function doBatchAuditUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/audit/doBatchAudit',params:{...paramsData},...info}
          }
      }
      /**
      * 审批详细
      */
      function getUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/audit/get',params:{...paramsData},...info}
          }
      }
      /**
      * 明细对象，通过主体主键获取主体详细信息
      */
      function getCompanyProcessUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/audit/getCompanyProcess',params:{...paramsData},...info}
          }
      }
      /**
      * 农业主体下拉（单位）列表
      */
      function getCompanyRelationInfoUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/audit/getCompanyRelationInfo',params:{...paramsData},...info}
          }
      }
      /**
      * 待审核、已审核合计
      */
      function getAuditTotalUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/audit/getTotal',params:{...paramsData},...info}
          }
      }
      /**
      * 主体待审核，分页列表
      */
      function listDshPageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/audit/listPage',params:{...paramsData},...info}
          }
      }
      /**
      * 主体已审核，分页列表
      */
      function listYshPageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/audit/listYshPage',params:{...paramsData},...info}
          }
      }
      /**
      * 搜索备案编号
      */
      function searchKorCodeUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/audit/search',params:{...paramsData},...info}
          }
      }
      /**
      * 备案编号查询出的待审核，已审核数量
      */
      function searchKorCodeCountUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/audit/searchKorCodeCount',params:{...paramsData},...info}
          }
      }
       return {doAuditUsingPOST,doBatchAuditUsingPOST,getUsingPOST,getCompanyProcessUsingPOST,getCompanyRelationInfoUsingPOST,getAuditTotalUsingPOST,listDshPageUsingPOST,listYshPageUsingPOST,searchKorCodeUsingPOST,searchKorCodeCountUsingPOST}
     }
  
     function MblCompanyController_UPMSCOMPANY (target) {
       
      /**
      * 提交农业主体对象
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/company/add',params:{...paramsData},...info}
          }
      }
      /**
      * 获取地址信息
      */
      function getAreaUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/company/getArea',params:{...paramsData},...info}
          }
      }
      /**
      * 显示农业主体类别
      */
      function getCategoryUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/company/getCategory',params:{...paramsData},...info}
          }
      }
      /**
      * 明细对象，通过主体主键获取主体详细信息
      */
      function getCompanyUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/company/getCompany',params:{...paramsData},...info}
          }
      }
      /**
      * 查询主体信息详情
      */
      function getCompanyForAuditUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/company/getCompanyForAudit',params:{...paramsData},...info}
          }
      }
      /**
      * 获取主体详情头部信息
      */
      function getCompanyHeaderUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/company/getCompanyHeader',params:{...paramsData},...info}
          }
      }
      /**
      * 获取主体详情头部信息
      */
      function getCompanyHeaderByIdUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/company/getCompanyHeaderById',params:{...paramsData},...info}
          }
      }
      /**
      * 查询主体的法人
      */
      function getCompanyLegalUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/company/getCompanyLegal',params:{...paramsData},...info}
          }
      }
      /**
      * 获取全部主体类型
      */
      function getCompanyTypeUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/company/getCompanyType',params:{...paramsData},...info}
          }
      }
      /**
      * 获取全部生产经营类型
      */
      function getScjyUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/company/getScjy',params:{...paramsData},...info}
          }
      }
      /**
      * 获取所有类别集合
      */
      function getTypeListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/company/getTypeList',params:{...paramsData},...info}
          }
      }
      /**
      * 更新企业图片
      */
      function insertZtImgUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/company/insertZtImg',params:{...paramsData},...info}
          }
      }
      /**
      * 保存农业主体对象
      */
      function saveUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/company/save',params:{...paramsData},...info}
          }
      }
      /**
      * 产业类别对象
      */
      function scTypeUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/company/scType',params:{...paramsData},...info}
          }
      }
      /**
      * 根据主体名称查询主体下拉 模糊搜索
      */
      function selectCompanyByNameUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/company/selectCompanyByName',params:{...paramsData},...info}
          }
      }
      /**
      * 更新农业主体对象
      */
      function updateCompanyUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/company/updateCompany',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,getAreaUsingPOST,getCategoryUsingPOST,getCompanyUsingPOST,getCompanyForAuditUsingPOST,getCompanyHeaderUsingPOST,getCompanyHeaderByIdUsingPOST,getCompanyLegalUsingPOST,getCompanyTypeUsingPOST,getScjyUsingPOST,getTypeListUsingPOST,insertZtImgUsingPOST,saveUsingPOST,scTypeUsingPOST,selectCompanyByNameUsingPOST,updateCompanyUsingPOST}
     }
  
     function MblCompanyDetailController_UPMSCOMPANY (target) {
       
      /**
      * 基地详情
      */
      function farmlandDetailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/companyDetail/farmlandDetail',params:{...paramsData},...info}
          }
      }
      /**
      * 基地分页
      */
      function farmlandPageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/companyDetail/farmlandPage',params:{...paramsData},...info}
          }
      }
      /**
      * 产品详情
      */
      function productPageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/companyDetail/productDetail',params:{...paramsData},...info}
          }
      }
      /**
      * 产品分页
      */
      function productPageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/companyDetail/productPage',params:{...paramsData},...info}
          }
      }
      /**
      * 追溯分页
      */
      function sourcePageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/companyDetail/sourcePage',params:{...paramsData},...info}
          }
      }
       return {farmlandDetailUsingPOST,farmlandPageUsingPOST,productPageUsingPOST,productPageUsingPOST,sourcePageUsingPOST}
     }
  
     function CompanyInputsController_UPMSCOMPANY (target) {
       
      /**
      * 删除
      */
      function deleteUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/companyInputs/delete',params:{...paramsData},...info}
          }
      }
      /**
      * 详情
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/companyInputs/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 模糊获取投入品名称
      */
      function inputsListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/companyInputs/inputsList',params:{...paramsData},...info}
          }
      }
      /**
      * 新增
      */
      function insertUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/companyInputs/insert',params:{...paramsData},...info}
          }
      }
      /**
      * 主体分页
      */
      function ownerPageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/companyInputs/ownerPage',params:{...paramsData},...info}
          }
      }
      /**
      * 分页
      */
      function pageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/companyInputs/page',params:{...paramsData},...info}
          }
      }
      /**
      * 更新
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/companyInputs/update',params:{...paramsData},...info}
          }
      }
       return {deleteUsingPOST,detailUsingPOST,inputsListUsingPOST,insertUsingPOST,ownerPageUsingPOST,pageUsingPOST,updateUsingPOST}
     }
  
     function CompanyInputsStorageController_UPMSCOMPANY (target) {
       
      /**
      * 出入库详情
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/companyInputsStorage/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 投入品出入库获取其单位
      */
      function detailStorageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/companyInputsStorage/detailStorage',params:{...paramsData},...info}
          }
      }
      /**
      * 新增出入库
      */
      function insertUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/companyInputsStorage/insert',params:{...paramsData},...info}
          }
      }
      /**
      * 操作详情
      */
      function operateDetailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/companyInputsStorage/operateDetail',params:{...paramsData},...info}
          }
      }
      /**
      * 获取投入品使用记录分页列表
      */
      function ownerNewPageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/companyInputsStorage/ownerNewPage',params:{...paramsData},...info}
          }
      }
      /**
      * 获取投入品入库记录分页列表
      */
      function ownerPageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/companyInputsStorage/ownerPage',params:{...paramsData},...info}
          }
      }
      /**
      * 获取投入品出入库记录分页列表
      */
      function pageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/companyInputsStorage/page',params:{...paramsData},...info}
          }
      }
      /**
      * 监管使用记录分页列表
      */
      function supePageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/companyInputsStorage/supePage',params:{...paramsData},...info}
          }
      }
       return {detailUsingPOST,detailStorageUsingPOST,insertUsingPOST,operateDetailUsingPOST,ownerNewPageUsingPOST,ownerPageUsingPOST,pageUsingPOST,supePageUsingPOST}
     }
  
     function CompanyInputsSupplierController_UPMSCOMPANY (target) {
       
      /**
      * 模糊查询供应商/生产厂家
      */
      function listUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/companyInputsSupplier/list',params:{...paramsData},...info}
          }
      }
       return {listUsingPOST}
     }
  
     function MblCompanyManageController_UPMSCOMPANY (target) {
       
      /**
      * 主体，分页列表（包含畜牧）
      */
      function listNewPageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/companyManage/listNewPage',params:{...paramsData},...info}
          }
      }
      /**
      * 主体，分页列表
      */
      function listPageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/companyManage/listPage',params:{...paramsData},...info}
          }
      }
      /**
      * 修改状态
      */
      function updateBatchStateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/companyManage/updateBatchState',params:{...paramsData},...info}
          }
      }
      /**
      * 修改状态
      */
      function updateStateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/companyManage/updateState',params:{...paramsData},...info}
          }
      }
       return {listNewPageUsingPOST,listPageUsingPOST,updateBatchStateUsingPOST,updateStateUsingPOST}
     }
  
     function MblCompanyHonorController_UPMSCOMPANY (target) {
       
      /**
      * 删除荣誉资质
      */
      function deleteUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/honor/del',params:{...paramsData},...info}
          }
      }
      /**
      * 新增荣誉资质
      */
      function insertUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/honor/insert',params:{...paramsData},...info}
          }
      }
      /**
      * 查询荣誉资质列表
      */
      function listUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/honor/list',params:{...paramsData},...info}
          }
      }
      /**
      * 修改荣誉资质
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/honor/update',params:{...paramsData},...info}
          }
      }
       return {deleteUsingPOST,insertUsingPOST,listUsingPOST,updateUsingPOST}
     }
  
     function CreditIndexController_UPMSCOMPANY (target) {
       
      /**
      * 删除单个
      */
      function delUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/index/del',params:{...paramsData},...info}
          }
      }
      /**
      * 批量删除
      */
      function delMoreUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/index/delMore',params:{...paramsData},...info}
          }
      }
      /**
      * 详情
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/index/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 查询第X级指标下拉接口
      */
      function findLevelUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/index/findLevel',params:{...paramsData},...info}
          }
      }
      /**
      * 新增
      */
      function insertUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/index/insert',params:{...paramsData},...info}
          }
      }
      /**
      * 分页
      */
      function pageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/index/page',params:{...paramsData},...info}
          }
      }
      /**
      * 更新
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/index/update',params:{...paramsData},...info}
          }
      }
      /**
      * 字段判重
      */
      function verifyNameUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/index/verifyName',params:{...paramsData},...info}
          }
      }
       return {delUsingPOST,delMoreUsingPOST,detailUsingPOST,findLevelUsingPOST,insertUsingPOST,pageUsingPOST,updateUsingPOST,verifyNameUsingPOST}
     }
  
     function MblCompanyLabelsController_UPMSCOMPANY (target) {
       
      /**
      * 新增自定义标签
      */
      function addLabelUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/labels/addLabel',params:{...paramsData},...info}
          }
      }
      /**
      * 查询主体所有的标签
      */
      function findCompanyLabelUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/labels/findCompanyLabel',params:{...paramsData},...info}
          }
      }
      /**
      * 主体打标签
      */
      function insertUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/labels/insert',params:{...paramsData},...info}
          }
      }
      /**
      * 标签列表
      */
      function labelListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/labels/labelList',params:{...paramsData},...info}
          }
      }
       return {addLabelUsingPOST,findCompanyLabelUsingPOST,insertUsingPOST,labelListUsingPOST}
     }
  
     function CreditLevelController_UPMSCOMPANY (target) {
       
      /**
      * 单条删除
      */
      function delUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/level/del',params:{...paramsData},...info}
          }
      }
      /**
      * 批量删除
      */
      function delMoreUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/level/delMore',params:{...paramsData},...info}
          }
      }
      /**
      * 新增
      */
      function insertUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/level/insert',params:{...paramsData},...info}
          }
      }
      /**
      * 主体信用等级下拉
      */
      function listUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/level/list',params:{...paramsData},...info}
          }
      }
      /**
      * 更新
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/level/update',params:{...paramsData},...info}
          }
      }
       return {delUsingPOST,delMoreUsingPOST,insertUsingPOST,listUsingPOST,updateUsingPOST}
     }
  
     function CreditModelController_UPMSCOMPANY (target) {
       
      /**
      * 获取默认模块
      */
      function defaultModelUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/model/defaultModel',params:{...paramsData},...info}
          }
      }
      /**
      * 单条删除
      */
      function delUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/model/del',params:{...paramsData},...info}
          }
      }
      /**
      * 多条删除
      */
      function delMoreUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/model/delMore',params:{...paramsData},...info}
          }
      }
      /**
      * 详情
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/model/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 新增
      */
      function insertUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/model/insert',params:{...paramsData},...info}
          }
      }
      /**
      * 设为默认
      */
      function isDefaultUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/model/isDefault',params:{...paramsData},...info}
          }
      }
      /**
      * 分页
      */
      function pageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/model/page',params:{...paramsData},...info}
          }
      }
      /**
      * 更新
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/model/update',params:{...paramsData},...info}
          }
      }
       return {defaultModelUsingPOST,delUsingPOST,delMoreUsingPOST,detailUsingPOST,insertUsingPOST,isDefaultUsingPOST,pageUsingPOST,updateUsingPOST}
     }
  
     function CreditModelIndexController_UPMSCOMPANY (target) {
       
      /**
      * 删除
      */
      function delUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/model/index/del',params:{...paramsData},...info}
          }
      }
      /**
      * 批量删除
      */
      function delMoreUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/model/index/delMore',params:{...paramsData},...info}
          }
      }
      /**
      * 详情
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/model/index/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 新增
      */
      function insertUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/model/index/insert',params:{...paramsData},...info}
          }
      }
      /**
      * 分页
      */
      function pageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/model/index/page',params:{...paramsData},...info}
          }
      }
      /**
      * 获取表格
      */
      function tableListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/model/index/tableList',params:{...paramsData},...info}
          }
      }
      /**
      * 更新
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/model/index/update',params:{...paramsData},...info}
          }
      }
       return {delUsingPOST,delMoreUsingPOST,detailUsingPOST,insertUsingPOST,pageUsingPOST,tableListUsingPOST,updateUsingPOST}
     }
  
     function MblCompanyNewController_UPMSCOMPANY (target) {
       
      /**
      * 明细对象，通过主体主键获取主体详细信息
      */
      function getCompanyUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/newcompany/getCompany',params:{...paramsData},...info}
          }
      }
      /**
      * 更新农业主体对象
      */
      function updateCompanyUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/newcompany/updateCompany',params:{...paramsData},...info}
          }
      }
       return {getCompanyUsingPOST,updateCompanyUsingPOST}
     }
  
     function MblCompanyOperationController_UPMSCOMPANY (target) {
       
      /**
      * 主体待审核，分页列表
      */
      function listUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/operation/list',params:{...paramsData},...info}
          }
      }
       return {listUsingPOST}
     }
  
     function CreditRecordController_UPMSCOMPANY (target) {
       
      /**
      * 详情
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/record/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 新增主体评价
      */
      function insertUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/record/insert',params:{...paramsData},...info}
          }
      }
      /**
      * 分页
      */
      function pageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/record/page',params:{...paramsData},...info}
          }
      }
      /**
      * 审核分页
      */
      function pageCheckedUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/record/pageChecked',params:{...paramsData},...info}
          }
      }
      /**
      * 提交/审核主体评价
      */
      function submitUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/record/submit',params:{...paramsData},...info}
          }
      }
       return {detailUsingPOST,insertUsingPOST,pageUsingPOST,pageCheckedUsingPOST,submitUsingPOST}
     }
  
     function CreditRecordHistoryController_UPMSCOMPANY (target) {
       
      /**
      * 详情
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/record/history/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 信用档案分页列表
      */
      function pageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/record/history/page',params:{...paramsData},...info}
          }
      }
       return {detailUsingPOST,pageUsingPOST}
     }
  
     function UpyunUploadController_UPMSCOMPANY (target) {
       
      /**
      * 上传bas图片
      */
      function uploadBasImgUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/upyun/uploadBasImg',params:{...paramsData},...info}
          }
      }
      /**
      * 上传图片
      */
      function uploadFileUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/upyun/uploadFile',params:{...paramsData},...info}
          }
      }
      /**
      * 上传图片
      */
      function uploadfileUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/upyun/uploadFileAndImg',params:{...paramsData},...info}
          }
      }
      /**
      * 上传图片
      */
      function uploadImgUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/upyun/uploadImg',params:{...paramsData},...info}
          }
      }
      /**
      * 上传图片
      */
      function uploadImgForCompanyUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/company/upyun/uploadImgForCompany',params:{...paramsData},...info}
          }
      }
       return {uploadBasImgUsingPOST,uploadFileUsingPOST,uploadfileUsingPOST,uploadImgUsingPOST,uploadImgForCompanyUsingPOST}
     }
  
  
    
     function UuaAppCenterController_ADMIN (target) {
       
      /**
      * 新增应用
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/application/add',params:{...paramsData},...info}
          }
      }
      /**
      * 判断应用编号是否被占用
      */
      function checkAppCodeUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/application/checkAppCode',params:{...paramsData},...info}
          }
      }
      /**
      * 判断应用名称是否被占用
      */
      function checkAppNameUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/application/checkAppName',params:{...paramsData},...info}
          }
      }
      /**
      * 根据ID删除
      */
      function deleteUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/application/del',params:{...paramsData},...info}
          }
      }
      /**
      * 查看详情
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/application/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 应用查询
      */
      function getAppCenterListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/application/getAppCenterList',params:{...paramsData},...info}
          }
      }
      /**
      * 用户应用查询
      */
      function getAppCenterListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/application/info',params:{...paramsData},...info}
          }
      }
      /**
      * 应用分页查询
      */
      function pageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/application/page',params:{...paramsData},...info}
          }
      }
      /**
      * 修改应用
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/application/update',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,checkAppCodeUsingPOST,checkAppNameUsingPOST,deleteUsingPOST,detailUsingPOST,getAppCenterListUsingPOST,getAppCenterListUsingPOST,pageUsingPOST,updateUsingPOST}
     }
  
     function UuaAppCenterModularController_ADMIN (target) {
       
      /**
      * 新增应用
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/appmodular/add',params:{...paramsData},...info}
          }
      }
      /**
      * 删除应用
      */
      function delUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/appmodular/del',params:{...paramsData},...info}
          }
      }
      /**
      * 取消模块关联
      */
      function delModularForCenterUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/appmodular/delModularForCenter',params:{...paramsData},...info}
          }
      }
      /**
      * 查看应用
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/appmodular/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 分页查询
      */
      function listUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/appmodular/list',params:{...paramsData},...info}
          }
      }
      /**
      * 应用下模块列表排序接口
      */
      function modularSortUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/appmodular/modularSort',params:{...paramsData},...info}
          }
      }
      /**
      * 修改应用
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/appmodular/update',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,delUsingPOST,delModularForCenterUsingPOST,detailUsingPOST,listUsingPOST,modularSortUsingPOST,updateUsingPOST}
     }
  
     function AuthorityController_ADMIN (target) {
       
      /**
      * 新增组织机构权限
      */
      function addAuthToOrgUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/auth/addAuthToOrg',params:{...paramsData},...info}
          }
      }
      /**
      * 新增角色权限
      */
      function addRoleAuthUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/auth/addRoleAuth',params:{...paramsData},...info}
          }
      }
      /**
      * 获取该角色下的权限集合
      */
      function getAppUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/auth/getApp',params:{...paramsData},...info}
          }
      }
      /**
      * 获取应用列表
      */
      function getAppCenterUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/auth/getAppCenter',params:{...paramsData},...info}
          }
      }
      /**
      * 获取应用下的所有模块级联信息
      */
      function getCenterModularUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/auth/getCenterModular',params:{...paramsData},...info}
          }
      }
      /**
      * 获取该组织机构下的权限集合
      */
      function getOrgOwnAuthUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/auth/getOrgOwnAuth',params:{...paramsData},...info}
          }
      }
      /**
      * 获取该角色下的权限集合
      */
      function getRoleOwnAuthUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/auth/getRoleOwnAuth',params:{...paramsData},...info}
          }
      }
       return {addAuthToOrgUsingPOST,addRoleAuthUsingPOST,getAppUsingPOST,getAppCenterUsingPOST,getCenterModularUsingPOST,getOrgOwnAuthUsingPOST,getRoleOwnAuthUsingPOST}
     }
  
     function AppAuthController_ADMIN (target) {
       
      /**
      * 增加角色权限
      */
      function addAuthUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/authNew/addAuth',params:{...paramsData},...info}
          }
      }
      /**
      * 获取角色下权限
      */
      function getAuthByRoleUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/authNew/getAuthByRole',params:{...paramsData},...info}
          }
      }
      /**
      * 获取应用下的所有模块级联信息
      */
      function getCenterModularNewUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/authNew/getCenterModularNew',params:{...paramsData},...info}
          }
      }
      /**
      * 获取角色下所有权限，根据应用分级
      */
      function selectAuthByRoleUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/authNew/selectAuthByRole',params:{...paramsData},...info}
          }
      }
       return {addAuthUsingPOST,getAuthByRoleUsingPOST,getCenterModularNewUsingPOST,selectAuthByRoleUsingPOST}
     }
  
     function UuaButtonController_ADMIN (target) {
       
      /**
      * 按钮新增
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/button/add',params:{...paramsData},...info}
          }
      }
      /**
      * 根据ID删除
      */
      function deleteUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/button/del',params:{...paramsData},...info}
          }
      }
      /**
      * 根据ID查询详情
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/button/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 根据功能ID查询该功能所有按钮
      */
      function menuButsUsingGET(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/button/menuButs',params:{...paramsData},...info}
          }
      }
      /**
      * 按钮分页列表
      */
      function menuPageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/button/page',params:{...paramsData},...info}
          }
      }
      /**
      * 按钮修改
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/button/update',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,deleteUsingPOST,detailUsingPOST,menuButsUsingGET,menuPageUsingPOST,updateUsingPOST}
     }
  
     function UpmsSupeCatalogController_ADMIN (target) {
       
      /**
      * 新增目录文件
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/catalog/add',params:{...paramsData},...info}
          }
      }
      /**
      * 目录文件详情
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/catalog/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 分页
      */
      function pageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/catalog/page',params:{...paramsData},...info}
          }
      }
      /**
      * 更新目录文件
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/catalog/update',params:{...paramsData},...info}
          }
      }
      /**
      * 更改目录文件状态
      */
      function updateStateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/catalog/updateState',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,detailUsingPOST,pageUsingPOST,updateUsingPOST,updateStateUsingPOST}
     }
  
     function UuaAppCenterAuthController_ADMIN (target) {
       
      /**
      * 新增应用接口
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/centerAuth/add',params:{...paramsData},...info}
          }
      }
      /**
      * 停用/启用接口
      */
      function enableOrDisableUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/centerAuth/enableOrDisable',params:{...paramsData},...info}
          }
      }
      /**
      * 批量停用/启用接口
      */
      function enableOrDisableBatchUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/centerAuth/enableOrDisableBatch',params:{...paramsData},...info}
          }
      }
      /**
      * 编辑回显app应用
      */
      function getAppAuthUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/centerAuth/getAppAuth',params:{...paramsData},...info}
          }
      }
      /**
      * 分页接口
      */
      function pageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/centerAuth/page',params:{...paramsData},...info}
          }
      }
      /**
      * 更新应用接口
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/centerAuth/update',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,enableOrDisableUsingPOST,enableOrDisableBatchUsingPOST,getAppAuthUsingPOST,pageUsingPOST,updateUsingPOST}
     }
  
     function FunctionAreaController_ADMIN (target) {
       
      /**
      * 新增功能区
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/functionArea/add',params:{...paramsData},...info}
          }
      }
      /**
      * 新增主体功能区
      */
      function addCompanyAreaUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/functionArea/addCompanyArea',params:{...paramsData},...info}
          }
      }
      /**
      * 所有主体
      */
      function allCompanyUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/functionArea/allCompany',params:{...paramsData},...info}
          }
      }
      /**
      * 获取属于该功能区的主体信息
      */
      function belongAreaUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/functionArea/belongArea',params:{...paramsData},...info}
          }
      }
      /**
      * 功能区所属主体
      */
      function belongCompanyUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/functionArea/belongCompany',params:{...paramsData},...info}
          }
      }
      /**
      * 删除接口
      */
      function delUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/functionArea/del',params:{...paramsData},...info}
          }
      }
      /**
      * 删除主体功能区
      */
      function delCompanyAreaUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/functionArea/delCompanyArea',params:{...paramsData},...info}
          }
      }
      /**
      * 详情接口
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/functionArea/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 启用/禁用接口
      */
      function disabledUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/functionArea/disabled',params:{...paramsData},...info}
          }
      }
      /**
      * 获取树形下拉
      */
      function listUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/functionArea/list',params:{...paramsData},...info}
          }
      }
      /**
      * 点击加载树
      */
      function listTreeUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/functionArea/listTree',params:{...paramsData},...info}
          }
      }
      /**
      * 功能区分页
      */
      function pageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/functionArea/page',params:{...paramsData},...info}
          }
      }
      /**
      * 获取不属于该功能区的主体信息
      */
      function unBelongAreaUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/functionArea/unBelongArea',params:{...paramsData},...info}
          }
      }
      /**
      * 更新功能区接口
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/functionArea/update',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,addCompanyAreaUsingPOST,allCompanyUsingPOST,belongAreaUsingPOST,belongCompanyUsingPOST,delUsingPOST,delCompanyAreaUsingPOST,detailUsingPOST,disabledUsingPOST,listUsingPOST,listTreeUsingPOST,pageUsingPOST,unBelongAreaUsingPOST,updateUsingPOST}
     }
  
     function LogController_ADMIN (target) {
       
      /**
      * 根据ID删除日志
      */
      function deleteUsingGET(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/log/del',params:{...paramsData},...info}
          }
      }
      /**
      * 获取日志详情接口
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/log/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 日志分页
      */
      function logPageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/log/page',params:{...paramsData},...info}
          }
      }
       return {deleteUsingGET,detailUsingPOST,logPageUsingPOST}
     }
  
     function MarkController_ADMIN (target) {
       
      /**
      * 添加标签
      */
      function addTagUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/mark/addTag',params:{...paramsData},...info}
          }
      }
      /**
      * 删除标签
      */
      function delTagUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/mark/delTag',params:{...paramsData},...info}
          }
      }
      /**
      * 获取企业标签
      */
      function getTagUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/mark/tags',params:{...paramsData},...info}
          }
      }
      /**
      * 获取模板标签
      */
      function tempTagsUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/mark/tempTags',params:{...paramsData},...info}
          }
      }
       return {addTagUsingPOST,delTagUsingPOST,getTagUsingPOST,tempTagsUsingPOST}
     }
  
     function UuaMenuController_ADMIN (target) {
       
      /**
      * 功能新增
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/menu/add',params:{...paramsData},...info}
          }
      }
      /**
      * 根据ID删除/停用
      */
      function deleteUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/menu/del',params:{...paramsData},...info}
          }
      }
      /**
      * 根据ID批量删除/停用
      */
      function delMoreUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/menu/delMore',params:{...paramsData},...info}
          }
      }
      /**
      * 获取用户菜单树型结构
      */
      function demoUserMenuUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/menu/demoUserMenu',params:{...paramsData},...info}
          }
      }
      /**
      * 根据ID查询详情
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/menu/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 功能分页列表
      */
      function menuPageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/menu/page',params:{...paramsData},...info}
          }
      }
      /**
      * 查询未被选中的功能菜单
      */
      function selectMenuNoLinkedUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/menu/selectMenuNoLinked',params:{...paramsData},...info}
          }
      }
      /**
      * 功能修改
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/menu/update',params:{...paramsData},...info}
          }
      }
      /**
      * 获取用户菜单树型结构
      */
      function userMenuUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/menu/userMenu',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,deleteUsingPOST,delMoreUsingPOST,demoUserMenuUsingPOST,detailUsingPOST,menuPageUsingPOST,selectMenuNoLinkedUsingPOST,updateUsingPOST,userMenuUsingPOST}
     }
  
     function UuaAppModularController_ADMIN (target) {
       
      /**
      * 新增模块接口
      */
      function addModularUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/modular/addModular',params:{...paramsData},...info}
          }
      }
      /**
      * 查询应用下面所有菜单列表
      */
      function getAppModuleListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/modular/getAppModuleList',params:{...paramsData},...info}
          }
      }
      /**
      * 查该应用下的所有pid=0的模块
      */
      function getAppModuleListByPidUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/modular/getAppModuleListByPid',params:{...paramsData},...info}
          }
      }
      /**
      * 模块卡片详情接口
      */
      function getCardDetailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/modular/getCardDetail',params:{...paramsData},...info}
          }
      }
      /**
      * 模块功能树接口
      */
      function getModularFunctionListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/modular/getModularFunctionList',params:{...paramsData},...info}
          }
      }
      /**
      * 获取icon下拉
      */
      function iconListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/modular/iconList',params:{...paramsData},...info}
          }
      }
      /**
      * 模块卡片停用接口/模块功能删除接口
      */
      function modularDisabledUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/modular/modularDisabled',params:{...paramsData},...info}
          }
      }
      /**
      * 查询应用下面所有菜单列表
      */
      function selectAppModularListByPUamidUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/modular/selectAppModularListByPUamid',params:{...paramsData},...info}
          }
      }
      /**
      * 模块卡片列表接口
      */
      function selectModularCardUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/modular/selectModularCard',params:{...paramsData},...info}
          }
      }
      /**
      * 排序接口
      */
      function sortUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/modular/sort',params:{...paramsData},...info}
          }
      }
      /**
      * 更新卡片内容接口
      */
      function updateModularCardUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/modular/updateModularCard',params:{...paramsData},...info}
          }
      }
       return {addModularUsingPOST,getAppModuleListUsingPOST,getAppModuleListByPidUsingPOST,getCardDetailUsingPOST,getModularFunctionListUsingPOST,iconListUsingPOST,modularDisabledUsingPOST,selectAppModularListByPUamidUsingPOST,selectModularCardUsingPOST,sortUsingPOST,updateModularCardUsingPOST}
     }
  
     function UuaOrgController_ADMIN (target) {
       
      /**
      * 创建
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/org/add',params:{...paramsData},...info}
          }
      }
      /**
      * addOrgRelation
      */
      function addOrgRelationUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/org/addOrgRelation',params:{...paramsData},...info}
          }
      }
      /**
      *  批量删除组织机构
      */
      function batchdelUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/org/batchdel',params:{...paramsData},...info}
          }
      }
      /**
      * 校验组织机构代码是否被使用
      */
      function checkCodeUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/org/checkCode',params:{...paramsData},...info}
          }
      }
      /**
      * 删除组织机构
      */
      function delUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/org/del',params:{...paramsData},...info}
          }
      }
      /**
      * 详细
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/org/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 启用禁用
      */
      function disableBatchUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/org/disable',params:{...paramsData},...info}
          }
      }
      /**
      *  批量删除组织机构
      */
      function getUoCodeIsUsedUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/org/getUoCodeIsUsed',params:{...paramsData},...info}
          }
      }
      /**
      * 组织机构树
      */
      function lazyTreeUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/org/lazyTree',params:{...paramsData},...info}
          }
      }
      /**
      * 组织机构树
      */
      function lazyTreePageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/org/lazyTreePage',params:{...paramsData},...info}
          }
      }
      /**
      * 列表
      */
      function listUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/org/list',params:{...paramsData},...info}
          }
      }
      /**
      * 检测主体下拉（单位）列表
      */
      function listMonUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/org/listMon',params:{...paramsData},...info}
          }
      }
      /**
      * 农业主体下拉（单位）列表
      */
      function listOrgUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/org/listOrg',params:{...paramsData},...info}
          }
      }
      /**
      * 根据上级编号查询集合
      */
      function listPuoidUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/org/listPuoid',params:{...paramsData},...info}
          }
      }
      /**
      * 列表
      */
      function listTreeUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/org/listTree',params:{...paramsData},...info}
          }
      }
      /**
      * 农业主体下拉（单位）分頁
      */
      function PageOrgUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/org/pageOrg',params:{...paramsData},...info}
          }
      }
      /**
      * 获取组织机构通讯录
      */
      function personNewsletterUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/org/personNewsletter',params:{...paramsData},...info}
          }
      }
      /**
      * shua
      */
      function shuaUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/org/shua',params:{...paramsData},...info}
          }
      }
      /**
      * 组织机构树：返回 正常的组织机构数据
      */
      function uuaOrgTreeUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/org/tree',params:{...paramsData},...info}
          }
      }
      /**
      * 修改
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/org/update',params:{...paramsData},...info}
          }
      }
      /**
      * 批量修改状态
      */
      function updateBatchStateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/org/updateBatchState',params:{...paramsData},...info}
          }
      }
      /**
      * 修改状态
      */
      function updateStateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/org/updateState',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,addOrgRelationUsingPOST,batchdelUsingPOST,checkCodeUsingPOST,delUsingPOST,detailUsingPOST,disableBatchUsingPOST,getUoCodeIsUsedUsingPOST,lazyTreeUsingPOST,lazyTreePageUsingPOST,listUsingPOST,listMonUsingPOST,listOrgUsingPOST,listPuoidUsingPOST,listTreeUsingPOST,PageOrgUsingPOST,personNewsletterUsingPOST,shuaUsingPOST,uuaOrgTreeUsingPOST,updateUsingPOST,updateBatchStateUsingPOST,updateStateUsingPOST}
     }
  
     function OrgController_ADMIN (target) {
       
      /**
      * 创建
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/orgNew/add',params:{...paramsData},...info}
          }
      }
      /**
      *  批量删除组织机构
      */
      function batchdelUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/orgNew/batchdel',params:{...paramsData},...info}
          }
      }
      /**
      * 删除组织机构
      */
      function delUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/orgNew/del',params:{...paramsData},...info}
          }
      }
      /**
      * 详细
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/orgNew/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 启用禁用
      */
      function disableBatchUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/orgNew/disable',params:{...paramsData},...info}
          }
      }
      /**
      * 获取部门
      */
      function findDeptUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/orgNew/findDept',params:{...paramsData},...info}
          }
      }
      /**
      * 组织机构树
      */
      function lazyTreeUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/orgNew/lazyTree',params:{...paramsData},...info}
          }
      }
      /**
      * 组织机构树
      */
      function lazyTreePageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/orgNew/lazyTreePage',params:{...paramsData},...info}
          }
      }
      /**
      * 列表
      */
      function listUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/orgNew/list',params:{...paramsData},...info}
          }
      }
      /**
      * 列表
      */
      function listTreeUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/orgNew/listTree',params:{...paramsData},...info}
          }
      }
      /**
      * 修改
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/orgNew/update',params:{...paramsData},...info}
          }
      }
      /**
      * 批量修改状态
      */
      function updateBatchStateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/orgNew/updateBatchState',params:{...paramsData},...info}
          }
      }
      /**
      * 修改状态
      */
      function updateStateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/orgNew/updateState',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,batchdelUsingPOST,delUsingPOST,detailUsingPOST,disableBatchUsingPOST,findDeptUsingPOST,lazyTreeUsingPOST,lazyTreePageUsingPOST,listUsingPOST,listTreeUsingPOST,updateUsingPOST,updateBatchStateUsingPOST,updateStateUsingPOST}
     }
  
     function UuaOrgRoleController_ADMIN (target) {
       
      /**
      * 创建
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/orgRole/add',params:{...paramsData},...info}
          }
      }
      /**
      * 批量创建
      */
      function addBatchUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/orgRole/addBatch',params:{...paramsData},...info}
          }
      }
      /**
      * 删除
      */
      function delUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/orgRole/del',params:{...paramsData},...info}
          }
      }
      /**
      * 删除
      */
      function delBatchUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/orgRole/delBatch',params:{...paramsData},...info}
          }
      }
      /**
      * 组织机构角色集合
      */
      function listUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/orgRole/list',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,addBatchUsingPOST,delUsingPOST,delBatchUsingPOST,listUsingPOST}
     }
  
     function OrgSupeController_ADMIN (target) {
       
      /**
      * 创建
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/orgSupe/add',params:{...paramsData},...info}
          }
      }
      /**
      *  批量删除组织机构
      */
      function batchdelUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/orgSupe/batchdel',params:{...paramsData},...info}
          }
      }
      /**
      * 删除组织机构
      */
      function delUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/orgSupe/del',params:{...paramsData},...info}
          }
      }
      /**
      * 详细
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/orgSupe/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 启用禁用
      */
      function disableBatchUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/orgSupe/disable',params:{...paramsData},...info}
          }
      }
      /**
      * 获取部门
      */
      function findDeptUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/orgSupe/findDept',params:{...paramsData},...info}
          }
      }
      /**
      * 组织机构树
      */
      function lazyTreeUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/orgSupe/lazyTree',params:{...paramsData},...info}
          }
      }
      /**
      * 组织机构树
      */
      function lazyTreePageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/orgSupe/lazyTreePage',params:{...paramsData},...info}
          }
      }
      /**
      * 列表
      */
      function listUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/orgSupe/list',params:{...paramsData},...info}
          }
      }
      /**
      * 列表
      */
      function listTreeUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/orgSupe/listTree',params:{...paramsData},...info}
          }
      }
      /**
      * 修改
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/orgSupe/update',params:{...paramsData},...info}
          }
      }
      /**
      * 批量修改状态
      */
      function updateBatchStateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/orgSupe/updateBatchState',params:{...paramsData},...info}
          }
      }
      /**
      * 修改状态
      */
      function updateStateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/orgSupe/updateState',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,batchdelUsingPOST,delUsingPOST,detailUsingPOST,disableBatchUsingPOST,findDeptUsingPOST,lazyTreeUsingPOST,lazyTreePageUsingPOST,listUsingPOST,listTreeUsingPOST,updateUsingPOST,updateBatchStateUsingPOST,updateStateUsingPOST}
     }
  
     function QiniuController_ADMIN (target) {
       
      /**
      * 获取简单上传的凭证
      */
      function getQiniuTokenUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/qiniuManager/getQiniuToken',params:{...paramsData},...info}
          }
      }
       return {getQiniuTokenUsingPOST}
     }
  
     function UuaRoleController_ADMIN (target) {
       
      /**
      * 功能新增
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/role/add',params:{...paramsData},...info}
          }
      }
      /**
      * 角色分配权限---过时
      */
      function addMenuToRoleUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/role/addMenuToRole',params:{...paramsData},...info}
          }
      }
      /**
      * 校验角色编码是否被使用
      */
      function checkUrCodeUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/role/checkUrCode',params:{...paramsData},...info}
          }
      }
      /**
      * 根据ID删除
      */
      function deleteUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/role/delete',params:{...paramsData},...info}
          }
      }
      /**
      * 根据ID删除
      */
      function deleteBatchUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/role/deleteBatch',params:{...paramsData},...info}
          }
      }
      /**
      * 根据ID查询详情
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/role/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 启用禁用
      */
      function disableBatchUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/role/disable',params:{...paramsData},...info}
          }
      }
      /**
      * 根据组织机构id查询旗下的所有角色
      */
      function getRoleByUoidUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/role/getRoleByUoid',params:{...paramsData},...info}
          }
      }
      /**
      * 角色分页列表
      */
      function menuPageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/role/page',params:{...paramsData},...info}
          }
      }
      /**
      * 监管角色分页列表
      */
      function supePageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/role/supePage',params:{...paramsData},...info}
          }
      }
      /**
      * 功能修改
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/role/update',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,addMenuToRoleUsingPOST,checkUrCodeUsingPOST,deleteUsingPOST,deleteBatchUsingPOST,detailUsingPOST,disableBatchUsingPOST,getRoleByUoidUsingPOST,menuPageUsingPOST,supePageUsingPOST,updateUsingPOST}
     }
  
     function RouteController_ADMIN (target) {
       
      /**
      * 功能路由
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/route/add',params:{...paramsData},...info}
          }
      }
      /**
      * 根据ID删除
      */
      function deleteUsingGET(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/route/del',params:{...paramsData},...info}
          }
      }
      /**
      * 根据ID查询详情
      */
      function detailUsingGET(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/route/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 路由分页列表
      */
      function pageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/route/page',params:{...paramsData},...info}
          }
      }
      /**
      * 刷新路由
      */
      function refreshRouteUsingGET(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/route/refreshRoute',params:{...paramsData},...info}
          }
      }
      /**
      * 功能修改
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/route/update',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,deleteUsingGET,detailUsingGET,pageUsingPOST,refreshRouteUsingGET,updateUsingPOST}
     }
  
     function UumUserSupeController_ADMIN (target) {
       
      /**
      * 新增
      */
      function addGovernmentUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/supeuser/addGovernment',params:{...paramsData},...info}
          }
      }
      /**
      * 角色用户关联接口
      */
      function addUserRelatedRoleUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/supeuser/addUserRelatedRole',params:{...paramsData},...info}
          }
      }
      /**
      * 批量关联用户组织机构
      */
      function batchGlUoidUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/supeuser/batchGlUoid',params:{...paramsData},...info}
          }
      }
      /**
      * 批量移除用户组织机构
      */
      function batchYcUoidUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/supeuser/batchYcUoid',params:{...paramsData},...info}
          }
      }
      /**
      * 根据ID删除
      */
      function deleteUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/supeuser/del',params:{...paramsData},...info}
          }
      }
      /**
      * 批量删除用户
      */
      function delMoreUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/supeuser/delMore',params:{...paramsData},...info}
          }
      }
      /**
      * 根据ID查询详情
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/supeuser/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 启用禁用
      */
      function disableBatchUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/supeuser/disable',params:{...paramsData},...info}
          }
      }
      /**
      * 组织机构用户集合
      */
      function listUoidUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/supeuser/listUoid',params:{...paramsData},...info}
          }
      }
      /**
      * 单位权限下拉接口
      */
      function dataAuthListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/supeuser/orgAuthList',params:{...paramsData},...info}
          }
      }
      /**
      * 政府用户分页列表
      */
      function pageGovernmentUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/supeuser/pageGovernment',params:{...paramsData},...info}
          }
      }
      /**
      * 根据用户ID查询用户所拥有的角色
      */
      function roleByUserUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/supeuser/roleByUser',params:{...paramsData},...info}
          }
      }
      /**
      * 功能修改
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/supeuser/update',params:{...paramsData},...info}
          }
      }
      /**
      * 修改密码
      */
      function updatePassWordUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/supeuser/updatePassWord',params:{...paramsData},...info}
          }
      }
      /**
      * 修改用户组织机构
      */
      function updateUumUserByUoidUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/supeuser/updateUoid',params:{...paramsData},...info}
          }
      }
      /**
      * 修改密码
      */
      function updateUserPassWordUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/supeuser/updateUserPassWord',params:{...paramsData},...info}
          }
      }
       return {addGovernmentUsingPOST,addUserRelatedRoleUsingPOST,batchGlUoidUsingPOST,batchYcUoidUsingPOST,deleteUsingPOST,delMoreUsingPOST,detailUsingPOST,disableBatchUsingPOST,listUoidUsingPOST,dataAuthListUsingPOST,pageGovernmentUsingPOST,roleByUserUsingPOST,updateUsingPOST,updatePassWordUsingPOST,updateUumUserByUoidUsingPOST,updateUserPassWordUsingPOST}
     }
  
     function SysCategoryController_ADMIN (target) {
       
      /**
      * 新增右边的category
      */
      function addCategoryUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sysCategory/addCategory',params:{...paramsData},...info}
          }
      }
      /**
      * 新增左边的category
      */
      function addCommonUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sysCategory/addCommon',params:{...paramsData},...info}
          }
      }
      /**
      * 根据ID删除
      */
      function deleteCategoryBatchUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sysCategory/deleteCategoryBatch',params:{...paramsData},...info}
          }
      }
      /**
      * 根据ID删除
      */
      function deleteCommonBatchUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sysCategory/deleteCommonBatch',params:{...paramsData},...info}
          }
      }
      /**
      * 根据ID停用
      */
      function disableCategoryBatchUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sysCategory/disableCategoryBatch',params:{...paramsData},...info}
          }
      }
      /**
      * 根据ID停用
      */
      function disableCommonBatchUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sysCategory/disableCommonBatch',params:{...paramsData},...info}
          }
      }
      /**
      * 传入多个category list列表不分页
      */
      function selectBatchCategoryUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sysCategory/selectBatchCategory',params:{...paramsData},...info}
          }
      }
      /**
      * 某个category list列表不分页
      */
      function selectCategoryUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sysCategory/selectCategory',params:{...paramsData},...info}
          }
      }
      /**
      * 某个category list列表
      */
      function selectCategoryListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sysCategory/selectCategoryList',params:{...paramsData},...info}
          }
      }
      /**
      * 某个category tree列表
      */
      function selectCategoryTreeUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sysCategory/selectCategoryTree',params:{...paramsData},...info}
          }
      }
      /**
      * 条件查询category tree列表
      */
      function selectCategoryTreeByNameUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sysCategory/selectCategoryTreeByName',params:{...paramsData},...info}
          }
      }
      /**
      * category不重复
      */
      function selectListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sysCategory/selectList',params:{...paramsData},...info}
          }
      }
       return {addCategoryUsingPOST,addCommonUsingPOST,deleteCategoryBatchUsingPOST,deleteCommonBatchUsingPOST,disableCategoryBatchUsingPOST,disableCommonBatchUsingPOST,selectBatchCategoryUsingPOST,selectCategoryUsingPOST,selectCategoryListUsingPOST,selectCategoryTreeUsingPOST,selectCategoryTreeByNameUsingPOST,selectListUsingPOST}
     }
  
     function SysRoleNewController_ADMIN (target) {
       
      /**
      * 角色分配权限---过时
      */
      function addMenuToRoleUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sys_role/addMenuToRole',params:{...paramsData},...info}
          }
      }
      /**
      * 新增角色
      */
      function addRoleUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sys_role/addRole',params:{...paramsData},...info}
          }
      }
      /**
      * 检查角色代码是否存在
      */
      function checkRoleCodeExistsUsingGET(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sys_role/checkRoleCodeExists/{urCode}',params:{...paramsData},...info}
          }
      }
      /**
      * 检查角色名称是否存在
      */
      function checkRoleNameExistsUsingGET(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sys_role/checkRoleNameExists/{roleName}',params:{...paramsData},...info}
          }
      }
      /**
      * 根据ID删除
      */
      function deleteBatchUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sys_role/deleteBatch',params:{...paramsData},...info}
          }
      }
      /**
      * 根据ID删除
      */
      function deleteRoleUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sys_role/deleteRole',params:{...paramsData},...info}
          }
      }
      /**
      * 根据ID查角色询详情
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sys_role/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 启用禁用
      */
      function disableBatchUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sys_role/disable',params:{...paramsData},...info}
          }
      }
      /**
      * 查询跟角色绑定的用户信息
      */
      function findUserByRoleCodeUsingGET(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sys_role/findUserByRoleCode/{urCode}',params:{...paramsData},...info}
          }
      }
      /**
      * 获取应用列表
      */
      function getAppCentersMainUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sys_role/getAppCentersMain',params:{...paramsData},...info}
          }
      }
      /**
      * 获取角色下权限
      */
      function getAuthByRolesMainUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sys_role/getAuthByRolesMain',params:{...paramsData},...info}
          }
      }
      /**
      * 获取应用下的所有模块级联信息
      */
      function getCenterModularNewsMainUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sys_role/getCenterModularNewsMain',params:{...paramsData},...info}
          }
      }
      /**
      * 分页查询角色列表
      */
      function listUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sys_role/list',params:{...paramsData},...info}
          }
      }
      /**
      * 角色每页显示条数
      */
      function rolepageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sys_role/rolepage',params:{...paramsData},...info}
          }
      }
      /**
      * 修改角色
      */
      function updateRoleUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sys_role/updateRole',params:{...paramsData},...info}
          }
      }
      /**
      * 更新角色状态
      */
      function updateRoleStateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sys_role/updateRoleState',params:{...paramsData},...info}
          }
      }
       return {addMenuToRoleUsingPOST,addRoleUsingPOST,checkRoleCodeExistsUsingGET,checkRoleNameExistsUsingGET,deleteBatchUsingPOST,deleteRoleUsingPOST,detailUsingPOST,disableBatchUsingPOST,findUserByRoleCodeUsingGET,getAppCentersMainUsingPOST,getAuthByRolesMainUsingPOST,getCenterModularNewsMainUsingPOST,listUsingPOST,rolepageUsingPOST,updateRoleUsingPOST,updateRoleStateUsingPOST}
     }
  
     function SysRoleNewsController_ADMIN (target) {
       
      /**
      * 新增角色
      */
      function addRoleUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sys_roles/addRole',params:{...paramsData},...info}
          }
      }
      /**
      * 检查角色代码是否存在
      */
      function checkRoleCodeExistsUsingGET(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sys_roles/checkRoleCodeExists/{urCode}',params:{...paramsData},...info}
          }
      }
      /**
      * 检查角色名称是否存在
      */
      function checkRoleNameExistsUsingGET(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sys_roles/checkRoleNameExists/{roleName}',params:{...paramsData},...info}
          }
      }
      /**
      * 根据ID删除
      */
      function deleteBatchUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sys_roles/deleteBatch',params:{...paramsData},...info}
          }
      }
      /**
      * 根据ID删除
      */
      function deleteRoleUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sys_roles/deleteRole',params:{...paramsData},...info}
          }
      }
      /**
      * 根据ID查角色询详情
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sys_roles/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 启用禁用
      */
      function disableBatchUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sys_roles/disable',params:{...paramsData},...info}
          }
      }
      /**
      * 查询跟角色绑定的用户信息
      */
      function findUserByRoleCodeUsingGET(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sys_roles/findUserByRoleCode/{urCode}',params:{...paramsData},...info}
          }
      }
      /**
      * 获取应用列表
      */
      function getAppCentersUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sys_roles/getAppCenters',params:{...paramsData},...info}
          }
      }
      /**
      * 获取角色下权限
      */
      function getAuthByRolesUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sys_roles/getAuthByRoles',params:{...paramsData},...info}
          }
      }
      /**
      * 获取应用下的所有模块级联信息
      */
      function getCenterModularNewsUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sys_roles/getCenterModularNews',params:{...paramsData},...info}
          }
      }
      /**
      * 分页查询角色列表
      */
      function listUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sys_roles/list',params:{...paramsData},...info}
          }
      }
      /**
      * 角色每页显示条数
      */
      function rolepagesUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sys_roles/rolepages',params:{...paramsData},...info}
          }
      }
      /**
      * 修改角色
      */
      function updateRoleUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sys_roles/updateRole',params:{...paramsData},...info}
          }
      }
      /**
      * 更新角色状态
      */
      function updateRoleStateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sys_roles/updateRoleState',params:{...paramsData},...info}
          }
      }
       return {addRoleUsingPOST,checkRoleCodeExistsUsingGET,checkRoleNameExistsUsingGET,deleteBatchUsingPOST,deleteRoleUsingPOST,detailUsingPOST,disableBatchUsingPOST,findUserByRoleCodeUsingGET,getAppCentersUsingPOST,getAuthByRolesUsingPOST,getCenterModularNewsUsingPOST,listUsingPOST,rolepagesUsingPOST,updateRoleUsingPOST,updateRoleStateUsingPOST}
     }
  
     function SysUserNewController_ADMIN (target) {
       
      /**
      * 添加icon
      */
      function addICONUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sys_user/addICON',params:{...paramsData},...info}
          }
      }
      /**
      * 新增
      */
      function addUserUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sys_user/addUser',params:{...paramsData},...info}
          }
      }
      /**
      * 角色用户关联接口
      */
      function addUserRelatedRolesUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sys_user/addUserRelatedRoles',params:{...paramsData},...info}
          }
      }
      /**
      * 根据ID删除
      */
      function deleteUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sys_user/del',params:{...paramsData},...info}
          }
      }
      /**
      * 批量删除用户
      */
      function delMoreUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sys_user/delMore',params:{...paramsData},...info}
          }
      }
      /**
      * 根据ID查询详情
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sys_user/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 启用禁用
      */
      function disableBatchUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sys_user/disable',params:{...paramsData},...info}
          }
      }
      /**
      * 分页查询用户列表
      */
      function listUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sys_user/list',params:{...paramsData},...info}
          }
      }
      /**
      * 根据用户ID查询用户所拥有的角色
      */
      function roleByUserUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sys_user/roleByUser',params:{...paramsData},...info}
          }
      }
      /**
      * 修改用户
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sys_user/update',params:{...paramsData},...info}
          }
      }
      /**
      * 修改密码
      */
      function updatePassWordUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sys_user/updatePassWord',params:{...paramsData},...info}
          }
      }
      /**
      * 更新用户状态
      */
      function updateUserStateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sys_user/updateUserState',params:{...paramsData},...info}
          }
      }
      /**
      * 用户每页显示条数
      */
      function userpageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sys_user/userpage',params:{...paramsData},...info}
          }
      }
      /**
      * 用户每页显示条数
      */
      function userpageByOwnerUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sys_user/userpageByOwner',params:{...paramsData},...info}
          }
      }
       return {addICONUsingPOST,addUserUsingPOST,addUserRelatedRolesUsingPOST,deleteUsingPOST,delMoreUsingPOST,detailUsingPOST,disableBatchUsingPOST,listUsingPOST,roleByUserUsingPOST,updateUsingPOST,updatePassWordUsingPOST,updateUserStateUsingPOST,userpageUsingPOST,userpageByOwnerUsingPOST}
     }
  
     function UumUserController_ADMIN (target) {
       
      /**
      * 新增
      */
      function addGovernmentUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/user/addGovernment',params:{...paramsData},...info}
          }
      }
      /**
      * 角色用户关联接口
      */
      function addUserRelatedRoleUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/user/addUserRelatedRole',params:{...paramsData},...info}
          }
      }
      /**
      * 用户应用查询
      */
      function getAppCenterListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/user/appInfo',params:{...paramsData},...info}
          }
      }
      /**
      * 批量关联用户组织机构
      */
      function batchGlUoidUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/user/batchGlUoid',params:{...paramsData},...info}
          }
      }
      /**
      * 批量移除用户组织机构
      */
      function batchYcUoidUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/user/batchYcUoid',params:{...paramsData},...info}
          }
      }
      /**
      * 用户授权按钮查询
      */
      function getAppButtonListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/user/buttonInfo',params:{...paramsData},...info}
          }
      }
      /**
      * 数据权限下拉接口
      */
      function dataAuthListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/user/dataAuthList',params:{...paramsData},...info}
          }
      }
      /**
      * 根据ID删除
      */
      function deleteUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/user/del',params:{...paramsData},...info}
          }
      }
      /**
      * 批量删除用户
      */
      function delMoreUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/user/delMore',params:{...paramsData},...info}
          }
      }
      /**
      * 根据ID查询详情
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/user/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 启用禁用
      */
      function disableBatchUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/user/disable',params:{...paramsData},...info}
          }
      }
      /**
      * 根据组织机构id，获取机构下所有用户
      */
      function findUserByOrgIdUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/user/findUserByOrgId',params:{...paramsData},...info}
          }
      }
      /**
      * 获取用户上一次登陆时间
      */
      function getLastLoginTimeUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/user/getLastLoginTime',params:{...paramsData},...info}
          }
      }
      /**
      * 获取用户权限数据
      */
      function infoUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/user/info',params:{...paramsData},...info}
          }
      }
      /**
      * 组织机构用户集合
      */
      function listUoidUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/user/listUoid',params:{...paramsData},...info}
          }
      }
      /**
      * 用户授权菜单查询
      */
      function getAppMenuListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/user/menuInfo',params:{...paramsData},...info}
          }
      }
      /**
      * 用户授权模块查询
      */
      function getAppModularListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/user/modularInfo',params:{...paramsData},...info}
          }
      }
      /**
      * 政府用户分页列表
      */
      function pageGovernmentUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/user/pageGovernment',params:{...paramsData},...info}
          }
      }
      /**
      * 根据用户ID查询用户所拥有的角色
      */
      function roleByUserUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/user/roleByUser',params:{...paramsData},...info}
          }
      }
      /**
      * 功能修改
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/user/update',params:{...paramsData},...info}
          }
      }
      /**
      * 更新头像
      */
      function updateHeadUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/user/updateHead',params:{...paramsData},...info}
          }
      }
      /**
      * 修改用户组织机构
      */
      function updateUumUserByUoidUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/user/updateUoid',params:{...paramsData},...info}
          }
      }
      /**
      * 获取用户下拉
      */
      function userListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/user/userList',params:{...paramsData},...info}
          }
      }
       return {addGovernmentUsingPOST,addUserRelatedRoleUsingPOST,getAppCenterListUsingPOST,batchGlUoidUsingPOST,batchYcUoidUsingPOST,getAppButtonListUsingPOST,dataAuthListUsingPOST,deleteUsingPOST,delMoreUsingPOST,detailUsingPOST,disableBatchUsingPOST,findUserByOrgIdUsingPOST,getLastLoginTimeUsingPOST,infoUsingPOST,listUoidUsingPOST,getAppMenuListUsingPOST,getAppModularListUsingPOST,pageGovernmentUsingPOST,roleByUserUsingPOST,updateUsingPOST,updateHeadUsingPOST,updateUumUserByUoidUsingPOST,userListUsingPOST}
     }
  
  
    
     function VertifyApplyInfoController_VERTIFYBASIC (target) {
       
      /**
      * 申报信息审核
      */
      function applyConfirmUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/vertify/basic/vertify/applyInfo/confirm',params:{...paramsData},...info}
          }
      }
      /**
      * 申报信息详情
      */
      function applyInfoSubmitUsingGET(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/vertify/basic/vertify/applyInfo/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 申报信息新增
      */
      function applyInfoInsertUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/vertify/basic/vertify/applyInfo/insert',params:{...paramsData},...info}
          }
      }
      /**
      * 申报信息查询
      */
      function applyInfolistUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/vertify/basic/vertify/applyInfo/page',params:{...paramsData},...info}
          }
      }
      /**
      * 审核申报信息查询
      */
      function applyInfolist2UsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/vertify/basic/vertify/applyInfo/page2',params:{...paramsData},...info}
          }
      }
      /**
      * 申报信息提交
      */
      function submitUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/vertify/basic/vertify/applyInfo/submit',params:{...paramsData},...info}
          }
      }
      /**
      * 申报信息修改
      */
      function applyInfoUpdateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/vertify/basic/vertify/applyInfo/update',params:{...paramsData},...info}
          }
      }
      /**
      * 申报材料查看
      */
      function itemDetailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/vertify/basic/vertify/applyItem/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 查看申报材料
      */
      function listItemUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/vertify/basic/vertify/applyItem/list',params:{...paramsData},...info}
          }
      }
      /**
      * 根据类型查询申报材料
      */
      function listItemByTypeUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/vertify/basic/vertify/applyItem/listByType',params:{...paramsData},...info}
          }
      }
      /**
      * 申报材料修改
      */
      function itemUpdateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/vertify/basic/vertify/applyItem/update',params:{...paramsData},...info}
          }
      }
      /**
      * 申报材料上传
      */
      function itemUploadUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/vertify/basic/vertify/applyItem/upload',params:{...paramsData},...info}
          }
      }
      /**
      * 多个申报材料上传
      */
      function itemUploadBatchUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/vertify/basic/vertify/applyItem/uploads',params:{...paramsData},...info}
          }
      }
       return {applyConfirmUsingPOST,applyInfoSubmitUsingGET,applyInfoInsertUsingPOST,applyInfolistUsingPOST,applyInfolist2UsingPOST,submitUsingPOST,applyInfoUpdateUsingPOST,itemDetailUsingPOST,listItemUsingPOST,listItemByTypeUsingPOST,itemUpdateUsingPOST,itemUploadUsingPOST,itemUploadBatchUsingPOST}
     }
  
     function VertifyCertificateController_VERTIFYBASIC (target) {
       
      /**
      * 新增证书
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/vertify/basic/vertifyCertificate/add',params:{...paramsData},...info}
          }
      }
      /**
      * 农业主体新增证书
      */
      function addByOwnerUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/vertify/basic/vertifyCertificate/addByOwner',params:{...paramsData},...info}
          }
      }
      /**
      * 审核通过
      */
      function auditUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/vertify/basic/vertifyCertificate/audit',params:{...paramsData},...info}
          }
      }
      /**
      * 审核未通过
      */
      function auditNotUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/vertify/basic/vertifyCertificate/auditNot',params:{...paramsData},...info}
          }
      }
      /**
      * 证书审核列表
      */
      function auditPageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/vertify/basic/vertifyCertificate/auditPage',params:{...paramsData},...info}
          }
      }
      /**
      * 注销
      */
      function cancelUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/vertify/basic/vertifyCertificate/cancel',params:{...paramsData},...info}
          }
      }
      /**
      * 验证产品证书编号是否重复
      */
      function checkNoUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/vertify/basic/vertifyCertificate/checkNo',params:{...paramsData},...info}
          }
      }
      /**
      * 认领证书
      */
      function claimUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/vertify/basic/vertifyCertificate/claim',params:{...paramsData},...info}
          }
      }
      /**
      * 删除
      */
      function delUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/vertify/basic/vertifyCertificate/del',params:{...paramsData},...info}
          }
      }
      /**
      * 证书详情
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/vertify/basic/vertifyCertificate/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 根据申请人id查询旗下的证书
      */
      function getCertByApplyUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/vertify/basic/vertifyCertificate/getCertByApply',params:{...paramsData},...info}
          }
      }
      /**
      * 证书认领列表
      */
      function importPageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/vertify/basic/vertifyCertificate/importPage',params:{...paramsData},...info}
          }
      }
      /**
      * 证书失效
      */
      function inValidUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/vertify/basic/vertifyCertificate/inValid',params:{...paramsData},...info}
          }
      }
      /**
      * 农户证书list
      */
      function listByOwnerUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/vertify/basic/vertifyCertificate/listByOwner',params:{...paramsData},...info}
          }
      }
      /**
      * 证书管理列表
      */
      function listUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/vertify/basic/vertifyCertificate/page',params:{...paramsData},...info}
          }
      }
      /**
      * 农业主体证书管理列表
      */
      function pageByOwnerUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/vertify/basic/vertifyCertificate/pageByOwner',params:{...paramsData},...info}
          }
      }
      /**
      * 监管修改证书
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/vertify/basic/vertifyCertificate/update',params:{...paramsData},...info}
          }
      }
      /**
      * 农业主体修改证书
      */
      function updateByOwnerUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/vertify/basic/vertifyCertificate/updateByOwner',params:{...paramsData},...info}
          }
      }
      /**
      * 证书激活
      */
      function validUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/vertify/basic/vertifyCertificate/valid',params:{...paramsData},...info}
          }
      }
      /**
      * 撤销
      */
      function withdrawUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/vertify/basic/vertifyCertificate/withdraw',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,addByOwnerUsingPOST,auditUsingPOST,auditNotUsingPOST,auditPageUsingPOST,cancelUsingPOST,checkNoUsingPOST,claimUsingPOST,delUsingPOST,detailUsingPOST,getCertByApplyUsingPOST,importPageUsingPOST,inValidUsingPOST,listByOwnerUsingPOST,listUsingPOST,pageByOwnerUsingPOST,updateUsingPOST,updateByOwnerUsingPOST,validUsingPOST,withdrawUsingPOST}
     }
  
     function VertifyProductCategoryController_VERTIFYBASIC (target) {
       
      /**
      * 级联一次性查出所有
      */
      function getClassifyListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/vertify/basic/vertifyProductCategory/getClassifyList',params:{...paramsData},...info}
          }
      }
       return {getClassifyListUsingPOST}
     }
  
  
    
     function AgroTechnicalController_INFOBASIC (target) {
       
      /**
      * 添加农技培训
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/agroTechnical/add',params:{...paramsData},...info}
          }
      }
      /**
      * 农技培训删除
      */
      function deleteUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/agroTechnical/delete',params:{...paramsData},...info}
          }
      }
      /**
      * 查看
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/agroTechnical/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 查询
      */
      function pageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/agroTechnical/page',params:{...paramsData},...info}
          }
      }
      /**
      * 修改推荐状态
      */
      function recommendUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/agroTechnical/recommend',params:{...paramsData},...info}
          }
      }
      /**
      * 修改发布状态
      */
      function stateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/agroTechnical/state',params:{...paramsData},...info}
          }
      }
      /**
      * 修改农技培训
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/agroTechnical/update',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,deleteUsingPOST,detailUsingPOST,pageUsingPOST,recommendUsingPOST,stateUsingPOST,updateUsingPOST}
     }
  
     function AgroTechnicalTypeController_INFOBASIC (target) {
       
      /**
      * 农技培训类型新增
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/agroTechnical/type/add',params:{...paramsData},...info}
          }
      }
      /**
      * 农技培训类型删除
      */
      function deleteUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/agroTechnical/type/delete',params:{...paramsData},...info}
          }
      }
      /**
      * 查看
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/agroTechnical/type/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 修改发布状态
      */
      function stateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/agroTechnical/type/state',params:{...paramsData},...info}
          }
      }
      /**
      * 树形查询
      */
      function treeUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/agroTechnical/type/tree',params:{...paramsData},...info}
          }
      }
      /**
      * 农技培训类型修改
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/agroTechnical/type/update',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,deleteUsingPOST,detailUsingPOST,stateUsingPOST,treeUsingPOST,updateUsingPOST}
     }
  
     function BannerController_INFOBASIC (target) {
       
      /**
      * banner 管理新增
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/banner/add',params:{...paramsData},...info}
          }
      }
      /**
      * banner  管理类型列表
      */
      function bannerListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/banner/bannerList',params:{...paramsData},...info}
          }
      }
      /**
      * banner 管理删除
      */
      function deleteUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/banner/delete',params:{...paramsData},...info}
          }
      }
      /**
      * banner 管理查看
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/banner/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 查询
      */
      function pageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/banner/page',params:{...paramsData},...info}
          }
      }
      /**
      * 修改发布状态
      */
      function stateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/banner/state',params:{...paramsData},...info}
          }
      }
      /**
      * banner 管理修改
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/banner/update',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,bannerListUsingPOST,deleteUsingPOST,detailUsingPOST,pageUsingPOST,stateUsingPOST,updateUsingPOST}
     }
  
     function BannerTypeController_INFOBASIC (target) {
       
      /**
      * banner 类型管理新增
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/bannerType/add',params:{...paramsData},...info}
          }
      }
      /**
      * banner 类型列表
      */
      function bannerTypeListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/bannerType/bannerTypeList',params:{...paramsData},...info}
          }
      }
      /**
      *  banner类型管理删除
      */
      function deleteUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/bannerType/delete',params:{...paramsData},...info}
          }
      }
      /**
      * 查看
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/bannerType/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 查询
      */
      function pageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/bannerType/page',params:{...paramsData},...info}
          }
      }
      /**
      * 修改banner类型管理状态
      */
      function stateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/bannerType/state',params:{...paramsData},...info}
          }
      }
      /**
      * banner 类型管理修改
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/bannerType/update',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,bannerTypeListUsingPOST,deleteUsingPOST,detailUsingPOST,pageUsingPOST,stateUsingPOST,updateUsingPOST}
     }
  
     function BrandCompanyController_INFOBASIC (target) {
       
      /**
      * 品牌企业新增
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/brandCompany/add',params:{...paramsData},...info}
          }
      }
      /**
      * 获取品牌企业
      */
      function brandCompanysUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/brandCompany/brandCompanys',params:{...paramsData},...info}
          }
      }
      /**
      *  品牌企业删除
      */
      function deleteUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/brandCompany/delete',params:{...paramsData},...info}
          }
      }
      /**
      * 品牌企业查看
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/brandCompany/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 查询
      */
      function pageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/brandCompany/page',params:{...paramsData},...info}
          }
      }
      /**
      * 修改品牌企业状态
      */
      function stateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/brandCompany/state',params:{...paramsData},...info}
          }
      }
      /**
      * 品牌企业修改
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/brandCompany/update',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,brandCompanysUsingPOST,deleteUsingPOST,detailUsingPOST,pageUsingPOST,stateUsingPOST,updateUsingPOST}
     }
  
     function ComplaintsReportController_INFOBASIC (target) {
       
      /**
      * 投诉举报新增
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/complaints/add',params:{...paramsData},...info}
          }
      }
      /**
      *  投诉删除
      */
      function deleteUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/complaints/delete',params:{...paramsData},...info}
          }
      }
      /**
      * 查询
      */
      function pageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/complaints/page',params:{...paramsData},...info}
          }
      }
      /**
      *  投诉举报状态
      */
      function stateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/complaints/state',params:{...paramsData},...info}
          }
      }
      /**
      *  投诉类型
      */
      function typeUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/complaints/type',params:{...paramsData},...info}
          }
      }
      /**
      * 投诉举报修改
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/complaints/update',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,deleteUsingPOST,pageUsingPOST,stateUsingPOST,typeUsingPOST,updateUsingPOST}
     }
  
     function ExcelController_INFOBASIC (target) {
       
      /**
      * 模板下载
      */
      function downloadExcelUsingGET(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/excel/downloadExcel',params:{...paramsData},...info}
          }
      }
      /**
      * 模板下载
      */
      function exportExcelUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/excel/exportExcel',params:{...paramsData},...info}
          }
      }
      /**
      * 行情信息导入
      */
      function readExcelUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/excel/readExcel',params:{...paramsData},...info}
          }
      }
       return {downloadExcelUsingGET,exportExcelUsingPOST,readExcelUsingPOST}
     }
  
     function IllegalCompanyController_INFOBASIC (target) {
       
      /**
      * 违规企业管理新增
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/illegalCompany/add',params:{...paramsData},...info}
          }
      }
      /**
      * 违规企业删除可多删除
      */
      function deleteUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/illegalCompany/delete',params:{...paramsData},...info}
          }
      }
      /**
      * 违规企业管理查看
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/illegalCompany/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 查询
      */
      function pageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/illegalCompany/page',params:{...paramsData},...info}
          }
      }
      /**
      * 修改推荐状态
      */
      function recommendUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/illegalCompany/recommend',params:{...paramsData},...info}
          }
      }
      /**
      * 修改发布状态
      */
      function stateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/illegalCompany/state',params:{...paramsData},...info}
          }
      }
      /**
      * 违规企业管理修改
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/illegalCompany/update',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,deleteUsingPOST,detailUsingPOST,pageUsingPOST,recommendUsingPOST,stateUsingPOST,updateUsingPOST}
     }
  
     function InformationController_INFOBASIC (target) {
       
      /**
      * 资讯管理新增
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/information/add',params:{...paramsData},...info}
          }
      }
      /**
      * 资讯管理删除
      */
      function deleteUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/information/delete',params:{...paramsData},...info}
          }
      }
      /**
      * 资讯管理查看
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/information/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 资讯类型列表
      */
      function informationListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/information/informationList',params:{...paramsData},...info}
          }
      }
      /**
      * 查询
      */
      function pageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/information/page',params:{...paramsData},...info}
          }
      }
      /**
      * 修改推荐状态
      */
      function recommendUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/information/recommend',params:{...paramsData},...info}
          }
      }
      /**
      * 修改发布状态
      */
      function stateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/information/state',params:{...paramsData},...info}
          }
      }
      /**
      * 资讯管理修改
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/information/update',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,deleteUsingPOST,detailUsingPOST,informationListUsingPOST,pageUsingPOST,recommendUsingPOST,stateUsingPOST,updateUsingPOST}
     }
  
     function InformationTypeController_INFOBASIC (target) {
       
      /**
      * 资讯类型管理新增
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/informationType/add',params:{...paramsData},...info}
          }
      }
      /**
      * 资讯类型管理删除
      */
      function deleteUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/informationType/delete',params:{...paramsData},...info}
          }
      }
      /**
      * 资讯类型管理查看
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/informationType/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 查询咨询类型列表
      */
      function listUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/informationType/list',params:{...paramsData},...info}
          }
      }
      /**
      * 查询
      */
      function pageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/informationType/page',params:{...paramsData},...info}
          }
      }
      /**
      * 修改发布状态
      */
      function stateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/informationType/state',params:{...paramsData},...info}
          }
      }
      /**
      * 树形查询
      */
      function treeUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/informationType/tree',params:{...paramsData},...info}
          }
      }
      /**
      * 资讯类型管理修改
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/informationType/update',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,deleteUsingPOST,detailUsingPOST,listUsingPOST,pageUsingPOST,stateUsingPOST,treeUsingPOST,updateUsingPOST}
     }
  
     function LinkController_INFOBASIC (target) {
       
      /**
      * 友情链接新增
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/link/add',params:{...paramsData},...info}
          }
      }
      /**
      * 友情链接删除
      */
      function deleteUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/link/delete',params:{...paramsData},...info}
          }
      }
      /**
      * 友情链接查看
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/link/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 查询
      */
      function pageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/link/page',params:{...paramsData},...info}
          }
      }
      /**
      * 友情链接状态
      */
      function stateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/link/state',params:{...paramsData},...info}
          }
      }
      /**
      * 友情链接修改
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/link/update',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,deleteUsingPOST,detailUsingPOST,pageUsingPOST,stateUsingPOST,updateUsingPOST}
     }
  
     function MarketPriceController_INFOBASIC (target) {
       
      /**
      * 新增行情信息
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/marketPrice/add',params:{...paramsData},...info}
          }
      }
      /**
      * 检查产品名称是否重复
      */
      function checkUsingGET(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/marketPrice/check',params:{...paramsData},...info}
          }
      }
      /**
      * 行情信息删除
      */
      function deleteUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/marketPrice/delete',params:{...paramsData},...info}
          }
      }
      /**
      * 行情信息批量删除
      */
      function deleteBatchUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/marketPrice/deleteBatch',params:{...paramsData},...info}
          }
      }
      /**
      * 行情信息详情
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/marketPrice/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 分页查询行情信息
      */
      function pageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/marketPrice/page',params:{...paramsData},...info}
          }
      }
      /**
      * 涨幅状态
      */
      function typeUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/marketPrice/type',params:{...paramsData},...info}
          }
      }
      /**
      * 修改行情信息
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/marketPrice/update',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,checkUsingGET,deleteUsingPOST,deleteBatchUsingPOST,detailUsingPOST,pageUsingPOST,typeUsingPOST,updateUsingPOST}
     }
  
     function NoticeDoorController_INFOBASIC (target) {
       
      /**
      * 新增
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/noticeDoor/add',params:{...paramsData},...info}
          }
      }
      /**
      * 删除  可批量
      */
      function deleteUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/noticeDoor/delete',params:{...paramsData},...info}
          }
      }
      /**
      * 详情
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/noticeDoor/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 详情
      */
      function detailDoorUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/noticeDoor/detailDoor',params:{...paramsData},...info}
          }
      }
      /**
      * 分页
      */
      function pageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/noticeDoor/page',params:{...paramsData},...info}
          }
      }
      /**
      * 发布通知
      */
      function publishUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/noticeDoor/publish',params:{...paramsData},...info}
          }
      }
      /**
      * 更新
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/noticeDoor/update',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,deleteUsingPOST,detailUsingPOST,detailDoorUsingPOST,pageUsingPOST,publishUsingPOST,updateUsingPOST}
     }
  
     function PolicyInterpController_INFOBASIC (target) {
       
      /**
      * 政策解读新增
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/policy/add',params:{...paramsData},...info}
          }
      }
      /**
      * 政策解读删除
      */
      function deleteUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/policy/delete',params:{...paramsData},...info}
          }
      }
      /**
      * 政策解读查看
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/policy/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 查询
      */
      function pageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/policy/page',params:{...paramsData},...info}
          }
      }
      /**
      * 修改推荐状态
      */
      function recommendUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/policy/recommend',params:{...paramsData},...info}
          }
      }
      /**
      * 修改发布状态
      */
      function stateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/policy/state',params:{...paramsData},...info}
          }
      }
      /**
      * 政策解读修改
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/policy/update',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,deleteUsingPOST,detailUsingPOST,pageUsingPOST,recommendUsingPOST,stateUsingPOST,updateUsingPOST}
     }
  
     function PolicyInterpTypeController_INFOBASIC (target) {
       
      /**
      * 政策解读类型新增
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/policy/type/add',params:{...paramsData},...info}
          }
      }
      /**
      * 政策解读类型删除
      */
      function deleteUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/policy/type/delete',params:{...paramsData},...info}
          }
      }
      /**
      * 政策解读类型查看
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/policy/type/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 政策解读类型状态
      */
      function stateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/policy/type/state',params:{...paramsData},...info}
          }
      }
      /**
      * 树形查询
      */
      function treeUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/policy/type/tree',params:{...paramsData},...info}
          }
      }
      /**
      * 政策解读类型修改
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/policy/type/update',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,deleteUsingPOST,detailUsingPOST,stateUsingPOST,treeUsingPOST,updateUsingPOST}
     }
  
     function QualitySafetyController_INFOBASIC (target) {
       
      /**
      * 质量安全标准新增
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/quality/add',params:{...paramsData},...info}
          }
      }
      /**
      * 质量安全标准删除
      */
      function deleteUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/quality/delete',params:{...paramsData},...info}
          }
      }
      /**
      * 质量安全标准查看
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/quality/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 查询
      */
      function pageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/quality/page',params:{...paramsData},...info}
          }
      }
      /**
      * 修改推荐状态
      */
      function recommendUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/quality/recommend',params:{...paramsData},...info}
          }
      }
      /**
      * 修改发布状态
      */
      function stateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/quality/state',params:{...paramsData},...info}
          }
      }
      /**
      * 质量安全标准修改
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/quality/update',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,deleteUsingPOST,detailUsingPOST,pageUsingPOST,recommendUsingPOST,stateUsingPOST,updateUsingPOST}
     }
  
     function RecommendProductController_INFOBASIC (target) {
       
      /**
      * 推荐产品新增
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/recommend/add',params:{...paramsData},...info}
          }
      }
      /**
      * 推荐产品删除
      */
      function deleteUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/recommend/delete',params:{...paramsData},...info}
          }
      }
      /**
      * 推荐产品查看
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/recommend/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 查询
      */
      function pageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/recommend/page',params:{...paramsData},...info}
          }
      }
      /**
      * 修改发布状态
      */
      function stateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/recommend/state',params:{...paramsData},...info}
          }
      }
      /**
      * 推荐产品修改
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/recommend/update',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,deleteUsingPOST,detailUsingPOST,pageUsingPOST,stateUsingPOST,updateUsingPOST}
     }
  
     function RedBlackListController_INFOBASIC (target) {
       
      /**
      * 红黑榜新增
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/redBlack/add',params:{...paramsData},...info}
          }
      }
      /**
      * 红黑榜删除
      */
      function deleteUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/redBlack/delete',params:{...paramsData},...info}
          }
      }
      /**
      * 红黑榜查看
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/redBlack/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 查询
      */
      function pageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/redBlack/page',params:{...paramsData},...info}
          }
      }
      /**
      * 修改推荐状态
      */
      function recommendUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/redBlack/recommend',params:{...paramsData},...info}
          }
      }
      /**
      * 修改发布状态
      */
      function stateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/redBlack/state',params:{...paramsData},...info}
          }
      }
      /**
      * 修改红黑榜类型
      */
      function typeUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/redBlack/type',params:{...paramsData},...info}
          }
      }
      /**
      * 红黑榜修改
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/info/basic/redBlack/update',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,deleteUsingPOST,detailUsingPOST,pageUsingPOST,recommendUsingPOST,stateUsingPOST,typeUsingPOST,updateUsingPOST}
     }
  
  
    
     function DataChartController_BRACE (target) {
       
      /**
      * 农业主体分布
      */
      function companyChartUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/brace/dataChart/companyChart',params:{...paramsData},...info}
          }
      }
      /**
      * 各地区主体数量占比
      */
      function companyRegionUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/brace/dataChart/companyRegion',params:{...paramsData},...info}
          }
      }
      /**
      * 农业主体分布图
      */
      function companyRegionChartUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/brace/dataChart/companyRegionChart',params:{...paramsData},...info}
          }
      }
      /**
      * 各地区主体总数量
      */
      function companySumUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/brace/dataChart/companySum',params:{...paramsData},...info}
          }
      }
      /**
      * 农业主体信用分布情况
      */
      function selectCreditRateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/brace/dataChart/selectCreditRate',params:{...paramsData},...info}
          }
      }
      /**
      * （农业主体总数、本年度增减，三品一标主体数）
      */
      function selectDataChartUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/brace/dataChart/selectDataChart',params:{...paramsData},...info}
          }
      }
      /**
      * 巡更巡检状态
      */
      function selectPatrolResultUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/brace/dataChart/selectPatrolResult',params:{...paramsData},...info}
          }
      }
       return {companyChartUsingPOST,companyRegionUsingPOST,companyRegionChartUsingPOST,companySumUsingPOST,selectCreditRateUsingPOST,selectDataChartUsingPOST,selectPatrolResultUsingPOST}
     }
  
     function DataCompanyController_BRACE (target) {
       
      /**
      * 主体地图数据
      */
      function findCompanyMapDataUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/brace/dataCompany/findCompanyMapData',params:{...paramsData},...info}
          }
      }
      /**
      * 主体汇总表
      */
      function selectDataCompanyPageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/brace/dataCompany/selectDataCompanyPage',params:{...paramsData},...info}
          }
      }
       return {findCompanyMapDataUsingPOST,selectDataCompanyPageUsingPOST}
     }
  
     function DataCreditController_BRACE (target) {
       
      /**
      * 信用等级占比表
      */
      function selectCreditRateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/brace/dataCredit/selectCreditRate',params:{...paramsData},...info}
          }
      }
      /**
      * 分区信用等级占比详情
      */
      function selectDatareditPageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/brace/dataCredit/selectDatareditPage',params:{...paramsData},...info}
          }
      }
       return {selectCreditRateUsingPOST,selectDatareditPageUsingPOST}
     }
  
     function DataFarmlandController_BRACE (target) {
       
      /**
      * 数据分析
      */
      function findSelectFarmlandUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/brace/dataFarmland/findSelectFarmland',params:{...paramsData},...info}
          }
      }
      /**
      * 地貌类型总数
      */
      function findSelectFarmlandNameUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/brace/dataFarmland/findSelectFarmlandName',params:{...paramsData},...info}
          }
      }
      /**
      * 基地统计
      */
      function selectFarmlandPageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/brace/dataFarmland/selectFarmlandPage',params:{...paramsData},...info}
          }
      }
       return {findSelectFarmlandUsingPOST,findSelectFarmlandNameUsingPOST,selectFarmlandPageUsingPOST}
     }
  
     function DataIndustryController_BRACE (target) {
       
      /**
      * 产业类型占比
      */
      function companyChartUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/brace/dataIndustry/companyChart',params:{...paramsData},...info}
          }
      }
      /**
      * 各地区主体数量占比
      */
      function companyRegionUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/brace/dataIndustry/companyRegion',params:{...paramsData},...info}
          }
      }
      /**
      * 各地区主体总数量
      */
      function companySumUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/brace/dataIndustry/companySum',params:{...paramsData},...info}
          }
      }
      /**
      * 各产业类型主体数量对比表
      */
      function selectIndustryPageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/brace/dataIndustry/selectIndustryPage',params:{...paramsData},...info}
          }
      }
       return {companyChartUsingPOST,companyRegionUsingPOST,companySumUsingPOST,selectIndustryPageUsingPOST}
     }
  
     function DataInspectionController_BRACE (target) {
       
      /**
      * 检测次数类型名称总数
      */
      function selectInspectionNumUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/brace/dataInspection/selectInspectionNum',params:{...paramsData},...info}
          }
      }
      /**
      * 检测次数表
      */
      function selectInspectionPageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/brace/dataInspection/selectInspectionPage',params:{...paramsData},...info}
          }
      }
      /**
      * 本年全市监管任务完成情况（各区）
      */
      function selectSubTaskStateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/brace/dataInspection/selectSubTaskState',params:{...paramsData},...info}
          }
      }
      /**
      * 本年全市监管任务合格情况
      */
      function selectTaskResultUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/brace/dataInspection/selectTaskResult',params:{...paramsData},...info}
          }
      }
      /**
      * 监管任务每年完成率情况
      */
      function selectTaskResultPerYearUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/brace/dataInspection/selectTaskResultPerYear',params:{...paramsData},...info}
          }
      }
      /**
      * 本年全市监管任务完成情况（宁波市）
      */
      function selectTaskStateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/brace/dataInspection/selectTaskState',params:{...paramsData},...info}
          }
      }
      /**
      * 产业类型巡更巡检总数
      */
      function selectPatrolNumUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/brace/dataPatrol/selectPatrolNum',params:{...paramsData},...info}
          }
      }
      /**
      * 巡更巡检表
      */
      function selectPatrolPageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/brace/dataPatrol/selectPatrolPage',params:{...paramsData},...info}
          }
      }
       return {selectInspectionNumUsingPOST,selectInspectionPageUsingPOST,selectSubTaskStateUsingPOST,selectTaskResultUsingPOST,selectTaskResultPerYearUsingPOST,selectTaskStateUsingPOST,selectPatrolNumUsingPOST,selectPatrolPageUsingPOST}
     }
  
     function DataSelfMonotorController_BRACE (target) {
       
      /**
      * 本市全年检测任务完成情况（各区完成度）
      */
      function selectSelfMonotorGroupUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/brace/dataSelfMonotor/selectSelfMonotorGroup',params:{...paramsData},...info}
          }
      }
      /**
      * 自检情况
      */
      function selectSelfMonotorPageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/brace/dataSelfMonotor/selectSelfMonotorPage',params:{...paramsData},...info}
          }
      }
      /**
      * 每年完成情况
      */
      function selectSelfMonotorPerYearUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/brace/dataSelfMonotor/selectSelfMonotorPerYear',params:{...paramsData},...info}
          }
      }
      /**
      * 本市全年检测任务完成情况（检测任务总数和完成任务率）
      */
      function selectSelfMonotorSumUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/brace/dataSelfMonotor/selectSelfMonotorSum',params:{...paramsData},...info}
          }
      }
       return {selectSelfMonotorGroupUsingPOST,selectSelfMonotorPageUsingPOST,selectSelfMonotorPerYearUsingPOST,selectSelfMonotorSumUsingPOST}
     }
  
     function DataVertifyController_BRACE (target) {
       
      /**
      * 农产品地理标志
      */
      function selectGeographyUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/brace/dataVertify/selectGeography',params:{...paramsData},...info}
          }
      }
      /**
      * 农产品地理标志总量
      */
      function selectGeographyNumUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/brace/dataVertify/selectGeographyNum',params:{...paramsData},...info}
          }
      }
      /**
      * 查询产品
      */
      function selectProductUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/brace/dataVertify/selectProduct',params:{...paramsData},...info}
          }
      }
      /**
      * 证书分布情况
      */
      function selectSituationUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/brace/dataVertify/selectSituation',params:{...paramsData},...info}
          }
      }
      /**
      * 本年新增
      */
      function selectVertifyUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/brace/dataVertify/selectVertify',params:{...paramsData},...info}
          }
      }
      /**
      * 将过期
      */
      function selectWillfailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/brace/dataVertify/selectWillfail',params:{...paramsData},...info}
          }
      }
      /**
      * 新增证书
      */
      function selectaddVertifyUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/brace/dataVertify/selectaddVertify',params:{...paramsData},...info}
          }
      }
      /**
      * 绿色食品
      */
      function selectgreenUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/brace/dataVertify/selectgreen',params:{...paramsData},...info}
          }
      }
      /**
      * 绿色食品总数量
      */
      function selectgreenNumUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/brace/dataVertify/selectgreenNum',params:{...paramsData},...info}
          }
      }
      /**
      * 无公害产品
      */
      function selectnuisancelessUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/brace/dataVertify/selectnuisanceless',params:{...paramsData},...info}
          }
      }
      /**
      * 无公害产品总数量
      */
      function selectnuisancelessNumUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/brace/dataVertify/selectnuisancelessNum',params:{...paramsData},...info}
          }
      }
      /**
      * 有机产品
      */
      function selectorganicUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/brace/dataVertify/selectorganic',params:{...paramsData},...info}
          }
      }
      /**
      * 有机产品总数量
      */
      function selectorganicNumUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/brace/dataVertify/selectorganicNum',params:{...paramsData},...info}
          }
      }
      /**
      * 区域排名
      */
      function selectrankingUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/brace/dataVertify/selectranking',params:{...paramsData},...info}
          }
      }
       return {selectGeographyUsingPOST,selectGeographyNumUsingPOST,selectProductUsingPOST,selectSituationUsingPOST,selectVertifyUsingPOST,selectWillfailUsingPOST,selectaddVertifyUsingPOST,selectgreenUsingPOST,selectgreenNumUsingPOST,selectnuisancelessUsingPOST,selectnuisancelessNumUsingPOST,selectorganicUsingPOST,selectorganicNumUsingPOST,selectrankingUsingPOST}
     }
  
     function FarmTraceCodeController_BRACE (target) {
       
      /**
      * yinfeng 溯源码不同区域数据汇总
      */
      function differentAreaDataUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/brace/farmTraceCode/differentAreaData',params:{...paramsData},...info}
          }
      }
      /**
      * yinfeng 溯源码数据汇总
      */
      function selectTraceCodeSumUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/brace/farmTraceCode/totalData',params:{...paramsData},...info}
          }
      }
       return {differentAreaDataUsingPOST,selectTraceCodeSumUsingPOST}
     }
  
     function MainDataChart_BRACE (target) {
       
      /**
      * 主体分页查询详情（使用）
      */
      function pageMblUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/brace/mainDataChart/pageMbl',params:{...paramsData},...info}
          }
      }
      /**
      * 主体数据各区数量(使用)
      */
      function regionMblCompanyNumUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/brace/mainDataChart/regionMblCompanyNum',params:{...paramsData},...info}
          }
      }
       return {pageMblUsingPOST,regionMblCompanyNumUsingPOST}
     }
  
     function PatrolController_BRACE (target) {
       
      /**
      * 本年巡更巡查数量和合格率(使用)
      */
      function regionPatrolNumUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/brace/patrol/regionPatrolNum',params:{...paramsData},...info}
          }
      }
      /**
      * 各区巡更巡查数量和合格率(使用)
      */
      function regionPatrolNumMblUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/brace/patrol/regionPatrolNumMbl',params:{...paramsData},...info}
          }
      }
      /**
      * 本月巡更巡查数量和合格率(使用)
      */
      function regionPatrolNumMonthUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/brace/patrol/regionPatrolNumMonth',params:{...paramsData},...info}
          }
      }
      /**
      * 上月巡更巡查数量和合格率(使用)
      */
      function regionPatrolNumMonthLastUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/brace/patrol/regionPatrolNumMonthLast',params:{...paramsData},...info}
          }
      }
      /**
      * 巡更巡查数量和合格率(去年-使用)
      */
      function regionPatrolNumYearUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/brace/patrol/regionPatrolNumYear',params:{...paramsData},...info}
          }
      }
       return {regionPatrolNumUsingPOST,regionPatrolNumMblUsingPOST,regionPatrolNumMonthUsingPOST,regionPatrolNumMonthLastUsingPOST,regionPatrolNumYearUsingPOST}
     }
  
     function SysXzController_BRACE (target) {
       
      /**
      * 农业主体分布图接口(市和区)
      */
      function RegionChartUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/brace/sysXz/RegionChart',params:{...paramsData},...info}
          }
      }
      /**
      * yinfeng 监管管理 市和区)
      */
      function cityAreaUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/brace/sysXz/cityArea',params:{...paramsData},...info}
          }
      }
      /**
      * 主体信用分布图接口(市和区)
      */
      function RegionCreditChartUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/brace/sysXz/regionCreditChart',params:{...paramsData},...info}
          }
      }
      /**
      * 主体产业分布图接口(市和区)
      */
      function regionIndustryChartUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/brace/sysXz/regionIndustryChart',params:{...paramsData},...info}
          }
      }
      /**
      * 检测任务分布图接口(市和区)
      */
      function RegionInspectionChartUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/brace/sysXz/regionInspectionChart',params:{...paramsData},...info}
          }
      }
      /**
      * 巡更任务分布图接口(市和区)
      */
      function regionPatrolChartUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/brace/sysXz/regionPatrolChart',params:{...paramsData},...info}
          }
      }
      /**
      * 顶上三个
      */
      function regionTopThreeUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/brace/sysXz/regionTopThree',params:{...paramsData},...info}
          }
      }
      /**
      * 主体追溯码分布图接口(市和区)
      */
      function RegionCreditTraceUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/brace/sysXz/regionTraceChart',params:{...paramsData},...info}
          }
      }
      /**
      * 主体三品一标分布图接口(市和区)
      */
      function RegionVertifyTraceUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/brace/sysXz/regionVertifyChart',params:{...paramsData},...info}
          }
      }
      /**
      * yinfeng 监管管理中 主体数据 巡更巡查 三品一标 溯源码 四个页面地图)
      */
      function superviseManageMapUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/brace/sysXz/superviseManageMap',params:{...paramsData},...info}
          }
      }
       return {RegionChartUsingPOST,cityAreaUsingPOST,RegionCreditChartUsingPOST,regionIndustryChartUsingPOST,RegionInspectionChartUsingPOST,regionPatrolChartUsingPOST,regionTopThreeUsingPOST,RegionCreditTraceUsingPOST,RegionVertifyTraceUsingPOST,superviseManageMapUsingPOST}
     }
  
     function VertifyCertificateController_BRACE (target) {
       
      /**
      * yinfeng 监管管理 三品一标概括不同区域数据汇总
      */
      function differentAreaDataUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/brace/vertifyCertificate/differentAreaData',params:{...paramsData},...info}
          }
      }
      /**
      * yinfeng 三品一标总的数据汇总
      */
      function selectVertifyCompanySumUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/brace/vertifyCertificate/totalData',params:{...paramsData},...info}
          }
      }
       return {differentAreaDataUsingPOST,selectVertifyCompanySumUsingPOST}
     }
  
  
    
     function uploadcontroller_OSS (target) {
       
      /**
      * 解析pdf文件
      */
      function analysisPdfUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/oss/analysisPdf',params:{...paramsData},...info}
          }
      }
      /**
      * 批量上传图片，公共方法
      */
      function uploadBasImgUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/oss/uploadBasImg',params:{...paramsData},...info}
          }
      }
      /**
      * 批量上传图片或者文件，公共方法
      */
      function uploadFileAndImgUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/oss/uploadFileAndImg',params:{...paramsData},...info}
          }
      }
      /**
      * 上传单张图片图片
      */
      function uploadImgUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/oss/uploadImg',params:{...paramsData},...info}
          }
      }
      /**
      * 上传PDF
      */
      function uploadPdfUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/oss/uploadPdf',params:{...paramsData},...info}
          }
      }
       return {analysisPdfUsingPOST,uploadBasImgUsingPOST,uploadFileAndImgUsingPOST,uploadImgUsingPOST,uploadPdfUsingPOST}
     }
  
  
    
     function ScoreUserIndexController_UPMSSCORE (target) {
       
      /**
      * 删除单个
      */
      function delUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/score/scoreIndex/del',params:{...paramsData},...info}
          }
      }
      /**
      * 批量删除
      */
      function delMoreUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/score/scoreIndex/delMore',params:{...paramsData},...info}
          }
      }
      /**
      * 详情
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/score/scoreIndex/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 查询第X级指标下拉接口
      */
      function findLevelUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/score/scoreIndex/findLevel',params:{...paramsData},...info}
          }
      }
      /**
      * 新增
      */
      function insertUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/score/scoreIndex/insert',params:{...paramsData},...info}
          }
      }
      /**
      * 分页
      */
      function pageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/score/scoreIndex/page',params:{...paramsData},...info}
          }
      }
      /**
      * 更新
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/score/scoreIndex/update',params:{...paramsData},...info}
          }
      }
      /**
      * 字段判重
      */
      function verifyNameUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/score/scoreIndex/verifyName',params:{...paramsData},...info}
          }
      }
       return {delUsingPOST,delMoreUsingPOST,detailUsingPOST,findLevelUsingPOST,insertUsingPOST,pageUsingPOST,updateUsingPOST,verifyNameUsingPOST}
     }
  
     function ScoreUserLevelController_UPMSSCORE (target) {
       
      /**
      * 单条删除
      */
      function delUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/score/scoreLevel/del',params:{...paramsData},...info}
          }
      }
      /**
      * 批量删除
      */
      function delMoreUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/score/scoreLevel/delMore',params:{...paramsData},...info}
          }
      }
      /**
      * 新增
      */
      function insertUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/score/scoreLevel/insert',params:{...paramsData},...info}
          }
      }
      /**
      * 主体信用等级下拉
      */
      function listUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/score/scoreLevel/list',params:{...paramsData},...info}
          }
      }
      /**
      * 更新
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/score/scoreLevel/update',params:{...paramsData},...info}
          }
      }
       return {delUsingPOST,delMoreUsingPOST,insertUsingPOST,listUsingPOST,updateUsingPOST}
     }
  
     function ScoreUserModelController_UPMSSCORE (target) {
       
      /**
      * 获取默认模块
      */
      function defaultModelUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/score/scoreModel/defaultModel',params:{...paramsData},...info}
          }
      }
      /**
      * 单条删除
      */
      function delUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/score/scoreModel/del',params:{...paramsData},...info}
          }
      }
      /**
      * 多条删除
      */
      function delMoreUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/score/scoreModel/delMore',params:{...paramsData},...info}
          }
      }
      /**
      * 详情
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/score/scoreModel/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 新增
      */
      function insertUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/score/scoreModel/insert',params:{...paramsData},...info}
          }
      }
      /**
      * 设为默认
      */
      function isDefaultUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/score/scoreModel/isDefault',params:{...paramsData},...info}
          }
      }
      /**
      * 分页
      */
      function pageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/score/scoreModel/page',params:{...paramsData},...info}
          }
      }
      /**
      * 更新
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/score/scoreModel/update',params:{...paramsData},...info}
          }
      }
       return {defaultModelUsingPOST,delUsingPOST,delMoreUsingPOST,detailUsingPOST,insertUsingPOST,isDefaultUsingPOST,pageUsingPOST,updateUsingPOST}
     }
  
     function ScoreUserModelIndexController_UPMSSCORE (target) {
       
      /**
      * 删除
      */
      function delUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/score/scoreModel/index/del',params:{...paramsData},...info}
          }
      }
      /**
      * 批量删除
      */
      function delMoreUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/score/scoreModel/index/delMore',params:{...paramsData},...info}
          }
      }
      /**
      * 详情
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/score/scoreModel/index/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 新增
      */
      function insertUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/score/scoreModel/index/insert',params:{...paramsData},...info}
          }
      }
      /**
      * 分页
      */
      function pageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/score/scoreModel/index/page',params:{...paramsData},...info}
          }
      }
      /**
      * 获取表格
      */
      function tableListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/score/scoreModel/index/tableList',params:{...paramsData},...info}
          }
      }
      /**
      * 更新
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/score/scoreModel/index/update',params:{...paramsData},...info}
          }
      }
       return {delUsingPOST,delMoreUsingPOST,detailUsingPOST,insertUsingPOST,pageUsingPOST,tableListUsingPOST,updateUsingPOST}
     }
  
     function ScoreUserRecordController_UPMSSCORE (target) {
       
      /**
      * 详情
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/score/scoreRecord/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 新增主体评价
      */
      function insertUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/score/scoreRecord/insert',params:{...paramsData},...info}
          }
      }
      /**
      * 分页
      */
      function pageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/score/scoreRecord/page',params:{...paramsData},...info}
          }
      }
      /**
      * 审核分页
      */
      function pageCheckedUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/score/scoreRecord/pageChecked',params:{...paramsData},...info}
          }
      }
      /**
      * 审核分页
      */
      function pageCheckedByWorkUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/score/scoreRecord/pageCheckedByWork',params:{...paramsData},...info}
          }
      }
      /**
      * 提交/审核主体评价
      */
      function submitUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/score/scoreRecord/submit',params:{...paramsData},...info}
          }
      }
       return {detailUsingPOST,insertUsingPOST,pageUsingPOST,pageCheckedUsingPOST,pageCheckedByWorkUsingPOST,submitUsingPOST}
     }
  
     function ScoreUserRecordHistoryController_UPMSSCORE (target) {
       
      /**
      * 详情
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/score/scoreRecord/history/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 信用档案分页列表
      */
      function pageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/upms/score/scoreRecord/history/page',params:{...paramsData},...info}
          }
      }
       return {detailUsingPOST,pageUsingPOST}
     }
  
  
    
     function CameraManageController_IOT (target) {
       
      /**
      * 添加摄像头
      */
      function addCameraUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/iot/iot/cameramanage/addCamera',params:{...paramsData},...info}
          }
      }
      /**
      * 批量删除
      */
      function delBatchCameraUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/iot/iot/cameramanage/delBatchCamera',params:{...paramsData},...info}
          }
      }
      /**
      * 删除
      */
      function delCameraUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/iot/iot/cameramanage/delCamera/{id}',params:{...paramsData},...info}
          }
      }
      /**
      * 获取摄像头列表,基地名称，摄像头名称
      */
      function getCamerasUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/iot/iot/cameramanage/getCameras',params:{...paramsData},...info}
          }
      }
      /**
      * 根据基地id获取摄像头列表
      */
      function getCamerasByFarmlandIdUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/iot/iot/cameramanage/getCamerasByFarmlandId',params:{...paramsData},...info}
          }
      }
      /**
      * 获取主体下面各个基地的摄像头信息
      */
      function getOwnerFarmlandCamerasUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/iot/iot/cameramanage/getOwnerFarmlandCameras',params:{...paramsData},...info}
          }
      }
      /**
      * 修改
      */
      function updateCameraUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/iot/iot/cameramanage/updateCamera',params:{...paramsData},...info}
          }
      }
       return {addCameraUsingPOST,delBatchCameraUsingPOST,delCameraUsingPOST,getCamerasUsingPOST,getCamerasByFarmlandIdUsingPOST,getOwnerFarmlandCamerasUsingPOST,updateCameraUsingPOST}
     }
  
     function IodDataController_IOT (target) {
       
      /**
      * 物联网数据采集
      */
      function getSnodesAndSensorsUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/iot/iot/getIotDatas',params:{...paramsData},...info}
          }
      }
      /**
      * 物联网数据分析 批量获取各个传感器图表数据
      */
      function getSensorsBatchDatasUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/iot/iot/getSensorsBatchDatas',params:{...paramsData},...info}
          }
      }
      /**
      * 物联网数据分析 根据传感器设备Id获取设备下面的传感器
      */
      function getSensorsByEquipIdUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/iot/iot/getSensorsByEquipId',params:{...paramsData},...info}
          }
      }
      /**
      * 物联网数据分析 根据基地farmlandId获取基地下面的传感器
      */
      function getSensorsByFarmlandIdUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/iot/iot/getSensorsByFarmlandId',params:{...paramsData},...info}
          }
      }
      /**
      * 物联网数据采集获取表头
      */
      function getTitleTemplateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/iot/iot/getTitleTemplate',params:{...paramsData},...info}
          }
      }
       return {getSnodesAndSensorsUsingPOST,getSensorsBatchDatasUsingPOST,getSensorsByEquipIdUsingPOST,getSensorsByFarmlandIdUsingPOST,getTitleTemplateUsingPOST}
     }
  
     function SensorManageController_IOT (target) {
       
      /**
      * 添加传感器设备
      */
      function addSensorUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/iot/iot/sensormanage/addSensor',params:{...paramsData},...info}
          }
      }
      /**
      * 批量删除
      */
      function delBatchSensorUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/iot/iot/sensormanage/delBatchSensor',params:{...paramsData},...info}
          }
      }
      /**
      * 删除
      */
      function delSensorUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/iot/iot/sensormanage/delSensor/{id}',params:{...paramsData},...info}
          }
      }
      /**
      * 获取传感器设备列表,基地名称，传感器名称
      */
      function getSensorsUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/iot/iot/sensormanage/getSensors',params:{...paramsData},...info}
          }
      }
      /**
      * 修改
      */
      function updateSensorUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/iot/iot/sensormanage/updateSensor',params:{...paramsData},...info}
          }
      }
       return {addSensorUsingPOST,delBatchSensorUsingPOST,delSensorUsingPOST,getSensorsUsingPOST,updateSensorUsingPOST}
     }
  
  
    
     function FirmMallCategoryController_MALLBASIC (target) {
       
      /**
      * 新增我的类别
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/mall/basic/firmMallCategory/add',params:{...paramsData},...info}
          }
      }
      /**
      * categoryList列表
      */
      function categoryListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/mall/basic/firmMallCategory/categoryList',params:{...paramsData},...info}
          }
      }
      /**
      * 删除我的类别数据
      */
      function deleteUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/mall/basic/firmMallCategory/delete',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,categoryListUsingPOST,deleteUsingPOST}
     }
  
     function FirmMallDiscountController_MALLBASIC (target) {
       
      /**
      * 新增
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/mall/basic/firmMallDiscount/add',params:{...paramsData},...info}
          }
      }
      /**
      * 删除
      */
      function deleteUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/mall/basic/firmMallDiscount/delete',params:{...paramsData},...info}
          }
      }
      /**
      * 详情
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/mall/basic/firmMallDiscount/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 折扣列表
      */
      function listUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/mall/basic/firmMallDiscount/list',params:{...paramsData},...info}
          }
      }
      /**
      * 列表分页
      */
      function pageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/mall/basic/firmMallDiscount/page',params:{...paramsData},...info}
          }
      }
      /**
      * 更新
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/mall/basic/firmMallDiscount/update',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,deleteUsingPOST,detailUsingPOST,listUsingPOST,pageUsingPOST,updateUsingPOST}
     }
  
     function FirmMallOrderController_MALLBASIC (target) {
       
      /**
      * 新增发货
      */
      function addShipUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/mall/basic/firmMallOrder/addShip',params:{...paramsData},...info}
          }
      }
      /**
      * 详情
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/mall/basic/firmMallOrder/detail',params:{...paramsData},...info}
          }
      }
      /**
      * excel导入
      */
      function excelWriterUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/mall/basic/firmMallOrder/excelReader',params:{...paramsData},...info}
          }
      }
      /**
      * excel导出
      */
      function excelWriterUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/mall/basic/firmMallOrder/excelWriter',params:{...paramsData},...info}
          }
      }
      /**
      * 获取物流公司
      */
      function findExpressUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/mall/basic/firmMallOrder/findExpress',params:{...paramsData},...info}
          }
      }
      /**
      * 查询发货信息
      */
      function getShipByOrderUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/mall/basic/firmMallOrder/getShipByOrder',params:{...paramsData},...info}
          }
      }
      /**
      * excel模板导出
      */
      function modelWriterUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/mall/basic/firmMallOrder/modelWriter',params:{...paramsData},...info}
          }
      }
      /**
      * 列表分页
      */
      function pageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/mall/basic/firmMallOrder/page',params:{...paramsData},...info}
          }
      }
      /**
      * 修改发货
      */
      function updateShipUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/mall/basic/firmMallOrder/updateShip',params:{...paramsData},...info}
          }
      }
       return {addShipUsingPOST,detailUsingPOST,excelWriterUsingPOST,excelWriterUsingPOST,findExpressUsingPOST,getShipByOrderUsingPOST,modelWriterUsingPOST,pageUsingPOST,updateShipUsingPOST}
     }
  
     function FirmMallProSkuController_MALLBASIC (target) {
       
      /**
      * 新增
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/mall/basic/firmMallProSku/add',params:{...paramsData},...info}
          }
      }
      /**
      * 批量上架
      */
      function batchPublishUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/mall/basic/firmMallProSku/batchPublish',params:{...paramsData},...info}
          }
      }
      /**
      * 详情
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/mall/basic/firmMallProSku/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 列表分页
      */
      function pageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/mall/basic/firmMallProSku/page',params:{...paramsData},...info}
          }
      }
      /**
      * 发布
      */
      function publishUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/mall/basic/firmMallProSku/publish',params:{...paramsData},...info}
          }
      }
      /**
      * 批量下架
      */
      function unBatchPublishUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/mall/basic/firmMallProSku/unBatchPublish',params:{...paramsData},...info}
          }
      }
      /**
      * 下架
      */
      function unPublishUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/mall/basic/firmMallProSku/unPublish',params:{...paramsData},...info}
          }
      }
      /**
      * 更新
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/mall/basic/firmMallProSku/update',params:{...paramsData},...info}
          }
      }
      /**
      * 更新库存
      */
      function updateCountsUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/mall/basic/firmMallProSku/updateCounts',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,batchPublishUsingPOST,detailUsingPOST,pageUsingPOST,publishUsingPOST,unBatchPublishUsingPOST,unPublishUsingPOST,updateUsingPOST,updateCountsUsingPOST}
     }
  
     function FirmMallProTypeController_MALLBASIC (target) {
       
      /**
      * 级联一次性查出所有
      */
      function getTypeListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/mall/basic/firmMallProType/getTypeList',params:{...paramsData},...info}
          }
      }
       return {getTypeListUsingPOST}
     }
  
     function FirmMallSettlementController_MALLBASIC (target) {
       
      /**
      * 详情
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/mall/basic/firmMallSettlement/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 通过申请结算id导出订单
      */
      function excelWriterUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/mall/basic/firmMallSettlement/excelWriterBySettle',params:{...paramsData},...info}
          }
      }
      /**
      * 申请结算导出订单
      */
      function excelWriterUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/mall/basic/firmMallSettlement/excelWriterWhenSettle',params:{...paramsData},...info}
          }
      }
      /**
      * 申請結算的开户信息
      */
      function getOrderAccountUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/mall/basic/firmMallSettlement/getOrderAccount',params:{...paramsData},...info}
          }
      }
      /**
      * 获取当前时间可以结算的金额
      */
      function getOrderMoneyUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/mall/basic/firmMallSettlement/getOrderMoney',params:{...paramsData},...info}
          }
      }
      /**
      * 订单分页
      */
      function orderPageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/mall/basic/firmMallSettlement/orderPage',params:{...paramsData},...info}
          }
      }
      /**
      * 列表分页
      */
      function pageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/mall/basic/firmMallSettlement/page',params:{...paramsData},...info}
          }
      }
      /**
      * 结算提交
      */
      function submitUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/mall/basic/firmMallSettlement/submit',params:{...paramsData},...info}
          }
      }
       return {detailUsingPOST,excelWriterUsingPOST,excelWriterUsingPOST,getOrderAccountUsingPOST,getOrderMoneyUsingPOST,orderPageUsingPOST,pageUsingPOST,submitUsingPOST}
     }
  
     function FirmMallStoreController_MALLBASIC (target) {
       
      /**
      * 绑定/更新银行卡
      */
      function bindingBackUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/mall/basic/firmMallStore/bindingBack',params:{...paramsData},...info}
          }
      }
      /**
      * 检查店铺开通状态
      */
      function checkStoreOpeningUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/mall/basic/firmMallStore/checkStoreOpening',params:{...paramsData},...info}
          }
      }
      /**
      * 验证验证码
      */
      function checkVerificationCodeUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/mall/basic/firmMallStore/checkVerificationCode',params:{...paramsData},...info}
          }
      }
      /**
      * 根据主体编码获取店铺信息
      */
      function findStoreInfoByComIdUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/mall/basic/firmMallStore/findStoreInfoByComId',params:{...paramsData},...info}
          }
      }
      /**
      * 保存或更新店铺信息
      */
      function saveStoreUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/mall/basic/firmMallStore/saveStore',params:{...paramsData},...info}
          }
      }
      /**
      * 发送验证短信
      */
      function sendCheckMessageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/mall/basic/firmMallStore/sendCheckMessage',params:{...paramsData},...info}
          }
      }
      /**
      * 设置为默认银行卡
      */
      function updateBankDefaultUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/mall/basic/firmMallStore/updateBankDefault',params:{...paramsData},...info}
          }
      }
      /**
      * 更新店铺状态
      */
      function updateStoreStateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/mall/basic/firmMallStore/updateStoreState',params:{...paramsData},...info}
          }
      }
       return {bindingBackUsingPOST,checkStoreOpeningUsingPOST,checkVerificationCodeUsingPOST,findStoreInfoByComIdUsingPOST,saveStoreUsingPOST,sendCheckMessageUsingPOST,updateBankDefaultUsingPOST,updateStoreStateUsingPOST}
     }
  
  
    
     function SalesProButchController_TRACESALES (target) {
       
      /**
      * 添加
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/sales/salesProButch/add',params:{...paramsData},...info}
          }
      }
      /**
      * 作废
      */
      function delUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/sales/salesProButch/del',params:{...paramsData},...info}
          }
      }
      /**
      * 批量作废
      */
      function delBatchUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/sales/salesProButch/delBatch',params:{...paramsData},...info}
          }
      }
      /**
      * 详情
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/sales/salesProButch/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 查询购货方的历史记录
      */
      function listPurchaserUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/sales/salesProButch/listPurchaser',params:{...paramsData},...info}
          }
      }
      /**
      * 查询其他字段的历史记录根据货主名称.type 0 生产单位 1 检疫员签字
      */
      function listTypeByPurchaserUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/sales/salesProButch/listTypeByPurchaser',params:{...paramsData},...info}
          }
      }
      /**
      * 分页
      */
      function pageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/sales/salesProButch/page',params:{...paramsData},...info}
          }
      }
      /**
      * 查询屠宰检疫编号是否重复
      */
      function selectCountByNoUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/sales/salesProButch/selectCountByNo',params:{...paramsData},...info}
          }
      }
      /**
      * 更新
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/sales/salesProButch/update',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,delUsingPOST,delBatchUsingPOST,detailUsingPOST,listPurchaserUsingPOST,listTypeByPurchaserUsingPOST,pageUsingPOST,selectCountByNoUsingPOST,updateUsingPOST}
     }
  
     function SalesProCarController_TRACESALES (target) {
       
      /**
      * 新增车队接口
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/sales/salesProCar/add',params:{...paramsData},...info}
          }
      }
      /**
      * 删除车队接口
      */
      function delUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/sales/salesProCar/del',params:{...paramsData},...info}
          }
      }
      /**
      * 车队信息详情接口
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/sales/salesProCar/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 获取车牌号下拉接口
      */
      function listUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/sales/salesProCar/list',params:{...paramsData},...info}
          }
      }
      /**
      * 车队分页列表接口
      */
      function pageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/sales/salesProCar/page',params:{...paramsData},...info}
          }
      }
      /**
      * 更新车队接口
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/sales/salesProCar/update',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,delUsingPOST,detailUsingPOST,listUsingPOST,pageUsingPOST,updateUsingPOST}
     }
  
     function SalesProOrderController_TRACESALES (target) {
       
      /**
      * 订单详情
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/sales/salesProOrder/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 订单分页
      */
      function pageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/sales/salesProOrder/page',params:{...paramsData},...info}
          }
      }
       return {detailUsingPOST,pageUsingPOST}
     }
  
     function SalesProRailController_TRACESALES (target) {
       
      /**
      * 添加
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/sales/salesProRail/add',params:{...paramsData},...info}
          }
      }
      /**
      * 删除
      */
      function delUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/sales/salesProRail/del',params:{...paramsData},...info}
          }
      }
      /**
      * 批量删除删除
      */
      function delBatchUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/sales/salesProRail/delBatch',params:{...paramsData},...info}
          }
      }
      /**
      * 详情
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/sales/salesProRail/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 根据出栏no查询屠宰信息
      */
      function getButchByNoUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/sales/salesProRail/getButchByNo',params:{...paramsData},...info}
          }
      }
      /**
      * 根据出栏编号查询订单详情
      */
      function getOrderByRailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/sales/salesProRail/getOrderByRail',params:{...paramsData},...info}
          }
      }
      /**
      * 根据出栏no查询出栏信息
      */
      function getRailByNoUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/sales/salesProRail/getRailByNo',params:{...paramsData},...info}
          }
      }
      /**
      * 查询货主的历史记录
      */
      function listOwnerUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/sales/salesProRail/listOwner',params:{...paramsData},...info}
          }
      }
      /**
      * 查询其他字段的历史记录根据货主名称.type 0 查询产地 1生产单位 2 单位地址 3目的地 4官方兽医签字
      */
      function listTypeByOwnerUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/sales/salesProRail/listTypeByOwner',params:{...paramsData},...info}
          }
      }
      /**
      * 分页
      */
      function pageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/sales/salesProRail/page',params:{...paramsData},...info}
          }
      }
      /**
      * 查询出栏检疫编号是否重复
      */
      function selectCountByNoUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/sales/salesProRail/selectCountByNo',params:{...paramsData},...info}
          }
      }
      /**
      * 更新
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/sales/salesProRail/update',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,delUsingPOST,delBatchUsingPOST,detailUsingPOST,getButchByNoUsingPOST,getOrderByRailUsingPOST,getRailByNoUsingPOST,listOwnerUsingPOST,listTypeByOwnerUsingPOST,pageUsingPOST,selectCountByNoUsingPOST,updateUsingPOST}
     }
  
     function SalesProStockController_TRACESALES (target) {
       
      /**
      * 新增肉出库单
      */
      function addMeatStockUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/sales/salesProStock/addMeatStock',params:{...paramsData},...info}
          }
      }
      /**
      * 新增出库单
      */
      function addStockUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/sales/salesProStock/addStock',params:{...paramsData},...info}
          }
      }
      /**
      * 添加肉的追溯信息,传入出库单的id,在发货之后调用
      */
      function addTraceMeatUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/sales/salesProStock/addTraceMeat',params:{...paramsData},...info}
          }
      }
      /**
      * 更改出库单状态  作废
      */
      function delUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/sales/salesProStock/del',params:{...paramsData},...info}
          }
      }
      /**
      * 菜出库单详情
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/sales/salesProStock/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 肉的出库单详情
      */
      function detailMeatUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/sales/salesProStock/detailMeat',params:{...paramsData},...info}
          }
      }
      /**
      * 肉的出库单详情出库产品分页
      */
      function detailMeatPageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/sales/salesProStock/detailMeatPage',params:{...paramsData},...info}
          }
      }
      /**
      * 肉出库单详情(修改界面)
      */
      function detailNewUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/sales/salesProStock/detailNew',params:{...paramsData},...info}
          }
      }
      /**
      * 出库单分页
      */
      function pageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/sales/salesProStock/page',params:{...paramsData},...info}
          }
      }
      /**
      * 打印
      */
      function printUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/sales/salesProStock/print',params:{...paramsData},...info}
          }
      }
      /**
      * 获取产品下拉
      */
      function productListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/sales/salesProStock/productList',params:{...paramsData},...info}
          }
      }
      /**
      * 发货
      */
      function sendUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/sales/salesProStock/send',params:{...paramsData},...info}
          }
      }
      /**
      * 更新出库单
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/sales/salesProStock/update',params:{...paramsData},...info}
          }
      }
      /**
      * 更新肉出库单
      */
      function updateMeatUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/sales/salesProStock/updateMeat',params:{...paramsData},...info}
          }
      }
       return {addMeatStockUsingPOST,addStockUsingPOST,addTraceMeatUsingPOST,delUsingPOST,detailUsingPOST,detailMeatUsingPOST,detailMeatPageUsingPOST,detailNewUsingPOST,pageUsingPOST,printUsingPOST,productListUsingPOST,sendUsingPOST,updateUsingPOST,updateMeatUsingPOST}
     }
  
     function TracePickingController_TRACESALES (target) {
       
      /**
      * 包装批次下拉不分页
      */
      function listUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/sales/tracePicking/list',params:{...paramsData},...info}
          }
      }
       return {listUsingPOST}
     }
  
  
      export default {MblCompanyController_TRACEH5,TraceH5Controller_TRACEH5,FarmlandController_TRACEH5,InfController_TRACEH5,MainPageController_TRACEH5,PlyProductController_TRACEH5,ProcessController_TRACEH5,FarmRecordController_TRACEH5,SysCategoryController_H5_TRACEH5,UpyunUploadController_TRACEH5,UserController_TRACEH5,MblCompanyController_H5_TRACEH5,PlyProductWebController_TRACEH5,YellowPageController_TRACEH5,LtlInputController_SUPELTL,TgyTestingEquipmentTypeController_SUPELTL,LtlInputFirmController_SUPELTL,LtlProductSalesController_SUPELTL,SlyReddishBlackController_SUPELTL,LtlSupplierController_SUPELTL,LtlBusinessTypeController_SUPELTL,PlaceEvaluationController_SUPELTL,PlaceFarmlandRecordController_SUPELTL,PlaceInspectionController_SUPELTL,PlaceRecordController_SUPELTL,LtlFarmShopController_SUPELTL,TgyTestingStandardController_SUPELTL,TgyTestingEquipmentCsController_SUPELTL,TgyTestingInspectionLinkController_SUPELTL,TgyTestingSampleController_SUPELTL,TgyTestingSampleGradeController_SUPELTL,TgyTestingSamplePackingController_SUPELTL,TgyTestingSamplingModeController_SUPELTL,TgyTestingSubjectTypeController_SUPELTL,TgyTestingTaskController_SUPELTL,LtlTypeController_SUPELTL,UpyunUploadController_SUPELTL,InputsUsageController_TRACEPRO,LtlInputController_TRACEPRO,LtlInputCdController_TRACEPRO,LtlInputOutEnterController_TRACEPRO,LtlInputStockController_TRACEPRO,LtlInputTypeController_TRACEPRO,InspectionEquipmentController_INSPECTIONBASIC,TgyTestingEquipmentTypeController_INSPECTIONBASIC,InspectionReportController_INSPECTIONBASIC,InspectionDataController_INSPECTIONBASIC,InspectionDataItemsController_INSPECTIONBASIC,InspectionSelfController_INSPECTIONBASIC,InspectionItemsController_INSPECTIONBASIC,MonitorSelfTaskController_INSPECTIONBASIC,MsgWorkController_INSPECTIONBASIC,NoticeController_INSPECTIONBASIC,NoticeFileController_INSPECTIONBASIC,InspectionProgramController_INSPECTIONBASIC,InspectionProgramItemsController_INSPECTIONBASIC,QuickInspectionEquipmentController_INSPECTIONBASIC,QuickInspectionHandleController_INSPECTIONBASIC,QuickInspectionKindController_INSPECTIONBASIC,QuickInspectionOrgController_INSPECTIONBASIC,QuickInspectionProductController_INSPECTIONBASIC,QuickInspectionProvinceController_INSPECTIONBASIC,QuickInspectionSpecialsController_INSPECTIONBASIC,QuickInspectionTaskController_INSPECTIONBASIC,QuickInspectionTextItemController_INSPECTIONBASIC,InspectionSampleController_INSPECTIONBASIC,InspectionReportSelfController_INSPECTIONBASIC,SoilInspectionController_INSPECTIONBASIC,SoilInspectionItemController_INSPECTIONBASIC,InspectionSpecificationController_INSPECTIONBASIC,InspectionSpecificationItemsController_INSPECTIONBASIC,MonitorTaskController_INSPECTIONBASIC,MonotorTaskBatchController_INSPECTIONBASIC,InspectionEquipmentProductorController_INSPECTIONBASIC,FarmlandController_TRACECOMPANY,TraceBatchController_TRACECOMPANY,CategoryController_TRACECOMPANY,TraceCodeChartController_TRACECOMPANY,FarmOtherInspectionController_TRACECOMPANY,FarmPackingController_TRACECOMPANY,FarmPickController_TRACECOMPANY,FarmSalesRecordController_TRACECOMPANY,FarmSortingController_TRACECOMPANY,FarmingController_TRACECOMPANY,FarmingLogController_TRACECOMPANY,FarmingTypeController_TRACECOMPANY,FarmlandBlockController_TRACECOMPANY,PatrolTemplateItemController_TRACECOMPANY,PatrolTemplateController_TRACECOMPANY,PatrolController_TRACECOMPANY,PatrolTaskController_TRACECOMPANY,InputsStockController_TRACECOMPANY,InputsStockHistoryController_TRACECOMPANY,FarmProductInspectionController_TRACECOMPANY,PatrolChartController_TRACECOMPANY,ProductController_TRACECOMPANY,ProductCategoryController_TRACECOMPANY,DataStatisticsController_TRACECOMPANY,TraceApplyController_TRACECOMPANY,TraceCodeController_TRACECOMPANY,TraceFarmBatchController_TRACECOMPANY,TraceFarmingController_TRACECOMPANY,TracePickController_TRACECOMPANY,TracePickingController_TRACECOMPANY,TraceTemplateController_TRACECOMPANY,UpmsCategoryController_TRACECOMPANY,WebServiceQuickController_TRACECOMPANY,WorkBenchController_TRACECOMPANY,YellowPageController_TRACECOMPANY,YellowPageBannerController_TRACECOMPANY,YellowPageDevController_TRACECOMPANY,YellowPageFarmlandController_TRACECOMPANY,YellowPageHonorController_TRACECOMPANY,AnimalCompanyController_UPMSCOMPANY,AnimalOtherCompanyController_UPMSCOMPANY,MblCompanyAuditController_UPMSCOMPANY,MblCompanyController_UPMSCOMPANY,MblCompanyDetailController_UPMSCOMPANY,CompanyInputsController_UPMSCOMPANY,CompanyInputsStorageController_UPMSCOMPANY,CompanyInputsSupplierController_UPMSCOMPANY,MblCompanyManageController_UPMSCOMPANY,MblCompanyHonorController_UPMSCOMPANY,CreditIndexController_UPMSCOMPANY,MblCompanyLabelsController_UPMSCOMPANY,CreditLevelController_UPMSCOMPANY,CreditModelController_UPMSCOMPANY,CreditModelIndexController_UPMSCOMPANY,MblCompanyNewController_UPMSCOMPANY,MblCompanyOperationController_UPMSCOMPANY,CreditRecordController_UPMSCOMPANY,CreditRecordHistoryController_UPMSCOMPANY,UpyunUploadController_UPMSCOMPANY,UuaAppCenterController_ADMIN,UuaAppCenterModularController_ADMIN,AuthorityController_ADMIN,AppAuthController_ADMIN,UuaButtonController_ADMIN,UpmsSupeCatalogController_ADMIN,UuaAppCenterAuthController_ADMIN,FunctionAreaController_ADMIN,LogController_ADMIN,MarkController_ADMIN,UuaMenuController_ADMIN,UuaAppModularController_ADMIN,UuaOrgController_ADMIN,OrgController_ADMIN,UuaOrgRoleController_ADMIN,OrgSupeController_ADMIN,QiniuController_ADMIN,UuaRoleController_ADMIN,RouteController_ADMIN,UumUserSupeController_ADMIN,SysCategoryController_ADMIN,SysRoleNewController_ADMIN,SysRoleNewsController_ADMIN,SysUserNewController_ADMIN,UumUserController_ADMIN,VertifyApplyInfoController_VERTIFYBASIC,VertifyCertificateController_VERTIFYBASIC,VertifyProductCategoryController_VERTIFYBASIC,AgroTechnicalController_INFOBASIC,AgroTechnicalTypeController_INFOBASIC,BannerController_INFOBASIC,BannerTypeController_INFOBASIC,BrandCompanyController_INFOBASIC,ComplaintsReportController_INFOBASIC,ExcelController_INFOBASIC,IllegalCompanyController_INFOBASIC,InformationController_INFOBASIC,InformationTypeController_INFOBASIC,LinkController_INFOBASIC,MarketPriceController_INFOBASIC,NoticeDoorController_INFOBASIC,PolicyInterpController_INFOBASIC,PolicyInterpTypeController_INFOBASIC,QualitySafetyController_INFOBASIC,RecommendProductController_INFOBASIC,RedBlackListController_INFOBASIC,DataChartController_BRACE,DataCompanyController_BRACE,DataCreditController_BRACE,DataFarmlandController_BRACE,DataIndustryController_BRACE,DataInspectionController_BRACE,DataSelfMonotorController_BRACE,DataVertifyController_BRACE,FarmTraceCodeController_BRACE,MainDataChart_BRACE,PatrolController_BRACE,SysXzController_BRACE,VertifyCertificateController_BRACE,uploadcontroller_OSS,ScoreUserIndexController_UPMSSCORE,ScoreUserLevelController_UPMSSCORE,ScoreUserModelController_UPMSSCORE,ScoreUserModelIndexController_UPMSSCORE,ScoreUserRecordController_UPMSSCORE,ScoreUserRecordHistoryController_UPMSSCORE,CameraManageController_IOT,IodDataController_IOT,SensorManageController_IOT,FirmMallCategoryController_MALLBASIC,FirmMallDiscountController_MALLBASIC,FirmMallOrderController_MALLBASIC,FirmMallProSkuController_MALLBASIC,FirmMallProTypeController_MALLBASIC,FirmMallSettlementController_MALLBASIC,FirmMallStoreController_MALLBASIC,SalesProButchController_TRACESALES,SalesProCarController_TRACESALES,SalesProOrderController_TRACESALES,SalesProRailController_TRACESALES,SalesProStockController_TRACESALES,TracePickingController_TRACESALES}
    