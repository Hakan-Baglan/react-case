import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./theirWords.css";

export default class TheirWords extends Component {
  render() {
    let members = [{}, {}, {}];
    return (
      <div className="their-words" id="download">
        <Swiper
          spaceBetween={25}
          slidesPerView={1}
          loop={true}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {members.map((elm,index) => (
            <SwiperSlide key={index}>
              <div className="container slider">
                <div className="row d-flex">
                  <header>
                    <p>TESTİMONİAL</p>
                    <h2>In Their Own Words</h2>
                    <p>
                      Online businesses utilize newsletters to keep their brand
                      top-of-mind <br /> for consumers, establishing authority.
                    </p>
                  </header>
                  <div className="user-cart">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-person-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                      </svg>
                    </span>
                  </div>
                  <div className="cart-text">
                    <svg
                      className="tirnak"
                      width="69"
                      height="51"
                      viewBox="0 0 69 51"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.6827 20.3387C14.9156 20.3387 14.1795 20.4545 13.4468 20.5601C13.6842 19.7697 13.9284 18.9657 14.3205 18.2435C14.7126 17.1942 15.3249 16.2846 15.9338 15.3681C16.4428 14.3768 17.3406 13.7056 18.0011 12.8573C18.6924 12.0329 19.6349 11.4844 20.3814 10.7996C21.114 10.0842 22.0737 9.72645 22.8374 9.22224C23.6354 8.76914 24.3302 8.26834 25.0732 8.02986L26.9272 7.27355L28.5577 6.6024L26.8894 0L24.8359 0.49058C24.1789 0.654107 23.3774 0.844888 22.4659 1.07314C21.5337 1.24349 20.5396 1.71022 19.432 2.13607C18.3382 2.61984 17.0723 2.94689 15.8959 3.72365C14.7126 4.46633 13.3471 5.08637 12.1431 6.08116C10.9771 7.10661 9.5702 7.99579 8.53139 9.3006C7.39627 10.5202 6.27491 11.8012 5.40465 13.2593C4.3968 14.6493 3.71228 16.1755 2.98993 17.6848C2.33638 19.194 1.8101 20.7373 1.38013 22.2363C0.564903 25.2411 0.200288 28.096 0.0592576 30.5387C-0.0576942 32.9848 0.011101 35.0186 0.155571 36.4904C0.207167 37.1854 0.303481 37.8599 0.372276 38.3266L0.45827 38.899L0.547704 38.8786C1.1595 41.709 2.56789 44.3101 4.60994 46.381C6.65198 48.4518 9.24425 49.9077 12.0869 50.5804C14.9295 51.253 17.9063 51.1148 20.6729 50.1818C23.4395 49.2488 25.8829 47.5591 27.7205 45.3082C29.558 43.0572 30.7146 40.3371 31.0564 37.4623C31.3982 34.5876 30.9113 31.6757 29.652 29.0636C28.3927 26.4515 26.4124 24.2458 23.9403 22.7018C21.4682 21.1578 18.6053 20.3385 15.6827 20.3387ZM53.52 20.3387C52.753 20.3387 52.0169 20.4545 51.2842 20.5601C51.5215 19.7697 51.7658 18.9657 52.1579 18.2435C52.55 17.1942 53.1623 16.2846 53.7711 15.3681C54.2802 14.3768 55.178 13.7056 55.8384 12.8573C56.5298 12.0329 57.4723 11.4844 58.2187 10.7996C58.9514 10.0842 59.9111 9.72645 60.6747 9.22224C61.4728 8.76914 62.1676 8.26834 62.9106 8.02986L64.7646 7.27355L66.3951 6.6024L64.7268 0L62.6732 0.49058C62.0162 0.654107 61.2148 0.844888 60.3032 1.07314C59.3711 1.24349 58.377 1.71022 57.2694 2.13607C56.179 2.62325 54.9097 2.94689 53.7333 3.72705C52.55 4.46974 51.1844 5.08978 49.9805 6.08457C48.8144 7.11002 47.4076 7.9992 46.3688 9.3006C45.2336 10.5202 44.1123 11.8012 43.242 13.2593C42.2342 14.6493 41.5497 16.1755 40.8273 17.6848C40.1738 19.194 39.6475 20.7373 39.2175 22.2363C38.4023 25.2411 38.0377 28.096 37.8966 30.5387C37.7797 32.9848 37.8485 35.0186 37.9929 36.4904C38.0445 37.1854 38.1409 37.8599 38.2096 38.3266L38.2956 38.899L38.3851 38.8786C38.9969 41.709 40.4053 44.3101 42.4473 46.381C44.4894 48.4518 47.0816 49.9077 49.9242 50.5804C52.7668 51.253 55.7436 51.1148 58.5103 50.1818C61.2769 49.2488 63.7203 47.5591 65.5578 45.3082C67.3954 43.0572 68.5519 40.3371 68.8938 37.4623C69.2356 34.5876 68.7487 31.6757 67.4894 29.0636C66.23 26.4515 64.2498 24.2458 61.7777 22.7018C59.3056 21.1578 56.4426 20.3385 53.52 20.3387Z"
                        fill="#EAF1FD"
                      />
                    </svg>
                    <div className="text">
                      <p className="description">
                        Enim fugiat labore commodo incididunt enim quis aute ex
                        et
                        <br /> est aliquip Lorem nulla. Eu amet irure minim
                        pariatur
                        <br />
                        ipsum enim laborum aute velit esse tempor aliquip.
                        <br />
                        <br />
                        <b>Annette Hawkins</b>
                        <br />
                      </p>
                      <p className="mt-1">Art Director of Gillette</p>
                      <div className="top-div d-flex">
                        <svg
                          className="top"
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M30.2472 9.86675C29.6671 8.5402 28.8992 7.30396 27.9672 6.19595C26.5895 4.50914 24.8701 3.13322 22.9223 2.15877C20.9745 1.18431 18.8424 0.633402 16.6664 0.542307C14.4903 0.451212 12.3197 0.82199 10.2972 1.63024C8.2748 2.4385 6.44647 3.6659 4.93258 5.23166C3.41868 6.79742 2.25355 8.66605 1.51385 10.7145C0.774164 12.763 0.476688 14.945 0.64101 17.1167C0.805331 19.2885 1.42772 21.4008 2.46722 23.3147C3.50672 25.2286 4.93975 26.9006 6.672 28.2207C7.78351 29.0847 9.01168 29.7871 10.32 30.3069C12.1543 31.0586 14.1175 31.4458 16.0998 31.4469C20.1917 31.4379 24.1131 29.8068 27.0044 26.9112C29.8957 24.0157 31.521 20.0919 31.524 15.9999C31.527 13.8893 31.0923 11.8009 30.2472 9.86675ZM16.0884 3.67655C17.8686 3.67636 19.6273 4.06545 21.2412 4.81655C20.8476 4.9866 20.4338 5.10537 20.01 5.16995C18.6153 5.37184 17.3233 6.01934 16.3269 7.01581C15.3304 8.01227 14.6829 9.30427 14.481 10.6989C14.3924 11.4811 14.0366 12.2088 13.4738 12.7591C12.911 13.3095 12.1756 13.6489 11.3916 13.7199C9.99692 13.9218 8.70492 14.5693 7.70846 15.5658C6.71199 16.5623 6.06449 17.8543 5.8626 19.2489C5.79425 19.9927 5.47693 20.6916 4.962 21.2325C4.07355 19.3553 3.67443 17.2837 3.80179 15.2107C3.92915 13.1377 4.57885 11.1307 5.69043 9.37626C6.802 7.62186 8.33933 6.17716 10.1593 5.17662C11.9794 4.17607 14.0229 3.6522 16.0998 3.65375L16.0884 3.67655ZM6.6606 23.9799C6.7974 23.8545 6.9342 23.7405 7.071 23.6037C8.08521 22.6204 8.73622 21.3224 8.9178 19.9215C8.99143 19.1341 9.34302 18.3986 9.9096 17.8467C10.4548 17.2792 11.1886 16.9305 11.973 16.8663C13.3677 16.6645 14.6597 16.017 15.6561 15.0205C16.6526 14.024 17.3001 12.732 17.502 11.3373C17.5513 10.5137 17.9048 9.73775 18.4938 9.15995C19.0525 8.60346 19.7933 8.26745 20.58 8.21375C21.8613 8.03746 23.0562 7.46787 24 6.58355C25.0746 7.47511 25.9851 8.54765 26.6904 9.75275C26.6471 9.81129 26.5974 9.86482 26.5422 9.91235C25.998 10.4849 25.2651 10.8412 24.4788 10.9156C23.0827 11.1139 21.7887 11.7603 20.7916 12.7574C19.7945 13.7545 19.1482 15.0484 18.9498 16.4445C18.8695 17.2294 18.5203 17.9623 17.9614 18.5191C17.4025 19.0759 16.6683 19.4223 15.8832 19.4997C14.4844 19.7001 13.1876 20.3463 12.1854 21.3424C11.1832 22.3384 10.529 23.6313 10.32 25.0287C10.2586 25.5859 10.0673 26.1209 9.7614 26.5905C8.59176 25.8961 7.5442 25.0141 6.6606 23.9799ZM16.0884 28.3803C14.9316 28.3816 13.7804 28.2204 12.6684 27.9015C13.0488 27.1925 13.2961 26.4197 13.398 25.6215C13.4779 24.8385 13.8255 24.107 14.382 23.5504C14.9386 22.9938 15.6701 22.6462 16.4532 22.5663C17.85 22.3667 19.1445 21.7202 20.1432 20.7236C21.1419 19.7269 21.7911 18.4337 21.9936 17.0373C22.0735 16.2543 22.4211 15.5228 22.9776 14.9662C23.5342 14.4096 24.2657 14.062 25.0488 13.9821C26.0999 13.8454 27.1017 13.4541 27.9672 12.8421C28.4478 14.6638 28.5047 16.5713 28.1336 18.4183C27.7625 20.2653 26.9733 22.0028 25.8264 23.4975C24.6796 24.9921 23.2056 26.2042 21.5176 27.0407C19.8295 27.8773 17.9723 28.316 16.0884 28.3233V28.3803Z"
                            fill="#5B6B88"
                          />
                        </svg>
                        <p className="mx-2 ">logoipsum</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }
}
