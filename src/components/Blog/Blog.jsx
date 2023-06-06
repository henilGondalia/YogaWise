import TitleRed from "../../images/who-we-are/title-bg.svg";
import BlogBox from "./BlogBox";
import { getCurrentDate } from "../../Pages/constant";

export const articles = [
  {
    date: getCurrentDate("DD.MM.YY"),
    title: "Recipes for a home yoga retreat",
    description:
      "Bring the yoga retreat experience into your home with this menu planner full of delicious and nutritious recipes.",
    //more : https://www.ekhartyoga.com/articles/recipes/recipes-for-a-home-yoga-retreat
  },
  {
    date: getCurrentDate("DD.MM.YY", 8),
    title: "Is 20 minutes of yoga enough?",
    description:
      "Nothing beats the feeling after a long yoga class but if 60 minutes of uninterrupted yoga time isn't possible, can you still get the benefits of yoga in several short sessions?",
    //more: https://www.ekhartyoga.com/articles/practice/is-20-minutes-of-yoga-enough
  },
  {
    date: getCurrentDate("DD.MM.YY", 10),
    title: "Trouble sleeping? Our Super Sleeper Series will help!",
    description:
      "If you’ve ever struggled with sleep (or if you just want to feel more relaxed) I encourage you to take part in the Super Sleeper Series. This set of classes will help you address 4 major sleep issues. Read on to find out more.",
    //more: https://www.ekhartyoga.com/articles/meditation/trouble-sleeping-our-super-sleeper-series-will-help
  },
];

function Blog() {
  return (
    <>
      <section id="blog" className="bg-white ">
        <div className="container page-padding py-[10rem]">
          {/* title div -- */}
          <div className="flex flex-col text-center relative items-center">
            <p className="text-white relative z-10 text-[15px] uppercase font-bold mb-8">
              latest article
            </p>
            <img
              src={TitleRed}
              alt="text_bg"
              className="w-[23rem] absolute -top-[10px]"
            />

            <h2 className="text-[3.4rem] font-bold mb-4">Our Recent News</h2>
            <p className="text-[#646464] font-medium text-[15px] ">
              yoga anatomy and philosophy to guide you through
              <br /> every stage of your practice.
            </p>
          </div>

          {/* blog boxes */}
          <div className="flex gap-6 w-full mt-[5rem] md1200:justify-center flex-wrap">
            {articles.map((article, id) => (
              <BlogBox
                key={id}
                date={article.date}
                title={article.title}
                description={article.description}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
