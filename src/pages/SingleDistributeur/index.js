import React from 'react'
import Summary from '../../components/organisms/Summary'
import AlertHistoric from "../../components/organisms/AlertHistoric";
import './index.scss'
import ArrayData from "../../components/organisms/ArrayData";
import {Link} from "wouter";
import Button from "../../components/atoms/Button";
import Error from "../../components/organisms/Error";
import BestSellers from "../../components/organisms/BestSellers";
import HoursAffluence from "../../components/organisms/HoursAffluence";

export default function Singledistributeur({id}) {
    const array = [
        {
            id: 1,
            title: 'Revenus',
            period: '/1 jour',
            values: {
                number: 87,
                symbole: '€',
                position: 'suffix'
            },
            type: 'dollar'
        },
        {
            id: 2,
            title: 'Revenus',
            period: '/1 semaine',
            values: {
                number: 284,
                symbole: '€',
                position: 'suffix'
            },
            type: 'dollar'
        },
        {
            id: 3,
            title: 'Revenus',
            period: '/1 mois',
            values: {
                number: 365,
                symbole: '€',
                position: 'suffix'
            },
            type: 'dollar'
        },
        {
            id: 4,
            title: 'Revenus',
            period: '/1 an',
            values: {
                number: 1423,
                symbole: '€',
                position: 'suffix'
            },
            type: 'dollar'
        }
    ]

    const progressStyle = (stock, max, type) => {
        let width = ((stock * 100)/max);

        if(type === "number") {
            return width;
        }
        else if(type === "color") {
            if(width < 30) {
                return "gauge-red";
            }
            else if(width < 70) {
                return "gauge-orange";
            }
            else {
                return "gauge-green";
            }
        }
    }

    const arrayData = [
        {
            casier: <><span className="title">A2</span></>,
            produit: <>Chips</>,
            stock: <>1 disponible<br/><div className="progressbar"><div className={progressStyle(1, 20, 'color')} style={{width: progressStyle(1, 20, 'number')+"%"}} /></div></>,
        },
        {
            casier: <><span className="title">A1</span></>,
            produit: <>Coca Cola</>,
            stock: <>4 disponible<br/><div className="progressbar"><div className={progressStyle(4, 20, 'color')} style={{width: progressStyle(4, 20, 'number')+"%"}} /></div></>,
        },
        {
            casier: <><span className="title">B2</span></>,
            produit: <>Haribo</>,
            stock: <>5 disponible<br/><div className="progressbar"><div className={progressStyle(5, 20, 'color')} style={{width: progressStyle(5, 20, 'number')+"%"}} /></div></>,
        },
        {
            casier: <><span className="title">B3</span></>,
            produit: <>Kinder</>,
            stock: <>8 disponible<br/><div className="progressbar"><div className={progressStyle(8, 20, 'color')} style={{width: progressStyle(8, 20, 'number')+"%"}} /></div></>,
        },
        {
            casier: <><span className="title">B1</span></>,
            produit: <>Chips</>,
            stock: <>10 disponible<br/><div className="progressbar"><div className={progressStyle(10, 20, 'color')} style={{width: progressStyle(10, 20, 'number')+"%"}} /></div></>,
        },
        {
            casier: <><span className="title">C4</span></>,
            produit: <>Fanta</>,
            stock: <>11 disponible<br/><div className="progressbar"><div className={progressStyle(11, 20, 'color')} style={{width: progressStyle(11, 20, 'number')+"%"}} /></div></>,
        }
    ]

    const arrayColumns = [
        {
            Header: 'Casier',
            accessor: 'casier',
        },
        {
            Header: 'Produit',
            accessor: 'produit',
        },
        {
            Header: 'Stock',
            accessor: 'stock',
        },
    ]

    const arrayData2 = [
        {
            date: <>04/05/21</>,
            alerte: <>Réfrigérant en panne</>,
            intervention: <><span className="linkRed">Programmer l'intervention</span></>,
            statut: <><div className="status status--red"/> En attente</>,
        },
        {
            date: <>01/05/21</>,
            alerte: <>Réfrigérant en panne</>,
            intervention: <>Réparé le 02/05/21</>,
            statut: <><div className="status status--green"/> Réparé</>,
        },
    ]

    const arrayColumns2 = [
        {
            Header: 'Date',
            accessor: 'date',
        },
        {
            Header: 'Alerte',
            accessor: 'alerte',
        },
        {
            Header: 'Intervention',
            accessor: 'intervention',
        },
        {
            Header: 'Statut',
            accessor: 'statut',
        },
    ]

    return (
        <div className="main-app single-distributeur">
            <div className="single-distributeur__header">
                <Link href={"/"}>
                    <div className="single-distributeur__header__back">
                        <img className="single-distributeur__header__back__icon" src="/assets/images/icons/back.svg"/>
                        Retour
                    </div>
                </Link>

                <div className="single-distributeur__header__title">
                    <img className="single-distributeur__header__title__icon" src="/assets/images/icons/distributeur.svg"/>
                    <h1>distributeur #{id}</h1>
                    <p>Lycée Jules Renard</p>
                </div>

                <div className="single-distributeur__header__buttons">
                    <Button icon="/assets/images/icons/map.svg" className="btn--primary--reverse" text='Voir la carte'/>
                    <Button icon="/assets/images/icons/shutdown.svg" className="btn--error--reverse" text='Éteindre'/>
                </div>

            </div>

            <div className="single-distributeur__content">
                <Error title="Une panne a été détectée, la machine est à l'arrêt." button="Programmer l'intervention" />
                <Summary array={array}/>

                <div className="single-distributeur__content__columns">
                    <div className="principal">
                        <ArrayData listData={arrayData} listColumns={arrayColumns} scroll={true} />
                        <ArrayData listData={arrayData2} listColumns={arrayColumns2} />
                    </div>
                    <aside>
                        <div className="box-default header-box temperature">
                            <div>
                                <h2 className="titleBox">Température du distributeur</h2>
                            </div>
                            <p className="header-box__montant">12,3°C</p>
                        </div>
                        <BestSellers />
                        <HoursAffluence />
                    </aside>
                </div>
            </div>
        </div>
    )
}
