import axios from 'axios'
import { setting } from '../config'

export const signup = async (username, password, firstname, lastname, country, city, email ,gender) => {
  const url = setting.server + '/user/signup'

  let result
  try {
    result = await axios.post(url, {
      username,
      password,
      firstname,
      lastname,
      country,
      city,
      email,
      gender,
    })
    result = result.data
  } catch (ex) {
    result = ex
  }

  return result
}

export const signin = async (username, password) => {
  const url = setting.server + '/user/signin'

  let result
  try {
    result = await axios.post(url, {
      username,
      password,
    })
    result = result.data
  } catch (ex) {
    console.log(ex)
  }

  return result
}

export const getProfile = async() => {
  const url = setting.server + '/user'
  const token = sessionStorage['token']
  let result
  try {
    result = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    result = result.data
  } catch (ex) {
    console.log(ex)
  }

  return result
}


export const updateUser = async(id,username, password, firstname, lastname, country, city, email ,gender ) => {
  const url = setting.server + `/user/${id}`
  const token = sessionStorage['token']
  let result
  try {
    result = await axios.patch(url, {
      username,
      password,
      firstname,
      lastname,
      country,
      city,
      email,
      gender,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    result = result.data
    console.log(result)
  } catch (ex) {
    result = ex
  }

  return result
}