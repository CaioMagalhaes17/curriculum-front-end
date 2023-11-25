export default function AcademicsCard() {
    return (
        <>
            <section className="default-card academics-card">
                <div className="academics-content display-flex">
                    <h1 className="experiences-title">Formação acadêmica</h1>
                </div>
                <ul className="all-experiences-company">
                    <li className="each-experience">
                        <div>
                            <img className="img-company-experience" src="https://media.licdn.com/dms/image/C4D0BAQEfOnIo3zpGTQ/company-logo_100_100/0/1669843001190/newtonpaiva_logo?e=1709164800&v=beta&t=viOANc2H0UFmG3mLh1lob3ltn5274sFvV78wcj6CyqA" />
                        </div>

                        <div className="display-flex">
                            <span className="experience-company-infos experience-company-name">Centro Universitário Newton Paiva</span>
                            <span className="experience-company-infos experience-company-time">Análise e Desenvolvimento de sistemas</span>
                            <span className="experience-company-infos experience-company-location">ago de 2021 - ago de 2024</span>
                        </div>
                    </li>
                </ul>
            </section>
        </>
    )
}