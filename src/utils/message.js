import { ElMessage } from 'element-plus'
/**
 * 全局消息提示
 * @param {string} message 
 * @param {string} type 
 * @param {number} duration 
 */
const Message = (message, type = "success", duration = 3000) => {
    ElMessage({
        type,
        message,
        duration
    })
}
export default Message