import axios from 'axios'

const baseUrl = process.env.REACT_APP_API_URL

const api = {
  getQuestions: (data) => {
    return axios.post(`${baseUrl}/api.php?amount=${data}`)
  }
}

export default api
