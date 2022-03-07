import { useState, useEffect } from 'react';
import Navbar from '../components/navbar.component';
import { getBlogs } from '../services/blog.service';
import Header from './../components/header.component';
import BlogAll from './../components/blogAll.component';

const BlogDetailPage = (props) => {
    const [blogLife, setBlogLife] = useState([])
  const [blogEntertainment, setBlogEntertainment] = useState([])
  const [blogSports, setBlogSports] = useState([])
  const [blogFinance, setBlogFinance] = useState([])
  const [blogFashion, setBlogFashion] = useState([])


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



    return (
      <div>
        <Navbar />
        <Header />
        <div className='container' style={{marginTop: '30px'}}>
          <div className='row'>
            <div className="col">
              <h4 className="header">Life Related Blogs</h4>
              {blogLife.length > 0 && 
              blogLife.map((blog) => {
                const {id, title, tag, content} = blog
                return (
                  <BlogAll 
                  key = {id}
                  id = {id}
                  title = {title}
                  content = {content}
                  tag = {tag}
         
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
                    <BlogAll 
                    key = {id}
                    id = {id}
                    title = {title}
                    content = {content}
                    tag = {tag}
                  
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
                  <BlogAll 
                  key = {id}
                  id = {id}
                  title = {title}
                  content = {content}
                  tag = {tag}
              
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
                    <BlogAll 
                    key = {id}
                    id = {id}
                    title = {title}
                    content = {content}
                    tag = {tag}
                  
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
                    <BlogAll 
                    key = {id}
                    id = {id}
                    title = {title}
                    content = {content}
                    tag = {tag}
                   
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
export default BlogDetailPage