import './Navbar.css';
import { useEffect } from 'react';
import iconePerfil from '../../../assets/user-icone-branco.svg';
import iconeDashboard from '../../../assets/dashboard-icone-colorido-escuro.svg';
import iconeAtendimento from '../../../assets/atendimento-icone-colorido-escuro.svg';
import iconeCozinha from '../../../assets/cozinha-icone-colorido-escuro.svg';
import iconeEstoque from '../../../assets/estoque-icone-colorido-escuro.svg';
import iconeEquipe from '../../../assets/equipe-icone-colorido-escuro.svg';
import iconeSair from '../../../assets/sair-icone-colorido-escuro.svg';

export function Navbar() {
    useEffect(() => {
        const itensMenu = document.querySelectorAll('.navbar ul li');

        const handleClick = (event) => {
            itensMenu.forEach(i => i.classList.remove('clicked'));
            event.currentTarget.classList.add('clicked');
        };

        itensMenu.forEach(item => item.addEventListener('click', handleClick));

        return () => {
            itensMenu.forEach(item => item.removeEventListener('click', handleClick));
        };
    }, []);

    return (
        <>
        <nav className="navbar" id="navbar">
            <div className="user">
                <i><img src={iconePerfil} alt="Icone de Usuário" /></i>
                <span>Patricia</span>
            </div>
            <ul>
                <li><i> <img src={iconeDashboard} alt="Icone de Dashboard" /> </i> <span>Dashboard</span></li>
                <li><i> <img src={iconeAtendimento} alt="Icone de Atendimento" /> </i> <span>Atendimento</span></li>
                <li><i> <img src={iconeCozinha} alt="Icone de Cozinha" /> </i> <span>Cozinha</span></li>
                <li><i> <img src={iconeEstoque} alt="Icone de Estoque" /> </i> <span>Estoque</span></li>
                <li><i> <img src={iconeEquipe} alt="Icone de Equipe" /> </i> <span>Equipe</span></li>
                <li><i> <img src={iconeSair} alt="Icone de Sair" /> </i> <span>Sair</span></li> 
            </ul>
        </nav>
        </>
    );
}

export default Navbar;
