export default function ExperiencesCard() {
    return (
        <>
            <section className="default-card experiences-card">
                <div className="experiences-content display-flex">
                    <h1 className="experiences-title">Experiência</h1>
                </div>
                <ul className="all-experiences-company">
                    <li className="each-experience">
                        <div>
                            <img className="img-company-experience" src="https://media.licdn.com/dms/image/C4E0BAQGQ5Rrs08V9CA/company-logo_100_100/0/1653660184113/construsite_brasil_logo?e=1709164800&v=beta&t=pc9E5JghKW5EMMQIzHJbNrXA8iFnKGrteP9U-AD2vqk" />
                        </div>
                        <div className="display-flex">
                            <span className="experience-company-infos experience-company-name">Construsite Brasil</span>
                            <span className="experience-company-infos experience-company-time">1 ano e 9 meses</span>
                            <span className="experience-company-infos experience-company-location">Belo Horizonte, Minas Gerais, Brasil</span>
                            <ul className="all-experiences-job">
                                <li className="each-job each-job-desc">
                                    <span className="each-job-dot"></span>

                                    <span className="each-job-title">Desenvolvedor Web Junior</span>
                                    <span className="each-job-work-modality">Tempo Integral</span>
                                    <span className="each-job-time">nov de 2022 - o momento · 1 ano 1 mês</span>

                                    <span className="each-job-work-desc">Planejamento, desenvolvimento e aprimoramento.Diaramente trabalho com Php (Laravel (Apis Restful) & legado); JavaScript (JQuery, React, Nextjs) e banco de dados relacional MySql.</span>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <hr></hr>
                </ul>
            </section>
        </>
    )
}