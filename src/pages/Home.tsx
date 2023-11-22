import React from 'react';
import CourseSwiper from '~/components/features/home/CourseSwiper';
import AboutUs from '~/components/features/home/AboutUs';
import Advantages from '~/components/features/home/Advantages';
import Banner from '~/components/features/home/Banner';
import LearningPath from '~/components/features/home/LearningPath';
import Section from '~/components/shared/section/Section';
import { data as courses } from '~/mocks/courses';
import { data as mentors } from '~/mocks/mentors';
import MentorSwiper from '~/components/features/home/MentorSwiper';
import Advantages2 from '~/components/features/home/Advantages2';
import LogoSwiper from '~/components/features/home/LogoSwiper';

const Home: React.FC = () => {
  const bestCourses = courses
    .sort((a, b) => b.rating - a.rating || b.students - a.students || b.price - a.price)
    .slice(0, 9);

  const fastCourses = courses.filter((c) => c.category === 'Cấp Tốc');

  return (
    <div className='home-wrapper' style={{ backgroundColor: 'white' }}>
      <Banner />
      <AboutUs />
      <Advantages />
      <LearningPath />
      <Section title={'Khóa học tiêu biểu'}>
        <CourseSwiper className='best-course' data={bestCourses} />
      </Section>
      <Section title={'Khóa học cấp tốc'}>
        <CourseSwiper className='fast-course' data={fastCourses} />
      </Section>
      <Section title={'Mentor tiêu biểu'}>
        <MentorSwiper data={mentors} />
      </Section>
      <Advantages2 />
      <LogoSwiper />
    </div>
  );
};

export default Home;
