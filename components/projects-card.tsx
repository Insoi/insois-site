import Image from "next/image";

type ProjectsCardProps = {
    image?: string,
    title: string,
    description: string,
    tags: readonly string[],
    Github: string,
}

export default function ProjectsCard({ image, title, description, tags, Github }: ProjectsCardProps) {
    return (
        <div style={{
            border: '3.5px solid #444433',
            display: 'grid',
            gridTemplateColumns: '1.5fr 2.5fr',
            height: '150px',
            width: '300px',
            margin: "0rem 0rem 0.25rem 0rem",
            overflow: 'hidden',
        }}>
            {/* Left side */}
            <div style={{ margin: "0rem -0.5rem 0rem 0.5rem", display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0.4rem 0' }}>
                <Image
                    src={image || '/images/website.png'}
                    alt={`${title} logo`}
                    width={135}
                    height={135}
                />
            </div>

            {/* Right side */}
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '0.4rem 0.45rem 0.4rem 0', minWidth: 0}}>
                <div>
                    <h2 style={{textAlign: "center", fontSize: '1.1rem', lineHeight: 1.1, color: '#DDDDCC'}}>
                        {title}
                    </h2>
                    <p style={{textAlign: "center", margin: '0.35rem 1rem 0 1rem', fontSize: '0.85rem', color: '#DDDDCC', lineHeight: 1.1, overflow: 'hidden'}}>
                        {description}
                    </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                    <a href={Github} className="underline-style" style={{fontSize: '1rem', color: '#DDDDCC'}}>
                        Github⧉
                    </a>

                    <div style={{display: 'flex', gap: '0.25rem', justifyContent: 'flex-end', flexWrap: 'wrap'}}>
                        {tags.map((tag, i) => (
                            <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                {i > 0 && <span style={{ color: '#DDDDCC', opacity: 0.4, fontSize: '0.5rem' }}>●</span>}
                                <span style={{ fontSize: '0.7rem', color: '#DDDDCC', opacity: 0.75, fontFamily: 'karmilla-bold' }}>
                                    {tag}
                                </span>
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}