let response = {
    get body () {
        return this._body // get是返回该方法
    },
    set body (val) {
        this.res.statusCode = 200
        this._body = val // set时先保存该方法
    }
}

module.exports = response