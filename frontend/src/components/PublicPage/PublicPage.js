import React from "react";
import "./publicpage.css";

const PublicPage = () => {
  return (
    <div>
      <header class="header">
        <div class="container flex">
          <div class="text">
            <h1 class="mb">
              Complete Daily <br />
              <span>Workout</span> At Home
            </h1>

            <p class="mb">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
              sunt sed tempora neque molestiae corrupti nobis harum ullam eos
              nam!
            </p>

            <a href="/signup" class="btn mt">
              Get Started Now
            </a>
          </div>

          <div class="visual">
            <img
              src="https://raw.githubusercontent.com/programmercloud/pgc-gym/main/img/banner-img.png"
              alt=""
            />
          </div>
        </div>
      </header>

      <div class="section" id="why-us">
        <div class="container flex">
          <div class="text">
            <h2 class="primary mb">Why Choose Us?</h2>
            <h3 class="secondary mb">Consulatation with Expert.</h3>
            <p class="tertiary">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
              quos maxime tempore?
            </p>

            <h3 class="secondary mb">Consulatation with Expert.</h3>
            <p class="tertiary">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
              quos maxime tempore?
            </p>
          </div>
          <div class="visual">
            <img
              src="https://raw.githubusercontent.com/programmercloud/pgc-gym/main/img/why-us.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <div class="section" id="explore">
        <div class="container flex">
          <div class="visual">
            <img
              src="https://raw.githubusercontent.com/programmercloud/pgc-gym/main/img/explore.jpg"
              alt=""
            />
          </div>
          <div class="text">
            <h2 class="primary mb">
              Explore Our Fitness <br />
              Studio
            </h2>
            <p class="tertiary mb">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis esse vitae ratione quos maiores eveniet temporibus
              illum! Eligendi amet officia unde sint totam ut optio. Molestiae,
              illo quia?
            </p>

            <a href="/login" class="btn mt">
              Get Started Now
            </a>
          </div>
        </div>
      </div>

      <div class="section" id="trainer">
        <h2 class="primary mb">Our Professional Trainers</h2>
        <div class="container flex">
          <div class="trainer">
            <img
              src="https://raw.githubusercontent.com/programmercloud/pgc-gym/main/img/trainer1.jpg"
              alt=""
            />
            <h3 class="secondary mb">Junaid Hashim</h3>
            <p class="tertiary mb">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla.
            </p>

            <a href="#" class="btn-2">
              <ion-icon name="arrow-redo-circle-outline"></ion-icon>
            </a>
          </div>

          <div class="trainer">
            <img
              src="https://raw.githubusercontent.com/programmercloud/pgc-gym/main/img/trainer2.jpg"
              alt=""
            />
            <h3 class="secondary mb">Mirza Mubeen Baig</h3>
            <p class="tertiary mb">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla.
            </p>

            <a href="#" class="btn-2">
              <ion-icon name="arrow-redo-circle-outline"></ion-icon>
            </a>
          </div>

          <div class="trainer">
            <img
              src="https://raw.githubusercontent.com/programmercloud/pgc-gym/main/img/trainer3.jpg"
              alt=""
            />
            <h3 class="secondary mb">Teena Anderson</h3>
            <p class="tertiary mb">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla.
            </p>

            <a href="#" class="btn-2">
              <ion-icon name="arrow-redo-circle-outline"></ion-icon>
            </a>
          </div>
        </div>
      </div>

      <div class="section" id="testimonial">
        <div class="container flex">
          <div class="text">
            <h2 class="primary">
              That's What Our Super <br />
              Client Says
            </h2>

            <br />
            <br />
            <br />

            <div class="client">
              <img
                src="https://raw.githubusercontent.com/programmercloud/pgc-gym/main/img/client1.jpg"
                alt=""
              />
              <h2 class="secondary">Exelent Training</h2>
              <p class="tertiary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi quas voluptatem ad, repudiandae voluptates odio
                deleniti reiciendis in veniam quidem expedita maxime error
                fugit. Pariatur quasi sunt aut id. Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Neque, officiis.
              </p>
            </div>
          </div>
          <div class="visual">
            <img
              src="https://raw.githubusercontent.com/programmercloud/pgc-gym/main/img/testimonial.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <div class="section" id="discount">
        <div class="container flex">
          <div class="visual">
            <img
              src="https://raw.githubusercontent.com/programmercloud/pgc-gym/main/img/discount.png"
              alt=""
            />
          </div>
          <div class="text">
            <h2 class="primary mb">
              Fitness Classes This Summer, Pay Now And Get 25% Discount
            </h2>

            <p class="tertiary mb">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab maxime
              minus praesentium est et veniam voluptate alias excepturi minima
              placeat amet nostrum, eligendi, quod cum ducimus nesciunt ipsa
              eum, explicabo eaque obcaecati.
            </p>

            <a href="#" class="btn bt">
              Book Now
            </a>
          </div>
        </div>
      </div>

      <div class="footer">
        <div class="container flex">
          <p class="tertiary">&copy; 2022 Rana Muzamal. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default PublicPage;
