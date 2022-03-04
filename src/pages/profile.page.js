import Navbar from './../components/navbar.component';
import { getProfile } from './../services/user.service';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfilePage = (props) => {

  const [user, setUser] = useState([])

  useEffect(() => {
    getUserProfile()
  },[])

  const navigate = useNavigate()

  const onUpdateUser = async () => {
    sessionStorage['uid'] = user.id
    navigate('/update')
  }

  

  const getUserProfile = async () => {
    const result = await getProfile()
    if(result) {
      console.log(result)
    }
    setUser(result)
  }
    return (
      <div>
        <Navbar />
        <h4 style={{fontSize: '25px', marginTop: '20px', marginLeft:'590px'}}>Profile!</h4>
        <table style={{marginLeft: '495px',width: '35%', marginTop:'20px'}} className="table table-borderless">
        <tbody>
              <tr>
                  <td><p className='display-4' style={{fontSize:'20px'}}><strong>User Name:</strong></p></td>
                  <td><p className='display-4' style={{fontSize:'21px'}}>{user.username}</p></td>
                </tr>
                <tr>
                  <td><p className='display-4' style={{fontSize:'20px'}}><strong>First Name:</strong></p></td>
                  <td><p className='display-4' style={{fontSize:'21px'}}>{user.firstname}</p></td>
                </tr>
                <tr>
                  <td><p className='display-4' style={{fontSize:'20px'}}><strong>Last Name:</strong></p></td>
                  <td><p className='display-4' style={{fontSize:'21px'}}>{user.lastname}</p></td>
                </tr>
                <tr>
                  <td><p className='display-4' style={{fontSize:'20px'}}><strong>Email Id:</strong></p></td>
                  <td><p className='display-4' style={{fontSize:'21px'}}>{user.email}</p></td>
                </tr>
                <tr>
                  <td><p className='display-4' style={{fontSize:'20px'}}><strong>Gender:</strong></p></td>
                  <td><p className='display-4' style={{fontSize:'21px'}}>{user.gender}</p></td>
                </tr>
                <tr>
                  <td><p className='display-4' style={{fontSize:'20px'}}><strong>City:</strong></p></td>
                  <td><p className='display-4' style={{fontSize:'21px'}}>{user.city}</p></td>
                </tr>
                <tr>
                  <td><p className='display-4' style={{fontSize:'20px'}}><strong>Country:</strong></p></td>
                  <td><p className='display-4' style={{fontSize:'21px'}}>{user.country}</p></td>
                </tr>
              </tbody>
        </table>
        <button style={{marginTop: '5px', marginLeft:'590px'}} type="button" class="btn btn-warning" onClick={onUpdateUser}>Update</button>
      </div>
    )
  }
  
  export default ProfilePage