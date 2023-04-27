<template>
  <div class="banner container">
    <div class="banner-wrap">
      <div class="ban_slider">
        <VueSlickCarousel :arrows="true" :dots="true">
          <div
            tabindex="-1"
            data-index="0"
            aria-hidden="true"
            class="slick-slide"
            style="
              outline: none;
              width: 840px;
              position: relative;
              left: 0px;
              opacity: 0;
              transition: opacity 500ms ease 0s, visibility 500ms ease 0s;
            "
          >
            <div
              tabindex="-1"
              class="ban"
              style="width: 100%; display: inline-block"
            >
              <h4 class="ban_title">Новорічні знижки</h4>
              <h6 class="ban_descrip">
                Sed ut sit voluptque laudantium, eaque ipsa quae ab et quasi
                architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
                quia
              </h6>
              <img src="@/img/01.0df7fd5.jpeg" alt="" />
            </div>
          </div>

          <div
            tabindex="-1"
            class="ban"
            style="width: 100%; display: inline-block"
          >
            <h4 class="ban_title">Великий вибір продуктів</h4>
            <h6 class="ban_descrip">
              On the other hand, we denounce with righteous indignation and
              dislike men who are so beguiled and demoralized by the charms of
              pleasure of the moment, so blinded by desire, that they cannot
              foresee the pain and trouble that are bound to ensue; and equal
              blame belongs to those who fail in their duty
            </h6>
            <img src="@/img/slide2.08e6dd5.jpg" alt="" />
          </div>

          <template #prevArrow="arrowOption">
            <div class="custom-arrow_prev">
              {{ arrowOption.currentSlide }}/{{ arrowOption.slideCount }}
            </div>
          </template>
          <template #nextArrow="arrowOption">
            <div class="custom-arrow_next">
              {{ arrowOption.currentSlide }}/{{ arrowOption.slideCount }}
            </div>
          </template>
        </VueSlickCarousel>
      </div>
      <div class="sec_banner">
        <img class="apiimg" :src="images" />
      </div>
    </div>
  </div>
</template>
  
  <script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
// import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "MyComponent",
  components: { VueSlickCarousel },
  name: "App",
  methods: {
    fetchRandomPhoto() {
      fetch(this.url + `?client_id=${this.accessKey}`)
        .then((response) => response.json())
        .then((json) => (this.images = json.urls.small));
    },
  },
  created() {
    this.fetchRandomPhoto();
  },
  data() {
    return {
      images: "",
      accessKey: "bgeJ1WoevDL7LCXHcNW4DV8ljoctsc2Tr3ImfE55eoM",
      url: "https://api.unsplash.com/photos/random",
    };
  },
};
</script>

  <style>
.slick-dots {
    bottom: 10px;
}

.slick-dots {
    bottom: -25px;
    display: block;
    list-style: none;
    margin: 0;
    padding: 0;
    position: absolute;
    text-align: center;
    width: 100%;
}

.slick-dots li, .slick-dots li button {
    cursor: pointer;
    height: 20px;
    width: 20px;
}

.slick-dots li button {
    background: transparent;
    border: 0;
    color: transparent;
    display: block;
    font-size: 0;
    line-height: 0;
    outline: none;
    padding: 5px;
}
  
.ban_slider {
  width: 840px;
}
.ban_slider,
.slick-slide img {
  height: 417px;
}
.slick-slider {
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: transparent;
  box-sizing: border-box;
  display: block;
  position: relative;
  touch-action: pan-y;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  -khtml-user-select: none;
}

.slick-slider {
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: transparent;
  box-sizing: border-box;
  display: block;
  position: relative;
  touch-action: pan-y;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  -khtml-user-select: none;
}
/* element.style {
    height: 422px;
    } */
.slick-list {
  display: block;
  margin: 0;
  overflow: hidden;
  padding: 0;
  position: relative;
  transform: translateZ(0);
}
 .element.style {
    width: 4200px;
    opacity: 1;
    }
.slick-track {
  display: block;
  left: 0;
  position: relative;
  top: 0;
  transform: translateZ(0);
}
.slick-track:after,
.slick-track:before {
  content: "";
  display: table;
}
:after,
:before {
  --tw-ring-inset: var(--tw-empty, /*!*/ /*!*/);
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgba(59, 130, 246, 0.5);
  --tw-ring-offset-shadow: 0 0 transparent;
  --tw-ring-shadow: 0 0 transparent;
}

.slick-initialized .slick-slide {
  display: block;
}

.ban {
  position: relative;
}

.ban_title {
  font-size: 35px;
  font-weight: 600;
  line-height: 1;
  margin-left: 65px;
  max-width: 282px;
  position: absolute;
  top: 30%;
}
.ban_descrip {
  left: 65px;
  max-width: 402px;
  position: absolute;
  top: 220px;
}
.slick-next {
  right: 10px;
  z-index: 1;
}

.slick-next:before {
  content: "→";
}
.slick-next:before,
.slick-prev:before {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
  font-family: "slick";
  font-size: 20px;
  line-height: 1;
  opacity: 0.75;
}
.sec_banner {
  align-items: center;
  border: 1px solid #dadae8;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
  padding: 10px;
}
.sec_banner .sec_title {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 25px;
  text-align: center;
}
.sec_banner .sec_btn {
  background-color: #333;
  color: #fff;
  cursor: pointer;
  display: inline;
  display: initial;
  padding: 5px 10px;
}
.banner-wrap {
  display: flex;
  height: 417px;
  justify-content: space-between;
  margin-top: 20px;
  position: relative;
}
.container {
  display: flex;
  margin-left: auto;
  margin-right: auto;
  padding-left: 0;
  padding-right: 0;
  width: 100%;
}

.apiimg {
  height: 100%;
  max-width: 100%;
}

.slick-next,
.slick-prev {
  border: none;
  cursor: pointer;
  display: block;
  font-size: 0;
  height: 20px;
  line-height: 0;
  padding: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
}
.slick-next,
.slick-next:focus,
.slick-next:hover,
.slick-prev,
.slick-prev:focus,
.slick-prev:hover {
  background: transparent;
  color: transparent;
  outline: none;
}

.slick-prev {
  left: 10px;
  z-index: 1;
}

.slick-next {
  right: 10px;
  z-index: 1;
}

.custom-arrow_prev {
  background-color: #fff;
  border: 1px solid #fff;
  border-radius: 50%;
  box-shadow: -13px 20px 10px rgba(0, 0, 0, 0.01),
    -7px 11px 8px rgba(0, 0, 0, 0.05), -3px 5px 6px rgba(0, 0, 0, 0.09),
    -1px 1px 3px rgba(0, 0, 0, 0.1), 0 0 0 rgba(0, 0, 0, 0.1);
  content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAOCAYAAAASVl2WAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABmSURBVHgBrZHLCQAhDESdBcGLYglpxcotRfsQzMabiyFediCQ8IaQD5yinDPNOSszu8eAtGoYsI8xygemlFqMkSVaCIF+gEsmFB1bHAZRAdAlJ+991brc57BM10NB67SboE2+P+sFFoZMIq8PPtIAAAAASUVORK5CYII=);
  font-size: 30px;
  height: 10px;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  padding: 13px;
  width: 10px;
}

.custom-arrow_next {
    background-color: #fff;
    border: 1px solid #fff;
    border-radius: 50%;
    box-shadow: -13px 20px 10px rgba(0,0,0,.01),-7px 11px 8px rgba(0,0,0,.05),-3px 5px 6px rgba(0,0,0,.09),-1px 1px 3px rgba(0,0,0,.1),0 0 0 rgba(0,0,0,.1);
    content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAOCAYAAAASVl2WAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABqSURBVHgBpZBBCsAgDAQTQfCi+AS/4st9ij5DEExrsVAkNgf3ksMO2U3AOZettdkYE4CRmjNorRMHqVsREcsfBN77MKNoG7eDcIV674mIhllaaxG5TV9IgSAxQix5aA5JD3qveArVWssKXL1kQje0Tk4mAAAAAElFTkSuQmCC);
    font-size: 30px;
    height: 10px;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    padding: 13px;
    width: 10px;
}
</style>

