export default function InputField({ label, ...props }) {
    return (
        <div className="flex flex-col gap-1.5 w-full">
            <label className="text-[0.75rem] text-gray-400 ml-1 uppercase tracking-wider font-bold">{label}</label>
            <input
                {...props}
                className="w-full rounded-lg border border-white/10 bg-[#262626] p-3 text-sm focus:border-white outline-none transition-colors"
                required
            />
        </div>
    )
}