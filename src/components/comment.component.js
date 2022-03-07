const Comment = (props) => {
    const {id, username, comment, deleteComments} = props

    const onButtonDelete = async () => {
        deleteComments(id)
    }
    return (
        <div className="card" style={{margin: '10px', width: '75%'}}>
            <div className="card-body">
                <h6 className="card-title">Username: {username}</h6>
                <p className="card-text">{comment}</p>
                <button style={{float: 'right'}} className='btn btn-danger' onClick={onButtonDelete}>Delete</button>
            </div>
        </div>
    )
}

export default Comment