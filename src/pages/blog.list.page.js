import Blog from './../components/blog.component';
import { useEffect, useState } from 'react';
import { getBlogs, changeBlogTag, deleteBlogs, updateBlogs } from './../services/blog.service';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar.component';

const BlogListPage = (props) => {

  const [blogLife, setBlogLife] = useState([])
  const [blogEntertainment, setBlogEntertainment] = useState([])
  const [blogSports, setBlogSports] = useState([])
  const [blogFinance, setBlogFinance] = useState([])
  const [blogFashion, setBlogFashion] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    reloadBlogs()
  },[])

  const reloadBlogs = () => {
    loadBlog('LIFE', setBlogLife)
    loadBlog('ENTERTAINMENT',setBlogEntertainment)
    loadBlog('SPORTS', setBlogSports)
    loadBlog('FINANCE', setBlogFinance)
    loadBlog('FASHION', setBlogFashion)
  }

  const loadBlog = async (tag, func) => {
    const result = await getBlogs(tag)
    if(result) {
      console.log(result)
      func(result)
    }
  }

  const changeTag = async (id, tag) => {
    const result = await changeBlogTag(id, tag)
    console.log(result)
    if(result) {
      console.log('blog reloading')
      reloadBlogs()
    }
  }

  const deleteBlog = async(id) => {
    const result = await deleteBlogs(id)
    console.log('unable to delete')
    if (result) {
      console.log('reloading')
      reloadBlogs()
    }
  }

  const updateBlog = async(id, title ,content, tag) => {
    const result = await updateBlogs(id, title, content, tag)
  
    if (result) {
      console.log('reloading')
      reloadBlogs()
    } else {
      console.log('unable to update blog')
    }
  }

    return (
      <div>
        <Navbar />
        <div className='container' style={{marginTop: '30px'}}>
          <div className='row'>
            <div className="col">
              <h4 className="header">Life Related Blogs</h4>
              {blogLife.length > 0 && 
              blogLife.map((blog) => {
                const {id, title, tag, content} = blog
                return (
                  <Blog 
                  key = {id}
                  id = {id}
                  title = {title}
                  content = {content}
                  tag = {tag}
                  changeTag = {changeTag}
                  deleteBlog = {deleteBlog}
                  updateBlog = {updateBlog}
                   />
                )
              })}
              {blogLife.length === 0 && <div>No life related blogs</div>}
            </div>
           
              <div className="col">
                <h4 className="header">Entertainment Related Blogs</h4>
                {blogEntertainment.length > 0 && 
                blogEntertainment.map((blog) => {
                  const {id, title, tag, content} = blog
                  return (
                    <Blog 
                    key = {id}
                    id = {id}
                    title = {title}
                    content = {content}
                    tag = {tag}
                    changeTag = {changeTag}
                    deleteBlog = {deleteBlog}
                    updateBlog = {updateBlog}
                    />
                  )
                })}
                {blogEntertainment.length === 0 && <div>No Entertainment related blogs</div>}
              </div>
        </div>

        <div className='row'>
            <div className="col">
              <h4 className="header">Sports Related Blogs</h4>
              {blogSports.length > 0 && 
              blogSports.map((blog) => {
                const {id, title, tag, content} = blog
                return (
                  <Blog 
                  key = {id}
                  id = {id}
                  title = {title}
                  content = {content}
                  tag = {tag}
                  changeTag = {changeTag}
                  deleteBlog = {deleteBlog}
                  updateBlog = {updateBlog}
                   />
                )
              })}
              {blogSports.length === 0 && <div>No Sports related blogs</div>}
            </div>
           
              <div className="col">
                <h4 className="header">Finance Related Blogs</h4>
                {blogFinance.length > 0 && 
                blogFinance.map((blog) => {
                  const {id, title, tag, content} = blog
                  return (
                    <Blog 
                    key = {id}
                    id = {id}
                    title = {title}
                    content = {content}
                    tag = {tag}
                    changeTag = {changeTag}
                    deleteBlog = {deleteBlog}
                    updateBlog = {updateBlog}
                    />
                  )
                })}
                {blogFinance.length === 0 && <div>No Finance related blogs</div>}
              </div>
        </div>
        <div className='row'>
        <div className="col">
                <h4 className="header">Fashion Related Blogs</h4>
                {blogFashion.length > 0 && 
                blogFashion.map((blog) => {
                  const {id, title, tag, content} = blog
                  return (
                    <Blog 
                    key = {id}
                    id = {id}
                    title = {title}
                    content = {content}
                    tag = {tag}
                    changeTag = {changeTag}
                    deleteBlog = {deleteBlog}
                    updateBlog = {updateBlog}
                    />
                  )
                })}
                {blogFashion.length === 0 && <div>No Fashion related blogs</div>}
              </div>
              <div className='col'></div>
        </div>
      </div>
      </div>
    )
  }
  
  export default BlogListPage