export default function Tag({ icon, text }) {
    return (
        <div className="bg-[#0d0d0d] text-white rounded-lg flex items-center gap-2 px-3 py-1.5 border border-white/5 transition-transform hover:scale-105">
            {icon}
            <span className="text-sm text-white">{text}</span>
        </div>
    )
}