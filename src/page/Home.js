import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import FeaturedData from "../Data/FeaturedData";
import CatData from "../Data/CatData";
import { Link} from "react-router-dom";

export default function Home() {
  return (
    <>
      <section className="container py-3">
        <div className="row">
          <div className="col-lg-3">
            <ul className="list-group">
              <li className="list-group-item active">Category</li>
              {CatData.map((a) => (
                <li className="list-group-item">{a.Catname}</li>
              ))}
            </ul>
          </div>
          <div className="col-lg-9">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <img
                  src="https://icms-image.slatic.net/images/ims-web/3f236d15-9b44-4634-9896-1b84381c55df.png"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://icms-image.slatic.net/images/ims-web/45d41f5d-c920-48b1-a104-d32384fc76f1.jpg_1200x1200.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://icms-image.slatic.net/images/ims-web/9af16b38-3ae1-4ea5-a2e0-d629d67767f3.jpg"
                  alt=""
                />
              </SwiperSlide>
              ...
            </Swiper>
          </div>
        </div>
      </section>

      <section className="block1">
        <div className="container">
          <h4>Featured Products</h4>
          
          <div className="row">
            {FeaturedData.map((b) => (
              
                <div className="col-lg-3">
                  <div className="card">
                    <img src={b.image} className="w-100" alt={b.title} />
                    <div className="card-body">
                      <p>
                        <strong> <Link to={`/Details/${b.id}/${b.title}`}>{b.title}</Link>  </strong>
                      </p>
                    </div>
                  </div>
                </div>
            
            ))}
          </div>
        
        </div>
      </section>

      <section className="container">
        <Swiper
          spaceBetween={50}
          slidesPerView={4}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {FeaturedData.map((b) => (
            <SwiperSlide>
              <div className="card">
                <img src={b.image} className="w-100" alt="" />
                <div className="card-body">
                  <p>
                    <strong>{b.title}</strong>
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
          ...
        </Swiper>
      </section>
    </>
  );
}
