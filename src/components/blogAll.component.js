import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { getComment } from '../services/comment.service';

const BlogAll = (props) => {
    const { id, title, content, tag, createComment } = props

    const navigate = useNavigate()

    const [comment, setComment] = useState('')
    const [gcomment, setGcomment] = useState([])

    const loadComment = async () => {
    const result = await getComment(sessionStorage.getItem('id'))
    if(result) {
      console.log(result)
      setGcomment(result)
    }
  }

    const onButtonSave = async() => {
        createComment(comment)
    }

    const backgroundColors = {
        LIFE: '#00B4D8',
        ENTERTAINMENT: '#151D3B',
        SPORTS: '#980F5A',
        FINANCE: '#65C18C',
        FASHION: '#FF7BA9',
    }

    return (
        <div 
          className="card"
          style={{
              width: '75%',
              display: 'inline-block',
              margin: '10px',
              height: 'auto',
              padding: '10px',
          }}
        >
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text" style={{overflow:'hidden'}}>{content}</p>
                <span className="badge badge-light" style={{
                    backgroundColor: backgroundColors[tag],
                    color: '#fff',
                    float: 'left',
                    borderRadius: '5px',
                }}>{tag}</span>
                 <div className="form">
                    <div className="mb-3" style={{marginTop: '10px'}}>

                    <label style={{float: 'left'}} className="form-label">Comment</label>
                    <input
                    onChange={(e) => {
                        setComment(e.target.value)
                    }}
                    type="text"
                    className="form-control"
                    />
                    <button style={{marginTop: '10px'}} className='btn btn-primary' onClick={onButtonSave}>Save</button>
                </div>
                
                </div>
            </div>
            </div>
    )
        
}

export default BlogAll