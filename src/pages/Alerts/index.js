import React from 'react'
import ArrayData from '../../components/organisms/ArrayData';
import './index.scss'

export default function Alerts() {
    const arrayData = [
        {
            distrib: <><span className="title">#4515</span></>,
            ecole: <><span className="bold">Université de paris</span><br/>85 rue de la paix<br/>75001, Paris</>,
            probleme: <><span className="bold">Tentative de vol</span></>,
            gravite: <><div className="status status--orange"/> Modérée</>,
            date: <><span className="bold">04/02/2021</span><br/>Il y a 12 jours</>,
            router: "/distributeurs/5421"
        },
        {
            distrib: <><span className="title">#4515</span></>,
            ecole: <><span className="bold">Université de paris</span><br/>85 rue de la paix<br/>75001, Paris</>,
            probleme: <><span className="bold">Tentative de vol</span></>,
            gravite: <><div className="status status--orange"/> Modérée</>,
            date: <><span className="bold">04/02/2021</span><br/>Il y a 12 jours</>,
            router: "/distributeurs/5421"
        },
        {
            distrib: <><span className="title">#4515</span></>,
            ecole: <><span className="bold">Université de paris</span><br/>85 rue de la paix<br/>75001, Paris</>,
            probleme: <><span className="bold">Tentative de vol</span></>,
            gravite: <><div className="status status--red"/> Urgent</>,
            date: <><span className="bold">04/02/2021</span><br/>Il y a 12 jours</>,
            router: "/distributeurs/5421"
        },
        {
            distrib: <><span className="title">#4515</span></>,
            ecole: <><span className="bold">Université de paris</span><br/>85 rue de la paix<br/>75001, Paris</>,
            probleme: <><span className="bold">Tentative de vol</span></>,
            gravite: <><div className="status status--orange"/> Modérée</>,
            date: <><span className="bold">04/02/2021</span><br/>Il y a 12 jours</>,
            router: "/distributeurs/5421"
        },
        {
            distrib: <><span className="title">#4515</span></>,
            ecole: <><span className="bold">Université de paris</span><br/>85 rue de la paix<br/>75001, Paris</>,
            probleme: <><span className="bold">Tentative de vol</span></>,
            gravite: <><div className="status status--orange"/> Modérée</>,
            date: <><span className="bold">04/02/2021</span><br/>Il y a 12 jours</>,
            router: "/distributeurs/5421"
        },
        {
            distrib: <><span className="title">#4515</span></>,
            ecole: <><span className="bold">Université de paris</span><br/>85 rue de la paix<br/>75001, Paris</>,
            probleme: <><span className="bold">Tentative de vol</span></>,
            gravite: <><div className="status status--orange"/> Modérée</>,
            date: <><span className="bold">04/02/2021</span><br/>Il y a 12 jours</>,
            router: "/distributeurs/5421"
        },
        {
            distrib: <><span className="title">#4515</span></>,
            ecole: <><span className="bold">Université de paris</span><br/>85 rue de la paix<br/>75001, Paris</>,
            probleme: <><span className="bold">Tentative de vol</span></>,
            gravite: <><div className="status status--orange"/> Modérée</>,
            date: <><span className="bold">04/02/2021</span><br/>Il y a 12 jours</>,
            router: "/distributeurs/5421"
        },
        {
            distrib: <><span className="title">#4515</span></>,
            ecole: <><span className="bold">Université de paris</span><br/>85 rue de la paix<br/>75001, Paris</>,
            probleme: <><span className="bold">Tentative de vol</span></>,
            gravite: <><div className="status status--orange"/> Modérée</>,
            date: <><span className="bold">04/02/2021</span><br/>Il y a 12 jours</>,
            router: "/distributeurs/5421"
        },
        {
            distrib: <><span className="title">#4515</span></>,
            ecole: <><span className="bold">Université de paris</span><br/>85 rue de la paix<br/>75001, Paris</>,
            probleme: <><span className="bold">Tentative de vol</span></>,
            gravite: <><div className="status status--orange"/> Modérée</>,
            date: <><span className="bold">04/02/2021</span><br/>Il y a 12 jours</>,
            router: "/distributeurs/5421"
        },
    ]
    const arrayColumns = [
        {
            Header: 'Distributeur',
            accessor: 'distrib', // accessor is the "key" in the data
        },
        {
            Header: 'École',
            accessor: 'ecole',
        },
        {
            Header: 'Problème',
            accessor: 'probleme',
        },
        {
            Header: 'Gravité',
            accessor: 'gravite',
        },
        {
            Header: 'Depuis le',
            accessor: 'date',
        }
    ]

    return (
        <div className="main-app all-alerts">
            <ArrayData listData={arrayData} listColumns={arrayColumns} />
        </div>
    )
}
