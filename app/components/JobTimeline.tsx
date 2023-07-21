import React, { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface Job {
  name: string;
  role: string;
  date: string;
  filter: string;
}

const JobTimeline: React.FC = () => {
  const jobs: Job[] = [
    { name: 'Replay Institute', role: 'Lead Programmer', date: 'Feb 2023 - Present', filter: 'replay institute' },
    { name: 'LEGO', role: 'Senior Software Engineering', date: 'Jan 2022 - Jan 2023', filter: 'lego' },
    { name: 'Virsabi', role: 'Programmer / Tech Artist', date: 'Oct 2019 - Dec 2021', filter: 'virsabi' },
    { name: 'Makropol', role: 'XR Developer Intern', date: 'Jul 2019 - Aug 2019', filter: 'makropol' },
    { name: 'Virtual Learning Lab', role: 'Lead Programmer', date: 'Sep 2018 - Dec 2019', filter: 'virtual learning lab' },
  ];

  const jobContainerRef = useRef<HTMLDivElement | null>(null);

  const nextSlide = () => {
    if (jobContainerRef.current) {
      console.log(jobContainerRef.current.offsetWidth);
      // flex-shrink-0 p-2 ml-2 mr-2 border-2 rounded bg-white
      jobContainerRef.current.scrollLeft += 266;
    }
  };

  const prevSlide = () => {
    if (jobContainerRef.current) {
      console.log(jobContainerRef.current.offsetWidth);
      jobContainerRef.current.scrollLeft -= 266;
    }
  };

  return (
    <div className="relative flex items-center pl-5 pr-5 my-10">
      <FaChevronLeft className="absolute z-10 left-0 transform cursor-pointer" onClick={prevSlide} />
      <div ref={jobContainerRef} className="flex overflow-x-hidden scroll-container">
        {jobs.map((job, index) => (
          <div
            className={`flex-shrink-0 p-2 ml-2 mr-2 border-2 rounded bg-white`}
            style={{
              minWidth: '250px, maxWidth: 250px'
            }}

            key={job.filter}
          >
            <h3 className="font-bold [font-stretch:extra-expanded]">{job.name}</h3>
            <p>{job.role}</p>
            <p className="text-sm text-zinc-500">{job.date}</p>
          </div>
        ))}
      </div>
      <FaChevronRight className="absolute z-10 right-0 transform cursor-pointer" onClick={nextSlide} />
    </div>
  );
};

export default JobTimeline;
