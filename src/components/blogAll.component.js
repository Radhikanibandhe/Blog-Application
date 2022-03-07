import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { getComment } from '../services/comment.service';

const BlogAll = (props) => {
    const { id, title, content, tag, createComment } = props

    const navigate = useNavigate()

    const [comment, setComment] = useState('')
    const [gcomment, setGcomment] = useState([])


    const backgroundColors = {
        LIFE: '#00B4D8',
        ENTERTAINMENT: '#151D3B',
        SPORTS: '#980F5A',
        FINANCE: '#65C18C',
        FASHION: '#FF7BA9',
    }

    const onButtonRead = async () => {
        sessionStorage['id'] = id
        navigate('/view')
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

                <button className='btn btn-dark' onClick={onButtonRead} style={{float: 'right'}}>Read!</button>
                </div>
            </div>
    )
        
}

export default BlogAll