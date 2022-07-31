import { Random, setup, mock } from "mockjs";
const Base_Url = 'http://localhost:4000'
setup({
    timeout: 1000
})

const adminData = []
for (let i = 0; i < 100; i++) {
    const obj = {
        id: Random.id(),
        name: Random.cname(),
        date: Random.date('yyyy-MM-dd'),
        url: Random.url(),
        address: Random.county(true),
        ip: Random.ip(),
    }
    adminData.push(obj)
}

mock(`${Base_Url}/admin/list`, 'get', {
    msg: '请求成功',
    code: 200,
    data: adminData
})

const roleData = []
for (let i = 0; i < 30; i++) {
    const obj = {
        name: Random.cname(),
        date: Random.date('yyyy-MM-dd'),
        address: Random.county(true),
        email: Random.email(),
        guid: Random.guid(),
        code: Random.zip()

    }
    roleData.push(obj)
}

mock(`${Base_Url}/role/list`, 'get', {
    msg: '请求成功',
    code: 200,
    data: roleData
})

const messageData = []
for (let i = 0; i < 30; i++) {
    const obj = {
        name: Random.cname(),
        date: Random.datetime(),
        content: Random.paragraph(),
        is: true
    }
    messageData.push(obj)
}

mock(`${Base_Url}/message/list`, 'get', {
    msg: '请求成功',
    code: 200,
    data: messageData
})

const login = {
    token: Random.guid(),
    name: Random.name(),
    id: Random.id(),
    time:Random.now()
}
mock(`${Base_Url}/login`, 'post', {
    msg: '登录成功',
    code: 200,
    data: login
})