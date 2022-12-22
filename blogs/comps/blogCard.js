import style from "../styles/comps.module.css";

const Blog = ({ data }) => {
  return (
    <div className={style.Blog}>
      <ul>
        {/* <li>{data.authorName}</li> */}
        <li>{data.date}</li>
      </ul>
      <h3>{data.title}</h3>
      <div>
        <p>{data.desc}</p>
        <img src={data.image} alt="broken img" />
      </div>
      <ul>
        <li>{data.topic}</li>
        <li>{Math.random(1, 10)}</li>
      </ul>
    </div>
  );
};

export default Blog;
