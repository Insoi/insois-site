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
            gridTemplateColumns: '1.6fr 2fr',
            height: '150px',
            width: '325px',
            margin: "0rem 0rem 2rem 0rem"
        }}>
            <Image
                src="/images/icon.png"
                alt="Insoi logo"
                width={165}
                height={165}
                style={{ margin: "-0.5rem -1rem -1.5rem 0rem" }}
            />
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '0.6rem 0.75rem', overflow: 'hidden' }}>
                <div>
                    <h2 style={{ textAlign: "center", margin: '0 0 0.25rem 0', fontSize: '1.2rem', color: '#DDDDCC' }}>
                        {title}
                    </h2>
                    <p style={{ textAlign: "center", margin: 0, fontSize: '0.8rem', color: '#DDDDCC', lineHeight: 1.35 }}>
                        {description}
                    </p>
                </div>

                <div>
                    <a href={Github} target="_blank" rel="noopener noreferrer" style={{
                        display: 'block',
                        fontSize: '1rem',
                        color: '#DDDDCC',
                        textDecoration: 'none',
                        marginBottom: '0.2rem',
                        textAlign: 'right',
                    }}>
                        Github
                    </a>
                    <div style={{ display: 'flex', gap: '0.3rem', justifyContent: 'flex-end', flexWrap: 'nowrap' }}>
                        {tags.map((tag, i) => (
                            <span key={i} style={{ fontSize: '0.6rem', color: '#DDDDCC', opacity: 0.75, whiteSpace: 'nowrap' }}>
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}