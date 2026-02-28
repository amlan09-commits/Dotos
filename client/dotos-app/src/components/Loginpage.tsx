import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

const Loginpage: React.FC = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Later connect backend here
    console.log({ email, password })

    navigate("/todos")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#06141f] via-[#0b2239] to-[#071c2f] px-6 font-inter">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-[#0f1f2e]/80 backdrop-blur-lg border border-emerald-400/10 rounded-2xl p-8 shadow-xl"
      >
        
        <h2 className="text-3xl font-bold text-white text-center">
          Welcome Back
        </h2>

        <p className="text-gray-400 text-center mt-2">
          Login to continue to Dotos
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">

          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-[#0b1a27] border border-gray-700 text-white focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-[#0b1a27] border border-gray-700 text-white focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition"
              placeholder="Enter your password"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full py-3 rounded-lg bg-emerald-500 hover:bg-emerald-600 transition font-semibold text-black"
          >
            Login
          </motion.button>
        </form>

        <p className="text-gray-400 text-sm text-center mt-6">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-emerald-400 cursor-pointer hover:underline"
          >
            Register
          </span>
        </p>
      </motion.div>
    </div>
  )
}

export default Loginpage