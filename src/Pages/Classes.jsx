import { useState } from "react";
import ClassesBox from "../components/ClassesBox/ClassesBox";
import Footer from "../components/Footer/Footer";

function Classes() {
  const [load, setLoad] = useState(true);

  const loadMore = () => {
    setLoad(!load);
  };

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const classList = [
    {
      bgImg: "yoga-bg",
      title: "Stretch your comfort zone",
      trainer: "Ivorie",
      data: "14 days · 12 classes",
    },
    {
      bgImg: "meditaion-bg",
      title: "Balanced Body and mind",
      trainer: "Maria Mich",
      data: "14 days · 10 classes",
    },
    {
      bgImg: "pilate-bg",
      title: "Your Pilate week",
      trainer: "Ana June",
      data: "1 week · 6 classes",
    },
    {
      bgImg: "yoga-bg-1",
      title: "3 Month Yoga Plan",
      trainer: "Maria Mich",
      data: "12 week · 48 classes",
    },
    {
      bgImg: "yoga-conditioning-bg",
      title: "Yoga Conditioning",
      trainer: "Jonathan",
      data: "12 days · 12 classes",
    },
    {
      bgImg: "yoga-workout-bg",
      title: "Yoga willpower workout",
      trainer: "Jonathan",
      data: "21 days · 18 classes",
    },
    {
      bgImg: "yin-yoga-bg",
      title: "Yin Yoga & The Five Elements",
      trainer: "Kia Miller",
      data: "5 week · 11 classes",
    },
    {
      bgImg: "couple-yoga-bg",
      title: "The Joy of Yoga - Celebrating 10 years together!",
      trainer: "Ivorie",
      data: "3 week · 18 classes",
    },
    {
      bgImg: "pilate-for-back-bg",
      title: "Pilates for Back Pain",
      trainer: "Alex Artymiak",
      data: "2 week · 6 classes",
    },
  ];

  const moreClassList = [
    {
      bgImg: "pregnancy-yoga-bg",
      title: "Pregnancy Yoga Program",
      trainer: "Kia Miller",
      data: "14 classes",
    },
    {
      bgImg: "postnatal-yoga-bg",
      title: "Postnatal Yoga Program",
      trainer: "Ivorie",
      data: "13 classes",
    },
    {
      bgImg: "monopause-yoga-bg",
      title: "Yoga for Menopause",
      trainer: "Jonathan",
      data: "7 week · 18 classes",
    },
    {
      bgImg: "hatha-bg",
      title: "Simply Hatha",
      trainer: "Jo Tastula",
      data: "10 week · 10 classes",
    },
    {
      bgImg: "anxiety-bg",
      title: "Mastering Anxiety",
      trainer: "Kia Miller",
      data: "8 classes",
    },
  ];

  return (
    <>
      <section className="login-section text-center ">
        <div className="login-banner relative justify-center flex">
          <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
            Classes
          </h1>
        </div>

        {/* boxes 1*/}
        <div
          className={`container gap-12 page-padding py-[10rem] md1000:grid-cols-2 min620:grid-cols-1  grid-cols-3 grid-rows-3 text-left grid`}
        >
          {classList.map((classDetail, index) => (
            <ClassesBox
              bgImg={classDetail.bgImg}
              title={classDetail.title}
              trainer={classDetail.trainer}
              data={classDetail.data}
              key={index}
            />
          ))}

          {!load &&
            moreClassList.map((classDetail, index) => (
              <ClassesBox
                bgImg={classDetail.bgImg}
                title={classDetail.title}
                trainer={classDetail.trainer}
                data={classDetail.data}
                key={index}
              />
            ))}
        </div>
        <button
          className="text-[1.5rem] text-white bg-slate-600 px-14 py-6 font-medium uppercase shadow-2xl mb-14"
          onClick={() => {
            loadMore();
            goTop();
          }}
        >
          {load ? "show more" : "show less"}
        </button>

        <Footer />
      </section>
    </>
  );
}

export default Classes;
