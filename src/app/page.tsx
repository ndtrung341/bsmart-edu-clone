import AboutUs from '../components/Home/Aboutus';
import Advantages from '../components/Home/Advantages/Advantages';
import { data as courses } from '@/src/mocks/courses';
import { data as mentors } from '@/src/mocks/mentors';
import Learning from '../components/Home/Learning';
import Advantages2 from '../components/Home/Advantages/Advantages2';
import CourseSwiper from '../components/Home/CourseSwiper';
import MentorSwiper from '../components/Home/MentorSwiper';
import LogoSwiper from '../components/Home/LogoSwiper/LogoSwiper';
import Banner from '../components/Home/Banner';

export default function Home() {
  const bestCourses = courses
    .sort((a, b) => b.rating - a.rating || b.students - a.students || b.price - a.price)
    .slice(0, 9);
  return (
    <div className="home-wrapper">
      <Banner />
      <AboutUs />
      <Advantages />
      <Learning />
      <CourseSwiper className={'best-course'} data={bestCourses} />
      <MentorSwiper className={'mentor'} data={mentors} />
      <LogoSwiper />
      <Advantages2 />
    </div>
  );
}
