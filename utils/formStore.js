class FormStore {

    constructor() {
        this.store = {}
    }
    
    addStore(name,data) {
        if (this.isCreate(name)) {
            const newStore = data(this.store[name])
            Object.keys(newStore).forEach((e)=>{
                if (Array.isArray(newStore[e])) {
                    this.store[name][e] = newStore[e].concat(this.store[name][e])
                }else if (typeof newStore[e] == 'object') {
                    this.store[name][e] = { ...this.store[name][e],...newStore[e]}
                }
            })
        }else {
            this.store[name] = data(this.store[name])
        }
    }

    // 销毁表单页面
    releaseStore (name){
        this.resetForm(name)
    }

    // 修改单条数据源数据
    changeStoreData (name,key,value){
        if (this.isCreate(name)) {
            this.store[name]['dataSource'][key] = value
        }
    }

    // 获取监听
    getSubscribe (name) {
        return this.store[name].subscribe
    }

    // 获取表单数据源
    getDataSource (name) {
        return this.store[name]['dataSource'] || {}
    }

    // 修改表单数据源
    changeDataSource (name,value) {
        if (this.isCreate(name)) {
            const newValue = { ...this.getDataSource(name), ...value }
            this.store[name]['dataSource'] = newValue
            const subscribe = this.getSubscribe(name)
            if (Array.isArray(subscribe)) {
                subscribe.forEach((e)=>{
                    e(value)
                })
            }else {
                subscribe(value)
            }
        }
    }

    getFormDataKeys (name) {
        return Object.keys(this.getFormData(name))
    }

    getFormData (name) {
        return this.store[name] && this.store[name]['formData'] ? this.store[name]['formData'] : {}
    }

    getFormStore (name) {
        return this.store[name]
    }

    changeError (name,error) {
        this.store[name]['error'] = error
    }

    getFormItem (name,key) {
        return this.store[name]['formData'][key]
    }

    // 获取表单结构
    getForm (name) {
        if (this.isCreate(name)) {
            return this.store[name]['formData'] || []
        }else {
            return []
        }
    }

    // 替换表单结构
    replaceForm (name,formData) {
        if (this.isCreate(name)) {
            this.store[name]['formData'] = {...this.store[name]['formData'],...formData}
        }
    }

    // 判断是否创建成功
    isCreate = (name) => {
        return this.store[name]
    }

    // 设置表单值
    setFormError (name,error) {
        if (this.isCreate(name)) {
            const store = this.getFormStore(name)
            store['setFormError'].forEach((e)=> {
                e(error)
            })
        }
    }

    // 清空form 
    clearForm(name) {
        if (this.isCreate(name)) {
            const obj = {}
            const form = this.getFormDataKeys(name)
            form.forEach((e) => (obj[e] = ''))
            const store = this.getFormStore(name)
            store['dataSource'] = {}
            this.setFormError(name,obj)
        }
    }

    // 获取修改表单显示事件
    getFormNotDisplayFun (name) {
        return this.store[name].setNotDisplay
    }

    // 提交控制表单禁用修改
    pushNotDisplay (name,notDisplay,isShow) {
        const event = this.getFormNotDisplayFun(name)
        event.forEach((e) => {
            e(notDisplay, isShow)
        })
        const old = this.getFormStore(name)['notDisplay']
        this.getFormStore(name)['notDisplay'] = Array.from(new Set([].concat(old,notDisplay)))
    }

    // 控制表单组件是否显示
    setFormNotDispaly (name,notDisplay,isShow) {
        if (this.isCreate(name)) {
            const store = this.getFormStore(name)
            const newDisplay = new Set(store.notDisplay.concat(notDisplay))
            store.notDisplay = Array.from(newDisplay)
            notDisplay.forEach((e) => {
                store.formData[e].display = isShow
                if (store.formData[e].keys && store.formData[e].keys.length > 0 ) {
                    store.formData[e].keys.forEach((el)=>{
                        store.formData[el.key] = isShow
                    })
                }
            })
            this.pushNotDisplay(name,notDisplay,isShow)
        }
    }

    // 获取表单错误信息
    getFormError (name) {
        return this.getFormStore(name)['error']
    }

    // 筛选可显示的组件
    filterDispaly = (name) => {
        const formKeys = this.getFormDataKeys(name)
        const formData = this.getFormData(name)
        const arr = []
        formKeys.forEach((e)=>{
            if (!(formData[e].display == false || ['itemGroup', 'group'].indexOf(formData[e].type) !== -1)) {
                arr.push(e)
            }
        })
        return arr
    }

    // 提交表单
    sumbit(name, callBack) {
        if (this.isCreate(name)) {
            const store = this.getFormStore(name)
            const dataSource = this.getDataSource(name)
            const filter = this.filterDispaly(name)
            filter.forEach((e) => {
                store.getRules.forEach((el, i) => {
                    el(store.formData[e])
                })
            })
            const error = this.getFormError(name)
            console.log('输出提交错误', error, store)
            let errorNumber = 0
            if (error) {
                Object.keys(error).forEach((e) => {
                    if (!error[e]) {
                        delete error[e]
                    }else {
                        errorNumber += 1
                    }
                })
                this.setFormError(name, error)
                callBack({ error: errorNumber >= 1 ? error : null , dataSource })
            } else {
                callBack({ error: null, dataSource })
            }   
        }
    }

    resetForm (name) {
        const store = this.getFormStore(name)
        const dataSource = store.dataSource
        const newDataSource = {}
        Object.keys(dataSource).forEach((e)=>{
            newDataSource[e] = null
        })
        this.changeDataSource(name,newDataSource)
        store.dataSource = {}
    }

    // 获取禁用事件
    getDisableEvent (name) {
        return this.getFormStore(name)['setFormDisable']
    }

    // 禁用表单中的组件
    disableForm (name,disable = [],isDisable = true) {
        if (this.isCreate(name)) {
            const disableEvent = this.getDisableEvent(name)
            const disableArr = this.getFormDataKeys(name)
            if (disable.length == 0) {
                if (Array.isArray(disableEvent)) {
                    disableEvent.forEach((e)=>{
                        e(disableArr, isDisable)
                    })
                }else {
                    this.getDisableEvent(name)(disableArr, isDisable)
                }
            } else {
                if (Array.isArray(disableEvent)) {
                    disableEvent.forEach((e) => {
                        e(disable, isDisable)
                    })
                } else {
                    this.getDisableEvent(name)(disable, isDisable)
                }
            }
        }
    }

    // 获取设置下拉回调
    getTypeDataCallBack (name) {
        return this.store[name]['setFormTypeData']
    }

    // 设置表单下拉数据
    setFormType(name,typeData) {
        if (this.isCreate(name)) {
            const store = this.getFormStore(name)
            const typeDataFun = this.getTypeDataCallBack(name)
            store['typeData'] = {...store['typeData'],...typeData}
            typeDataFun.forEach((e)=>{
                e(typeData)
            })
        }
    }

    // 获取表单type
    getFormType (name) {
        return this.getFormStore(name)['typeData']
    }

    // 获取原来显示禁用组件
    getNotDisplayArr (name) {
        return this.getFormStore(name)['notDisplay']
    }

    // 获取显示差异
    getDisplayDiff (newData,oldData) {
        const d1 = new Set(oldData)
        newData.forEach((e)=>{
            if (d1.has(e)) {
                d1.delete(e)
            }
        })
        return Array.from(d1)
    }

    // 设置表单只显示组件
    setFormOnlyDisplay(name,display,isShow) {
        if (this.isCreate(name)) {
            const formKey = this.getFormDataKeys(name)
            const oldDisplayArr = this.getNotDisplayArr(name)
            if (display.length == 0) {
                this.pushNotDisplay(name, formKey, true)
            } else {
                const diff = this.getDisplayDiff(display, Array.from(new Set(formKey.concat(oldDisplayArr))))
                this.pushNotDisplay(name, display, true)
                this.pushNotDisplay(name, diff, false)
            }
        }
    }

}


export default new FormStore