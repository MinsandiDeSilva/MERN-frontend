// import JobCard from "./JobCard";

// function JobSection() {
//   const jobs = [
//     {
//       _id: "xyz",
//       title: "Intern - Software Engineer",
//       type: "Full-time",
//       location: "Remote",
//       questions: [
//         "Share your academic background and highlight key programming concepts you've mastered. How has your education shaped your current tech skill set ?",
//         "Describe your professional development, emphasizing any certifications obtained. How have these certifications enriched your technical abilities, and can you provide an example of their practical application ?",
//         "Discuss notable projects in your programming experience. What challenges did you face, and how did you apply your skills to overcome them? Highlight the technologies used and the impact of these projects on your overall growth as a prefessional ?",
//       ],
//     },
//     {
//       _id: "abc",
//       title: "Software Engineer",
//       type: "Full-time",
//       location: "Colombo, Sri Lanka",
//       questions: [
//         "Share your academic background and highlight key programming concepts you've mastered. How has your education shaped your current tech skill set ?",
//         "Describe your professional development, emphasizing any certifications obtained. How have these certifications enriched your technical abilities, and can you provide an example of their practical application ?",
//         "Discuss notable projects in your programming experience. What challenges did you face, and how did you apply your skills to overcome them? Highlight the technologies used and the impact of these projects on your overall growth as a prefessional ?",
//       ],
//     },
//     {
//       _id: "123",
//       title: "Software Architect",
//       type: "Hybrid",
//       location: "Rajagiriya, Sri Lanka",
//       questions: [
//         "Share your academic background and highlight key programming concepts you've mastered. How has your education shaped your current tech skill set ?",
//         "Describe your professional development, emphasizing any certifications obtained. How have these certifications enriched your technical abilities, and can you provide an example of their practical application ?",
//         "Discuss notable projects in your programming experience. What challenges did you face, and how did you apply your skills to overcome them? Highlight the technologies used and the impact of these projects on your overall growth as a prefessional ?",
//       ],
//     },
//   ];

//   return (
//     <section className="py-8">
//       <h2>Available Jobs</h2>
//       <div className="mt-4 flex flex-col gap-y-8">
//         {jobs.map((job) => {
//           return (
//             <JobCard key={job._id} job={job} />
//           );
//         })}
//       </div>
//     </section>
//   );
// }

// export default JobSection;

import { getJobs } from "@/lib/api/jobs";
import { useEffect, useState } from "react";
import JobCard from "./JobCard";

function JobSection() {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getJobs()
      .then((data) => {
        setIsError(false);
        setJobs(data);
      })
      .catch((error) => {
        setIsError(true);
        setError(error);
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return (
      <section className="py-8">
        <h2>Available Jobs</h2>
        <p>Loading...</p>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="py-8">
        <h2>Available Jobs</h2>
        <p className="text-destructive">Error: {error.message}</p>
      </section>
    );
  }

  return (
    <section className="py-8">
      <h2>Available Jobs</h2>
      <div className="mt-4 flex flex-col gap-y-8">
        {jobs.map((job) => {
          return <JobCard key={job._id} job={job} />;
        })}
      </div>
    </section>
  );
}

export default JobSection;
