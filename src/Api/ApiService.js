class ApiService {
    async login(username, password){
        const response = await fetch('http://localhost:5000/api/login', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {"Content-type": "application/json"}
        });
        let result = await response.json()
        if (response.status === 200){
            //set token
            localStorage.setItem('token', result)
        }
        console.log('Ответ получен')
        return  {response, result}
    }
}

export default new ApiService()