import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import style from "../styles/Products.module.css";

const Products = () => {
  return (
    <section id="Products" className={style.products_area}>
      <div className="wrapper">
        <div className={style.slider}>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <div>
                <div className={style.thumb}>
                  <Image src="/images/photo_3.jpg" alt="썸네일" width={200} height={180} />
                </div>
                <p className={style.tit}>Lorem ipsum dolor</p>
                <p className={style.desc}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis soluta ducimus placeat eveniet dicta impedit eaque, est alias maiores quam voluptatem id tempora, debitis iste
                  doloremque in vel explicabo amet?
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className={style.thumb}>
                  <Image src="/images/photo_2.jpg" alt="썸네일" width={200} height={180} />
                </div>
                <p className={style.tit}>Lorem ipsum dolor</p>
                <p className={style.desc}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis soluta ducimus placeat eveniet dicta impedit eaque, est alias maiores quam voluptatem id tempora, debitis iste
                  doloremque in vel explicabo amet?
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className={style.thumb}>
                  <Image src="/images/photo_1.jpg" alt="썸네일" width={200} height={180} />
                </div>
                <p className={style.tit}>Lorem ipsum dolor</p>
                <p className={style.desc}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis soluta ducimus placeat eveniet dicta impedit eaque, est alias maiores quam voluptatem id tempora, debitis iste
                  doloremque in vel explicabo amet?
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className={style.thumb}>
                  <Image src="/images/photo_3.jpg" alt="썸네일" width={200} height={180} />
                </div>
                <p className={style.tit}>Lorem ipsum dolor</p>
                <p className={style.desc}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis soluta ducimus placeat eveniet dicta impedit eaque, est alias maiores quam voluptatem id tempora, debitis iste
                  doloremque in vel explicabo amet?
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Products;
