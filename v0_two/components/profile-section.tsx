export default function ProfileSection() {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center p-4">
      <div className="w-24 h-24 bg-gray-700 rounded-full mb-4 flex items-center justify-center text-white text-4xl">
        A
      </div>
      <h1 className="text-2xl font-bold mb-1">Arcala</h1>
      <h2 className="text-lg text-gray-700 mb-4">Web3 Developer</h2>
      <p className="text-sm text-gray-600 mb-2">Tokyo, Japan</p>
      <p className="text-sm text-gray-600 mb-6">I also use Rust/TypeScript/Flutter & Dapps.</p>

      <div className="flex flex-wrap justify-center gap-2 max-w-md">
        {["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Solidity"].map((skill) => (
          <span key={skill} className="px-2 py-1 bg-gray-700 bg-opacity-20 rounded-full text-xs">
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

