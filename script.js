let jobs = [
  {
    id: 1,
    company: "Mobile First Corp",
    role: "React Native Developer",
    salary: "$130,000 - $175,000",
    type: "Remote • Full-time",
    status: "none",
    desc: "Build cross-platform mobile applications using React Native.",
  },
  {
    id: 2,
    company: "Tech Flow",
    role: "Frontend Engineer",
    salary: "$100,000 - $140,000",
    type: "On-site • Full-time",
    status: "none",
    desc: "Craft beautiful user interfaces with modern React.",
  },
  {
    id: 3,
    company: "Cloud Scale",
    role: "DevOps Engineer",
    salary: "$150,000 - $190,000",
    type: "Remote • Contract",
    status: "none",
    desc: "Scale infrastructure for high-traffic applications.",
  },
  {
    id: 4,
    company: "Data Sync",
    role: "Backend Developer",
    salary: "$120,000 - $160,000",
    type: "Hybrid • Full-time",
    status: "none",
    desc: "Optimize database queries and API endpoints.",
  },
  {
    id: 5,
    company: "AI Innovate",
    role: "Machine Learning Engineer",
    salary: "$140,000 - $180,000",
    type: "Remote • Full-time",
    status: "none",
    desc: "Develop and deploy machine learning models.",
  },
  {
    id: 6,
    company: "Cyber Secure",
    role: "Security Analyst",
    salary: "$110,000 - $150,000",
    type: "On-site • Full-time",
    status: "none",
    desc: "Monitor and protect against cybersecurity threats.",
  },
  {
    id: 7,
    company: "FinTech Solutions",
    role: "Full Stack Developer",
    salary: "$130,000 - $170,000",
    type: "Remote • Full-time",
    status: "none",
    desc: "Build end-to-end financial applications.",
  },
  {
    id: 8,
    company: "HealthTech",
    role: "Data Scientist",
    salary: "$120,000 - $160,000",
    type: "Hybrid • Full-time",
    status: "none",
    desc: "Analyze healthcare data to drive insights.",
  }
];

let currentFilter = "all";

//  Function to update the Status of a Job
function updateStatus(jobId, newStatus) {
  const job = jobs.find((j) => j.id === jobId);
  if (job) {
    job.status = job.status === newStatus ? "none" : newStatus;
    render();
  }
}

//  Navigation Filtering
function filterJobs(filter) {
  currentFilter = filter;

  // Update Button Styles
  document.querySelectorAll(".nav-btn").forEach((btn) => {
    btn.classList.add("bg-[#3B82F6]", "text-[#64748B]");
    btn.classList.remove("bg-[#3B82F6]", "text-white");
  });
  event.currentTarget.classList.add("bg-[#3B82F6]", "text-white");

  document.getElementById("view-title").innerText =
    filter.charAt(0).toUpperCase() + filter.slice(1) + " Jobs";
  render();
}

//  Render Function
function render() {
  const list = document.getElementById("job-list");
  const filteredJobs = jobs.filter((job) => {
    if (currentFilter === "all") return true;
    return job.status === currentFilter;
  });

  // Update Counts
  document.getElementById("total-count").innerText = jobs.length;
  document.getElementById("interview-count").innerText = jobs.filter(
    (j) => j.status === "interview",
  ).length;
  document.getElementById("rejected-count").innerText = jobs.filter(
    (j) => j.status === "rejected",
  ).length;

  list.innerHTML = filteredJobs
    .map(
      (job) => `
        <div class="bg-white w-full rounded-lg p-6 shadow-sm">
          <h2 class="text-[#002C5C] text-[18px] font-semibold leading-[26px] pb-1">${job.company}</h2>
          <p class="text-[#64748B] text-[16px] leading-5">${job.role}</p>
          <p class="py-5 text-[#64748B] text-[14px] leading-5">${job.type} • ${job.salary}</p>
          <button class="text-[#002C5C] text-[14px] leading-5 px-2 py-1 bg-[#EEF4FF] font-medium rounded-md mb-2">
            ${job.status === "none" ? "NOT APPLIED" : job.status.toUpperCase()}
          </button>
          <p class="text-[#323B49] text-[14px] leading-5 pb-5 pt-3">${job.desc}</p>
          
          <button onclick="updateStatus(${job.id}, 'interview')" 
            class="text-[14px] font-semibold leading-5 border-[1.5px] border-[#10B981] px-3 py-2 rounded-md cursor-pointer transition-all duration-300 mr-2 
            ${job.status === "interview" ? "bg-[#10B981] text-white" : "text-[#10B981] hover:bg-[#10B981] hover:text-white"}">
            INTERVIEW
          </button>

          <button onclick="updateStatus(${job.id}, 'rejected')" 
            class="text-[14px] font-semibold leading-5 border-[1.5px] border-[#EF4444] px-3 py-2 rounded-md cursor-pointer transition-all duration-300 
            ${job.status === "rejected" ? "bg-[#EF4444] text-white" : "text-[#EF4444] hover:bg-[#EF4444] hover:text-white"}">
            REJECTED
          </button>
        </div>
      `,
    )
    .join("");
}

// Initial load
render();
