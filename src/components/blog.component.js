import { useNavigate } from 'react-router-dom';

const Blog = (props) => {
    const { id, title, content, tag, changeTag, deleteBlog, updateBlog} = props
    const navigate = useNavigate()

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

    const backgroundColors = {
        LIFE: '#00B4D8',
        ENTERTAINMENT: '#151D3B',
        SPORTS: '#980F5A',
        FINANCE: '#65C18C',
        FASHION: '#FF7BA9',
    }

    const onButtonEntertainment = () => {
        changeTag(id, 'ENTERTAINMENT')
    } 
    const onButtonSports = () => {
        changeTag(id, 'SPORTS')
    } 
    const onButtonFinance = () => {
        changeTag(id, 'FINANCE')
    } 
    const onButtonFashion = () => {
        changeTag(id, 'FASHION')
    } 
    const onButtonLife = () => {
        changeTag(id, 'LIFE')
    }

    const onDeleteBlog = () => {
        deleteBlog(id)
    }

    const onButtonUpdate = () => {
        sessionStorage['id'] = id
        navigate('/updateBlog')
    }
    
    return (
        <div 
          className="card"
          style={{
              width: '75%',
              display: 'inline-block',
              margin: '10px',
              height: '250px',
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
                <button style={{float: 'right',marginLeft:'10px'}} onClick={onButtonUpdate} className="btn btn-outline-primary">Update</button>
                <button style={{float: 'right',marginLeft:'10px'}} onClick={onDeleteBlog} className="btn btn-danger">Delete</button>
                
            </div>
        </div>
    )
    
}

export default Blog