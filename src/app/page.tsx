'use client';

import AboutUs from '../components/Home/Aboutus';
import Advantages from '../components/Home/Advantages/Advantages';
import Learning from '../components/Home/Learning';
import Advantages2 from '../components/Home/Advantages/Advantages2';
import CourseSwiper from '../components/Home/CourseSwiper';
import MentorSwiper from '../components/Home/MentorSwiper';
import LogoSwiper from '../components/Home/LogoSwiper/LogoSwiper';
import Banner from '../components/Home/Banner';
import useSWR from 'swr';
import axiosClient from '../lib/axiosClient';
import { CourseCardData } from '../components/CourseCard';
import { MentorCardData } from '../components/MentorCard/MentorCard';

const getBestCourses = async (url: string) => {
  const { data } = await axiosClient.get<CourseCardData[]>(url);
  return data;
};

const getMentors = async (url: string) => {
  const { data } = await axiosClient.get<MentorCardData[]>(url);
  return data;
};

export default function Home() {
  const { data } = useSWR(['/course/best', '/mentor'], async (urls: string[]) => {
    const data = await Promise.all([getBestCourses(urls[0]), getMentors(urls[1])]);
    return data;
  });

  return (
    <div className="home-wrapper">
      <Banner />
      <AboutUs />
      <Advantages />
      <Learning />
      <CourseSwiper className={'best-course'} data={data?.[0]} />
      <MentorSwiper className={'mentor'} data={data?.[1]} />
      <LogoSwiper />
      <Advantages2 />
    </div>
  );
}
