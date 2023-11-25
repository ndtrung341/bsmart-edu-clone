import { Course } from '@/src/types';
import Image from 'next/image';
import React, { useMemo } from 'react';

const CourseLevel: React.FC<{ level?: Course['level'] }> = ({ level }) => {
  const src = useMemo(() => (level ? `/ant-icon-0${level}.webp` : '/captoc.webp'), [level]);
  return <Image src={src} alt={''} width={50} height={50} />;
};

export default CourseLevel;
