import Image from "next/image";
import style from "../styles/Posts.module.css";

const Posts = () => {
  return (
    <section id="posts" className={style.posts_area}>
      <div className="wrapper">
        <ul className={style.post_list}>
          <li>
            <div className={style.thumb}>
              <Image src="/images/photo_1.jpg" alt="썸네일" width={200} height={180} />
            </div>
            <p className={style.tit}>Lorem ipsum dolor</p>
            <p className={style.desc}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis soluta ducimus placeat eveniet dicta impedit eaque, est alias maiores quam voluptatem id tempora, debitis iste
              doloremque in vel explicabo amet?
            </p>
          </li>
          <li>
            <div className={style.thumb}>
              <Image src="/images/photo_2.jpg" alt="썸네일" width={200} height={180} />
            </div>
            <p className={style.tit}>Lorem ipsum dolor</p>
            <p className={style.desc}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis soluta ducimus placeat eveniet dicta impedit eaque, est alias maiores quam voluptatem id tempora, debitis iste
              doloremque in vel explicabo amet?
            </p>
          </li>
          <li>
            <div className={style.thumb}>
              <Image src="/images/photo_3.jpg" alt="썸네일" width={200} height={180} />
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
