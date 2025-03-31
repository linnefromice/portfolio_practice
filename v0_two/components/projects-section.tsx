export default function ProjectsSection() {
  const projects = [
    {
      title: "DeFi Exchange Platform",
      description: "A decentralized exchange for trading cryptocurrencies with low fees.",
      technologies: ["React", "Solidity", "Web3.js", "Ethereum"],
    },
    {
      title: "NFT Marketplace",
      description: "Platform for creating, buying, and selling digital collectibles as NFTs.",
      technologies: ["Next.js", "TypeScript", "Smart Contracts", "IPFS"],
    },
    {
      title: "Portfolio Tracker",
      description: "Mobile app to track investment portfolios across multiple platforms.",
      technologies: ["React Native", "Node.js", "Express", "MongoDB"],
    },
    {
      title: "E-commerce Platform",
      description: "Full-featured online store with payment processing and inventory management.",
      technologies: ["Ruby on Rails", "PostgreSQL", "Redis", "AWS"],
    },
  ]

  return (
    <div className="h-full p-4 overflow-auto">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Projects</h2>
      <div className="grid gap-4">
        {projects.map((project, index) => (
          <div key={index} className="bg-white bg-opacity-50 p-3 rounded-lg">
            <h3 className="font-medium mb-1">{project.title}</h3>
            <p className="text-xs text-gray-600 mb-2">{project.description}</p>
            <div className="flex flex-wrap gap-1">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-1.5 py-0.5 bg-gray-700 bg-opacity-20 rounded-full text-xs">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

