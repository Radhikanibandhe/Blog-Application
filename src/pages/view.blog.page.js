import Navbar from "../components/navbar.component"
import { getBlogById } from "../services/blog.service"
import { useEffect, useState } from 'react';
import Comment from "../components/comment.component";
import { getComment } from "../services/comment.service";
import { createComment } from "../services/comment.service";
import { deleteComment } from './../services/comment.service';

const ViewBlogPage = (props) => {
    const [blog, setBlog] = useState([])
    const [comment, setComment] = useState('')
    const [gcomment, setGcomment] = useState([])

    const loadComment = async () => {
    const result = await getComment(sessionStorage.getItem('id'))
    if(result) {
      console.log(result)
      setGcomment(result)
    }
  }

    const loadBlog = async() => {
        const result = await getBlogById(sessionStorage.getItem('id'))
        if (result) {
            console.log(result)
        }
        setBlog(result)
    }
    const backgroundColors = {
        LIFE: '#00B4D8',
        ENTERTAINMENT: '#151D3B',
        SPORTS: '#980F5A',
        FINANCE: '#65C18C',
        FASHION: '#FF7BA9',
    }

    
  const createComments = async() => {
    const result = await createComment(sessionStorage.getItem('id'), comment)
    console.log(result)
    if(result) {
      console.log('comment creating')
    }
  }

  const deleteComments = async(id) => {
      const result  = await deleteComment(id)
      if (result) {
          console.log('comment deleted')
      }
  }



    const onButtonCreate = async => {
        createComments()
    }

    useEffect(() => {
        loadBlog()
        loadComment()
      },[])
      
    return (
        <><Navbar />
        <div className="card" style={{
            width: '75%',
            margin: '50px'
        }}>
        <div className="card-body">
            <h5 className="card-title">{blog.title}</h5>
            <p className="card-text" style={{ overflow: 'hidden' }}>{blog.content}</p>
            <span className="badge badge-light" style={{
                backgroundColor: backgroundColors[blog.tag],
                color: '#fff',
                float: 'left',
                borderRadius: '5px',
            }}>{blog.tag}</span>
            <h5 style={{marginTop: '50px'}}>Comments:</h5>
        </div>
        {gcomment.map((comment1) => {
            const {id, username, comment} = comment1
            return (
                <Comment
                key ={id}
                id = {id}
                username = {username}
                comment = {comment}
                deleteComments = {deleteComments} />
            )
        })}
        <div className="mb-3">
        <h5 className="card-text" style={{margin: '10px'}}>Add Comment:</h5>
          <input
            onChange={(e) => {
              setComment(e.target.value)
            }}
            type="text"
            className="form-control"
            style={{
                margin: '10px',
                marginBottom: '0px',
                width: '30%'
            }}
          />{' '}
        </div>
        <button style={{width: '10%', marginTop:'0', marginLeft:'10px', marginBottom:'10px'}} className="btn btn-primary" onClick={onButtonCreate}>Save</button>
        </div>
        </>
    )
}
export default ViewBlogPage