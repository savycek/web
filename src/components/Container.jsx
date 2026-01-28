export default function Container({ children, title, className = "" }) {
    return(
        <div className={`bg-[#1a1a1a] p-6 rounded-2xl flex flex-col gap-3 border border-white/10 w-full flex-1 ${className}`}>
            {title && <h3 className="text-lg font-medium text-white">{title}</h3>}
            {children}
        </div>
    )
};