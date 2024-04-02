import './styles.css'

import Softwares_ico from 'images/svgs/softwares.svg'
import Softwares_img from 'images/softwares.jpg'

import Agenda_ico from 'images/svgs/agenda.svg'
import Agenda_img from 'images/agenda.jpg'
import { useNavigate } from 'react-router-dom'

export default function Homepage() {
    const navigate = useNavigate()
    const webPages = [
        {
            name: 'Agenda',
            link: '/Agenda',
            image: Agenda_img,
            icon: Agenda_ico
        },
        {
            name: 'Softwares',
            link: '/Softwares',
            image: Softwares_img,
            icon: Softwares_ico
        },
    ]
    return (
        <div className="container">
            {webPages.map((page, index) => (
                <div className="card" key={index} onClick={() => navigate(page.link)}>
                    <img className="background" src={page.image} alt="" />
                    <div className="card-content">
                        <div className="profile-image">
                            <img src={page.icon} alt="Ícone da página" />
                        </div>
                        <h3 className="title">Ir para {page.name}</h3>
                    </div>
                    <div className="backdrop"></div>
                </div>
            ))}
        </div>
    )
}