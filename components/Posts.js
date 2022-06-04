import Image from "next/image";
import style from "../styles/Posts.module.css";

const Posts = () => {
  return (
    <section id="posts" className={style.posts_area}>
      <div className="wrapper">
        <ul className={style.post_list}>
          <li>
            <div className={style.thumb}>
              <img src="https://picsum.photos/id/12/200/180" alt="썸네일" />
            </div>
            <p className={style.tit}>Lorem ipsum dolor</p>
            <p className={style.desc}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis soluta ducimus placeat eveniet dicta impedit eaque, est alias maiores quam voluptatem id tempora, debitis iste
              doloremque in vel explicabo amet?
            </p>
          </li>
          <li>
            <div className={style.thumb}>
              <img src="https://picsum.photos/id/200/200/180" alt="썸네일" />
            </div>
            <p className={style.tit}>Lorem ipsum dolor</p>
            <p className={style.desc}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis soluta ducimus placeat eveniet dicta impedit eaque, est alias maiores quam voluptatem id tempora, debitis iste
              doloremque in vel explicabo amet?
            </p>
          </li>
          <li>
            <div className={style.thumb}>
              <img src="https://picsum.photos/id/100/200/180" alt="썸네일" />
            </div>
            <p className={style.tit}>Lorem ipsum dolor</p>
            <p className={style.desc}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis soluta ducimus placeat eveniet dicta impedit eaque, est alias maiores quam voluptatem id tempora, debitis iste
              doloremque in vel explicabo amet?
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Posts;
