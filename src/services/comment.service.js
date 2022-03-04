import { setting } from './../config'
import axios from 'axios';

export const getComment = async(id) => {
    const url = setting.server + `/comment/${id}`
    const token = sessionStorage['token']
    let response
    try {
      response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
  
      response = response.data
    } catch (ex) {
      console.log(ex)
    }
    console.log(response)
    return response
}

export const createComment = async(comment) => {
    const url = setting.server + '/comment/'
    const token = sessionStorage['token']
    let response
    try {
      response = await axios.post(
        url,
        {
         comment,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
  
      response = response.data
    } catch (ex) {
      console.log(ex)
    }
  
    return response
}

export const deleteComment = async (id='') => {
    const url = setting.server + `/comment/${id}`
    const token = sessionStorage['token']
    let response
    try {
      response = await axios.delete(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
  
      response = response.data
    } catch (ex) {
      console.log(ex)
    }
  
    return response
}