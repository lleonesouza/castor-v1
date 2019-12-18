const users = [
    {login: 'admin',
    pass: 'admin'}
]


module.exports = {
    authUser: (user, pass) => {
        users.map((User) => {
            if(User.login === user){
                if(User.pass === pass){
                    return true
                }else{
                    return 'invalid password'
                }
            }else{
                return 'invalid username'
            }
        })
    }
}