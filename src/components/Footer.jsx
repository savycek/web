export default function Footer() {
    return (
        <div className="max-w-200 mx-auto flex flex-col">
            <footer className="border-t-1 py-10 mt-5 border-white/10 flex flex-col-reverse md:flex-row justify-between items-center gap-4 text-[#525252] text-sm">
                <span>© 2026 Dominik Roušavý</span>
                <div className="flex gap-6 text-[#8E8E93]">
                    <a href="https://github.com/savycek" className="hover:text-white transition-colors">GitHub</a>
                    <a href="https://www.linkedin.com/in/dominik-rou%C5%A1av%C3%BD-48b916382/" className="hover:text-white transition-colors">LinkedIn</a>
                </div>
            </footer>
        </div>
    )
}