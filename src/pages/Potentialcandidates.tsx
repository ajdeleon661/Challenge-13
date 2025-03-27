
const PotentialCandidates = () => {
  const candidates = [
    {
      name: "Nancy",
      username: "StarryCoder",
      location: "India",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTjdlLN2KqDAhNK1f7VPKLuEk0Zl2V4YUPXw&s",
      email: "Nancyhouse@gmail.com",
      company: "Google",
      bio: "Senior coder analyst at Google!",
    },
    {
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9z9v5k8J8X5z9v5k8J8X5z9v5k8J8X5z9v5k8&s",
      name: "Alex Johnson",
      username: "CodeMasterAlex",
      location: "San Francisco, USA",
      email: "alex.johnson@gmail.com",
      company: "Meta",
      bio: "Full-stack developer with a passion for building scalable web applications.",
    },
    {
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9z9v5k8J8X5z9v5k8J8X5z9v5k8J8X5z9v5k8&s",
      name: "Sophia Lee",
      username: "SophiaCodes",
      location: "Toronto, Canada",
      email: "sophia.lee@gmail.com",
      company: "Shopify",
      bio: "Frontend engineer specializing in creating intuitive user interfaces.",
    },
    {
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdTT0dok_f1YY7pmOjgpi7l45CVcAvkl9LFQ&s",
      name: "John Smith",
      username: "JSmith78",
      location: "Frankville, USA",
      email: "jsmith78@gmail.com",
      company: "reactors",
      bio: "React based coding.",
    },
    
  ];

  return (
    <div style={{ backgroundColor: '#0a043c', color: '#ffffff', height: '100vh', padding: '2rem' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #ffffff', paddingBottom: '1rem' }}>
        <a href="/" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '1rem' }}>Home</a>
        <h1 style={{ fontSize: '2rem' }}>Potential Candidates</h1>
      </header>

      <table style={{ width: '100%', marginTop: '2rem', borderCollapse: 'collapse', color: '#ffffff' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #ffffff' }}>
            <th style={{ padding: '0.5rem' }}>Image</th>
            <th style={{ padding: '0.5rem' }}>Name</th>
            <th style={{ padding: '0.5rem' }}>Location</th>
            <th style={{ padding: '0.5rem' }}>Email</th>
            <th style={{ padding: '0.5rem' }}>Company</th>
            <th style={{ padding: '0.5rem' }}>Bio</th>
            <th style={{ padding: '0.5rem' }}>Reject</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((candidate, index) => (
            <tr key={index} style={{ borderBottom: '1px solid #ffffff' }}>
              <td style={{ textAlign: 'center', padding: '0.5rem' }}>
                <img src={candidate.avatar} alt={candidate.name} style={{ width: '50px', borderRadius: '50%' }} />
              </td>
              <td style={{ padding: '0.5rem' }}>
                {candidate.name} <span style={{ color: '#888888' }}>({candidate.username})</span>
              </td>
              <td style={{ padding: '0.5rem' }}>{candidate.location}</td>
              <td style={{ padding: '0.5rem' }}>
                <a href={`mailto:${candidate.email}`} style={{ color: '#ffffff' }}>{candidate.email}</a>
              </td>
              <td style={{ padding: '0.5rem' }}>{candidate.company}</td>
              <td style={{ padding: '0.5rem' }}>{candidate.bio}</td>
              <td style={{ textAlign: 'center', padding: '0.5rem' }}>
                <button style={{ backgroundColor: '#ff0000', border: 'none', padding: '0.5rem 1rem', borderRadius: '0.5rem', color: '#ffffff' }}>-</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {candidates.length === 0 && (
        <p style={{ textAlign: 'center', marginTop: '2rem', color: '#ffffff' }}>
          No potential candidates available.
        </p>
      )}
    </div>
  );
};

export default PotentialCandidates;
