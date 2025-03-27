import React, { useState, useEffect } from "react";

interface Candidate {
  id: number;
  name: string;
  username: string;
  location: string;
  avatar: string;
  email: string;
  company: string;
  bio: string;
}

const mockCandidates: Candidate[] = [
  {
    id: 1,
    name: "Nancy",
    username: "StarryCoder",
    location: "India",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTjdlLN2KqDAhNK1f7VPKLuEk0Zl2V4YUPXw&s",
    email: "Nancyhouse@gmail.com",
    company: "Google",
    bio: "Senior coder analyst at Google!",
  },
  {
    id: 2,
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9z9v5k8J8X5z9v5k8J8X5z9v5k8J8X5z9v5k8&s",
    name: "Alex Johnson",
    username: "CodeMasterAlex",
    location: "San Francisco, USA",
    email: "alex.johnson@gmail.com",
    company: "Meta",
    bio: "Full-stack developer with a passion for building scalable web applications.",
  },
  {
    id: 3,
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9z9v5k8J8X5z9v5k8J8X5z9v5k8J8X5z9v5k8&s",
    name: "Sophia Lee",
    username: "SophiaCodes",
    location: "Toronto, Canada",
    email: "sophia.lee@gmail.com",
    company: "Shopify",
    bio: "Frontend engineer specializing in creating intuitive user interfaces.",
  },
  {
    id: 4,
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZv8oMiKv7_qFQvzayLwUZ8Gz2QSU3smv5Ig&s",
    name: "Lisa Coding",
    username: "LisaaaaC",
    location: "Austin, TX",
    email: "lisaaaascoding@gmail.com",
    company: "Self-Employed",
    bio: "I run a coding bootcamp.",
  },
  {
    id: 5,
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdTT0dok_f1YY7pmOjgpi7l45CVcAvkl9LFQ&s",
    name: "John Smith",
    username: "JSmith78",
    location: "Frankville, USA",
    email: "jsmith78@gmail.com",
    company: "reactors",
    bio: "React based coding.",
  },
];

const CandidateSearch: React.FC = () => {
  const [candidates, setCandidates] = useState<Candidate[]>(mockCandidates);
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>(() => {
    const saved = localStorage.getItem("savedCandidates");
    return saved ? JSON.parse(saved) : [];
  });

  const [currentCandidate, setCurrentCandidate] = useState<Candidate | null>(
    candidates[0] || null
  );

  useEffect(() => {
    localStorage.setItem("savedCandidates", JSON.stringify(savedCandidates));
  }, [savedCandidates]);

  const handleSaveCandidate = () => {
    if (currentCandidate) {
      setSavedCandidates([...savedCandidates, currentCandidate]);
    }
    showNextCandidate();
  };

  const handleSkipCandidate = () => {
    showNextCandidate();
  };

  const showNextCandidate = () => {
    const nextCandidates = candidates.slice(1);
    setCandidates(nextCandidates);
    setCurrentCandidate(nextCandidates[0] || null);
  };

  return (
    <div
      className="candidate-search"
      style={{
        backgroundColor: "#0a043c",
        height: "100vh",
        color: "#ffffff",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem 2rem",
          borderBottom: "1px solid #ffffff",
        }}
      >
        <h1 style={{ fontSize: "1.8rem", margin: 0 }}>Candidate Search</h1>
        <a
          href="/potential-candidates"
          style={{
            color: "#ffffff",
            textDecoration: "none",
            fontSize: "1rem",
            padding: "0.5rem 1rem",
            borderRadius: "5px",
            transition: "background-color 0.3s ease",
          }}
        >
          Potential Candidates
        </a>
      </header>

      <main
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {currentCandidate ? (
          <div style={{ textAlign: "center", width: "50%" }}>
            <img
              src={currentCandidate.avatar}
              alt="Candidate"
              style={{ width: "100%", borderRadius: "1rem" }}
            />
            <div
              style={{
                marginTop: "1rem",
                padding: "1rem",
                backgroundColor: "#000000",
                borderRadius: "0.5rem",
              }}
            >
              <h2>
                {currentCandidate.name}{" "}
                <span style={{ color: "#888888" }}>
                  ({currentCandidate.username})
                </span>
              </h2>
              <p>Location: {currentCandidate.location}</p>
              <p>
                Email:{" "}
                <a
                  href={`mailto:${currentCandidate.email}`}
                  style={{ color: "#ffffff" }}
                >
                  {currentCandidate.email}
                </a>
              </p>
              <p>Company: {currentCandidate.company}</p>
              <p>Bio: {currentCandidate.bio}</p>
            </div>
          </div>
        ) : (
          <p>No more candidates available to review.</p>
        )}

        {currentCandidate && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
              marginTop: "2rem",
            }}
          >
            <button
              onClick={handleSkipCandidate}
              style={{
                backgroundColor: "#ff0000",
                border: "none",
                padding: "1rem 2rem",
                borderRadius: "0.5rem",
                color: "#ffffff",
              }}
            >
              -
            </button>
            <button
              onClick={handleSaveCandidate}
              style={{
                backgroundColor: "#00ff00",
                border: "none",
                padding: "1rem 2rem",
                borderRadius: "0.5rem",
                color: "#ffffff",
              }}
            >
              +
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default CandidateSearch;
