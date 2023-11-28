import { COURSE_LEVEL, Course } from '@prisma/client';
import Image from 'next/image';
import React, { useMemo } from 'react';

const CourseLevel: React.FC<{ level?: Course['courseLevel'] }> = ({ level }) => {
  const src = useMemo(() => {
    switch (level) {
      case COURSE_LEVEL.EASY:
        return '/ant-icon-01.webp';
      case COURSE_LEVEL.NORMAL:
        return '/ant-icon-02.webp';
      case COURSE_LEVEL.HARD:
        return '/ant-icon-03.webp';
      default:
        return '/captoc.webp';
    }
  }, [level]);

  return (
    <Image src={src} alt={''} width={52} height={52} sizes="100vw" style={{ objectFit: 'cover' }} />
  );
};

export default CourseLevel;
