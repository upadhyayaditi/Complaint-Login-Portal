import React from 'react'

const SignUpAdmin = () => {
  return (
    <div className="flex items-center justify-center min-h-screen " >
    <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg bg-opacity-20 " >
      <h2 className="text-3xl font-bold text-center" style={{color: '#195c90'}} >Admin Sign Up</h2>
      <form onSubmit={() => {}} className="space-y-4">
        <div>
          <label className="block mb-2 text-sm font-bold text-black-500">Email</label>
          <input
            type="email" 
            placeholder='admin@tsmuni.in'
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          //   value={email}
          //   onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-bold text-black-500">Password</label>
          <input
            type="password"
            placeholder='password'
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          //   value={password}
          //   onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-bold text-black-500">Confirm Password</label>
          <input
            type="password"
            placeholder='password'
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          //   value={password}
          //   onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Sign Up
        </button>
      </form>
    </div>
  </div>
  )
}

export default SignUpAdmin