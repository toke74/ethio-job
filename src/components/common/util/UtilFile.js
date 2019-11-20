export const jobTypeColors = (job) => {
  if (job.jobType === 'Full Time') {
    return 'success';
  }
  if (job.jobType === 'Part Time') {
    return 'primary';
  }
  if (job.jobType === 'Freelance') {
    return 'info';
  }
  if (job.jobType === 'Internship') {
    return 'warning';
  }
  if (job.jobType === 'Temporary') {
    return 'danger';
  }
};
