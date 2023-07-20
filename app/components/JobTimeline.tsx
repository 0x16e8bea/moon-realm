import React from 'react';

const JobTimeline = () => {
  const jobs = [
    { name: 'Replay Institute', role: 'Lead Programmer', date: 'Feb 2023 - Present', filter: 'replay institute' },
    { name: 'LEGO', role: 'Senior Software Engineering', date: 'Jan 2022 - Jan 2023', filter: 'lego' },
    { name: 'Virsabi', role: 'Programmer / Tech Artist', date: 'Oct 2019 - Dec 2021', filter: 'virsabi' },
    { name: 'Makropol', role: 'XR Developer Intern', date: 'Jul 2019 - Aug 2019', filter: 'makropol' },
    { name: 'Virtual Learning Lab', role: 'Lead Programmer', date: 'Sep 2018 - Dec 2019', filter: 'virtual learning lab' },
  ];

  return (
    <div className="mb-4">
      <h2 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
        Work Experience
      </h2>
      <div className="mt-4 flex overflow-x-scroll scrollbar-hide">
        {jobs.map((job) => (
          <div
            key={job.filter}
            className={`flex-shrink-0 p-2 mb-2 mr-2 border rounded bg-white cursor-pointer`}
            style={{minWidth: '250px'}}
          >
            <h3 className="font-bold">{job.name}</h3>
            <p>{job.role}</p>
            <p className="text-sm text-zinc-500">{job.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobTimeline;
