// 向上分页
// 参数array分页数组 now_number启始值，now_number_end分页大小值
function mark_previous(array, now_number, now_number_end) {
    if (now_number - 1 < 0) {
        return array.slice(now_number, now_number + now_number_end)
        console.log(now_number, '进入选择')
    } else {
        // this.btn_show = true
        now_number = now_number - now_number_end
        return array.slice(now_number, now_number + now_number_end)
        console.log(now_number)
    }
}
// 向下分页
// 参数array分页数组 now_number启始值，now_number_end分页大小值
function mark_next(array, now_number, now_number_end) {
    if (array.length - (now_number + now_number_end) <= 0) {
        return array.slice(now_number, now_number + now_number_end)
        console.log(now_number, 'xiayige')
        console.log('67890')
    } else {
        console.log("fuck")
        this.btn_if = true
        now_number = now_number + now_number_end
        return array.slice(now_number, now_number + now_number_end)
        console.log(now_number)
    }
}
export { mark_previous, mark_next }