import Excel from 'js-export-excel'
const exportExcel = (fileName, data) => {
    const option = {
        fileName,
    }
    option.datas = [
        {
            sheetData: data,
        }
    ]
    const toExcel = new Excel(option)
    toExcel.saveExcel()
}
export default exportExcel