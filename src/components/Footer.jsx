const Footer = () => {
  return (
    <footer className="w-full border-t border-white/60 bg-white/70 backdrop-blur-md shadow-[0_18px_34px_rgba(43,38,67,0.12)]">
      <div className="mx-auto flex w-full max-w-[1126px] flex-col items-center justify-center px-4 py-16 text-center">
        <h2 className="m-0 font-poppins text-[1rem] font-medium tracking-[0.08em] text-[rgb(24,18,18)]">
          Reinheart&apos;s Profile Portofolio
        </h2>
        <p className="m-0 mt-3 font-poppins text-[0.92rem] font-normal text-[rgb(24,18,18)]">
          Built with Vite, nodeJS, Tailwindcss, and GSAP
        </p>
      </div>
    </footer>
  )
}

export default Footer