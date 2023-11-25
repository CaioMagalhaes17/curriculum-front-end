import Competency from "./Competency";

export default function AboutCard(){
    return (
        <>
            <section className="default-card about-card">
                <div className="display-flex about-content">
                    <h1 className="about-title"> Sobre </h1>
                    <span className="about-desc">Desenvolvedor full-stack com foco em PHP, Javascript, Next.js e React.</span>
                </div>
                <Competency/>
            </section>
        </>
    )
}