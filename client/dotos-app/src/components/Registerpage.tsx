import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { IoEye, IoEyeOff } from "react-icons/io5";

const Registerpage: React.FC = () => {
  const navigate = useNavigate()

  const [firstName, setFirstName] = useState<string>("")
  const [lastName, setLastName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [confirmPassword, setConfirmPassword] = useState<string>("")
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      alert("Passwords do not match")
      return
    }

    // Later connect backend here
    console.log({ firstName, lastName, email, password })

    navigate("/login")
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
          Create Account
        </h2>

        <p className="text-gray-400 text-center mt-2">
          Join Dotos and start organizing
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">

          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-sm text-gray-300 mb-2">
                First Name
              </label>
              <input
                type="text"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-[#0b1a27] border border-gray-700 text-white focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition"
                placeholder="First name"
              />
            </div>

            <div className="w-1/2">
              <label className="block text-sm text-gray-300 mb-2">
                Last Name
              </label>
              <input
                type="text"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-[#0b1a27] border border-gray-700 text-white focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition"
                placeholder="Last name"
              />
            </div>
          </div>

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
              type={showPassword ? "text" : "password"}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-[#0b1a27] border border-gray-700 text-white focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition"
              placeholder="Create a password"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Confirm Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-[#0b1a27] border border-gray-700 text-white focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition"
              placeholder="Confirm your password"
            />
          </div>

          <button
              type="button"
              onClick={() => setShowPassword(prev => !prev)}
              className="cursor-pointer text-gray-300 flex flex-row gap-0.5 justify-center items-center mx-auto font-medium font-fira-sans
              "
            >
              Show password{showPassword ? <IoEye /> : <IoEyeOff />}
           </button>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full py-3 rounded-lg bg-emerald-500 hover:bg-emerald-600 transition font-semibold text-black"
          >
            Register
          </motion.button>
        </form>

        <p className="text-gray-400 text-sm text-center mt-6">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-emerald-400 cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>
      </motion.div>
    </div>
  )
}

export default Registerpage