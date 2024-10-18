function Numbers()
{
  const z =[
  {
    id:1,
    title:"hello world",
    content:"welcome to learning react"
  },
  {
    id:2,
    title:"installation",
    content:"you can install react from npm"
  },
  {
    id:3,
    title:"hello world",
    content:"welcome to learning react"
  },
  {
    id:4,
    title:"installation",
    content:"you can install react from npm"
  },
  {
    id:5,
    title:"hello world",
    content:"welcome to learning react"
  },
  {
    id:6,
    title:"installation",
    content:"you can install react from npm"
  }
  ]
  
const x=(
  <ul>
    {z.map((post) =>(
    <li key={post.id}>
      {post.title}

    </li>
    ))}
  </ul>
)
const y= z.map((post)=>
  <div key = {post.id}>
    <h3>{post.title}</h3>
    <p>{post.content}</p>

  </div>
)
return (
  <>
  {x}
  {y}
  </>
)
}


export default Numbers
  