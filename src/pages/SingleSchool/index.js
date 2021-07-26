import React from 'react'
import Summary from '../../components/organisms/Summary'
import SchoolRevenue from "../../components/organisms/SchoolRevenue";
import AlertHistoric from "../../components/organisms/AlertHistoric";
import './index.scss'
import ArrayData from "../../components/organisms/ArrayData";
import {Link} from "wouter";
import Button from "../../components/atoms/Button";

export default function SingleSchool({name}) {
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
            vente: <><svg width="52" height="16" viewBox="0 0 52 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1.07229L6.39122 9.31325L15.6469 2.07229L29.9599 8L35.7328 2L51 2" stroke="#3E2A70" stroke-width="2"/></svg> 236 <div className="arrowUp" /></>,
            localistation: <>Étage 1</>,
            etat: <><div className="status status--green" /> OK</>,
        },
        {
            distrib: <><span className="title">#12678</span></>,
            temp: <>12°C</>,
            vente: <><svg width="52" height="16" viewBox="0 0 52 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 8.07229L6.39122 2.31325L15.6469 5.07229L29.9599 2L35.7328 12L51 2" stroke="#3E2A70" stroke-width="2"/></svg> 124 <div className="arrowUp" /></>,
            localistation: <>Rez-de-chausée</>,
            etat: <><div className="status status--orange" /> Réparation</>,
        },
        {
            distrib: <><span className="title">#12678</span></>,
            temp: <>9°C</>,
            vente: <><svg width="52" height="16" viewBox="0 0 52 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 5.07229L6.39122 4.31325L15.6469 11.07229L29.9599 2L35.7328 10L51 2" stroke="#3E2A70" stroke-width="2"/></svg> 187 <div className="arrowUp" /></>,
            localistation: <>Étage 1</>,
            etat: <><div className="status status--green" /> OK</>,
        },
        {
            distrib: <><span className="title">#12678</span></>,
            temp: <>11°C</>,
            vente: <><svg width="52" height="16" viewBox="0 0 52 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 3.07229L6.39122 10.31325L15.6469 4.07229L29.9599 9L35.7328 1L51 2" stroke="#3E2A70" stroke-width="2"/></svg> 201 <div className="arrowDown" /></>,
            localistation: <>Étage 2</>,
            etat: <><div className="status status--red" /> HS</>,
        },
        {
            distrib: <><span className="title">#12678</span></>,
            temp: <>13°C</>,
            vente: <>236 <div className="arrowDown" /></>,
            localistation: <>Étage 1</>,
            etat: <><div className="status status--green" /> OK</>,
        },
        {
            distrib: <><span className="title">#12678</span></>,
            temp: <>12°C</>,
            vente: <>124 <div className="arrowUp" /></>,
            localistation: <>Rez-de-chausée</>,
            etat: <>Réparation</>,
        },
        {
            distrib: <><span className="title">#12678</span></>,
            temp: <>9°C</>,
            vente: <>187 <div className="arrowUp" /></>,
            localistation: <>Étage 1</>,
            etat: <>OK</>,
        },
        {
            distrib: <><span className="title">#12678</span></>,
            temp: <>11°C</>,
            vente: <>201 <div className="arrowUp" /></>,
            localistation: <>Étage 2</>,
            etat: <>HS</>,
        },
        {
            distrib: <><span className="title">#12678</span></>,
            temp: <>13°C</>,
            vente: <>236 <div className="arrowUp" /></>,
            localistation: <>Étage 1</>,
            etat: <>OK</>,
        },
        {
            distrib: <><span className="title">#12678</span></>,
            temp: <>12°C</>,
            vente: <>124 <div className="arrowDown" /></>,
            localistation: <>Rez-de-chausée</>,
            etat: <>Réparation</>,
        },
        {
            distrib: <><span className="title">#12678</span></>,
            temp: <>9°C</>,
            vente: <>187 <div className="arrowDown" /></>,
            localistation: <>Étage 1</>,
            etat: <>OK</>,
        },
        {
            distrib: <><span className="title">#12678</span></>,
            temp: <>11°C</>,
            vente: <>201 <div className="arrowUp" /></>,
            localistation: <>Étage 2</>,
            etat: <>HS</>,
        },
        {
            distrib: <><span className="title">#12678</span></>,
            temp: <>13°C</>,
            vente: <>236 <div className="arrowUp" /></>,
            localistation: <>Étage 1</>,
            etat: <>OK</>,
        },
        {
            distrib: <><span className="title">#12678</span></>,
            temp: <>12°C</>,
            vente: <>124 <div className="arrowDown" /></>,
            localistation: <>Rez-de-chausée</>,
            etat: <>Réparation</>,
        },
        {
            distrib: <><span className="title">#12678</span></>,
            temp: <>9°C</>,
            vente: <>187 <div className="arrowUp" /></>,
            localistation: <>Étage 1</>,
            etat: <>OK</>,
        },
        {
            distrib: <><span className="title">#12678</span></>,
            temp: <>11°C</>,
            vente: <>201 <div className="arrowUp" /></>,
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
            <div className="single-school__header">
                <Link href={"/"}>
                    <div className="single-school__header__back">
                        <img className="single-school__header__back__icon" src="/assets/images/icons/back.svg"/>
                        Retour
                    </div>
                </Link>

                <div className="single-school__header__title">
                    <img className="single-school__header__title__icon" src="/assets/images/icons/school.svg"/>
                    <h1>{name}</h1>
                    <p>34 rue de la paix, 75001 Paris</p>
                </div>

                <Button icon="/assets/images/icons/map.svg" className="btn--primary--reverse" text='Voir la carte' />
            </div>
            <div className="single-school__content">
                <div className="principal">
                    <Summary array={array}/>
                    <ArrayData listData={arrayData} listColumns={arrayColumns}/>
                </div>
                <aside>
                    <SchoolRevenue/>
                    <AlertHistoric/>
                </aside>
            </div>
        </div>
    )
}
