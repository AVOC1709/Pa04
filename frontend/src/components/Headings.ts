import React from "react"

interface HeadingProps {
    level?: 1 | 2 | 3 | 4;
    children: React.ReactNode;
    className?: string;
}

const Heading: React.FC<HeadingProps> = ({ level = 3, children, className = "" }) => {
    const Tag = (`h${level}`) as 'h1' | 'h2' | 'h3' | 'h4'

    const baseStyles = "font-sans font-bold tracking-tight"

    const variants: Record<number, string> = {
        1: "text-6xl md:text-8xl font-black tracking-tighter leading-none mb-8",
        2: "text-3xl md:text-4xl mb-4",
        3: "text-2xl mb-2",
        4: "text-xl mb-2"
    }
    return React.createElement(
        Tag,
        { className: `${baseStyles} ${variants[level] || variants[3]} ${className}` },
        children
    )
}

export default Heading
