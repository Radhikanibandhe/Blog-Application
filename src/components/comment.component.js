const Comment = (props) => {
    const {username, comment} = props
    return (
        <div className="card" style={{marginTop: '20px'}}>
            <div className="card-body">
                <h4 className="card-title">{username}</h4>
                <p className="card-text">{comment}</p>
            </div>
        </div>
    )
}

export default Comment