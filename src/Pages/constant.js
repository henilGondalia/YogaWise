import Img1 from "../images/blogpage/1.jpg";
import Img2 from "../images/blogpage/2.jpg";
import Img3 from "../images/blogpage/3.jpg";
import Img4 from "../images/blogpage/4.jpg";
import Img5 from "../images/blogpage/5.jpg";
import Img6 from "../images/blogpage/6.jpg";
import Img7 from "../images/blogpage/7.jpg";
import Recent1 from "../images/blogpage/recent1.jpg";
import Recent2 from "../images/blogpage/recent2.jpg";
import Recent3 from "../images/blogpage/recent3.jpg";
import Recent4 from "../images/blogpage/recent4.jpg";
import Recent5 from "../images/blogpage/recent5.jpg";
import Recent6 from "../images/blogpage/recent6.jpg";

export function getCurrentDate(formate='MMDDYY',n=0){
  let newDate = new Date()
  if(n){
    newDate.setDate(newDate.getDate() - 6);
  }
  let date = newDate.getDate();
  let month = newDate.getMonth();
  let year = newDate.getFullYear();
  const monthList = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  if(formate === 'DD.MM.YY'){
    return date + '.' + month + '.' + year
  }
  return monthList[month] + ' ' + date + ', ' + year
}

export const blogList = [
    {
      img: Img1,
      title: "Recipes for a home yoga retreat",
      description:
        "Bring the yoga retreat experience into your home with this menu planner full of delicious and nutritious recipes.",
      author:"Emma Newlyn",
      date: getCurrentDate(),
      category: "Recipes",
      recent: Recent1
    },
    {
      img: Img2,
      title: "Is 20 minutes of yoga enough?",
      description:
        "Nothing beats the feeling after a long yoga class but if 60 minutes of uninterrupted yoga time isn't possible, can you still get the benefits of yoga in several short sessions?",
      author:"Jenny Savage",
      date: getCurrentDate("MMDDYY",8),
      category: "Yoga",
      recent: Recent2
    },
    {
      img: Img3,
      title: "Trouble sleeping? Our Super Sleeper Series will help!",
      description:
        "If you’ve ever struggled with sleep (or if you just want to feel more relaxed) I encourage you to take part in the Super Sleeper Series. This set of classes will help you address 4 major sleep issues. Read on to find out more.",
      author:"Kia Miller",
      date: getCurrentDate("MMDDYY",10),
      category: "Yoga",
      recent: Recent3
    },
    {
      img: Img4,
      title: "Restorative Yoga And Its Benefits For Senior Citizens",
      description:
        "It’s easy to think that yoga is something tailored to the young: tight yoga pants, ridiculous poses – it seems like yoga is no place for folks who remember Kennedy in office. But despite some popular culture tendencies, the truth is yoga is for everyone. That’s what makes it such an incredible form of exercise for your mind, body, and spirit.",
      author:"ana june",
      date: getCurrentDate("MMDDYY",12),
      category: "Yoga",
      recent: Recent4
      //https://yogasanamats.com/blogs/news/restorative-yoga-and-its-benefits-for-senior-citizens
    },
    {
      img: Img5,
      title: "How to support your health with Yin yoga and the 5 Elements",
      description:
        "The Five element theory from Traditional Chinese Medicine can be used as a framework for understanding patterns in ourselves and in all natural phenomena. The five energetic elements are Water, Wood, Fire, Earth and Metal. Each element corresponds with different seasons, emotions, biological functions, organs, directions of energy and meridians (energetic channels).",
        // https://www.ekhartyoga.com/articles/wellbeing/how-to-support-your-health-with-yin-yoga-and-the-5-elements
        author:"Ivorie Lewis",
      date: getCurrentDate("MMDDYY",15),
      category: "Wellbeing",
      recent: Recent5
    },
    {
      img: Img6,
      title: "The benefits of Pilates",
      description:
        "Pilates is a system of movements created to build you up from the inside out. ‘Building you up’ doesn’t mean that we are going to add muscle bulk – rather it builds up an internal coordination of support through your muscular structure.",
      author:"Jonathan Doe",
      date: getCurrentDate("MMDDYY",19),
      category: "Pilates",
      //https://www.ekhartyoga.com/articles/practice/benefits-of-pilates
      recent: Recent6
    },
    {
      img: Img7,
      title: "6 lessons learned from a week of silence",
      description:
        "Yogawise member, Jo, shares some of the lessons she learned from a week-long silence and meditation.",
      author:"Jo Tastula",
      date: getCurrentDate("MMDDYY",20),
      category: "Meditation"
      //https://www.ekhartyoga.com/articles/meditation/6-lessons-learned-from-a-week-of-silence
    },
  ];

  export const blogTags = ['Yoga','Meditation','Pilates','Fitness','Wellbeing','Yinyoga','Workout']