import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/navbar.component'
import { createBlog } from '../services/blog.service'

const BlogCreatePage = (props) => {
  // state
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [tag, setTag] = useState()

  const navigate = useNavigate()

  
  const onButtonEntertainment = () => {
    setTag('ENTERTAINMENT')
} 
  const onButtonSports = () => {
    setTag('SPORTS')
  } 
  const onButtonFinance = () => {
    setTag('FINANCE')
  } 
  const onButtonFashion = () => {
    setTag('FASHION')
  } 
  const onButtonLife = () => {
    setTag('LIFE')
  }


  const onCreateBlog = async () => {
    if (title.length === 0) {
      alert('set title')
    } else if (content.length === 0) {
      alert('set content')
    } else if (tag.length === 0) {
      alert('set tag')
    } else {
      const result = await createBlog(title, content, tag)
      if (result) {
        navigate('/blog-details')
      } else {
        alert('invalid data')
      }
    }
  }

  return (
    <><Navbar /><div className='container' style={{marginTop: '30px'}}>
      <h1 className="header">Create Blog!</h1>
      <div className="form">
        <div class="mb-3">
          <label class="form-label">Title</label>
          <input
            onChange={(e) => {
              setTitle(e.target.value)
            } }
            type="text"
            class="form-control" />{' '}
        </div>

        <div class="mb-3">
          <label class="form-label">Content:</label>
          <textarea
            onChange={(e) => {
              setContent(e.target.value)
            } }
            rows={5}
            type="text"
            class="form-control"
          ></textarea>
        </div>

        <button class="btn btn-primary" style={{margin: '10px', color: '#FFF'}} onClick={onButtonEntertainment}>Entertainment</button>
        <button class="btn btn-warning" style={{margin: '10px', color: '#FFF'}} onClick={onButtonSports}>Sports</button>
        <button class="btn btn-light" style={{background: '#65C18C', margin: '10px', color: '#FFF'}} onClick={onButtonFinance}>Finance</button>
        <button class="btn btn-light" style={{background: '#FF7BA9', margin: '10px', color: '#FFF'}} onClick={onButtonFashion}>Fashion</button>
        <button class="btn btn-light" style={{background: '#00B4D8', margin: '10px', color: '#FFF'}} onClick={onButtonLife}>Life</button>

        <div class="mb-3">
          <button onClick={onCreateBlog} style={{ marginLeft: '10px',float:'right' }} className="btn btn-success">
            Save
          </button>
          <Link
            to="/blog-details"
            style={{ marginLeft: '10px',float:'right' }}
            className="btn btn-danger"
          >
            Cancel
          </Link>
        </div>
      </div>
    </div></>
  )
}

export default BlogCreatePage
