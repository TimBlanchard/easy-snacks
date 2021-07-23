import React from 'react'
import Summary from '../../components/organisms/Summary'
import SchoolRevenue from "../../components/organisms/SchoolRevenue";
import AlertHistoric from "../../components/organisms/AlertHistoric";
import './index.scss'
import ArrayData from "../../components/organisms/ArrayData";

export default function SingleSchool() {
    const array = [
        {
            id: 1,
            title: 'Nbr. de distrib.',
            values: {
                number: 21
            },
            type: 'distributeur'
        },
        {
            id: 2,
            title: 'Le + utilisé',
            period: '/1 semaine',
            values: {
                number: 138,
                symbole: '#',
                position: 'prefix'
            },
            type: 'users'
        },
        {
            id: 3,
            title: 'Le + rentable',
            period: '/1 semaine',
            values: {
                number: 45,
                symbole: '#',
                position: 'prefix',
                detail: '543€'
            },
            type: 'dollar'
        }
    ]

    const arrayData = [
        {
            distrib: <><span className="title">#12678</span></>,
            temp: <>13°C</>,
            vente: <>236</>,
            localistation: <>Étage 1</>,
            etat: <>OK</>,
        },
        {
            distrib: <><span className="title">#12678</span></>,
            temp: <>12°C</>,
            vente: <>124</>,
            localistation: <>Rez-de-chausée</>,
            etat: <>Réparation</>,
        },
        {
            distrib: <><span className="title">#12678</span></>,
            temp: <>9°C</>,
            vente: <>187</>,
            localistation: <>Étage 1</>,
            etat: <>OK</>,
        },
        {
            distrib: <><span className="title">#12678</span></>,
            temp: <>11°C</>,
            vente: <>201</>,
            localistation: <>Étage 2</>,
            etat: <>HS</>,
        },
        {
            distrib: <><span className="title">#12678</span></>,
            temp: <>13°C</>,
            vente: <>236</>,
            localistation: <>Étage 1</>,
            etat: <>OK</>,
        },
        {
            distrib: <><span className="title">#12678</span></>,
            temp: <>12°C</>,
            vente: <>124</>,
            localistation: <>Rez-de-chausée</>,
            etat: <>Réparation</>,
        },
        {
            distrib: <><span className="title">#12678</span></>,
            temp: <>9°C</>,
            vente: <>187</>,
            localistation: <>Étage 1</>,
            etat: <>OK</>,
        },
        {
            distrib: <><span className="title">#12678</span></>,
            temp: <>11°C</>,
            vente: <>201</>,
            localistation: <>Étage 2</>,
            etat: <>HS</>,
        },
        {
            distrib: <><span className="title">#12678</span></>,
            temp: <>13°C</>,
            vente: <>236</>,
            localistation: <>Étage 1</>,
            etat: <>OK</>,
        },
        {
            distrib: <><span className="title">#12678</span></>,
            temp: <>12°C</>,
            vente: <>124</>,
            localistation: <>Rez-de-chausée</>,
            etat: <>Réparation</>,
        },
        {
            distrib: <><span className="title">#12678</span></>,
            temp: <>9°C</>,
            vente: <>187</>,
            localistation: <>Étage 1</>,
            etat: <>OK</>,
        },
        {
            distrib: <><span className="title">#12678</span></>,
            temp: <>11°C</>,
            vente: <>201</>,
            localistation: <>Étage 2</>,
            etat: <>HS</>,
        },
        {
            distrib: <><span className="title">#12678</span></>,
            temp: <>13°C</>,
            vente: <>236</>,
            localistation: <>Étage 1</>,
            etat: <>OK</>,
        },
        {
            distrib: <><span className="title">#12678</span></>,
            temp: <>12°C</>,
            vente: <>124</>,
            localistation: <>Rez-de-chausée</>,
            etat: <>Réparation</>,
        },
        {
            distrib: <><span className="title">#12678</span></>,
            temp: <>9°C</>,
            vente: <>187</>,
            localistation: <>Étage 1</>,
            etat: <>OK</>,
        },
        {
            distrib: <><span className="title">#12678</span></>,
            temp: <>11°C</>,
            vente: <>201</>,
            localistation: <>Étage 2</>,
            etat: <>HS</>,
        },
    ]
    const arrayColumns = [
        {
            Header: 'Distributeur',
            accessor: 'distrib',
        },
        {
            Header: 'Température',
            accessor: 'temp',
        },
        {
            Header: 'Ventes /7j',
            accessor: 'vente',
        },
        {
            Header: 'Localisation',
            accessor: 'localistation',
        },
        {
            Header: 'État',
            accessor: 'etat',
        },
    ]

    return (
        <div className="main-app single-school">
            <div className="principal">
                <Summary array={array} />
                <ArrayData listData={arrayData} listColumns={arrayColumns} />
            </div>
            <aside>
                <SchoolRevenue />
                <AlertHistoric />
            </aside>
        </div>
    )
}
