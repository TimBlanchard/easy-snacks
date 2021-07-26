import React from 'react'
import Error from '../../components/organisms/Error'
import Summary from '../../components/organisms/Summary'
import ArrayData from '../../components/organisms/ArrayData';
import Button from "../../components/atoms/Button";

export default function Landing() {
    const arraySummary = [
        {
            id: 1,
            title: 'Revenus',
            period: '/1 jour',
            values: {
                number: 3487,
                symbole: '€',
                position: 'suffix'
            },
            type: 'home'
        },
        {
            id: 2,
            title: 'Revenus',
            period: '/1 semaine',
            values: {
                number: 12984,
                symbole: '€',
                position: 'suffix'
            },
            type: 'search'
        },
        {
            id: 3,
            title: 'Revenus',
            period: '/1 mois',
            values: {
                number: 48290,
                symbole: '€',
                position: 'suffix'
            },
            type: 'activity'
        },
        {
            id: 4,
            title: 'Revenus',
            period: '/1 an',
            values: {
                number: 508488,
                symbole: '€',
                position: 'suffix'
            },
            type: 'search'
        }
    ]

    const arrayData = [
        {
            ecole: <><span className="title">Université de paris</span><br/>85 rue de la paix<br/>75001, Paris</>,
            distrib: <><span className="bold">34</span><br/>sur 36</>,
            vente: <><span className="bold">245</span></>,
            revenu: <><span className="bold">435€</span> <div className="arrowUp" /></>,
            somme: <><span className="bold">349€</span><br/>54% plein</>,
            statut: <><Button className="btn--error" icon="/assets/images/icons/warning-white.svg" text='2 alertes' /></>,
            router: "UniversiteDeParis"
        },
        {
            ecole: <><span className="title">Lycée Jean Moulin</span><br/>34 rue de la paix<br/>75001, Paris</>,
            distrib: <><span className="bold">34</span><br/>sur 36</>,
            vente: <><span className="bold">245</span></>,
            revenu: <><span className="bold">435€</span> <div className="arrowUp" /></>,
            somme: <><span className="bold">349€</span><br/>54% plein</>,
            statut: <><Button className="btn" text='OK' /></>,
            router: "LyceeJeanMoulin"
        },
        {
            ecole: <><span className="title">Paris Descartes</span><br/>34 rue de la paix<br/>75001, Paris</>,
            distrib: <><span className="bold">34</span><br/>sur 36</>,
            vente: <><span className="bold">245</span></>,
            revenu: <><span className="bold">435€</span> <div className="arrowDown" /></>,
            somme: <><span className="bold">349€</span><br/>54% plein</>,
            statut: <><Button className="btn--error" icon="/assets/images/icons/warning-white.svg" text='2 alertes' /></>,
            router: "ParisDescartes"
        },
        {
            ecole: <><span className="title">École Montreuil</span><br/>34 rue de la paix<br/>75001, Paris</>,
            distrib: <><span className="bold">34</span><br/>sur 36</>,
            vente: <><span className="bold">245</span></>,
            revenu: <><span className="bold">435€</span> <div className="arrowUp" /></>,
            somme: <><span className="bold">349€</span><br/>54% plein</>,
            statut: <><Button className="btn" text='OK' /></>,
            router: "EcoleMontreuil"
        },
        {
            ecole: <><span className="title">HETIC</span><br/>34 rue de la paix<br/>75001, Paris</>,
            distrib: <><span className="bold">34</span><br/>sur 36</>,
            vente: <><span className="bold">245</span></>,
            revenu: <><span className="bold">435€</span> <div className="arrowDown" /></>,
            somme: <><span className="bold">349€</span><br/>54% plein</>,
            statut: <><Button className="btn" text='OK' /></>,
            router: "HETIC"
        }
    ]
    const arrayColumns = [
        {
            Header: 'École',
            accessor: 'ecole', // accessor is the "key" in the data
        },
        {
            Header: 'Distrib. fonctionnels',
            accessor: 'distrib',
        },
        {
            Header: 'Ventes /7 jours',
            accessor: 'vente',
        },
        {
            Header: 'Revenus /7 jours',
            accessor: 'revenu',
        },
        {
            Header: 'Somme présente',
            accessor: 'somme',
        },
        {
            Header: 'Statut',
            accessor: 'statut',
        },
    ]

    return (
        <div className="main-app landing">
            <Error />
            <Summary array={arraySummary} />
            <ArrayData listData={arrayData} listColumns={arrayColumns} />
        </div>
    )
}
