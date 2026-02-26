import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

const Homepage: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-linear-to-br from-[#06141f] via-[#0b2239] to-[#071c2f] flex flex-col font-inter">

      <motion.nav
       className="flex justify-between items-center px-8 py-6"
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       transition={{ duration: 0.6 }}
       >
        <h1 className="text-2xl font-bold bg-linear-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
          Dotos
        </h1>

        <div className="space-x-4">
          <button
            onClick={() => navigate("/login")}
            className="text-gray-300 hover:text-emerald-400 transition cursor-pointer"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/register")}
            className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 transition text-black font-medium cursor-pointer"
          >
            Register
          </button>
        </div>
      </motion.nav>

      <div className="flex flex-1 items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center max-w-2xl"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Stay Organized.
            <span className="block bg-linear-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Achieve More.
            </span>
          </h2>

          <p className="mt-6 text-gray-400 text-lg">
            Dotos helps you manage your tasks efficiently with a clean,
            smooth experience.
          </p>

          <div className="mt-10 flex justify-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/register")}
              className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 transition text-black font-semibold shadow-md cursor-pointer"
            >
              Get Started
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/login")}
              className="px-6 py-3 rounded-xl border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-black transition font-semibold cursor-pointer"
            >
              Login
            </motion.button>
          </div>
        </motion.div>
      </div>

      <motion.footer
       className="text-center py-6 text-gray-500 text-sm"
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       transition={{ duration: 0.6 }}
       >
        © {new Date().getFullYear()} Dotos. All rights reserved.
      </motion.footer>
    </div>
  )
}

export default Homepage