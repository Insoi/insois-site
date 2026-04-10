import Image from "next/image";
import { t, Lang } from "@/content/translations";

export default function Overhead({tx}: {tx: typeof t[Lang]}) {
    return (
        <>
            <div style={{ display: 'flex', alignItems: 'flex-end', margin: '-1rem 0rem 0.75rem -3.5rem' }}>
                <Image src="/images/icon.png" alt="Insoi logo" width={175} height={175} />
                <div style={{ fontFamily: 'weiss-rundgotisch', fontSize: '6rem', margin: "0 0 -20px 0", color: "#DDDDCC" }}>Insoi</div>
            </div>

            <p style={{ margin: '0rem 22rem 1.2rem 0rem', lineHeight: 1.1, fontSize: '1.2rem', color: "#888877", fontFamily: "karmilla-regular" }}>
                <span style={{ color: "#DDDDCC", fontFamily: "karmilla-bold" }}>{tx.subtitle}</span>{" "}
                {tx.subtitleRest}
            </p>

            <hr style={{ borderColor: 'rgba(255,255,255,0.2)', marginBottom: '0.8rem' }} />
        </>
    );
}