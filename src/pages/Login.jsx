import EyeIcon from '../assets/images/mideye.png'
import GoogleLogo from '../assets/images/logos_google-icon.png'
import Navbar from '../components/organisems/navbar'


function App() {

  const peringatan = (e) => {
    e.preventDefault()
    alert("Form disubmit.")
  }

  const loginWithGoogle = () => {
    alert("Login dengan Google.")
  }

  const togglePassword = () => {
    const passwordInput = document.getElementById('password')
    if (passwordInput.type === "password") {
      passwordInput.type = "text"
    } else {
      passwordInput.type = "password"
    }
  }

  return (
    <>
      <Navbar />
      <div className="m-0 p-0 relative bg-[#fffae6] min-h-screen">
        <div className="bg-white max-w-[420px] w-full h-auto p-6 rounded-[10px] shadow-md mx-auto mt-10 mb-6 relative">
          <h1 className="text-[32px] font-normal text-[#222325] text-center leading-[110%] mb-2">Masuk Ke Akun</h1>
          <h2 className="text-[16px] text-[#333333AD] text-center mb-6 font-normal tracking-wide">Yuk, lanjutin belajarmu di Videobelajar.</h2>

          <form onSubmit={peringatan}>
            <label htmlFor="email" className="block text-[16px] tracking-wide font-normal font-dmsans mb-1">E-mail <span className="text-red-500">*</span></label>
            <input type="email" id="email" required className="w-full px-3 py-2 border border-gray-300 rounded mb-3 text-[16px]" />

            <label htmlFor="password" className="block text-[16px] tracking-wide font-normal font-dmsans mb-1">Kata Sandi <span className="text-red-500">*</span></label>
            <div className="relative flex items-center mb-3">
              <input type="password" id="password" required className="w-full px-3 py-2 border border-gray-300 rounded text-[16px]" />
              <img onClick={togglePassword} src={EyeIcon} alt="Lihat Password" className="absolute right-7 cursor-pointer w-5" />
            </div>

            <div className="text-right text-[#4A505C] text-[16px] font-medium mb-3 px-2">
              <a href="lupa.html" className="no-underline">Lupa Password?</a>
            </div>

            <button type="submit" className="w-full h-[42px] bg-[#3ecf4c] text-white rounded-[10px] font-poppins mb-3">Masuk</button>

            <button type="button" onClick={() => (window.location.href = 'Daftar.html')} className="w-full h-[42px] bg-[#E2FCD9CC] text-[#3ecf4c] rounded-[10px] font-poppins mb-3">Daftar</button>

            {/* Divider */}
            <div className="w-full border-t border-gray-300 text-center relative my-4">
              <span className="bg-white px-2 text-[#4A505C] text-[16px] font-normal absolute left-1/2 transform -translate-x-1/2 -top-3">atau</span>
            </div>

            <button 
              type="button" 
              onClick={loginWithGoogle} 
              className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded">
              <img src={GoogleLogo} alt="Google Logo" className="w-5 h-5" />
              <span className="text-[16px]">Masuk dengan Google</span>
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
