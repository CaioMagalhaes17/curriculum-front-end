export default function ProfilePersonalInfos() {
    return (
        <>
            <div className="profile-top-infos">
                <div className="display-flex">
                    <div className="profile-image-div">
                        <img src="https://media.licdn.com/dms/image/D4D03AQG_EuIc4bceaA/profile-displayphoto-shrink_400_400/0/1699927167088?e=1706140800&v=beta&t=HuMiW1RvuwlxeNW7FE2uaMXmlEOlj6FC-UnIWLxsfrE" className="profile-img" />
                    </div>
                </div>
                <div className="profile-personal-infos">
                    <div>
                        <h1 className="profile-name">Caio Magalhães de Faria</h1>
                        <p className="profile-bio">Desenvolvedor Full Stack | PHP | Laravel | Next.js | React</p>
                        <p className="profile-location">Belo Horizonte, Minas Gerais, Brasil</p>
                    </div>
                    <div className="current-works-div">
                        <ul className="current-works">
                            <li className="each-work">
                                <button className="edit-work">
                                    <img className="img-work" src="https://media.licdn.com/dms/image/C4E0BAQGQ5Rrs08V9CA/company-logo_100_100/0/1653660184113/construsite_brasil_logo?e=1709164800&v=beta&t=pc9E5JghKW5EMMQIzHJbNrXA8iFnKGrteP9U-AD2vqk"/>
                                    <span className="work-description">Construsite Brasil</span>
                                </button>
                            </li>
                            <li className="each-work">
                                <button className="edit-work">
                                    <img className="img-work" src="https://media.licdn.com/dms/image/C4E0BAQGQ5Rrs08V9CA/company-logo_100_100/0/1653660184113/construsite_brasil_logo?e=1709164800&v=beta&t=pc9E5JghKW5EMMQIzHJbNrXA8iFnKGrteP9U-AD2vqk"/>
                                    <span className="work-description">Newton Paiva</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}