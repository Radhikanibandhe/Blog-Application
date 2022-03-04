import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { getComment } from './../services/comment.service';

const BlogAll = (props) => {
    const { id, title, content, tag, createComment, getComments} = props

    const navigate = useNavigate()

    const [comment, setComment] = useState('')

    const getBadgeTitle = () => {
        if ( tag === 'LIFE') {
            return 'Life'
        } else if ( tag === 'ENTERTAINMENT') {
            return 'Entertainment'
        } else if ( tag === 'SPORTS') {
            return 'Sports'
        } else if ( tag === 'FINANCE') {
            return 'Finance'
        } else if ( tag === 'FASHION') {
            return 'Fashion'
        }
    }

    const onButtonSave = async() => {
        createComment(comment)
        sessionStorage['comment'] = id
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
                <span class="badge badge-light" style={{
                    backgroundColor: backgroundColors[tag],
                    color: '#fff',
                    float: 'left',
                    borderRadius: '5px',
                }}>{tag}</span>
                
                 <div className="form">
                    <div className="mb-3" style={{marginTop: '10px'}}>
                    <input className="form-control" style={{overflow:'hidden',width:'100%', marginTop:'50px'}}></input>
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